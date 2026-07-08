import Image from 'next/image';

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: number;
}

// Full logo image (network/arrow mark + "RankNex AI" wordmark), transparent
// background, natural aspect ratio ~1.3:1 (width:height).
const LOGO_ASPECT = 260 / 200;

export default function Logo({ className = '', size = 38 }: LogoProps) {
  const height = size;
  const width = Math.round(size * LOGO_ASPECT);
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo-mark.png"
        alt="RankNex AI"
        width={width}
        height={height}
        priority
        className="shrink-0 object-contain"
        style={{ height, width: 'auto' }}
      />
    </span>
  );
}
