import { useLocalStorage } from "../hooks/useLocalStorage";

export default function UseLocalStoragePage() {
  const [name, setName] = useLocalStorage<string>("name", "");
  const [darkMode, setDarkMode] = useLocalStorage<boolean>("darkMode", false);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Custom hook: useLocalStorage</h1>
        <p className="text-lg text-gray-600">Persistencia de datos en el navegador</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿Qué es?</h2>
        <p className="text-gray-700 leading-relaxed">
          <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">useLocalStorage</code> es un <strong>custom hook</strong> que combina
          <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">useState</code> + <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">useEffect</code> para sincronizar estado con
          <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">localStorage</code>.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿Por qué usar-lo?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Persistir datos entre recargas</li>
          <li>Evitar repetir código</li>
          <li>API neta y reutilizable</li>
        </ul>
      </div>

      <div className="bg-blue-50 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Ejemplo 1: Nombre persistente</h2>
        <div className="space-y-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Escribe tu nombre"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-lg text-gray-700">
            Nombre guardado: <span className="font-semibold text-blue-600">{name || "—"}</span>
          </p>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-green-900 mb-4">Ejemplo 2: Preferencia (dark mode)</h2>
        <div className="space-y-4">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
            />
            <span className="text-lg text-gray-700">Dark mode</span>
          </label>
          <p className="text-lg text-gray-700">
            Valor actual: <span className={`font-bold ${darkMode ? 'text-green-600' : 'text-red-600'}`}>
              {darkMode ? "ACTIVO" : "INACTIVO"}
            </span>
          </p>
        </div>
      </div>

      <div className="bg-purple-50 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-purple-900 mb-4">Idea clave</h2>
        <p className="text-gray-700 leading-relaxed">
          Si una dato es <strong>estado + persistencia</strong>, crea un custom hook.
          Es más neto que repetir <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">useEffect</code> en cada componente.
        </p>
      </div>
    </div>
  );
}
