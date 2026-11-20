export type NavLink = { label: string; href: string };
export type SocialLink = NavLink & { icon: string };

export const navLinks: NavLink[] = [
  { label: "Vehicle", href: "#" },
  { label: "Energy", href: "#" },
  { label: "Charging", href: "#" },
];

export const footerLinks: NavLink[] = [
  { label: "Privacy & Legacy", href: "#" },
  { label: "Vehicle Recalls", href: "#" },
  { label: "Contact", href: "#" },
  { label: "News", href: "#" },
  { label: "Get Updates", href: "#" },
];

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", icon: "/assets/facebook.svg" },
  { label: "Instagram", href: "#", icon: "/assets/instagram.svg" },
  { label: "X", href: "#", icon: "/assets/x.svg" },
  { label: "LinkedIn", href: "#", icon: "/assets/linkedin.svg" },
  { label: "YouTube", href: "#", icon: "/assets/youtube.svg" },
];

export const legalLinks: NavLink[] = [
  { label: "Locations", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
];
