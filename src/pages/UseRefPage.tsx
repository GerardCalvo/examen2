import { useEffect, useRef, useState } from "react";

export default function UseRefPage() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Ref per guardar un valor que no ha de provocar render
  const renderCountRef = useRef<number>(0);

  const [text, setText] = useState<string>("");

  useEffect(() => {
    renderCountRef.current += 1;
  });

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">useRef</h1>
        <p className="text-lg text-gray-600">Referencias persistentes en React</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿Qué es?</h2>
        <p className="text-gray-700 leading-relaxed">
          <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">useRef</code> guarda un objeto con <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">.current</code> que se mantiene entre renders,
          pero cambiarlo <strong>no</strong> fuerza re-render.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿Cuándo se utiliza?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Acceder a elementos del DOM (focus, scroll, medir…)</li>
          <li>Guardar valores "persistentes" sin re-render (ids de timers, contadores internos…)</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ventajas</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Acceso directo al DOM sin necesidad de queries</li>
          <li>Mejor rendimiento al evitar re-renders innecesarios</li>
          <li>Persistencia de valores entre renders</li>
        </ul>
      </div>

      <div className="bg-blue-50 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Ejemplo 1: Focus a un input</h2>
        <div className="space-y-4">
          <input
            ref={inputRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Clica el botón para hacer focus"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={focusInput}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Focus
          </button>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-green-900 mb-4">Ejemplo 2: Contar renders con un ref</h2>
        <div className="space-y-2">
          <p className="text-lg text-gray-700">
            Renders acumulados (ref): <span className="font-bold text-green-600 text-xl">{renderCountRef.current}</span>
          </p>
          <p className="text-gray-600">
            Escribe en el input (esto sí que hace render porque cambia el estado): <span className="font-semibold">{text}</span>
          </p>
        </div>
      </div>

      <div className="bg-purple-50 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-purple-900 mb-4">Idea clave</h2>
        <p className="text-gray-700 leading-relaxed">
          Si quieres "recordar" alguna cosa entre renders pero <strong>no</strong> quieres re-render, usa <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">useRef</code>.
        </p>
      </div>
    </div>
  );
}