import { useEffect, useState } from "react";

export default function UseEffectPage() {
  const [seconds, setSeconds] = useState<number>(0);
  const [query, setQuery] = useState<string>("react");

  useEffect(() => {
    // Efecte: timer
    const id = window.setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    // Cleanup: s'executa en desmuntar o abans de repetir l'efecte
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    // Efecte: "sincronitzar" amb el món extern (aquí, el títol del navegador)
    document.title = `Buscant: ${query}`;
    return () => {
      // opcional: tornar-ho a un valor "neutral"
      document.title = "Hooks + Router";
    };
  }, [query]);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">useEffect</h1>
        <p className="text-lg text-gray-600">Efectos secundarios en React</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿Qué es?</h2>
        <p className="text-gray-700 leading-relaxed">
          <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">useEffect</code> sirve para ejecutar <strong>efectos secundarios</strong>:
          cosas fuera del render (timers, fetch, subscripciones, modificar el DOM, etc.).
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿Cuándo se utiliza?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Fetch de datos desde APIs</li>
          <li>Configurar timers o intervals</li>
          <li>Suscribirse a eventos externos</li>
          <li>Modificar el DOM directamente</li>
          <li>Cualquier efecto secundario que deba ejecutarse en respuesta a cambios en el estado o props</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dependencias</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">[]</code>: se ejecuta 1 vez (montaje) + cleanup (desmontaje)</li>
          <li><code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">[x]</code>: se ejecuta cuando cambia <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">x</code></li>
          <li>Sin array: se ejecuta en cada render (normalmente evitar)</li>
        </ul>
      </div>

      <div className="bg-blue-50 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Ejemplo 1: Timer (con cleanup)</h2>
        <div className="flex items-center space-x-4">
          <span className="text-lg font-medium text-gray-700">Segundos en esta página:</span>
          <span className="text-3xl font-bold text-blue-600">{seconds}</span>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-green-900 mb-4">Ejemplo 2: Sincronizar el título del navegador</h2>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cambia el texto y mira el título del navegador"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <p className="mt-4 text-lg text-gray-700">
          Estado actual: <span className="font-semibold text-green-600">{query}</span>
        </p>
      </div>

      <div className="bg-purple-50 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-purple-900 mb-4">Idea clave</h2>
        <p className="text-gray-700 leading-relaxed">
          Si necesitas "hacer alguna cosa" cuando el componente entra/sale o cuando cambia una dato,
          es un caso típico de <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">useEffect</code>.
        </p>
      </div>
    </div>
  );
}