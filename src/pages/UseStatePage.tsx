import { useState } from "react";

export default function UseStatePage() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">useState</h1>
        <p className="text-lg text-gray-600">Gestión del estado local en React</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿Qué es?</h2>
        <p className="text-gray-700 leading-relaxed">
          <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">useState</code> guarda <strong>estado local</strong> dentro de un componente.
          Cuando actualizas el estado, React vuelve a renderizar el componente.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿Cuándo se utiliza?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Contadores, formularios, toggles (mostrar/ocultar), selecciones…</li>
          <li>Cualquier dato que cambia y debe reflejarse en la UI</li>
        </ul>
      </div>

      <div className="bg-blue-50 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Ejemplo 1: Contador</h2>
        <div className="flex items-center space-x-4">
          <span className="text-lg font-medium text-gray-700">Valor:</span>
          <span className="text-3xl font-bold text-blue-600">{count}</span>
        </div>
        <div className="flex space-x-2 mt-4">
          <button
            onClick={() => setCount((c) => c - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            -
          </button>
          <button
            onClick={() => setCount((c) => c + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            +
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-green-900 mb-4">Ejemplo 2: Input controlado</h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Escribe tu nombre"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <p className="mt-4 text-lg text-gray-700">
          Hola, <span className="font-semibold text-blue-600">{name || "desconocido"}</span> 👋
        </p>
      </div>

      <div className="bg-purple-50 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-purple-900 mb-4">Idea clave</h2>
        <p className="text-gray-700 leading-relaxed">
          Si una dato debe actualizar la pantalla, probablemente es un caso para <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">useState</code>.
        </p>
      </div>
    </div>
  );
}
