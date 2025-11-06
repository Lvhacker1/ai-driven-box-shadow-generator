import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          CSS Box Shadow Generator
        </h1>

        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Create beautiful, professional box shadows visually with real-time preview.
          No more guessing values - see exactly how your shadows will look and get
          the CSS code instantly.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="font-semibold text-lg mb-2">Visual Control</h3>
            <p className="text-gray-600 text-sm">
              Adjust offset, blur, spread, color, and opacity with intuitive sliders
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-3">📦</div>
            <h3 className="font-semibold text-lg mb-2">Multiple Layers</h3>
            <p className="text-gray-600 text-sm">
              Stack up to 5 shadows for complex depth and elevation effects
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-lg mb-2">Instant Code</h3>
            <p className="text-gray-600 text-sm">
              Copy production-ready CSS code with one click
            </p>
          </div>
        </div>

        <Link
          href="/box-shadow"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
        >
          Start Creating Shadows
        </Link>

        <div className="mt-16 text-left bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">What is box-shadow?</h2>
          <p className="text-gray-700 mb-3">
            The CSS <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">box-shadow</code> property
            adds shadow effects around an element&apos;s frame. It&apos;s essential for creating:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li><strong>Depth:</strong> Make elements appear elevated above the page</li>
            <li><strong>Focus:</strong> Draw attention to important UI components</li>
            <li><strong>Hierarchy:</strong> Establish visual relationships between elements</li>
            <li><strong>Polish:</strong> Add professional finishing touches to your designs</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
