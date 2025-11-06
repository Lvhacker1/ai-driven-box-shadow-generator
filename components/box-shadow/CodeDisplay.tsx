'use client';

import { useState } from 'react';
import { ShadowParams } from '@/types/shadow';

interface CodeDisplayProps {
  shadows: ShadowParams[];
}

export function CodeDisplay({ shadows }: CodeDisplayProps) {
  const [copied, setCopied] = useState(false);

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

  const cssCode = generateBoxShadowCSS();
  const webkitCSS = generateWebkitCSS();
  const mozCSS = generateMozCSS();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(cssCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">CSS Code</h2>
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
        >
          {copied ? 'Copied!' : 'Copy Code'}
        </button>
      </div>

      <div className="bg-gray-900 rounded-lg px-6 py-8 overflow-x-auto">
        <pre className="text-sm text-gray-100 font-mono">
          <code>{cssCode}</code>
        </pre>
      </div>

      {shadows.length > 0 && (
        <details className="mt-4">
          <summary className="text-sm text-gray-600 cursor-pointer hover:text-gray-900 font-medium">
            Show with vendor prefixes
          </summary>
          <div className="bg-gray-900 rounded-lg px-6 py-8 overflow-x-auto mt-2">
            <pre className="text-sm text-gray-100 font-mono">
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
    </div>
  );
}
