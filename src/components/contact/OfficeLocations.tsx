interface Office {
  flag: string;
  country: string;
  label: string;
  address: string;
}

// Add more offices here as addresses are confirmed (e.g. Pakistan).
const offices: Office[] = [
  {
    flag: "🇬🇧",
    country: "United Kingdom",
    label: "UK Office",
    address: "Ainsworth St, Blackburn BB1 6AF, UK",
  },
];

export default function OfficeLocations() {
  return (
    <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-navy-900/80 to-navy-950/80 backdrop-blur-sm p-8">
      <h3 className="text-2xl font-bold text-white font-heading mb-6">
        Office Address
      </h3>
      <div className={`grid grid-cols-1 ${offices.length > 1 ? "sm:grid-cols-2" : ""} gap-8`}>
        {offices.map((office) => (
          <div key={office.country}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl" aria-hidden="true">
                {office.flag}
              </span>
              <h4 className="text-white font-bold">
                {office.country} <span className="text-slate-400 font-normal">({office.label})</span>
              </h4>
            </div>
            <p className="text-slate-300 text-sm">{office.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
