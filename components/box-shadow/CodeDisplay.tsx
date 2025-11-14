'use client';

import { useState } from 'react';
import { ShadowParams } from '@/types/shadow';

interface CodeDisplayProps {
  shadows: ShadowParams[];
}

type CodeTab = 'css' | 'tailwind';

export function CodeDisplay({ shadows }: CodeDisplayProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<CodeTab>('css');

  const generateBoxShadowCSS = () => {
    if (shadows.length === 0) return 'box-shadow: none;';

    const shadowStrings = shadows.map((shadow) => {
      const { horizontalOffset, verticalOffset, blurRadius, spreadRadius, color, opacity, inset } = shadow;

      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);

      const insetStr = inset ? 'inset ' : '';
      return `${insetStr}${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${spreadRadius}px rgba(${r}, ${g}, ${b}, ${opacity})`;
    });

    return `box-shadow: ${shadowStrings.join(',\n            ')};`;
  };

  const generateWebkitCSS = () => {
    const boxShadow = generateBoxShadowCSS();
    return `-webkit-${boxShadow}`;
  };

  const generateMozCSS = () => {
    const boxShadow = generateBoxShadowCSS();
    return `-moz-${boxShadow}`;
  };

  const generateTailwindCode = () => {
    if (shadows.length === 0) return 'shadow-none';

    const shadowStrings = shadows.map((shadow) => {
      const { horizontalOffset, verticalOffset, blurRadius, spreadRadius, color, opacity, inset } = shadow;

      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);

      const insetStr = inset ? 'inset_' : '';
      return `${insetStr}${horizontalOffset}px_${verticalOffset}px_${blurRadius}px_${spreadRadius}px_rgba(${r},${g},${b},${opacity})`;
    });

    return `shadow-[${shadowStrings.join(',')}]`;
  };

  const cssCode = generateBoxShadowCSS();
  const webkitCSS = generateWebkitCSS();
  const mozCSS = generateMozCSS();
  const tailwindCode = generateTailwindCode();

  const copyToClipboard = async () => {
    try {
      const codeToCopy = activeTab === 'css' ? cssCode : tailwindCode;
      await navigator.clipboard.writeText(codeToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
      <div className="flex justify-between items-center mb-4 gap-3">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900">Code</h2>
        <button
          onClick={copyToClipboard}
          className="px-3 md:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-xs md:text-sm font-medium whitespace-nowrap"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setActiveTab('css')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
            activeTab === 'css'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          CSS
        </button>
        <button
          onClick={() => setActiveTab('tailwind')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
            activeTab === 'tailwind'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Tailwind
        </button>
      </div>

      <div className="bg-gray-900 rounded-lg px-4 md:px-6 py-6 md:py-8 overflow-x-auto max-w-full">
        <pre className="text-xs md:text-sm text-gray-100 font-mono whitespace-pre-wrap break-all">
          <code>{activeTab === 'css' ? cssCode : tailwindCode}</code>
        </pre>
      </div>

      {shadows.length > 0 && activeTab === 'css' && (
        <details className="mt-4">
          <summary className="text-sm text-gray-600 cursor-pointer hover:text-gray-900 font-medium">
            Show with vendor prefixes
          </summary>
          <div className="bg-gray-900 rounded-lg px-4 md:px-6 py-6 md:py-8 overflow-x-auto mt-2 max-w-full">
            <pre className="text-xs md:text-sm text-gray-100 font-mono whitespace-pre-wrap break-all">
              <code>
                {webkitCSS}
                {'\n'}
                {mozCSS}
                {'\n'}
                {cssCode}
              </code>
            </pre>
          </div>
        </details>
      )}

      {activeTab === 'tailwind' && (
        <div className="mt-4 text-sm text-gray-600 bg-blue-50 p-3 rounded-lg border border-blue-200">
          <p className="font-medium text-blue-900 mb-1">Usage:</p>
          <p>Add this class to your HTML element:</p>
          <code className="block mt-2 text-xs bg-white px-2 py-1 rounded border border-blue-200 text-blue-900 font-mono break-all">
            className=&quot;{tailwindCode}&quot;
          </code>
        </div>
      )}
    </div>
  );
}
