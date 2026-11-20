"use client";

import Image from "next/image";
import { type FormEvent, useState } from "react";
import { CheckboxField, SuccessPanel, TextField } from "@/components/forms/fields";
import { TdsButton } from "@/components/tds/TdsButton";
import { drivableVehicles } from "@/data/vehicles";
import { cn } from "@/lib/cn";
import { type FormErrors, focusFirstError, isBlank, isEmail, isPhone } from "@/lib/validate";

export function DemoDriveForm({ initialModel }: { initialModel: string }) {
  const [model, setModel] = useState(initialModel);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState<{ name: string; model: string; date: string } | null>(null);

  const vehicle = drivableVehicles.find((v) => v.slug === model) ?? drivableVehicles[0];

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const date = String(data.get("date") ?? "");
    const today = new Date().toISOString().slice(0, 10);

    const next: FormErrors = {};
    if (isBlank(data.get("firstName"))) next.firstName = "Нэрээ оруулна уу";
    if (isBlank(data.get("lastName"))) next.lastName = "Овгоо оруулна уу";
    if (!isPhone(String(data.get("phone") ?? ""))) next.phone = "8 оронтой утасны дугаар оруулна уу";
    if (!isEmail(String(data.get("email") ?? ""))) next.email = "Зөв и-мэйл хаяг оруулна уу";
    if (!date) next.date = "Өдрөө сонгоно уу";
    else if (date < today) next.date = "Өнөөдөр эсвэл түүнээс хойшхи өдрийг сонгоно уу";
    if (!data.get("consent")) next.consent = "Хувийн мэдээлэл ашиглахыг зөвшөөрнө үү";

    setErrors(next);
    if (Object.keys(next).length) {
      focusFirstError(form, next);
      return;
    }
    // TODO: send the request to a backend (API route, CRM, e-mail). Nothing leaves the browser yet.
    setSent({ name: String(data.get("firstName")).trim(), model: vehicle.name, date });
  }

  if (sent) {
    return (
      <SuccessPanel
        title={`Баярлалаа, ${sent.name}!`}
        action={
          <div className="flex flex-wrap gap-3 pt-2">
            <TdsButton href={`/${vehicle.slug}`} variant="secondary">
              {vehicle.name}-ийн тухай
            </TdsButton>
            <TdsButton variant="light" onClick={() => setSent(null)}>
              Шинэ хүсэлт
            </TdsButton>
          </div>
        }
      >
        <p>
          {sent.model} загварын туршилтын жолоодлогын хүсэлтийг {sent.date}-ний өдрөөр бүртгэлээ. Цагийг баталгаажуулахаар
          тантай холбогдоно.
        </p>
      </SuccessPanel>
    );
  }

  return (
    <form noValidate onSubmit={submit} className="flex flex-col gap-8">
      <fieldset>
        <legend className="mb-3 text-tds-50 font-medium text-tds-grey-10">Загвараа сонгоно уу</legend>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {drivableVehicles.map((v) => (
            <label
              key={v.slug}
              className={cn(
                "flex cursor-pointer flex-col items-center gap-2 rounded-tds p-2 pb-3 text-center transition-shadow duration-250",
                "has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-tds-grey-35",
                model === v.slug
                  ? "shadow-[inset_0_0_0_3px_#3e6ae1]"
                  : "shadow-[inset_0_0_0_1px_#d0d1d2] hover:shadow-[inset_0_0_0_1px_#8e8e8e]",
              )}
            >
              <input
                type="radio"
                name="model"
                value={v.slug}
                checked={model === v.slug}
                onChange={() => setModel(v.slug)}
                className="sr-only"
              />
              <span className="relative aspect-[4/3] w-full overflow-hidden rounded-tds bg-tds-grey-70">
                <Image src={v.image} alt="" fill sizes="160px" className="object-cover" />
              </span>
              <span className="font-medium text-tds-grey-10">{v.name}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-4">
        <legend className="mb-3 text-tds-50 font-medium text-tds-grey-10">Таны мэдээлэл</legend>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <TextField name="firstName" label="Нэр" autoComplete="given-name" error={errors.firstName} />
          <TextField name="lastName" label="Овог" autoComplete="family-name" error={errors.lastName} />
          <TextField name="phone" label="Утас" type="tel" inputMode="tel" placeholder="9911 2233" autoComplete="tel" error={errors.phone} />
          <TextField name="email" label="И-мэйл" type="email" placeholder="name@example.com" autoComplete="email" error={errors.email} />
          <TextField name="date" label="Хүссэн өдөр" type="date" error={errors.date} />
        </div>
      </fieldset>

      <div className="flex flex-col gap-3">
        <CheckboxField
          name="consent"
          error={errors.consent}
          label="Туршилтын жолоодлогыг зохион байгуулахад миний мэдээллийг ашиглахыг зөвшөөрч байна."
        />
        <CheckboxField name="updates" label="Шинэ загвар, урамшууллын мэдээ авахыг хүсэж байна." />
      </div>

      <TdsButton type="submit" className="sm:self-start" wide>
        Хүсэлт илгээх
      </TdsButton>
    </form>
  );
}
