interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: number;
}

/**
 * RankNex AI brand logo — a crisp, lightweight SVG growth-chart monogram
 * plus wordmark. Replaces the heavy PNG and scales perfectly at any size.
 */
export default function Logo({ className = '', showWordmark = true, size = 38 }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="rnLogoGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00E6BF" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        {/* Rounded tile */}
        <rect x="0.5" y="0.5" width="39" height="39" rx="12" fill="url(#rnLogoGrad)" />
        <rect x="0.5" y="0.5" width="39" height="39" rx="12" fill="#FFFFFF" fillOpacity="0.08" />
        {/* Upward growth chart with arrow */}
        <path
          d="M9.5 28 L16.5 20.5 L22.5 24 L30.5 13.5"
          stroke="#06283D"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25 13.5 H30.5 V19"
          stroke="#06283D"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9.5" cy="28" r="2.1" fill="#06283D" />
      </svg>

      {showWordmark && (
        <span
          className="font-heading font-extrabold tracking-tight leading-none whitespace-nowrap"
          style={{ fontSize: size * 0.5 }}
        >
          <span className="text-white">Rank</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
            Nex
          </span>
          <span
            className="ml-1 align-top font-bold tracking-[0.15em] text-teal-400"
            style={{ fontSize: size * 0.28 }}
          >
            AI
          </span>
        </span>
      )}
    </span>
  );
}
