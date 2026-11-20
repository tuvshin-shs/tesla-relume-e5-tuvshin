/** Client-side form checks shared by the order, demo drive and contact forms. */

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

/** Mongolian mobile number: 8 digits, optional +976 prefix, spaces/dashes allowed. */
export const isPhone = (v: string) => /^(\+?976)?\d{8}$/.test(v.replace(/[\s-]/g, ""));

export const isBlank = (v: FormDataEntryValue | null) => !v || String(v).trim() === "";

export type FormErrors = Record<string, string>;

/** Focus the first field that has an error so keyboard and screen-reader users land on it. */
export function focusFirstError(form: HTMLFormElement, errors: FormErrors) {
  const first = Object.keys(errors)[0];
  if (first) form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
}
