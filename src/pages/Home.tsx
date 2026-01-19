import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white text-center">
          <h1 className="text-4xl font-bold mb-2">Guía: Hooks + Router</h1>
          <p className="text-blue-100 text-lg">Aprende React de manera interactiva</p>
        </div>

        <div className="p-8">
          <p className="text-gray-600 text-center mb-8 text-lg leading-relaxed">
            Este proyecto tiene una página para cada tema, con teoría + ejemplo práctico.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Link
              to="/use-state"
              className="group p-6 bg-blue-50 rounded-xl border border-blue-200 hover:bg-blue-100 hover:border-blue-300 transition-all duration-200"
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-2 group-hover:text-blue-800">useState</h3>
              <p className="text-blue-700">Estado local: contadores, inputs…</p>
            </Link>

            <Link
              to="/use-effect"
              className="group p-6 bg-green-50 rounded-xl border border-green-200 hover:bg-green-100 hover:border-green-300 transition-all duration-200"
            >
              <h3 className="text-xl font-semibold text-green-900 mb-2 group-hover:text-green-800">useEffect</h3>
              <p className="text-green-700">Efectos: subscripciones, fetch, timers…</p>
            </Link>

            <Link
              to="/use-ref"
              className="group p-6 bg-purple-50 rounded-xl border border-purple-200 hover:bg-purple-100 hover:border-purple-300 transition-all duration-200"
            >
              <h3 className="text-xl font-semibold text-purple-900 mb-2 group-hover:text-purple-800">useRef</h3>
              <p className="text-purple-700">Referencias DOM y valores que no renderizan</p>
            </Link>

            <Link
              to="/router-links"
              className="group p-6 bg-orange-50 rounded-xl border border-orange-200 hover:bg-orange-100 hover:border-orange-300 transition-all duration-200"
            >
              <h3 className="text-xl font-semibold text-orange-900 mb-2 group-hover:text-orange-800">Routes + Link</h3>
              <p className="text-orange-700">Navegación y rutas</p>
            </Link>

            <Link
              to="/use-local-storage"
              className="group p-6 bg-pink-50 rounded-xl border border-pink-200 hover:bg-pink-100 hover:border-pink-300 transition-all duration-200 md:col-span-2"
            >
              <h3 className="text-xl font-semibold text-pink-900 mb-2 group-hover:text-pink-800">useLocalStorage</h3>
              <p className="text-pink-700">Custom hook para persistencia de datos</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
