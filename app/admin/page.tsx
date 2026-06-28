"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { CATEGORIES, DEFAULT_CIRCUIT, DEFAULT_JURISDICTION } from "@/lib/constants";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [officerTakeaway, setOfficerTakeaway] = useState("");
  const [priority, setPriority] = useState("action_required");
  const [category, setCategory] = useState("Search & Seizure");
  const [sourceUrl, setSourceUrl] = useState("");
  const [sourceType, setSourceType] = useState("");
  const [effectiveDate, setEffectiveDate] = useState("");
  const [message, setMessage] = useState("");

  async function publishUpdate() {
    setMessage("Publishing...");

    const { error } = await supabase.from("legal_updates").insert({
      title,
      summary,
      officer_takeaway: officerTakeaway,
      priority,
      category,
      source_url: sourceUrl || null,
      source_type: sourceType || null,
      effective_date: effectiveDate || null,
      jurisdiction: DEFAULT_JURISDICTION,
      circuit: DEFAULT_CIRCUIT,
    });

    if (error) {
      setMessage(`Error: ${error.message}`);
      return;
    }

    setTitle("");
    setSummary("");
    setOfficerTakeaway("");
    setSourceUrl("");
    setSourceType("");
    setEffectiveDate("");
    setMessage("Operational brief issued.");
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-5 py-6 text-zinc-100">
      <section className="mx-auto max-w-md pb-12">
        <Link href="/" className="text-sm text-zinc-400">
          ← Back to FieldBrief
        </Link>

        <p className="mt-6 text-sm font-semibold tracking-[0.25em] text-zinc-500">
          ADMIN
        </p>

        <h1 className="mt-3 text-3xl font-black tracking-tight">
          Issue Operational Brief
        </h1>

        <div className="mt-6 space-y-4">
          <Field label="Title">
            <input
              className="field-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Vehicle Search Authority Updated"
            />
          </Field>

          <Field label="Priority">
            <select
              className="field-input"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="action_required">🔴 Action Required</option>
              <option value="know_before_shift">🟡 Know Before Shift</option>
              <option value="reference">📚 Reference</option>
            </select>
          </Field>

          <Field label="Category">
            <select
              className="field-input"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {CATEGORIES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>

          <Field label="What Changed">
            <textarea
              className="field-input min-h-28"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Plain-English summary of the legal or policy change."
            />
          </Field>

          <Field label="Officer Takeaway">
            <textarea
              className="field-input min-h-24"
              value={officerTakeaway}
              onChange={(e) => setOfficerTakeaway(e.target.value)}
              placeholder="What should an officer do differently today?"
            />
          </Field>

          <Field label="Source Type">
            <input
              className="field-input"
              value={sourceType}
              onChange={(e) => setSourceType(e.target.value)}
              placeholder="ND Supreme Court / Legislature / AG Opinion"
            />
          </Field>

          <Field label="Official Source URL">
            <input
              className="field-input"
              value={sourceUrl}
              onChange={(e) => setSourceUrl(e.target.value)}
              placeholder="https://..."
            />
          </Field>

          <Field label="Effective Date">
            <input
              type="date"
              className="field-input"
              value={effectiveDate}
              onChange={(e) => setEffectiveDate(e.target.value)}
            />
          </Field>

          <button
            onClick={publishUpdate}
            className="w-full rounded-2xl bg-zinc-100 px-4 py-3 font-bold text-zinc-950"
          >
            Issue Operational Brief
          </button>

          {message && (
            <p className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 text-sm text-zinc-300">
              {message}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-zinc-400">{label}</span>
      {children}
    </label>
  );
}