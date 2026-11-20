"use client";

import { type FormEvent, useState } from "react";
import { TdsButton } from "@/components/tds/TdsButton";
import { cn } from "@/lib/cn";
import { isEmail } from "@/lib/validate";

export function NewsletterForm() {
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "");
    if (!isEmail(email)) {
      setError("Зөв и-мэйл хаяг оруулна уу");
      e.currentTarget.querySelector("input")?.focus();
      return;
    }
    // TODO: add the address to a mailing list. Nothing leaves the browser yet.
    setError("");
    setDone(true);
  }

  if (done) {
    return (
      <p role="status" className="font-medium text-tds-grey-10">
        ✓ Бүртгүүлсэнд баярлалаа! Шинэ мэдээг и-мэйлээр хүргэнэ.
      </p>
    );
  }

  return (
    <form noValidate onSubmit={submit} className="flex flex-col gap-2">
      <label htmlFor="newsletter-email" className="text-tds-20 text-tds-grey-30">
        И-мэйл хаяг
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="name@example.com"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "newsletter-error" : undefined}
          className={cn(
            "h-10 w-full rounded-tds border bg-white px-4 text-tds-30 text-tds-grey-10 transition-[border-color] duration-330 placeholder:text-tds-grey-35 focus-visible:outline-none sm:max-w-[360px]",
            error ? "border-tds-red-10" : "border-transparent hover:border-tds-grey-50 focus-visible:border-tds-grey-35",
          )}
        />
        <TdsButton type="submit">Бүртгүүлэх</TdsButton>
      </div>
      {error && (
        <p id="newsletter-error" className="text-tds-20 text-tds-red-10">
          {error}
        </p>
      )}
    </form>
  );
}
