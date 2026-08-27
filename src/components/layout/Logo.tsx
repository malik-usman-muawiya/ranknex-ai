import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({
  className = '',
  size = 45,
}: LogoProps) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo-mark.webp"
        alt="RankNex AI"
        width={180}
        height={45}
        priority
        className="h-auto w-auto object-contain"
        style={{
          height: `${size}px`,
          width: '180px',
          objectFit: 'contain',
        }}
      />
    </span>
  );
}
