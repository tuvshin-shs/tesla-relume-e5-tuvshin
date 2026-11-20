import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/** TDS form controls: 40px tall, container fill, 12px grey-30 label, red-10 error. */

const control =
  "w-full rounded-tds border border-transparent bg-tds-grey-70 px-4 text-tds-30 text-tds-grey-10 transition-[border-color] duration-330 " +
  "placeholder:text-tds-grey-35 hover:border-tds-grey-50 focus-visible:border-tds-grey-35 focus-visible:outline-none " +
  "aria-[invalid=true]:border-tds-red-10";

type FieldProps = {
  name: string;
  label: string;
  error?: string;
  hint?: string;
  className?: string;
};

function Field({ name, label, error, hint, className, children }: FieldProps & { children: ReactNode }) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={name} className="text-tds-20 text-tds-grey-30">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${name}-error`} className="text-tds-20 text-tds-red-10">
          {error}
        </p>
      ) : (
        hint && <p className="text-tds-20 text-tds-grey-30">{hint}</p>
      )}
    </div>
  );
}

const describedBy = (name: string, error?: string) => (error ? `${name}-error` : undefined);

export function TextField({
  name,
  label,
  error,
  hint,
  className,
  ...input
}: FieldProps & Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "className">) {
  return (
    <Field name={name} label={label} error={error} hint={hint} className={className}>
      <input
        id={name}
        name={name}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(name, error)}
        className={cn(control, "h-10")}
        {...input}
      />
    </Field>
  );
}

export function SelectField({
  name,
  label,
  error,
  hint,
  className,
  children,
  ...select
}: FieldProps & Omit<SelectHTMLAttributes<HTMLSelectElement>, "name" | "className">) {
  return (
    <Field name={name} label={label} error={error} hint={hint} className={className}>
      <select
        id={name}
        name={name}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(name, error)}
        className={cn(control, "h-10 appearance-none bg-[url('/assets/chevron-down.svg')] bg-[length:20px] bg-[position:right_12px_center] bg-no-repeat pr-10")}
        {...select}
      >
        {children}
      </select>
    </Field>
  );
}

export function TextAreaField({
  name,
  label,
  error,
  hint,
  className,
  ...textarea
}: FieldProps & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name" | "className">) {
  return (
    <Field name={name} label={label} error={error} hint={hint} className={className}>
      <textarea
        id={name}
        name={name}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(name, error)}
        className={cn(control, "min-h-32 py-3")}
        {...textarea}
      />
    </Field>
  );
}

export function CheckboxField({
  name,
  label,
  error,
  ...input
}: { name: string; label: ReactNode; error?: string } & Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "type">) {
  return (
    <div className="flex flex-col gap-1">
      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          name={name}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(name, error)}
          className="mt-0.5 size-4 shrink-0 accent-tds-blue-30"
          {...input}
        />
        <span className="text-tds-30 text-tds-grey-20">{label}</span>
      </label>
      {error && (
        <p id={`${name}-error`} className="pl-7 text-tds-20 text-tds-red-10">
          {error}
        </p>
      )}
    </div>
  );
}

/** Green confirmation panel shown after a successful submit. */
export function SuccessPanel({ title, children, action }: { title: string; children: ReactNode; action?: ReactNode }) {
  return (
    <div role="status" className="flex flex-col items-start gap-4 rounded-tds bg-tds-grey-70 p-6 md:p-8">
      <span className="flex size-10 items-center justify-center rounded-full bg-tds-green text-tds-50 text-white" aria-hidden>
        ✓
      </span>
      <h3 className="text-tds-60 font-medium text-tds-grey-10">{title}</h3>
      <div className="flex flex-col gap-2 text-tds-30 text-tds-grey-20">{children}</div>
      {action}
    </div>
  );
}
