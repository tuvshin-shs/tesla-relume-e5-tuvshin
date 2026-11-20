export type Offer = {
  title: string;
  text: string;
  image: string;
  href: string;
};

export const offers: Offer[] = [
  {
    title: "Current Offers",
    text: "Explore limited-time offers on Tesla vehicles.",
    image: "/assets/offer-current.png",
    href: "#",
  },
  {
    title: "2026 Annual Shareholder Meeting",
    text: "The future of Tesla is in your hands. Learn why your vote matters.",
    image: "/assets/offer-shareholder.png",
    href: "#",
  },
];
