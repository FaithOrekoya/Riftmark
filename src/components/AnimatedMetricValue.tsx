import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';

interface AnimatedMetricValueProps {
  value: string;
  duration?: number;
}

interface ParsedMetric {
  prefix: string;
  target: number;
  decimals: number;
  suffix: string;
  useCommas: boolean;
}

function parseMetric(raw: string): ParsedMetric | null {
  const match = raw.trim().match(/^([^0-9.-]*)([0-9][0-9,]*(?:\.[0-9]+)?)(.*)$/);
  if (!match) return null;

  const [, prefix, numStr, suffix] = match;
  const useCommas = numStr.includes(',');
  const cleanNum = numStr.replace(/,/g, '');
  const target = Number.parseFloat(cleanNum);
  if (Number.isNaN(target)) return null;

  const decimalPart = cleanNum.split('.')[1];
  const decimals = decimalPart ? decimalPart.length : 0;

  return { prefix, target, decimals, suffix, useCommas };
}

function formatMetricValue(current: number, parsed: ParsedMetric): string {
  if (parsed.useCommas && parsed.decimals === 0) {
    const asInt = Math.round(current);
    return `${parsed.prefix}${asInt.toLocaleString('en-US')}${parsed.suffix}`;
  }

  const rounded =
    parsed.decimals > 0
      ? current.toFixed(parsed.decimals)
      : Math.round(current).toString();

  return `${parsed.prefix}${rounded}${parsed.suffix}`;
}

export function AnimatedMetricValue({ value, duration = 1.2 }: AnimatedMetricValueProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();
  const parsed = parseMetric(value);

  const [display, setDisplay] = useState<string>(() => {
    if (prefersReducedMotion) return value;
    if (!parsed) return '';
    return formatMetricValue(0, parsed);
  });

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    if (!isInView) return;

    if (!parsed) {
      const totalChars = value.length;
      const controls = animate(0, totalChars, {
        duration: Math.min(duration, 0.85),
        ease: 'linear',
        onUpdate: (latest) => {
          const count = Math.max(1, Math.round(latest));
          setDisplay(value.slice(0, count));
        },
        onComplete: () => {
          setDisplay(value);
        },
      });
      return () => controls.stop();
    }

    const controls = animate(0, parsed.target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplay(formatMetricValue(latest, parsed));
      },
      onComplete: () => {
        setDisplay(value);
      },
    });

    return () => controls.stop();
  }, [isInView, prefersReducedMotion, value, duration]);

  return (
    <span ref={ref} aria-label={value} className="relative inline-block">
      <span aria-hidden="true" className="invisible select-none">
        {value}
      </span>
      <span aria-hidden="true" className="absolute inset-0 left-0 top-0 whitespace-nowrap">
        {display}
      </span>
    </span>
  );
}
