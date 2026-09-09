type IconName =
  | "phone"
  | "viber"
  | "whatsapp"
  | "email"
  | "vcard"
  | "facebook"
  | "instagram"
  | "website"
  | "install"
  | "share";

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "phone":
      return (
        <svg {...props}>
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z" />
        </svg>
      );
    case "viber":
      return (
        <svg {...props}>
          <path d="M12 4c4.4 0 8 3.1 8 7.1 0 3.9-3.5 7-7.8 7.1-1 0-2-.1-2.9-.4L5.5 19l.7-3C5 14.6 4.2 13 4.2 11.1 4.2 7.1 7.8 4 12 4Z" />
          <path
            d="M9.4 9.7c-.1 3 2.4 5.4 5.2 5.6"
            strokeWidth={1.4}
          />
          <circle cx="9.4" cy="9.7" r="0.85" fill="currentColor" stroke="none" />
          <circle cx="14.6" cy="15.3" r="0.85" fill="currentColor" stroke="none" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...props}>
          <path d="M7 18l-3.5 1L4.5 15.6A8 8 0 1 1 7 18Z" />
          <path d="M9 10c0 3 2.5 5 5 5" />
          <path d="M9 10c.3-.7.2-.8-.2-1.5-.3-.6-.6-.6-.9-.6-.9 0-1.4 1-1.4 1.6 0 .4.1.8.4 1.3M14 15c.7-.1.9-.3 1.3-1 .3-.5.2-.9-.2-1.3-.3-.4-1.2-1.1-1.7-.9" />
        </svg>
      );
    case "email":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
        </svg>
      );
    case "vcard":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="9" cy="10.5" r="2" />
          <path d="M6 16c.5-1.8 1.8-2.5 3-2.5s2.5.7 3 2.5" />
          <path d="M14.5 9.5h4M14.5 13h4" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...props} strokeWidth={1.6}>
          <path d="M14 21v-7h2.5l.5-3H14V9c0-.9.3-1.5 1.6-1.5H17V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 3.9V11H8.5v3H11v7Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...props} strokeWidth={1.6}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      );
    case "website":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.5 12h17" />
          <path d="M12 3.5c2.2 2.3 3.4 5.3 3.4 8.5s-1.2 6.2-3.4 8.5c-2.2-2.3-3.4-5.3-3.4-8.5s1.2-6.2 3.4-8.5Z" />
        </svg>
      );
    case "install":
      return (
        <svg {...props}>
          <rect x="4" y="3.5" width="16" height="17" rx="4.5" />
          <path d="M12 9v6M9.2 12.2 12 15l2.8-2.8" />
        </svg>
      );
    case "share":
      return (
        <svg {...props}>
          <path d="M12 15V4M8.2 7.8 12 4l3.8 3.8" />
          <path d="M5.5 12v6.5c0 .8.7 1.5 1.5 1.5h10c.8 0 1.5-.7 1.5-1.5V12" />
        </svg>
      );
    default:
      return null;
  }
}
