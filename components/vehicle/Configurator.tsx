"use client";

import Image from "next/image";
import { type FormEvent, type ReactNode, useRef, useState } from "react";
import { CheckboxField, SuccessPanel, TextField } from "@/components/forms/fields";
import { TdsButton } from "@/components/tds/TdsButton";
import { TdsLink } from "@/components/tds/TdsLink";
import { FSD_PRICE, type Option, SPEC_NOTE, type Vehicle, trimSpecs } from "@/data/vehicles";
import { cn } from "@/lib/cn";
import { formatOptionPrice, formatUsd } from "@/lib/format";
import { type FormErrors, focusFirstError, isBlank, isEmail, isPhone } from "@/lib/validate";

type Step = "configure" | "details" | "done";

const payments = [
  { id: "cash", name: "Бэлэн төлбөр" },
  { id: "loan", name: "Зээлээр" },
  { id: "lease", name: "Түрээсээр" },
];

/* ---------- option controls ---------- */

const card =
  "flex cursor-pointer justify-between gap-4 rounded-tds px-4 py-3 transition-shadow duration-250 " +
  "has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-tds-grey-35";
const cardIdle = "shadow-[inset_0_0_0_1px_#d0d1d2] hover:shadow-[inset_0_0_0_1px_#8e8e8e]";
const cardSelected = "shadow-[inset_0_0_0_3px_#3e6ae1]";

function Group({ legend, aside, children }: { legend: string; aside?: ReactNode; children: ReactNode }) {
  return (
    <fieldset>
      <legend className="mb-3 flex w-full items-baseline justify-between gap-4">
        <span className="text-tds-50 font-medium text-tds-grey-10">{legend}</span>
        {aside}
      </legend>
      {children}
    </fieldset>
  );
}

function OptionCards({
  name,
  options,
  value,
  onChange,
  absolute,
}: {
  name: string;
  options: Option[];
  value: string;
  onChange: (id: string) => void;
  /** Show full prices (trims) instead of "+$1,500" add-on prices */
  absolute?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3">
      {options.map((o) => (
        <label key={o.id} className={cn(card, "items-center", value === o.id ? cardSelected : cardIdle)}>
          <input
            type="radio"
            name={name}
            value={o.id}
            checked={value === o.id}
            onChange={() => onChange(o.id)}
            className="sr-only"
          />
          <span className="font-medium text-tds-grey-10">{o.name}</span>
          <span className="shrink-0 text-tds-grey-30">{absolute ? formatUsd(o.price) : formatOptionPrice(o.price)}</span>
        </label>
      ))}
    </div>
  );
}

function Swatches({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: Option[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((o) => (
        <label
          key={o.id}
          title={`${o.name} · ${formatOptionPrice(o.price)}`}
          className={cn(
            "relative flex size-11 cursor-pointer items-center justify-center rounded-full",
            "has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-4 has-[input:focus-visible]:outline-tds-grey-35",
            value === o.id ? "ring-2 ring-tds-blue-30 ring-offset-2" : "ring-1 ring-tds-grey-50",
          )}
        >
          <input
            type="radio"
            name={name}
            value={o.id}
            checked={value === o.id}
            onChange={() => onChange(o.id)}
            className="sr-only"
          />
          <span className="sr-only">
            {o.name}, {formatOptionPrice(o.price)}
          </span>
          <span className="size-9 rounded-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]" style={{ background: o.hex }} />
        </label>
      ))}
    </div>
  );
}

/* ---------- configurator ---------- */

export function Configurator({ vehicle, initialTrim }: { vehicle: Vehicle; initialTrim: string }) {
  const [trimId, setTrimId] = useState(initialTrim);
  const [colorId, setColorId] = useState(vehicle.colors[0].id);
  const [wheelId, setWheelId] = useState(vehicle.wheels[0].id);
  const [interiorId, setInteriorId] = useState(vehicle.interiors[0].id);
  const [fsd, setFsd] = useState(false);
  const [step, setStep] = useState<Step>("configure");
  const [errors, setErrors] = useState<FormErrors>({});
  const [order, setOrder] = useState<{ number: string; name: string; payment: string } | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const trim = vehicle.trims.find((t) => t.id === trimId) ?? vehicle.trims[0];
  const color = vehicle.colors.find((c) => c.id === colorId)!;
  const wheel = vehicle.wheels.find((w) => w.id === wheelId)!;
  const interior = vehicle.interiors.find((i) => i.id === interiorId)!;

  const lines = [
    { label: trim.name, price: trim.price },
    { label: `Өнгө: ${color.name}`, price: color.price },
    { label: wheel.name, price: wheel.price },
    { label: `Дотоод засал: ${interior.name}`, price: interior.price },
    ...(fsd ? [{ label: "Full Self-Driving (Хяналттай)", price: FSD_PRICE }] : []),
  ];
  const total = lines.reduce((sum, l) => sum + l.price, 0);

  const goTo = (next: Step) => {
    setStep(next);
    // bring the panel top into view on phones, where it sits below the photo
    requestAnimationFrame(() => panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: FormErrors = {};
    if (isBlank(data.get("firstName"))) next.firstName = "Нэрээ оруулна уу";
    if (isBlank(data.get("lastName"))) next.lastName = "Овгоо оруулна уу";
    if (!isPhone(String(data.get("phone") ?? ""))) next.phone = "8 оронтой утасны дугаар оруулна уу";
    if (!isEmail(String(data.get("email") ?? ""))) next.email = "Зөв и-мэйл хаяг оруулна уу";
    if (!data.get("terms")) next.terms = "Нөхцөлийг зөвшөөрнө үү";
    setErrors(next);
    if (Object.keys(next).length) {
      focusFirstError(form, next);
      return;
    }
    // TODO: send the order to a backend (API route, CRM, e-mail). Nothing leaves the browser yet.
    setOrder({
      number: `TSL-${Date.now().toString().slice(-6)}`,
      name: String(data.get("firstName")).trim(),
      payment: payments.find((p) => p.id === data.get("payment"))?.name ?? payments[0].name,
    });
    goTo("done");
  }

  return (
    <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_440px]">
      {/* Photo */}
      <div className="relative h-[45svh] min-h-[300px] bg-tds-grey-70 lg:sticky lg:top-14 lg:h-[calc(100svh-56px)]">
        <Image
          src={vehicle.image}
          alt={`${vehicle.name}, ${color.name}`}
          fill
          priority
          sizes="(min-width: 992px) 65vw, 100vw"
          className="object-cover"
        />
        <p className="absolute bottom-4 left-4 flex items-center gap-2 rounded-tds bg-white/90 px-3 py-1.5 text-tds-20 font-medium text-tds-grey-10">
          <span className="size-3 rounded-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.15)]" style={{ background: color.hex }} />
          {color.name} · {wheel.name}
        </p>
      </div>

      {/* Panel */}
      <div ref={panelRef} className="flex scroll-mt-14 flex-col gap-10 px-6 py-10 md:px-12 lg:px-10">
        <div className="flex flex-col gap-1">
          <h1 className="text-tds-80 font-medium text-tds-grey-10">{vehicle.name}</h1>
          <p className="text-tds-grey-30">{vehicle.type}</p>
        </div>

        {step === "configure" && (
          <>
            <div className="flex flex-col gap-4">
              <dl className="grid grid-cols-3 gap-4 text-center">
                {trimSpecs(trim).map((s) => (
                  <div key={s.label} className="flex flex-col-reverse gap-1">
                    <dt className="text-tds-20 text-tds-grey-30">{s.label}</dt>
                    <dd className="text-tds-50 font-medium text-tds-grey-10">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <Group legend="Хувилбар">
              <OptionCards
                name="trim"
                options={vehicle.trims.map((t) => ({ id: t.id, name: t.name, price: t.price }))}
                value={trimId}
                onChange={setTrimId}
                absolute
              />
            </Group>

            <Group legend="Өнгө" aside={<span className="text-tds-grey-30">{color.name} · {formatOptionPrice(color.price)}</span>}>
              <Swatches name="color" options={vehicle.colors} value={colorId} onChange={setColorId} />
            </Group>

            <Group legend="Дугуй">
              <OptionCards name="wheel" options={vehicle.wheels} value={wheelId} onChange={setWheelId} />
            </Group>

            <Group
              legend="Дотоод засал"
              aside={<span className="text-tds-grey-30">{interior.name} · {formatOptionPrice(interior.price)}</span>}
            >
              <Swatches name="interior" options={vehicle.interiors} value={interiorId} onChange={setInteriorId} />
            </Group>

            <Group legend="Автомат жолоодлого">
              <label className={cn(card, "items-start", fsd ? cardSelected : cardIdle)}>
                <input type="checkbox" checked={fsd} onChange={(e) => setFsd(e.target.checked)} className="sr-only" />
                <span className="flex flex-col gap-1">
                  <span className="font-medium text-tds-grey-10">Full Self-Driving (Хяналттай)</span>
                  <span className="text-tds-20 text-tds-grey-30">
                    Хурдны зам, хотод жолоодох, автомат зогсоол. Жолооч хяналт тавих шаардлагатай.
                  </span>
                </span>
                <span className="shrink-0 text-tds-grey-30">{fsd ? "Нэмсэн" : `+${formatUsd(FSD_PRICE)}`}</span>
              </label>
            </Group>

            <Summary lines={lines} total={total} />

            <div className="flex flex-col gap-3">
              <TdsButton onClick={() => goTo("details")}>{vehicle.orderLabel}</TdsButton>
              {!vehicle.comingSoon && (
                <TdsButton href={`/drive?model=${vehicle.slug}`} variant="tertiary">
                  Эхлээд туршиж үзэх
                </TdsButton>
              )}
            </div>
            <p className="text-tds-20 text-tds-grey-30">{SPEC_NOTE}</p>
          </>
        )}

        {step === "details" && (
          <form noValidate onSubmit={submit} className="flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-tds-60 font-medium text-tds-grey-10">Холбоо барих мэдээлэл</h2>
              <button
                type="button"
                onClick={() => goTo("configure")}
                className="text-tds-grey-30 underline-offset-4 hover:text-tds-grey-10 hover:underline"
              >
                ← Тохиргоо руу буцах
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <TextField name="firstName" label="Нэр" autoComplete="given-name" error={errors.firstName} />
              <TextField name="lastName" label="Овог" autoComplete="family-name" error={errors.lastName} />
            </div>
            <TextField name="phone" label="Утас" type="tel" inputMode="tel" placeholder="9911 2233" autoComplete="tel" error={errors.phone} />
            <TextField name="email" label="И-мэйл" type="email" placeholder="name@example.com" autoComplete="email" error={errors.email} />
            <fieldset className="flex flex-col gap-2">
              <legend className="mb-2 text-tds-20 text-tds-grey-30">Төлбөрийн хэлбэр</legend>
              <div className="grid grid-cols-3 gap-2">
                {payments.map((p, i) => (
                  <label
                    key={p.id}
                    className="flex h-10 cursor-pointer items-center justify-center rounded-tds bg-tds-grey-70 text-center text-tds-30 font-medium text-tds-grey-20 transition-shadow duration-250 has-[:checked]:shadow-[inset_0_0_0_2px_#3e6ae1] has-[:checked]:text-tds-grey-10 has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-tds-grey-35"
                  >
                    <input type="radio" name="payment" value={p.id} defaultChecked={i === 0} className="sr-only" />
                    {p.name}
                  </label>
                ))}
              </div>
            </fieldset>
            <CheckboxField
              name="terms"
              error={errors.terms}
              label="Захиалгын нөхцөл болон хувийн мэдээллийн бодлогыг зөвшөөрч байна."
            />
            <Summary lines={lines} total={total} />
            <TdsButton type="submit">Захиалга илгээх</TdsButton>
          </form>
        )}

        {step === "done" && order && (
          <SuccessPanel
            title={`Баярлалаа, ${order.name}!`}
            action={
              <div className="flex flex-wrap gap-3 pt-2">
                <TdsButton href="/" variant="secondary">
                  Нүүр хуудас
                </TdsButton>
                <TdsButton
                  variant="light"
                  onClick={() => {
                    setOrder(null);
                    goTo("configure");
                  }}
                >
                  Дахин тохируулах
                </TdsButton>
              </div>
            }
          >
            <p>
              Таны {vehicle.name} захиалгын хүсэлт бүртгэгдлээ. Захиалгын дугаар:{" "}
              <strong className="font-medium text-tds-grey-10">{order.number}</strong>
            </p>
            <p>
              {trim.name} · {color.name} · {order.payment} · Нийт {formatUsd(total)}
            </p>
            <p>
              Асуулт байвал <TdsLink href="/support#contact">холбоо барина уу</TdsLink>.
            </p>
          </SuccessPanel>
        )}
      </div>
    </div>
  );
}

function Summary({ lines, total }: { lines: { label: string; price: number }[]; total: number }) {
  return (
    <div className="flex flex-col gap-3 rounded-tds bg-tds-grey-70 p-4">
      <ul className="flex flex-col gap-2">
        {lines.map((l) => (
          <li key={l.label} className="flex justify-between gap-4">
            <span>{l.label}</span>
            <span className="shrink-0 text-tds-grey-30">{l.price === 0 ? "Үнэгүй" : formatUsd(l.price)}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-baseline justify-between gap-4 border-t border-tds-grey-50 pt-3">
        <span className="font-medium text-tds-grey-10">Нийт үнэ</span>
        <span className="text-tds-60 font-medium text-tds-grey-10" aria-live="polite">
          {formatUsd(total)}
        </span>
      </div>
    </div>
  );
}
