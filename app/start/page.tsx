"use client";

import { useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zip: string;
  purpose: "buy" | "refinance";
};

export default function StartPage() {
  const [data, setData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zip: "",
    purpose: "buy",
  });
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormData>(k: K, v: FormData[K]) {
    setData(d => ({...d, [k]: v}));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-gradient-to-b from-white to-green-50">
      <div className="container py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-extrabold text-dark">Get started</h1>
        <p className="mt-3 text-gray-700 max-w-2xl">Answer a few questions so we can personalize your rate estimate. This is a demo form that validates input on the client and shows a confirmation card.</p>

        {!submitted ? (
          <form onSubmit={submit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="text-sm">
              <span className="block mb-1 font-medium">First name</span>
              <input required value={data.firstName} onChange={e=>update("firstName", e.target.value)} className="w-full rounded-xl border px-4 py-3" />
            </label>
            <label className="text-sm">
              <span className="block mb-1 font-medium">Last name</span>
              <input required value={data.lastName} onChange={e=>update("lastName", e.target.value)} className="w-full rounded-xl border px-4 py-3" />
            </label>
            <label className="text-sm">
              <span className="block mb-1 font-medium">Email</span>
              <input required type="email" value={data.email} onChange={e=>update("email", e.target.value)} className="w-full rounded-xl border px-4 py-3" />
            </label>
            <label className="text-sm">
              <span className="block mb-1 font-medium">Phone</span>
              <input required value={data.phone} onChange={e=>update("phone", e.target.value)} className="w-full rounded-xl border px-4 py-3" />
            </label>
            <label className="text-sm">
              <span className="block mb-1 font-medium">ZIP</span>
              <input required value={data.zip} onChange={e=>update("zip", e.target.value)} className="w-full rounded-xl border px-4 py-3" />
            </label>
            <label className="text-sm">
              <span className="block mb-1 font-medium">I want to</span>
              <select value={data.purpose} onChange={e=>update("purpose", e.target.value as FormData["purpose"])} className="w-full rounded-xl border px-4 py-3">
                <option value="buy">Buy a home</option>
                <option value="refinance">Refinance my mortgage</option>
              </select>
            </label>
            <div className="md:col-span-2 mt-2">
              <button className="btn-primary">See my rates</button>
            </div>
          </form>
        ) : (
          <div className="mt-8 card">
            <h3 className="text-xl font-semibold">Thanks, {data.firstName}!</h3>
            <p className="text-gray-700 mt-2">We’d typically run a soft credit pull and show you tailored rates. In this demo, your entries are captured locally:</p>
            <pre className="mt-4 bg-gray-50 rounded-xl p-4 overflow-auto text-xs">{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </section>
  );
}
