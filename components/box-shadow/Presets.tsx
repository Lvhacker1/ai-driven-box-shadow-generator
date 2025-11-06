'use client';

import { ShadowPreset } from '@/types/shadow';

interface PresetsProps {
  onSelectPreset: (preset: ShadowPreset) => void;
}

const presets: ShadowPreset[] = [
  {
    name: 'Subtle',
    description: 'Light, barely visible shadow',
    shadows: [
      {
        horizontalOffset: 0,
        verticalOffset: 1,
        blurRadius: 3,
        spreadRadius: 0,
        color: '#000000',
        opacity: 0.12,
        inset: false,
      },
    ],
  },
  {
    name: 'Material Design',
    description: "Google's elevation system",
    shadows: [
      {
        horizontalOffset: 0,
        verticalOffset: 2,
        blurRadius: 4,
        spreadRadius: -1,
        color: '#000000',
        opacity: 0.2,
        inset: false,
      },
      {
        horizontalOffset: 0,
        verticalOffset: 4,
        blurRadius: 5,
        spreadRadius: 0,
        color: '#000000',
        opacity: 0.14,
        inset: false,
      },
      {
        horizontalOffset: 0,
        verticalOffset: 1,
        blurRadius: 10,
        spreadRadius: 0,
        color: '#000000',
        opacity: 0.12,
        inset: false,
      },
    ],
  },
  {
    name: 'Neumorphism',
    description: 'Soft UI style with dual shadows',
    shadows: [
      {
        horizontalOffset: 8,
        verticalOffset: 8,
        blurRadius: 16,
        spreadRadius: 0,
        color: '#000000',
        opacity: 0.15,
        inset: false,
      },
      {
        horizontalOffset: -8,
        verticalOffset: -8,
        blurRadius: 16,
        spreadRadius: 0,
        color: '#ffffff',
        opacity: 0.7,
        inset: false,
      },
    ],
  },
  {
    name: 'Dramatic',
    description: 'Heavy, prominent shadow',
    shadows: [
      {
        horizontalOffset: 0,
        verticalOffset: 20,
        blurRadius: 40,
        spreadRadius: -10,
        color: '#000000',
        opacity: 0.5,
        inset: false,
      },
    ],
  },
  {
    name: 'Inset',
    description: 'Inner shadow effect',
    shadows: [
      {
        horizontalOffset: 0,
        verticalOffset: 2,
        blurRadius: 8,
        spreadRadius: 0,
        color: '#000000',
        opacity: 0.25,
        inset: true,
      },
    ],
  },
  {
    name: 'Glow',
    description: 'Colorful glowing effect',
    shadows: [
      {
        horizontalOffset: 0,
        verticalOffset: 0,
        blurRadius: 20,
        spreadRadius: 5,
        color: '#3b82f6',
        opacity: 0.6,
        inset: false,
      },
    ],
  },
];

export function Presets({ onSelectPreset }: PresetsProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Presets</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {presets.map((preset) => (
          <button
            key={preset.name}
            onClick={() => onSelectPreset(preset)}
            className="text-left p-3 rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all group"
          >
            <div className="font-semibold text-sm text-gray-900 group-hover:text-blue-700 mb-1">
              {preset.name}
            </div>
            <div className="text-xs text-gray-500 group-hover:text-blue-600">
              {preset.description}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
