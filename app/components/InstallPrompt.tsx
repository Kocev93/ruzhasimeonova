"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

type Platform = "ios" | "android" | "desktop";

const DISMISS_KEY = "install-banner-dismissed-at";
const DISMISS_MS = 7 * 24 * 60 * 60 * 1000;

function wasDismissedRecently() {
  try {
    const at = Number(localStorage.getItem(DISMISS_KEY));
    return at > 0 && Date.now() - at < DISMISS_MS;
  } catch {
    return false;
  }
}

function Hint({ platform, inApp }: { platform: Platform; inApp: boolean }) {
  if (inApp) {
    return (
      <span>
        Отвори тази страница в браузъра на телефона (<strong>Safari</strong> или{" "}
        <strong>Chrome</strong>) и после я добави на началния екран.
      </span>
    );
  }
  if (platform === "ios") {
    return (
      <span className="flex items-start gap-2">
        <Icon name="share" className="w-5 h-5 shrink-0 text-primary-text/60" />
        <span>
          Натисни бутона <strong>Споделяне</strong> в лентата на браузъра, после
          избери <strong>„Добави към начален екран“</strong>.
        </span>
      </span>
    );
  }
  return (
    <span>
      Отвори менюто на браузъра (<strong>⋮</strong>) и избери{" "}
      <strong>„Добави към начален екран“</strong> или{" "}
      <strong>„Инсталирай приложение“</strong>.
    </span>
  );
}

export function InstallPrompt() {
  const [platform, setPlatform] = useState<Platform | null>(null);
  const [inApp, setInApp] = useState(false);
  const [installed, setInstalled] = useState(false);
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [hintFor, setHintFor] = useState<"banner" | "inline" | null>(null);

  useEffect(() => {
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as unknown as { standalone?: boolean }).standalone === true;
    if (standalone) {
      setInstalled(true);
      return;
    }

    const ua = navigator.userAgent;
    const ios =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    setPlatform(ios ? "ios" : /Android/.test(ua) ? "android" : "desktop");
    setInApp(/FBAN|FBAV|Instagram|Viber|Messenger|Line\//.test(ua));

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }

    const onBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
    };
    const onInstalled = () => {
      setInstalled(true);
      setDeferred(null);
      setBannerVisible(false);
    };
    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    window.addEventListener("appinstalled", onInstalled);

    const timer = window.setTimeout(() => {
      if (!wasDismissedRecently()) setBannerVisible(true);
    }, 1500);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (installed || platform === null) return null;
  if (platform === "desktop" && !deferred) return null;

  const handleInstall = async (source: "banner" | "inline") => {
    if (deferred) {
      await deferred.prompt();
      const choice = await deferred.userChoice;
      setDeferred(null);
      if (choice.outcome === "accepted") setBannerVisible(false);
      return;
    }
    setHintFor((current) => (current === source ? null : source));
  };

  const dismissBanner = () => {
    setBannerVisible(false);
    setHintFor((current) => (current === "banner" ? null : current));
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {}
  };

  return (
    <>
      <div className="w-full flex flex-col items-center gap-3">
        <button
          onClick={() => handleInstall("inline")}
          className="flex items-center gap-2.5 justify-center rounded-2xl border border-accent-gold/40 bg-white/70 px-5 py-3.5 text-primary-text transition-all duration-300 hover:bg-accent-pink/25 hover:border-accent-gold active:scale-[0.97]"
        >
          <Icon name="install" className="w-5 h-5 shrink-0 text-accent-gold" />
          <span className="text-sm font-medium">Добави на началния екран</span>
        </button>

        {hintFor === "inline" && (
          <div className="w-full rounded-2xl bg-lavender/15 border border-lavender/40 px-4 py-3.5 text-[13.5px] leading-relaxed text-primary-text/80">
            <Hint platform={platform} inApp={inApp} />
          </div>
        )}
      </div>

      {bannerVisible && (
        <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <div className="mx-auto max-w-md rounded-2xl border border-accent-gold/40 bg-bg-warm p-3 shadow-[0_10px_30px_-10px_rgba(69,58,99,0.45)]">
            <div className="flex items-center gap-3">
              <img
                src="/icon-192.png"
                alt=""
                width={44}
                height={44}
                className="w-11 h-11 shrink-0 rounded-xl"
              />
              <p className="flex-1 text-[13px] leading-snug text-primary-text">
                Добави визитката на началния екран на телефона си
              </p>
              <button
                onClick={() => handleInstall("banner")}
                className="shrink-0 rounded-full bg-accent-gold px-4 py-2 text-[13px] font-semibold text-white active:scale-[0.96]"
              >
                Добави
              </button>
              <button
                onClick={dismissBanner}
                aria-label="Затвори"
                className="shrink-0 -mr-1 px-1.5 text-2xl leading-none text-primary-text/50"
              >
                ×
              </button>
            </div>

            {hintFor === "banner" && (
              <div className="mt-3 border-t border-primary-text/10 pt-3 text-[13px] leading-relaxed text-primary-text/80">
                <Hint platform={platform} inApp={inApp} />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
