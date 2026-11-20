export type Product = {
  name: string;
  /** Small label shown before the price, e.g. "Lease From" */
  label: string;
  price: string;
  image: string;
  /** Primary button text */
  cta: string;
  href: string;
};

export const products: Product[] = [
  {
    name: "Model Y L Premium",
    label: "Starting at",
    price: "$61,990",
    image: "/assets/product-model-y-l.png",
    cta: "Order Now",
    href: "#",
  },
  {
    name: "Model 3",
    label: "Lease From",
    price: "$439/mo",
    image: "/assets/product-model-3.png",
    cta: "Order Now",
    href: "#",
  },
  {
    name: "Model Y",
    label: "Lease From",
    price: "$499/mo",
    image: "/assets/product-model-y.png",
    cta: "Order Now",
    href: "#",
  },
  {
    name: "Cybertruck",
    label: "Variant",
    price: "$55",
    image: "/assets/product-cybertruck.png",
    cta: "Order now",
    href: "#",
  },
  {
    name: "Roadster",
    label: "Variant",
    price: "$55",
    image: "/assets/product-roadster.png",
    cta: "Reserve Now",
    href: "#",
  },
];
