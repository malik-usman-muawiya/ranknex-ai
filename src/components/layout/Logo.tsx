import Image from 'next/image';

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: number;
}

export default function Logo({ className = '', size = 38 }: LogoProps) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo.jpeg"
        alt="RankNex AI"
        width={size * 4}
        height={size}
        style={{ height: size, width: 'auto' }}
        priority
      />
    </span>
  );
}
