'use client';

import { ShadowParams } from '@/types/shadow';

interface ShadowControlsProps {
  shadow: ShadowParams;
  onUpdate: (shadow: ShadowParams) => void;
}

export function ShadowControls({ shadow, onUpdate }: ShadowControlsProps) {
  const handleChange = (field: keyof ShadowParams, value: number | string | boolean) => {
    onUpdate({ ...shadow, [field]: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Horizontal Offset</span>
          <span className="text-sm text-gray-500">{shadow.horizontalOffset}px</span>
        </label>
        <input
          type="range"
          min="-50"
          max="50"
          value={shadow.horizontalOffset}
          onChange={(e) => handleChange('horizontalOffset', Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Vertical Offset</span>
          <span className="text-sm text-gray-500">{shadow.verticalOffset}px</span>
        </label>
        <input
          type="range"
          min="-50"
          max="50"
          value={shadow.verticalOffset}
          onChange={(e) => handleChange('verticalOffset', Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Blur Radius</span>
          <span className="text-sm text-gray-500">{shadow.blurRadius}px</span>
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={shadow.blurRadius}
          onChange={(e) => handleChange('blurRadius', Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Spread Radius</span>
          <span className="text-sm text-gray-500">{shadow.spreadRadius}px</span>
        </label>
        <input
          type="range"
          min="-50"
          max="50"
          value={shadow.spreadRadius}
          onChange={(e) => handleChange('spreadRadius', Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Opacity</span>
          <span className="text-sm text-gray-500">{shadow.opacity.toFixed(2)}</span>
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={shadow.opacity}
          onChange={(e) => handleChange('opacity', Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Color</span>
          <span className="text-sm text-gray-500">{shadow.color}</span>
        </label>
        <input
          type="color"
          value={shadow.color}
          onChange={(e) => handleChange('color', e.target.value)}
          className="w-full h-10 rounded cursor-pointer"
        />
      </div>

      <div className="flex items-center space-x-3 pt-2">
        <input
          type="checkbox"
          id={`inset-${shadow.id}`}
          checked={shadow.inset}
          onChange={(e) => handleChange('inset', e.target.checked)}
          className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor={`inset-${shadow.id}`} className="text-sm font-medium text-gray-700 cursor-pointer">
          Inset (inner shadow)
        </label>
      </div>
    </div>
  );
}
