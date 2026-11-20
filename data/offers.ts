export type Offer = {
  title: string;
  text: string;
  image: string;
  href: string;
  cta: string;
};

export const offers: Offer[] = [
  {
    title: "Одоогийн урамшуулал",
    text: "Tesla-ийн загваруудад хамаарах түрээс, санхүүжилтийн нөхцөлүүдтэй танилцаарай.",
    image: "/assets/offer-current.png",
    href: "/offers",
    cta: "Урамшуулал үзэх",
  },
  {
    title: "2026 оны хувьцаа эзэмшигчдийн жилийн хурал",
    text: "Tesla-ийн ирээдүй таны гарт. Таны санал яагаад чухал болохыг мэдээрэй.",
    image: "/assets/offer-shareholder.png",
    href: "https://ir.tesla.com",
    cta: "Дэлгэрэнгүй",
  },
];
