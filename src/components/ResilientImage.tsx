import { useState } from 'react';
import { Compass } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackLabel = 'Riftmark AEC Advisory',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#172B3A] to-[#263E50] text-white/90 p-8 text-center ${className}`}
      >
        <div className="w-12 h-12 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center mb-3">
          <Compass className="w-5 h-5 text-[#C18B55]" aria-hidden="true" />
        </div>
        <span className="font-heading text-sm font-semibold tracking-tight text-white">
          {fallbackLabel}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
