"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { IconCheck } from "@/components/ui/Icons";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success";

type Field = {
  name: keyof FormState;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  placeholder?: string;
};

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  message: string;
};

const fields: Field[] = [
  { name: "name", label: "Name", autoComplete: "name", required: true, placeholder: "Alex Chen" },
  {
    name: "email",
    label: "Work email",
    type: "email",
    autoComplete: "email",
    required: true,
    placeholder: "alex@company.com",
  },
  {
    name: "company",
    label: "Company",
    autoComplete: "organization",
    required: true,
    placeholder: "Northwind",
  },
  {
    name: "role",
    label: "Role",
    autoComplete: "organization-title",
    placeholder: "Release manager",
  },
];

const empty: FormState = {
  name: "",
  email: "",
  company: "",
  role: "",
  message: "",
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function DemoForm() {
  const [values, setValues] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(next: FormState) {
    const e: Partial<FormState> = {};
    if (!next.name.trim()) e.name = "Name is required.";
    if (!next.email.trim()) e.email = "Work email is required.";
    else if (!isEmail(next.email)) e.email = "Enter a valid email address.";
    if (!next.company.trim()) e.company = "Company is required.";
    return e;
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length) return;

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        className="flex flex-col items-start rounded-2xl border border-rd-verified/25 bg-rd-verified-soft/40 p-8"
        role="status"
      >
        <span className="flex size-10 items-center justify-center rounded-full bg-rd-verified text-rd-bg">
          <IconCheck />
        </span>
        <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em]">
          Request received
        </h3>
        <p className="mt-2 max-w-md text-sm leading-6 text-rd-text-2">
          Thanks, {values.name.split(" ")[0]}. We’ll follow up at {values.email}{" "}
          to schedule a walkthrough. Nothing was sent to a server — this demo
          site keeps the request on the page.
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-6"
          onClick={() => {
            setValues(empty);
            setErrors({});
            setStatus("idle");
          }}
        >
          Submit another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="block">
            <span className="mb-1.5 block text-[13px] font-medium text-rd-text-2">
              {field.label}
              {field.required ? <span className="text-rd-danger"> *</span> : null}
            </span>
            <input
              name={field.name}
              type={field.type ?? "text"}
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              value={values[field.name]}
              required={field.required}
              aria-invalid={Boolean(errors[field.name])}
              aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
              onChange={(ev) =>
                setValues((v) => ({ ...v, [field.name]: ev.target.value }))
              }
              className={cn(
                "h-11 w-full rounded-xl border bg-rd-bg/60 px-3 text-sm text-rd-text outline-none transition-colors duration-200 placeholder:text-rd-text-3",
                "focus:border-rd-accent/50 focus:ring-2 focus:ring-rd-accent/20",
                errors[field.name] ? "border-rd-danger/60" : "border-rd-border",
              )}
            />
            {errors[field.name] ? (
              <span id={`${field.name}-error`} className="mt-1.5 block text-[12px] text-rd-danger">
                {errors[field.name]}
              </span>
            ) : null}
          </label>
        ))}
      </div>
      <label className="block">
        <span className="mb-1.5 block text-[13px] font-medium text-rd-text-2">
          What do you want to see?
        </span>
        <textarea
          name="message"
          rows={4}
          placeholder="A release like ours, StaffLess AI on Jira data, CAB gates…"
          value={values.message}
          onChange={(ev) => setValues((v) => ({ ...v, message: ev.target.value }))}
          className="w-full resize-y rounded-xl border border-rd-border bg-rd-bg/60 px-3 py-2.5 text-sm text-rd-text outline-none transition-colors duration-200 placeholder:text-rd-text-3 focus:border-rd-accent/50 focus:ring-2 focus:ring-rd-accent/20"
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Request a demo"}
        </Button>
        <p className="text-[12px] leading-5 text-rd-text-3">
          No backend on this site. The form validates locally and shows a success
          state. We’ll wire submission when the product site is live.
        </p>
      </div>
    </form>
  );
}
