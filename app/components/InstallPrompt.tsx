"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isIos, setIsIos] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showIosHint, setShowIosHint] = useState(false);

  useEffect(() => {
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as unknown as { standalone?: boolean }).standalone === true;
    setIsInstalled(standalone);

    const ua = window.navigator.userAgent;
    setIsIos(/iPad|iPhone|iPod/.test(ua) && !("MSStream" in window));

    const onBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    const onInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (isInstalled) return null;
  if (!deferredPrompt && !isIos) return null;

  const handleClick = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === "accepted") setDeferredPrompt(null);
      return;
    }
    setShowIosHint((v) => !v);
  };

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <button
        onClick={handleClick}
        className="flex items-center gap-2.5 justify-center rounded-2xl border border-accent-gold/40 bg-white/70 px-5 py-3.5 text-primary-text transition-all duration-300 hover:bg-accent-pink/25 hover:border-accent-gold active:scale-[0.97]"
      >
        <Icon name="install" className="w-5 h-5 shrink-0 text-accent-gold" />
        <span className="text-sm font-medium">Добави на началния екран</span>
      </button>

      {showIosHint && (
        <div className="w-full rounded-2xl bg-lavender/15 border border-lavender/40 px-4 py-3.5 text-[13.5px] leading-relaxed text-primary-text/80 flex items-start gap-2.5">
          <Icon name="share" className="w-4.5 h-4.5 shrink-0 mt-0.5 text-primary-text/60" />
          <span>
            Натисни бутона <strong>Споделяне</strong> в лентата на браузъра, после
            избери <strong>„Добави към начален екран&quot;</strong>.
          </span>
        </div>
      )}
    </div>
  );
}
