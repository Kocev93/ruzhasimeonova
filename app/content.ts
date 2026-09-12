export const siteUrl = "https://ruzhasimeonova.vercel.app";

export const person = {
  name: "Ружа Симеонова",
  title: "Психотерапевт",
  bio: "Психодрама терапевт, психолог и психомоторен аналитик. Повече от 20 години вървя редом до хората в техните трудни, понякога тъмни, а понякога удивително красиви места.",
  phone: "+359877413071",
  phoneDisplay: "+359 87 741 3071",
  email: "ruzha.simeonova@gmail.com",
};

export const contactLinks = [
  {
    label: "Обади се",
    href: `tel:${person.phone}`,
    icon: "phone",
  },
  {
    label: "Viber",
    href: `viber://chat?number=%2B359877413071`,
    icon: "viber",
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/359877413071`,
    icon: "whatsapp",
  },
  {
    label: "Имейл",
    href: `mailto:${person.email}`,
    icon: "email",
  },
] as const;

export const bookingUrl = "https://ruzhasimeonova.eu/zapazi-chas.html";

export const socialLinks = [
  {
    label: "Уебсайт",
    href: "https://ruzhasimeonova.eu",
    icon: "website",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/altiathc",
    icon: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ruzhasimeonova/",
    icon: "instagram",
  },
] as const;

export const footerDisclaimer =
  "При непосредствен риск за живота или здравето, моля свържете се със 112 или подходяща спешна/кризисна служба. Този сайт не е предназначен за спешна помощ.";
