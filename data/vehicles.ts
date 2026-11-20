import { formatUsd } from "@/lib/format";

/**
 * Vehicle lineup: drives the home carousel, the navbar menu, model pages (/[model]),
 * the configurator (/[model]/design), offers and the demo-drive form.
 * Prices (USD) and specs are approximate and for illustration only.
 */

export type Trim = {
  id: string;
  name: string;
  price: number;
  /** km, approximate */
  range: number;
  /** 0–100 km/h, seconds */
  accel: number;
  /** km/h */
  topSpeed: number;
};

export type Option = { id: string; name: string; price: number; hex?: string };

export type Feature = { title: string; text: string };

export type Vehicle = {
  slug: string;
  name: string;
  /** Body style, e.g. "Спорт седан" */
  type: string;
  tagline: string;
  image: string;
  seats: number;
  /** Monthly lease shown on cards, when offered */
  leaseFrom?: number;
  /** Full CTA label: "Захиалах" or "Урьдчилан захиалах" */
  orderLabel: string;
  comingSoon?: boolean;
  trims: Trim[];
  colors: Option[];
  wheels: Option[];
  interiors: Option[];
  features: Feature[];
};

export const FSD_PRICE = 8000;
export const FSD_MONTHLY = 99;

const paints: Option[] = [
  { id: "stealth-grey", name: "Хар саарал", price: 0, hex: "#3a3c40" },
  { id: "pearl-white", name: "Сувдан цагаан", price: 1000, hex: "#f2f2f2" },
  { id: "deep-blue", name: "Гүн цэнхэр", price: 1000, hex: "#1f3a6e" },
  { id: "diamond-black", name: "Алмаазан хар", price: 1500, hex: "#111214" },
  { id: "ultra-red", name: "Тод улаан", price: 2000, hex: "#a3131c" },
  { id: "quicksilver", name: "Мөнгөлөг", price: 2000, hex: "#b8babd" },
];

const interiors: Option[] = [
  { id: "black", name: "Бүтэн хар", price: 0, hex: "#1b1b1d" },
  { id: "black-white", name: "Хар ба цагаан", price: 1000, hex: "#e9e7e2" },
];

const safety: Feature = {
  title: "Аюулгүй байдал",
  text: "Бат бөх их бие, нам хүндийн төв, найман камерын хамгаалалт нь зорчигч бүрийг аюулгүй байлгана.",
};

const updates: Feature = {
  title: "Агаараар шинэчлэгдэнэ",
  text: "Програм хангамжийн шинэчлэл утасгүйгээр ирж, машин тань цаг хугацааны явцад улам сайжирсаар байна.",
};

export const vehicles: Vehicle[] = [
  {
    slug: "model3",
    name: "Model 3",
    type: "Спорт седан",
    tagline: "Хурдан, хэмнэлттэй, өдөр тутмын хэрэглээнд төгс тохирох седан.",
    image: "/assets/product-model-3.png",
    seats: 5,
    leaseFrom: 439,
    orderLabel: "Захиалах",
    trims: [
      { id: "rwd", name: "Арын хөтлөгч", price: 42490, range: 584, accel: 6.1, topSpeed: 201 },
      { id: "lr-awd", name: "Урт зай, бүх дугуйн хөтлөгч", price: 47490, range: 557, accel: 4.4, topSpeed: 201 },
      { id: "performance", name: "Performance", price: 54990, range: 496, accel: 3.1, topSpeed: 262 },
    ],
    colors: paints,
    wheels: [
      { id: "18", name: '18" Photon дугуй', price: 0 },
      { id: "19", name: '19" Nova дугуй', price: 1500 },
    ],
    interiors,
    features: [
      safety,
      {
        title: "Гүйцэтгэл",
        text: "Цахилгаан мотор эргүүлэх хүчээ шууд өгч, 0–100 км/ц хурдыг хэдхэн секундэд авна.",
      },
      {
        title: "Дотоод засал",
        text: "15.4 инчийн мэдрэгч дэлгэц, агааржуулалттай суудал, нам гүм салон бүхий минималист дизайн.",
      },
      updates,
    ],
  },
  {
    slug: "modely",
    name: "Model Y",
    type: "Дунд оврын SUV",
    tagline: "Гэр бүл, ачаа тээш, адал явдалд зориулсан уян хатан SUV.",
    image: "/assets/product-model-y.png",
    seats: 5,
    leaseFrom: 499,
    orderLabel: "Захиалах",
    trims: [
      { id: "lr-rwd", name: "Урт зай, арын хөтлөгч", price: 44990, range: 574, accel: 5.9, topSpeed: 201 },
      { id: "lr-awd", name: "Урт зай, бүх дугуйн хөтлөгч", price: 48990, range: 526, accel: 4.8, topSpeed: 201 },
      { id: "performance", name: "Performance", price: 57490, range: 492, accel: 3.5, topSpeed: 250 },
    ],
    colors: paints,
    wheels: [
      { id: "19", name: '19" Gemini дугуй', price: 0 },
      { id: "20", name: '20" Helix дугуй', price: 2000 },
    ],
    interiors,
    features: [
      {
        title: "Өргөн багтаамж",
        text: "Хойд суудлыг эвхэхэд ачааны тасалгаа томорч, урд талын тээшинд ч нэмэлт зай бий.",
      },
      {
        title: "Бүх улирлын зүтгүүр",
        text: "Хоёр моторт бүх дугуйн хөтлөгч цас, мөстэй замд ч тогтвортой зүтгэнэ.",
      },
      {
        title: "Панорам шил дээвэр",
        text: "Бүтэн шил дээвэр салоныг гэрэлтэй, өргөн уудам мэдрэмжтэй болгоно.",
      },
      updates,
    ],
  },
  {
    slug: "modelyl",
    name: "Model Y L",
    type: "Зургаан суудалтай SUV",
    tagline: "Гурван эгнээ, зургаан суудал — бүхэл бүтэн гэр бүлд хангалттай зай.",
    image: "/assets/product-model-y-l.png",
    seats: 6,
    orderLabel: "Захиалах",
    trims: [{ id: "premium", name: "Premium, бүх дугуйн хөтлөгч", price: 61990, range: 600, accel: 5.0, topSpeed: 201 }],
    colors: paints,
    wheels: [
      { id: "19", name: '19" дугуй', price: 0 },
      { id: "21", name: '21" дугуй', price: 2500 },
    ],
    interiors,
    features: [
      {
        title: "Гурван эгнээ суудал",
        text: "Зургаан хүн тав тухтай суух бөгөөд гуравдугаар эгнээ рүү орж гарахад хялбар.",
      },
      {
        title: "Дээд зэргийн тав тух",
        text: "Хоёрдугаар эгнээний цахилгаан суудал, тусдаа агааржуулалт, нам гүм салон.",
      },
      safety,
      updates,
    ],
  },
  {
    slug: "cybertruck",
    name: "Cybertruck",
    type: "Пикап",
    tagline: "Ямар ч замд зориулагдсан, зэвэрдэггүй ган их биетэй пикап.",
    image: "/assets/product-cybertruck.png",
    seats: 5,
    orderLabel: "Захиалах",
    trims: [
      { id: "awd", name: "Бүх дугуйн хөтлөгч", price: 79990, range: 523, accel: 4.3, topSpeed: 180 },
      { id: "cyberbeast", name: "Cyberbeast", price: 99990, range: 484, accel: 2.7, topSpeed: 209 },
    ],
    colors: [
      { id: "stainless", name: "Зэвэрдэггүй ган", price: 0, hex: "#b5b7b9" },
      { id: "satin-black", name: "Хар сатин бүрээс", price: 6500, hex: "#262628" },
    ],
    wheels: [{ id: "20", name: '20" бартаат замын дугуй', price: 0 }],
    interiors,
    features: [
      {
        title: "Хэт бат бөх их бие",
        text: "Зэвэрдэггүй ган экзоскелет хонхойлт, зураас, зэврэлтэд тэсвэртэй.",
      },
      {
        title: "Чирэх чадал",
        text: "4,990 кг хүртэл жинтэй чиргүүл чирнэ.",
      },
      {
        title: "Агаарын түдгэлзүүр",
        text: "Газрын клиренсийг 43 см хүртэл өсгөж, бартаат замыг даван туулна.",
      },
      {
        title: "Түгжигддэг тэвш",
        text: "1.8 метр урт тэвш нь цахилгаан бүрхүүлээр түгжигдэж, ачааг тань хамгаална.",
      },
    ],
  },
  {
    slug: "roadster",
    name: "Roadster",
    type: "Спорт машин",
    tagline: "Цахилгаан машины хурд, явах зайн хязгаарыг шинээр тогтооно.",
    image: "/assets/product-roadster.png",
    seats: 4,
    orderLabel: "Урьдчилан захиалах",
    comingSoon: true,
    trims: [{ id: "base", name: "Үндсэн", price: 200000, range: 1000, accel: 2.1, topSpeed: 400 }],
    colors: [
      { id: "red", name: "Улаан", price: 0, hex: "#a3131c" },
      { id: "white", name: "Цагаан", price: 0, hex: "#f2f2f2" },
      { id: "black", name: "Хар", price: 0, hex: "#111214" },
    ],
    wheels: [{ id: "21", name: '21" спорт дугуй', price: 0 }],
    interiors,
    features: [
      {
        title: "Дээд зэргийн хурдатгал",
        text: "0–100 км/ц хурдыг хоёр секунд орчимд авах зорилготой.",
      },
      {
        title: "Хол явах зай",
        text: "Нэг цэнэглэлтээр 1,000 км орчим явах зорилготой.",
      },
      {
        title: "Авдаг шил дээвэр",
        text: "Шил дээврийг авч, задгай машин болгон жолоодох боломжтой.",
      },
      {
        title: "Дөрвөн суудал",
        text: "2+2 зохион байгуулалт нь спорт машинд ховор тав тухыг өгнө.",
      },
    ],
  },
];

export function getVehicle(slug: string) {
  return vehicles.find((v) => v.slug === slug);
}

/** Vehicles that can be test driven today. */
export const drivableVehicles = vehicles.filter((v) => !v.comingSoon);

export const startingPrice = (v: Vehicle) => Math.min(...v.trims.map((t) => t.price));

/** "Түрээс · $439/сар" on cards, otherwise "Эхлэх үнэ · $61,990". */
export function priceLine(v: Vehicle) {
  return v.leaseFrom
    ? { label: "Түрээс", value: `${formatUsd(v.leaseFrom)}/сар` }
    : { label: "Эхлэх үнэ", value: formatUsd(startingPrice(v)) };
}

export type Spec = { label: string; value: string };

/** The three headline specs for one trim. */
export function trimSpecs(t: Trim): Spec[] {
  return [
    { label: "Явах зай*", value: `${t.range} км` },
    { label: "0–100 км/ц", value: `${t.accel} с` },
    { label: "Дээд хурд", value: `${t.topSpeed} км/ц` },
  ];
}

/** Best-of specs across all trims, for the model page hero. */
export function headlineSpecs(v: Vehicle): Spec[] {
  return trimSpecs({
    id: "best",
    name: "",
    price: 0,
    range: Math.max(...v.trims.map((t) => t.range)),
    accel: Math.min(...v.trims.map((t) => t.accel)),
    topSpeed: Math.max(...v.trims.map((t) => t.topSpeed)),
  });
}

export const SPEC_NOTE = "*Үзүүлэлт, үнэ нь ойролцоо бөгөөд жишээ зорилгоор харуулсан.";
