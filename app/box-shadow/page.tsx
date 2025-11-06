'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShadowParams, ShadowPreset } from '@/types/shadow';
import { ShadowPreview } from '@/components/box-shadow/ShadowPreview';
import { ShadowList } from '@/components/box-shadow/ShadowList';
import { CodeDisplay } from '@/components/box-shadow/CodeDisplay';
import { Presets } from '@/components/box-shadow/Presets';

export default function BoxShadowGenerator() {
  const [shadows, setShadows] = useState<ShadowParams[]>([
    {
      id: 'shadow-default',
      horizontalOffset: 0,
      verticalOffset: 4,
      blurRadius: 8,
      spreadRadius: 0,
      color: '#000000',
      opacity: 0.3,
      inset: false,
    },
  ]);

  const handleSelectPreset = (preset: ShadowPreset) => {
    const newShadows = preset.shadows.map((shadow, index) => ({
      ...shadow,
      id: `preset-shadow-${Date.now()}-${index}`,
    }));
    setShadows(newShadows);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 w-full">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-6 md:mb-8">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">CSS Box Shadow Generator</h1>
          <p className="text-gray-600 mt-2">
            Create beautiful box shadows with live preview
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-4 md:space-y-6">
            <ShadowPreview shadows={shadows} />
            <Presets onSelectPreset={handleSelectPreset} />
          </div>

          <div className="space-y-4 md:space-y-6">
            <ShadowList shadows={shadows} onUpdate={setShadows} />
            <CodeDisplay shadows={shadows} />
          </div>
        </div>

        <div className="mt-8 md:mt-12 bg-white rounded-lg border border-gray-200 p-4 md:p-6">
          <h3 className="font-semibold text-gray-900 mb-3">Tips for Great Box Shadows</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Use multiple shadows for more realistic depth and Material Design effects</li>
            <li>• Keep blur radius higher than spread for softer, more natural shadows</li>
            <li>• Lower opacity (0.1-0.3) often looks more professional than darker shadows</li>
            <li>• Positive vertical offset makes elements appear elevated</li>
            <li>• Experiment with inset for pressed/recessed button effects</li>
            <li>• Consider using colored shadows instead of pure black for unique designs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
