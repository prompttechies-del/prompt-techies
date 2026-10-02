'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GOOGLE_FORM, SITE } from '@/lib/site';
import { trackEvent } from '@/lib/analytics';

type Values = {
  name: string;
  email: string;
  phone: string;
  address: string;
  reason: string;
  comments: string;
};

type Errors = Partial<Record<keyof Values, string>>;

const EMPTY: Values = {
  name: '',
  email: '',
  phone: '',
  address: '',
  reason: GOOGLE_FORM.reasons[0],
  comments: '',
};

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your full name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Please enter a valid email address.';
  if (!/^\+?[0-9][0-9\s-]{8,14}$/.test(v.phone.trim())) e.phone = 'Please enter a valid phone number (9–15 digits).';
  if (v.address.trim().length < 3) e.address = 'Please enter your city or address.';
  if (v.comments.length > 1000) e.comments = 'Please keep your message under 1000 characters.';
  return e;
}

const fieldClass =
  'w-full rounded-xl border bg-[#0a0a0a] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-[#00c8ff]';

export default function ContactForm() {
  const router = useRouter();
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');

  const set = (key: keyof Values) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setValues((prev) => ({ ...prev, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      document.getElementById(`cf-${Object.keys(found)[0]}`)?.focus();
      return;
    }

    setStatus('sending');
    const body = new URLSearchParams();
    body.set(GOOGLE_FORM.fields.name, values.name.trim());
    body.set(GOOGLE_FORM.fields.email, values.email.trim());
    body.set(GOOGLE_FORM.fields.phone, values.phone.trim());
    body.set(GOOGLE_FORM.fields.address, values.address.trim());
    body.set(GOOGLE_FORM.fields.reason, values.reason);
    body.set(GOOGLE_FORM.fields.comments, values.comments.trim());

    try {
      // Google Forms does not return CORS headers, so the response is opaque; a resolved
      // request means the browser delivered it.
      await fetch(GOOGLE_FORM.action, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      trackEvent('contact_form_submit', { reason: values.reason });
      router.push('/thank-you');
    } catch {
      setStatus('error');
    }
  };

  const err = (key: keyof Values) =>
    errors[key] ? (
      <p id={`cf-${key}-error`} role="alert" className="mt-1.5 text-xs text-red-400">
        {errors[key]}
      </p>
    ) : null;

  const aria = (key: keyof Values) => ({
    'aria-invalid': errors[key] ? true : undefined,
    'aria-describedby': errors[key] ? `cf-${key}-error` : undefined,
  });

  const border = (key: keyof Values) => (errors[key] ? 'border-red-500/70' : 'border-white/10');

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5 p-8 md:p-10">
      <div>
        <h2 className="text-2xl font-bold text-white">Send us a message</h2>
        <p className="mt-2 text-sm text-gray-400">
          We respond {SITE.responseTime}. Fields marked * are required.
        </p>
      </div>

      <div>
        <label htmlFor="cf-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-300">
          Name *
        </label>
        <input id="cf-name" type="text" autoComplete="name" value={values.name} onChange={set('name')} className={`${fieldClass} ${border('name')}`} {...aria('name')} />
        {err('name')}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-300">
            Email *
          </label>
          <input id="cf-email" type="email" autoComplete="email" value={values.email} onChange={set('email')} className={`${fieldClass} ${border('email')}`} {...aria('email')} />
          {err('email')}
        </div>
        <div>
          <label htmlFor="cf-phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-300">
            Phone *
          </label>
          <input id="cf-phone" type="tel" autoComplete="tel" value={values.phone} onChange={set('phone')} className={`${fieldClass} ${border('phone')}`} {...aria('phone')} />
          {err('phone')}
        </div>
      </div>

      <div>
        <label htmlFor="cf-address" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-300">
          City / Address *
        </label>
        <input id="cf-address" type="text" autoComplete="street-address" value={values.address} onChange={set('address')} className={`${fieldClass} ${border('address')}`} {...aria('address')} />
        {err('address')}
      </div>

      <div>
        <label htmlFor="cf-reason" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-300">
          Reason for contacting *
        </label>
        <select id="cf-reason" value={values.reason} onChange={set('reason')} className={`${fieldClass} border-white/10`}>
          {GOOGLE_FORM.reasons.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-comments" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-300">
          Comments
        </label>
        <textarea id="cf-comments" rows={5} value={values.comments} onChange={set('comments')} className={`${fieldClass} ${border('comments')}`} {...aria('comments')} />
        {err('comments')}
      </div>

      {status === 'error' && (
        <p role="alert" className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          Something went wrong while sending. Please try again, or email us at{' '}
          <a href={`mailto:${SITE.email}`} className="underline">
            {SITE.email}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-full bg-gradient-to-br from-[#004bff] to-[#002e99] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-xl shadow-[#004bff]/20 transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
      <p className="text-xs text-gray-500">
        By submitting you agree to our privacy policy. We only use your details to reply to your enquiry.
      </p>
    </form>
  );
}
