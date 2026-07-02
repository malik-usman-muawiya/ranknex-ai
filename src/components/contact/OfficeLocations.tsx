import { MapPin } from "lucide-react";
import { offices } from "@/lib/offices";

export default function OfficeLocations() {
  return (
    <div className="relative rounded-2xl border border-white/[0.06] bg-navy-900/40 backdrop-blur-sm p-8 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -top-24 -right-16 w-64 h-64 bg-teal-500/[0.06] rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-16 w-64 h-64 bg-cyan-500/[0.05] rounded-full blur-[90px] pointer-events-none" />

      <p className="text-teal-500 text-xs font-semibold uppercase tracking-widest mb-2 relative">
        Where We Work From
      </p>
      <h3 className="text-2xl font-bold text-white font-heading mb-7 relative">
        Office Address
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative">
        {offices.map((office) => (
          <div
            key={office.country}
            className="group flex items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:border-teal-500/25 hover:bg-white/[0.04]"
          >
            <span className="shrink-0 w-11 h-11 rounded-lg overflow-hidden border border-white/10 shadow-sm">
              <img
                src={`https://flagcdn.com/w80/${office.code}.png`}
                srcSet={`https://flagcdn.com/w80/${office.code}.png 1x, https://flagcdn.com/w160/${office.code}.png 2x`}
                alt={`${office.country} flag`}
                className="w-full h-full object-cover"
                width={44}
                height={44}
                loading="lazy"
              />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1.5">
                <span className="text-white font-semibold text-sm">{office.country}</span>
                <span className="text-teal-500 text-[11px] font-medium uppercase tracking-wide bg-teal-500/10 border border-teal-500/20 rounded-full px-2 py-0.5">
                  {office.label}
                </span>
              </div>
              <p className="flex items-start gap-1.5 text-slate-400 text-sm leading-snug">
                <MapPin className="w-3.5 h-3.5 mt-0.5 text-slate-500 shrink-0" />
                <span>{office.address}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
