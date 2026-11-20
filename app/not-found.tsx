import Image from "next/image";
import Link from "next/link";
import { TdsButton } from "@/components/tds/TdsButton";
import { TdsLabel } from "@/components/tds/TdsLabel";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-8 px-6 text-center">
      <Link href="/" aria-label="Tesla — нүүр хуудас">
        <Image src="/assets/tesla-logo.svg" alt="Tesla" width={120} height={16} />
      </Link>
      <div className="flex flex-col gap-2">
        <TdsLabel className="mx-auto">Алдаа 404</TdsLabel>
        <h1 className="text-tds-80 font-medium text-tds-grey-10">Хуудас олдсонгүй</h1>
        <p className="max-w-[48ch] text-tds-40 text-tds-grey-30">
          Таны хайсан хуудас устсан, нэр нь өөрчлөгдсөн эсвэл хаяг буруу бичигдсэн байж магадгүй.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <TdsButton href="/">Нүүр хуудас</TdsButton>
        <TdsButton href="/support" variant="tertiary">
          Тусламж
        </TdsButton>
      </div>
    </main>
  );
}
