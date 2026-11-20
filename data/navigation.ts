export type NavLink = { label: string; href: string };

/** Header links after the "Тээврийн хэрэгсэл" menu. */
export const mainNav: NavLink[] = [
  { label: "Цэнэглэлт", href: "/charging" },
  { label: "Автомат жолоодлого", href: "/fsd" },
  { label: "Урамшуулал", href: "/offers" },
  { label: "Тусламж", href: "/support" },
];

export const footerLinks: NavLink[] = [
  { label: "Нууцлал ба эрх зүй", href: "https://www.tesla.com/legal" },
  { label: "Холбоо барих", href: "/support#contact" },
  { label: "Мэдээ", href: "https://www.tesla.com/blog" },
  { label: "Мэдээлэл авах", href: "/support#updates" },
  { label: "Цэнэглэх цэг", href: "/charging" },
  { label: "Дизайн систем", href: "/styleguide" },
];
