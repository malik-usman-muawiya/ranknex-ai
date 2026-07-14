"use client";

import { useState } from "react";
import { Plus, Trash2, Edit, X, Save, Loader2, MessageSquare, Search } from "lucide-react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  order: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

interface ChatbotFAQListProps {
  initialFaqs: FAQ[];
}

const emptyForm = { question: "", answer: "", order: 0, active: true };

export default function ChatbotFAQList({ initialFaqs }: ChatbotFAQListProps) {
  const [faqs, setFaqs] = useState<FAQ[]>(initialFaqs);
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [isSaving, setIsSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState("");

  const startEdit = (faq: FAQ) => {
    setEditingId(faq.id);
    setIsAdding(false);
    setForm({ question: faq.question, answer: faq.answer, order: faq.order, active: faq.active });
    setError("");
  };

  const startAdd = () => {
    setIsAdding(true);
    setEditingId(null);
    setForm(emptyForm);
    setError("");
  };

  const cancel = () => {
    setIsAdding(false);
    setEditingId(null);
    setForm(emptyForm);
    setError("");
  };

  const handleSave = async () => {
    if (!form.question.trim() || !form.answer.trim()) {
      setError("Question and answer are both required.");
      return;
    }

    setIsSaving(true);
    setError("");

    try {
      if (editingId) {
        const res = await fetch(`/api/chatbot-faqs/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to update.");
        setFaqs((prev) => prev.map((f) => (f.id === editingId ? data : f)));
      } else {
        const res = await fetch("/api/chatbot-faqs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to add.");
        setFaqs((prev) => [...prev, data]);
      }
      cancel();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this question? This cannot be undone.")) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/chatbot-faqs/${id}`, { method: "DELETE" });
      if (res.ok) {
        setFaqs((prev) => prev.filter((f) => f.id !== id));
      } else {
        const data = await res.json();
        alert(data.error || "Failed to delete.");
      }
    } catch {
      alert("Network error. Failed to delete.");
    } finally {
      setDeletingId(null);
    }
  };

  const toggleActive = async (faq: FAQ) => {
    try {
      const res = await fetch(`/api/chatbot-faqs/${faq.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ active: !faq.active }),
      });
      const data = await res.json();
      if (res.ok) {
        setFaqs((prev) => prev.map((f) => (f.id === faq.id ? data : f)));
      }
    } catch {
      // silently ignore, non-critical toggle
    }
  };

  const filtered = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase())
  );

  const FormFields = (
    <div className="space-y-3 bg-navy-950 border border-teal-500/30 rounded-xl p-4">
      <div>
        <label className="text-xs text-slate-400 mb-1 block">Question</label>
        <input
          type="text"
          value={form.question}
          onChange={(e) => setForm({ ...form, question: e.target.value })}
          placeholder="e.g. Do you offer month-to-month contracts?"
          className="w-full bg-navy-900 border border-white/10 rounded-lg py-2 px-3 text-white text-sm focus:outline-none focus:border-teal-500"
        />
      </div>
      <div>
        <label className="text-xs text-slate-400 mb-1 block">Answer</label>
        <textarea
          value={form.answer}
          onChange={(e) => setForm({ ...form, answer: e.target.value })}
          placeholder="The exact answer the chatbot should give"
          rows={3}
          className="w-full bg-navy-900 border border-white/10 rounded-lg py-2 px-3 text-white text-sm focus:outline-none focus:border-teal-500 resize-none"
        />
      </div>
      <div className="flex items-center gap-4">
        <div>
          <label className="text-xs text-slate-400 mb-1 block">Order</label>
          <input
            type="number"
            value={form.order}
            onChange={(e) => setForm({ ...form, order: parseInt(e.target.value) || 0 })}
            className="w-20 bg-navy-900 border border-white/10 rounded-lg py-2 px-3 text-white text-sm focus:outline-none focus:border-teal-500"
          />
        </div>
        <label className="flex items-center gap-2 text-sm text-slate-300 mt-5">
          <input
            type="checkbox"
            checked={form.active}
            onChange={(e) => setForm({ ...form, active: e.target.checked })}
            className="accent-teal-500"
          />
          Active (chatbot can use this)
        </label>
      </div>
      {error && <p className="text-red-400 text-xs">{error}</p>}
      <div className="flex gap-2 pt-1">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="btn-primary py-2 px-4 text-sm inline-flex items-center gap-2"
        >
          {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          <span>Save</span>
        </button>
        <button
          onClick={cancel}
          className="py-2 px-4 text-sm rounded-lg border border-white/10 text-slate-300 hover:bg-white/5 inline-flex items-center gap-2"
        >
          <X className="w-4 h-4" />
          <span>Cancel</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-white">Chatbot Q&amp;A</h1>
          <p className="text-slate-400 text-sm mt-1">
            Manage the questions and answers your AI assistant uses to reply to visitors.
            Changes apply instantly, no redeploy needed.
          </p>
        </div>
        {!isAdding && (
          <button
            onClick={startAdd}
            className="btn-primary py-2.5 px-5 text-sm inline-flex items-center gap-2 flex-shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Add Question</span>
          </button>
        )}
      </div>

      {/* Add form */}
      {isAdding && FormFields}

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search questions..."
          className="w-full bg-navy-900 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-teal-500"
        />
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-navy-900 border border-white/5 rounded-xl">
          <MessageSquare className="w-10 h-10 text-slate-600 mx-auto mb-3" />
          <p className="text-slate-400 text-sm">
            {faqs.length === 0
              ? "No questions added yet. Click \"Add Question\" to teach the chatbot something new."
              : "No questions match your search."}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((faq) =>
            editingId === faq.id ? (
              <div key={faq.id}>{FormFields}</div>
            ) : (
              <div
                key={faq.id}
                className="bg-navy-900 border border-white/5 rounded-xl p-4 flex flex-col sm:flex-row sm:items-start gap-4"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-white font-medium text-sm">{faq.question}</p>
                    {!faq.active && (
                      <span className="text-[10px] uppercase tracking-wide bg-white/5 text-slate-500 px-2 py-0.5 rounded-full">
                        Inactive
                      </span>
                    )}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => toggleActive(faq)}
                    className="text-xs px-3 py-1.5 rounded-lg border border-white/10 text-slate-300 hover:bg-white/5"
                  >
                    {faq.active ? "Deactivate" : "Activate"}
                  </button>
                  <button
                    onClick={() => startEdit(faq)}
                    aria-label="Edit"
                    className="p-2 rounded-lg border border-white/10 text-slate-300 hover:bg-white/5"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(faq.id)}
                    disabled={deletingId === faq.id}
                    aria-label="Delete"
                    className="p-2 rounded-lg border border-white/10 text-red-400 hover:bg-red-500/10"
                  >
                    {deletingId === faq.id ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Trash2 className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
