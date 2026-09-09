import Image from "next/image";
import { Icon } from "./components/Icon";
import {
  person,
  contactLinks,
  bookingUrl,
  audiences,
  socialLinks,
  footerDisclaimer,
} from "./content";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <div className="w-full max-w-md px-6 pt-10 pb-14 flex flex-col items-center gap-14">
        {/* Хедър */}
        <section className="flex flex-col items-center text-center gap-5">
          <Image
            src="/images/logo.png"
            alt="Логото на Ружа Симеонова"
            width={72}
            height={72}
            className="w-16 h-16"
            priority
          />

          <div className="w-full rounded-[28px] overflow-hidden bg-white/60 shadow-[0_8px_30px_-12px_rgba(69,58,99,0.35)]">
            <Image
              src="/images/profile.jpg"
              alt="Ружа Симеонова"
              width={1000}
              height={1500}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <h1 className="font-heading text-3xl sm:text-4xl text-primary-text tracking-wide">
              {person.name}
            </h1>
            <p className="text-[15px] leading-relaxed text-primary-text/80">
              {person.bio}
            </p>
          </div>
        </section>

        {/* Бутони за контакт */}
        <section className="w-full grid grid-cols-2 gap-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-2.5 justify-center rounded-2xl border border-accent-gold/40 bg-white/70 px-4 py-3.5 text-primary-text transition-all duration-300 hover:bg-accent-pink/25 hover:border-accent-gold active:scale-[0.97]"
            >
              <Icon name={link.icon} className="w-5 h-5 shrink-0 text-accent-gold" />
              <span className="text-sm font-medium">{link.label}</span>
            </a>
          ))}
          <a
            href="/ruzha-simeonova.vcf"
            download="ruzha-simeonova.vcf"
            className="col-span-2 flex items-center gap-2.5 justify-center rounded-2xl border border-accent-gold/40 bg-white/70 px-4 py-3.5 text-primary-text transition-all duration-300 hover:bg-accent-pink/25 hover:border-accent-gold active:scale-[0.97]"
          >
            <Icon name="vcard" className="w-5 h-5 shrink-0 text-accent-gold" />
            <span className="text-sm font-medium">Запази контакт</span>
          </a>
        </section>

        {/* Основен CTA бутон */}
        <section className="w-full">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center rounded-full bg-accent-gold px-6 py-4 text-[17px] font-semibold text-white shadow-[0_10px_25px_-8px_rgba(201,162,74,0.65)] transition-all duration-300 hover:brightness-105 hover:shadow-[0_12px_30px_-8px_rgba(201,162,74,0.8)] active:scale-[0.98]"
          >
            Запази час за онлайн консултация
          </a>
        </section>

        {/* Три раздела */}
        <section className="w-full flex flex-col gap-4">
          {audiences.map((item, i) => (
            <div
              key={item.title}
              className="rounded-3xl p-6 border"
              style={{
                background:
                  i === 0
                    ? "color-mix(in srgb, var(--color-lavender) 14%, white)"
                    : i === 1
                    ? "color-mix(in srgb, var(--color-accent-pink) 18%, white)"
                    : "color-mix(in srgb, var(--color-accent-gold) 10%, white)",
                borderColor:
                  i === 0
                    ? "color-mix(in srgb, var(--color-lavender) 45%, transparent)"
                    : i === 1
                    ? "color-mix(in srgb, var(--color-accent-pink) 55%, transparent)"
                    : "color-mix(in srgb, var(--color-accent-gold) 45%, transparent)",
              }}
            >
              <h2 className="font-heading text-xl text-primary-text mb-2">
                {item.title}
              </h2>
              <p className="text-[14.5px] leading-relaxed text-primary-text/80">
                {item.text}
              </p>
            </div>
          ))}
        </section>

        {/* Социални линкове */}
        <section className="flex items-center gap-5">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-accent-gold/40 text-primary-text transition-all duration-300 hover:bg-accent-gold/15 hover:border-accent-gold active:scale-[0.95]"
            >
              <Icon name={s.icon} className="w-5 h-5" />
            </a>
          ))}
        </section>
      </div>

      {/* Долен колонтитул */}
      <footer className="w-full border-t border-primary-text/10 py-8 px-6">
        <div className="max-w-md mx-auto flex flex-col items-center gap-3 text-center">
          <p className="text-xs leading-relaxed text-primary-text/50">
            {footerDisclaimer}
          </p>
          <p className="text-xs text-primary-text/40">
            © {person.name}
          </p>
        </div>
      </footer>
    </main>
  );
}
