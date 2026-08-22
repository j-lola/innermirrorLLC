import type { ClipboardEvent, KeyboardEvent } from "react";
import PhoneInput, { isValidPhoneNumber, type Value } from "react-phone-number-input";
import "react-phone-number-input/style.css";

type CirclePhoneInputProps = {
  id: string;
  value: Value | undefined;
  onChange: (value: Value | undefined) => void;
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
};

const CONTROL_KEYS = new Set([
  "Backspace",
  "Delete",
  "Tab",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "Home",
  "End",
]);

function sanitizePhoneValue(value: string): Value {
  const trimmed = value.trim();
  if (!trimmed) return "";

  const digits = trimmed.replace(/\D/g, "");
  if (!digits) return "";

  return `+${digits}` as Value;
}

function handlePhoneKeyDown(event: KeyboardEvent<HTMLInputElement>) {
  if (event.ctrlKey || event.metaKey || event.altKey) return;
  if (CONTROL_KEYS.has(event.key)) return;
  if (/^\d$/.test(event.key)) return;
  event.preventDefault();
}

function handlePhonePaste(event: ClipboardEvent<HTMLInputElement>) {
  const pasted = event.clipboardData.getData("text");
  if (/[a-zA-Z]/.test(pasted)) {
    event.preventDefault();
  }
}

export function CirclePhoneInput({ id, value, onChange, disabled, required, invalid }: CirclePhoneInputProps) {
  return (
    <PhoneInput
      id={id}
      international
      defaultCountry="US"
      countryCallingCodeEditable={false}
      limitMaxLength
      smartCaret={false}
      value={value}
      onChange={(nextValue) => {
        if (!nextValue) {
          onChange(undefined);
          return;
        }

        const sanitized = sanitizePhoneValue(nextValue);
        onChange(sanitized ? sanitized : undefined);
      }}
      disabled={disabled}
      required={required}
      numberInputProps={{
        id,
        name: "phone",
        autoComplete: "tel",
        inputMode: "numeric",
        pattern: "[0-9]*",
        placeholder: "Phone number",
        "aria-invalid": invalid || undefined,
        onKeyDown: handlePhoneKeyDown,
        onPaste: handlePhonePaste,
      }}
      className={`circle-phone-input mt-2 PhoneInput ${invalid ? "circle-phone-input--invalid" : ""} ${disabled ? "circle-phone-input--disabled" : ""}`}
    />
  );
}

export function isValidCirclePhone(value: Value | undefined) {
  if (!value) return false;
  return isValidPhoneNumber(value);
}
