'use client';

import { ShadowParams } from '@/types/shadow';

interface ShadowPreviewProps {
  shadows: ShadowParams[];
}

export function ShadowPreview({ shadows }: ShadowPreviewProps) {
  const generateBoxShadow = () => {
    if (shadows.length === 0) return 'none';

    return shadows
      .map((shadow) => {
        const { horizontalOffset, verticalOffset, blurRadius, spreadRadius, color, opacity, inset } = shadow;

        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);

        const insetStr = inset ? 'inset ' : '';
        return `${insetStr}${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${spreadRadius}px rgba(${r}, ${g}, ${b}, ${opacity})`;
      })
      .join(', ');
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-8 md:p-16 flex items-center justify-center min-h-[300px] md:min-h-[400px]">
      <div
        className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-lg"
        style={{
          boxShadow: generateBoxShadow(),
        }}
      />
    </div>
  );
}
