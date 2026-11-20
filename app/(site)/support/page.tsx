import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { TdsButton } from "@/components/tds/TdsButton";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Тусламж",
  description: "Түгээмэл асуулт, холбоо барих маягт, мэдээ авах бүртгэл.",
};

const quickLinks = [
  { title: "Туршилтын жолоодлого", text: "Загвараа сонгоод цагаа товлоорой.", href: "/drive", cta: "Цаг товлох" },
  { title: "Захиалга", text: "Хувилбар, өнгө, дугуйгаа сонгоод захиалаарай.", href: "/model3/design", cta: "Тохируулах" },
  { title: "Цэнэглэлт", text: "Цэнэглэх аргууд болон сарын зардлын тооцоо.", href: "/charging", cta: "Дэлгэрэнгүй" },
];

const faqs = [
  {
    q: "Туршилтын жолоодлогыг хэрхэн товлох вэ?",
    a: "Туршилтын жолоодлогын хуудсанд загвараа сонгоод мэдээллээ үлдээнэ үү, эсвэл календараас шууд цаг сонгоно уу.",
  },
  {
    q: "Захиалга хэрхэн өгөх вэ?",
    a: "Загварын хуудаснаас «Захиалах» дээр дарж хувилбар, өнгө, дугуй, дотоод заслаа сонгоно. Дараа нь холбоо барих мэдээлэл, төлбөрийн хэлбэрээ оруулаад захиалгаа илгээнэ.",
  },
  {
    q: "Нэг цэнэглэлтээр хэр хол явах вэ?",
    a: "Загвар, хувилбараас хамаарч ойролцоогоор 480–600 км явна. Хүйтэн цаг агаар, хурд, ачааллаас шалтгаалан бодит зай өөр байж болно.",
  },
  {
    q: "Машинаа хаана цэнэглэх вэ?",
    a: "Ихэнх цэнэглэлтийг гэртээ Wall Connector эсвэл ердийн розеткоор хийнэ. Урт замд Supercharger, зочид буудал, ресторанд Destination цэнэглэгч ашиглана.",
  },
  {
    q: "Хүйтэн өвөлд хэрхэн ажилладаг вэ?",
    a: "Дулааны насос, батерей урьдчилан халаах систем нь хасах хэмд ч найдвартай ажиллахад тусална. Цэнэглэгчид залгаатай үедээ салоноо халаавал батерейн цэнэг хэмнэгдэнэ.",
  },
  {
    q: "Full Self-Driving (Хяналттай) гэж юу вэ?",
    a: "Хурдны зам, хотын гудамжинд жолоодох, автомат зогсоол зэрэг туслах функцүүдийн багц. Жолооч үргэлж анхааралтай байж, хүссэн үедээ жолоодлогыг гартаа авахад бэлэн байх ёстой.",
  },
];

export default function SupportPage() {
  return (
    <>
      <Section className="flex flex-col gap-10">
        <SectionTitle as="h1" label="Тусламж" title="Бид танд юугаар туслах вэ?" />
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {quickLinks.map((l) => (
            <li key={l.title} className="flex flex-col items-start gap-3 rounded-tds bg-tds-grey-70 p-6">
              <h2 className="text-tds-50 font-medium text-tds-grey-10">{l.title}</h2>
              <p>{l.text}</p>
              <TdsButton href={l.href} variant="light" className="mt-2">
                {l.cta}
              </TdsButton>
            </li>
          ))}
        </ul>
      </Section>

      <Section bg="grey" id="faq" className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <SectionTitle label="Асуулт, хариулт" title="Түгээмэл асуултууд" />
        <div className="flex flex-col">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-tds-grey-50">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-tds-40 font-medium text-tds-grey-10 marker:hidden focus-visible:outline-2 focus-visible:outline-tds-grey-35 [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  aria-hidden
                  className="shrink-0 text-tds-50 text-tds-grey-30 transition-transform duration-330 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-[65ch] pb-5">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section id="contact" className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <SectionTitle
          label="Холбоо барих"
          title="Бидэнд бичээрэй"
          description="Асуулт, санал хүсэлтээ илгээвэл и-мэйлээр хариу өгнө."
        />
        <ContactForm />
      </Section>

      <Section bg="grey" id="updates" className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-end">
        <SectionTitle
          label="Мэдээлэл авах"
          title="Шинэ мэдээ хүлээн авах"
          description="Шинэ загвар, урамшуулал, арга хэмжээний мэдээг хамгийн түрүүнд аваарай."
        />
        <NewsletterForm />
      </Section>
    </>
  );
}
