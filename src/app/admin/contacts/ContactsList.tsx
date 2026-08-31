"use client";

import { useState, useEffect } from "react";
import { 
  Search, 
  Mail, 
  Phone, 
  Building, 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Trash2, 
  CheckCircle, 
  Circle, 
  Loader2, 
  Eye, 
  X, 
  Inbox,
  ExternalLink,
  Copy,
  Check,
  ArrowLeft
} from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { ContactSubmission } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ContactsList() {
  const router = useRouter();
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [totalSubmissions, setTotalSubmissions] = useState(0);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(10);
  const [unreadFilter, setUnreadFilter] = useState(false);
  const [search, setSearch] = useState("");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [activeSubmission, setActiveSubmission] = useState<ContactSubmission | null>(null);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);
  const [copiedText, setCopiedText] = useState<"email" | "phone" | null>(null);

  const fetchSubmissions = async () => {
    setIsLoading(true);
    try {
      const url = `/api/contacts?page=${currentPage}&limit=${limit}&unread=${unreadFilter}`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setSubmissions(data.submissions);
        setTotalSubmissions(data.pagination.total);
        setTotalPages(data.pagination.totalPages);
        setUnreadCount(data.unreadCount);
      }
    } catch (err) {
      console.error("Failed to fetch submissions:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, [currentPage, unreadFilter]);

  const handleToggleRead = async (submission: ContactSubmission, forceReadState?: boolean) => {
    const nextReadState = forceReadState !== undefined ? forceReadState : !submission.read;
    setIsUpdatingStatus(true);
    try {
      const res = await fetch("/api/contacts", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: submission.id, read: nextReadState }),
      });
      if (res.ok) {
        setSubmissions(prev =>
          prev.map(s => (s.id === submission.id ? { ...s, read: nextReadState } : s))
        );
        if (activeSubmission && activeSubmission.id === submission.id) {
          setActiveSubmission({ ...activeSubmission, read: nextReadState });
        }
        if (nextReadState && !submission.read) {
          setUnreadCount(prev => Math.max(0, prev - 1));
        } else if (!nextReadState && submission.read) {
          setUnreadCount(prev => prev + 1);
        }
        router.refresh();
      }
    } catch (err) {
      console.error("Error updating submission status:", err);
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this contact submission? This action cannot be undone.")) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/contacts?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setSubmissions(prev => prev.filter(s => s.id !== id));
        if (activeSubmission?.id === id) {
          setActiveSubmission(null);
        }
        fetchSubmissions();
      } else {
        alert("Failed to delete submission.");
      }
    } catch (err) {
      console.error("Error deleting submission:", err);
      alert("Network error. Failed to delete submission.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleViewDetails = (submission: ContactSubmission) => {
    setActiveSubmission(submission);
    if (!submission.read) {
      handleToggleRead(submission, true);
    }
  };

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const filteredSubmissions = submissions.filter((sub) => {
    const matchesSearch = 
      sub.name.toLowerCase().includes(search.toLowerCase()) ||
      sub.email.toLowerCase().includes(search.toLowerCase()) ||
      (sub.company && sub.company.toLowerCase().includes(search.toLowerCase())) ||
      sub.message.toLowerCase().includes(search.toLowerCase());

    const matchesService = serviceFilter === "all" || sub.service.toLowerCase() === serviceFilter.toLowerCase();

    return matchesSearch && matchesService;
  });

  const services = ["all", "SEO Optimization", "Social Media Marketing", "PPC Advertising", "Content Writing", "Web Designing", "Branding Solutions", "General Inquiry"];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-navy-950">Client Inquiries</h1>
          <p className="text-slate-500 text-sm mt-1">
            Review and follow up with leads, service requests, and general messages.
          </p>
        </div>
        
        {/* Unread Counter Badge */}
        {unreadCount > 0 && (
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Inbox className="w-3.5 h-3.5 text-teal-600" />
            <span>{unreadCount} Unread Message{unreadCount > 1 ? "s" : ""}</span>
          </span>
        )}
      </div>

      {/* Filters bar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-white border border-slate-200/80 p-4 rounded-2xl shadow-xs">
        {/* Search */}
        <div className="md:col-span-5 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, email, company, message..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 pl-10 pr-4 text-navy-950 text-sm placeholder-slate-400 focus:bg-white focus:outline-none focus:border-teal-500"
          />
        </div>

        {/* Service filter */}
        <div className="md:col-span-3">
          <select
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-navy-950 text-sm focus:bg-white focus:outline-none focus:border-teal-500 cursor-pointer"
          >
            <option value="all">All Services</option>
            {services.filter(s => s !== "all").map((svc) => (
              <option key={svc} value={svc}>
                {svc}
              </option>
            ))}
          </select>
        </div>

        {/* Toggle Unread button */}
        <div className="md:col-span-4 flex items-center justify-start md:justify-end gap-2">
          <button
            onClick={() => {
              setUnreadFilter(false);
              setCurrentPage(1);
            }}
            className={`px-3.5 py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
              !unreadFilter
                ? "bg-teal-50 text-teal-700 border-teal-200 shadow-2xs"
                : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
            }`}
          >
            All Inquiries
          </button>
          <button
            onClick={() => {
              setUnreadFilter(true);
              setCurrentPage(1);
            }}
            className={`px-3.5 py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
              unreadFilter
                ? "bg-teal-50 text-teal-700 border-teal-200 shadow-2xs"
                : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
            }`}
          >
            Unread Only
          </button>
        </div>
      </div>

      {/* Content Container */}
      <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs relative">
        {isLoading ? (
          <div className="py-24 flex flex-col items-center justify-center gap-3 text-slate-500">
            <Loader2 className="w-8 h-8 animate-spin text-teal-600" />
            <span>Loading inquiries...</span>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-6">Sender Details</th>
                  <th className="py-4 px-6">Service Requested</th>
                  <th className="py-4 px-6">Date Received</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                {filteredSubmissions.length > 0 ? (
                  filteredSubmissions.map((sub) => (
                    <tr 
                      key={sub.id} 
                      className={`hover:bg-slate-50/80 transition-all cursor-pointer ${
                        !sub.read ? "bg-cyan-50/30 border-l-4 border-l-teal-500" : ""
                      }`}
                      onClick={() => handleViewDetails(sub)}
                    >
                      {/* Name & Email & Company */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <span className={`font-semibold ${!sub.read ? "text-navy-950 font-bold" : "text-slate-800"}`}>
                            {sub.name}
                          </span>
                          {!sub.read && (
                            <span className="w-2 h-2 rounded-full bg-teal-500 inline-block animate-pulse" />
                          )}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5 flex flex-col sm:flex-row sm:items-center sm:gap-2">
                          <span>{sub.email}</span>
                          {sub.company && (
                            <>
                              <span className="hidden sm:inline text-slate-300">•</span>
                              <span className="italic flex items-center gap-1 text-[11px] text-slate-500">
                                <Building className="w-3 h-3 text-slate-400" /> {sub.company}
                              </span>
                            </>
                          )}
                        </div>
                      </td>

                      {/* Service Badge */}
                      <td className="py-4 px-6">
                        <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                          {sub.service}
                        </span>
                      </td>

                      {/* Date */}
                      <td className="py-4 px-6 text-slate-500 text-xs">
                        {formatDate(sub.createdAt)}
                      </td>

                      {/* Status */}
                      <td className="py-4 px-6">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleToggleRead(sub);
                          }}
                          className="flex items-center gap-1.5 text-xs text-left cursor-pointer transition-colors"
                        >
                          {sub.read ? (
                            <span className="text-slate-400 hover:text-teal-600 flex items-center gap-1">
                              <CheckCircle className="w-4 h-4 text-slate-400" />
                              <span>Read</span>
                            </span>
                          ) : (
                            <span className="text-teal-700 font-bold hover:text-slate-500 flex items-center gap-1">
                              <Circle className="w-4 h-4 fill-teal-500 text-teal-500" />
                              <span>Unread</span>
                            </span>
                          )}
                        </button>
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-6 text-right space-x-1.5 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => handleViewDetails(sub)}
                          className="inline-flex p-2 text-slate-500 hover:text-navy-950 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all shadow-2xs cursor-pointer"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(sub.id)}
                          disabled={deletingId === sub.id}
                          className="inline-flex p-2 text-slate-500 hover:text-rose-600 bg-slate-50 hover:bg-rose-50 border border-slate-200 hover:border-rose-200 rounded-xl transition-all cursor-pointer disabled:opacity-40 shadow-2xs"
                          title="Delete Submission"
                        >
                          {deletingId === sub.id ? (
                            <Loader2 className="w-4 h-4 animate-spin text-rose-500" />
                          ) : (
                            <Trash2 className="w-4 h-4" />
                          )}
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-16 text-center text-slate-500">
                      No submissions found matching your filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination Bar */}
        {!isLoading && totalPages > 1 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-slate-50">
            <span className="text-xs text-slate-500">
              Showing page {currentPage} of {totalPages} ({totalSubmissions} submissions)
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="p-1.5 text-slate-600 hover:text-navy-950 border border-slate-200 rounded-lg bg-white disabled:opacity-40 cursor-pointer shadow-2xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="p-1.5 text-slate-600 hover:text-navy-950 border border-slate-200 rounded-lg bg-white disabled:opacity-40 cursor-pointer shadow-2xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Details Side-Drawer */}
      <AnimatePresence>
        {activeSubmission && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveSubmission(null)}
              className="absolute inset-0 bg-navy-950/60 backdrop-blur-xs"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-2xl bg-white border-l border-slate-200 shadow-2xl h-full flex flex-col z-10"
            >
              {/* Header */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveSubmission(null)}
                    className="p-2 text-slate-500 hover:text-navy-950 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 transition-all cursor-pointer sm:hidden"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <div>
                    <h2 className="text-xl font-bold font-heading text-navy-950">Inquiry Details</h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Received on {formatDate(activeSubmission.createdAt)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveSubmission(null)}
                  className="p-2 text-slate-400 hover:text-navy-950 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 transition-all cursor-pointer hidden sm:block"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 space-y-6 flex-1 overflow-y-auto">
                {/* Status indicator banner */}
                <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500">Status:</span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        activeSubmission.read
                          ? "bg-teal-50 text-teal-700 border border-teal-200"
                          : "bg-amber-50 text-amber-700 border border-amber-200"
                      }`}
                    >
                      {activeSubmission.read ? "Read" : "Unread"}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => handleToggleRead(activeSubmission)}
                    disabled={isUpdatingStatus}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-navy-950 transition-all cursor-pointer disabled:opacity-40 shadow-2xs"
                  >
                    {isUpdatingStatus ? "Updating..." : activeSubmission.read ? "Mark as Unread" : "Mark as Read"}
                  </button>
                </div>

                {/* Sender card */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Sender Info</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                      <span className="text-xs text-slate-400 block font-medium">Name</span>
                      <span className="text-navy-950 font-bold text-sm">{activeSubmission.name}</span>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                      <span className="text-xs text-slate-400 block font-medium">Service Requested</span>
                      <span className="text-teal-700 font-bold text-sm">{activeSubmission.service}</span>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1 relative group">
                      <span className="text-xs text-slate-400 block font-medium">Email Address</span>
                      <div className="flex items-center justify-between gap-2">
                        <a href={`mailto:${activeSubmission.email}`} className="text-navy-950 hover:text-teal-600 text-sm font-semibold truncate flex items-center gap-1.5 group-hover:underline">
                          <Mail className="w-3.5 h-3.5 text-slate-400" />
                          <span>{activeSubmission.email}</span>
                          <ExternalLink className="w-3 h-3 text-slate-400 inline" />
                        </a>
                        <button
                          onClick={() => copyToClipboard(activeSubmission.email, "email")}
                          className="text-slate-400 hover:text-navy-950 p-1 rounded hover:bg-white transition-all cursor-pointer"
                          title="Copy Email"
                        >
                          {copiedText === "email" ? (
                            <Check className="w-3.5 h-3.5 text-teal-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1 relative group">
                      <span className="text-xs text-slate-400 block font-medium">Phone Number</span>
                      <div className="flex items-center justify-between gap-2">
                        {activeSubmission.phone ? (
                          <>
                            <a href={`tel:${activeSubmission.phone}`} className="text-navy-950 hover:text-teal-600 text-sm font-semibold truncate flex items-center gap-1.5 group-hover:underline">
                              <Phone className="w-3.5 h-3.5 text-slate-400" />
                              <span>{activeSubmission.phone}</span>
                              <ExternalLink className="w-3 h-3 text-slate-400 inline" />
                            </a>
                            <button
                              onClick={() => copyToClipboard(activeSubmission.phone!, "phone")}
                              className="text-slate-400 hover:text-navy-950 p-1 rounded hover:bg-white transition-all cursor-pointer"
                              title="Copy Phone"
                            >
                              {copiedText === "phone" ? (
                                <Check className="w-3.5 h-3.5 text-teal-600" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </>
                        ) : (
                          <span className="text-slate-400 italic text-sm">Not Provided</span>
                        )}
                      </div>
                    </div>

                    {activeSubmission.company && (
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1 sm:col-span-2">
                        <span className="text-xs text-slate-400 block font-medium">Company Name</span>
                        <div className="flex items-center gap-2 text-navy-950 font-semibold text-sm">
                          <Building className="w-4 h-4 text-slate-400" />
                          <span>{activeSubmission.company}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Message Body */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Message Content</h3>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-slate-800 text-sm whitespace-pre-wrap leading-relaxed">
                    {activeSubmission.message}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
                <button
                  onClick={() => handleDelete(activeSubmission.id)}
                  disabled={deletingId === activeSubmission.id}
                  className="px-4 py-2 text-xs font-bold text-rose-700 hover:text-rose-800 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-40"
                >
                  {deletingId === activeSubmission.id ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Trash2 className="w-3.5 h-3.5" />
                  )}
                  <span>Delete Submission</span>
                </button>

                <button
                  onClick={() => setActiveSubmission(null)}
                  className="btn-secondary py-2 px-5 text-xs cursor-pointer font-bold"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
