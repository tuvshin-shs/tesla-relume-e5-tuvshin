"use client";

import { type FormEvent, useState } from "react";
import { SelectField, SuccessPanel, TextAreaField, TextField } from "@/components/forms/fields";
import { TdsButton } from "@/components/tds/TdsButton";
import { type FormErrors, focusFirstError, isBlank, isEmail } from "@/lib/validate";

const topics = ["Захиалга, хүргэлт", "Туршилтын жолоодлого", "Цэнэглэлт", "Засвар үйлчилгээ", "Бусад"];

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [sentTo, setSentTo] = useState<string | null>(null);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: FormErrors = {};
    if (isBlank(data.get("name"))) next.name = "Нэрээ оруулна уу";
    if (!isEmail(String(data.get("email") ?? ""))) next.email = "Зөв и-мэйл хаяг оруулна уу";
    if (String(data.get("message") ?? "").trim().length < 10) next.message = "Мессежээ дор хаяж 10 тэмдэгтээр бичнэ үү";
    setErrors(next);
    if (Object.keys(next).length) {
      focusFirstError(form, next);
      return;
    }
    // TODO: send the message to a backend (API route, help desk, e-mail). Nothing leaves the browser yet.
    setSentTo(String(data.get("email")).trim());
  }

  if (sentTo) {
    return (
      <SuccessPanel
        title="Мессеж илгээгдлээ"
        action={
          <TdsButton variant="light" onClick={() => setSentTo(null)}>
            Өөр мессеж бичих
          </TdsButton>
        }
      >
        <p>Хариуг {sentTo} хаяг руу илгээнэ.</p>
      </SuccessPanel>
    );
  }

  return (
    <form noValidate onSubmit={submit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextField name="name" label="Нэр" autoComplete="name" error={errors.name} />
        <TextField name="email" label="И-мэйл" type="email" autoComplete="email" placeholder="name@example.com" error={errors.email} />
      </div>
      <SelectField name="topic" label="Сэдэв" defaultValue={topics[0]}>
        {topics.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </SelectField>
      <TextAreaField name="message" label="Мессеж" placeholder="Бид танд юугаар туслах вэ?" error={errors.message} />
      <TdsButton type="submit" className="sm:self-start" wide>
        Илгээх
      </TdsButton>
    </form>
  );
}
