'use client';

import { ShadowParams } from '@/types/shadow';
import { ShadowControls } from './ShadowControls';

interface ShadowListProps {
  shadows: ShadowParams[];
  onUpdate: (shadows: ShadowParams[]) => void;
  maxShadows?: number;
}

export function ShadowList({ shadows, onUpdate, maxShadows = 5 }: ShadowListProps) {
  const createDefaultShadow = (): ShadowParams => ({
    id: `shadow-${Date.now()}-${Math.random()}`,
    horizontalOffset: 0,
    verticalOffset: 4,
    blurRadius: 8,
    spreadRadius: 0,
    color: '#000000',
    opacity: 0.3,
    inset: false,
  });

  const addShadow = () => {
    if (shadows.length < maxShadows) {
      onUpdate([...shadows, createDefaultShadow()]);
    }
  };

  const removeShadow = (id: string) => {
    onUpdate(shadows.filter((s) => s.id !== id));
  };

  const updateShadow = (updatedShadow: ShadowParams) => {
    onUpdate(shadows.map((s) => (s.id === updatedShadow.id ? updatedShadow : s)));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">
          Shadows {shadows.length > 0 && `(${shadows.length}/${maxShadows})`}
        </h2>
        <button
          onClick={addShadow}
          disabled={shadows.length >= maxShadows}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors text-sm font-medium"
        >
          + Add Shadow
        </button>
      </div>

      {shadows.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
          <p className="text-gray-500 mb-4">No shadows yet</p>
          <button
            onClick={addShadow}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Add Your First Shadow
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {shadows.map((shadow, index) => (
            <div key={shadow.id} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-900">Shadow {index + 1}</h3>
                <button
                  onClick={() => removeShadow(shadow.id)}
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Remove
                </button>
              </div>
              <ShadowControls shadow={shadow} onUpdate={updateShadow} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
