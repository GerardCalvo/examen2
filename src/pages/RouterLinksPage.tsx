import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";

export default function RouterLinksPage() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Routes, Route, Link y navegación</h1>
        <p className="text-lg text-gray-600">Sistema de enrutamiento en React</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿Qué es React Router?</h2>
        <p className="text-gray-700 leading-relaxed">
          Permite definir <strong>rutas</strong> (URL) y qué componente se muestra con <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{`<Routes><Route /></Routes>`}</code>.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{`<Link>`}</h2>
        <p className="text-gray-700 leading-relaxed">
          <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{`<Link to="/use-state">`}</code> navega sin recargar la página (SPA).
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{`<NavLink>`}</h2>
        <p className="text-gray-700 leading-relaxed">
          Como <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">Link</code>, pero te deja marcar "activo" según la ruta.
        </p>
      </div>

      <div className="bg-blue-50 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Ejemplo</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Link
            to="/use-state"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Ir a useState
          </Link>

          <NavLink
            to="/use-effect"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-500 text-white hover:bg-gray-600'
              }`
            }
          >
            Ir a useEffect (NavLink)
          </NavLink>

          <button
            onClick={() => navigate("/use-ref")}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            Navegar con useNavigate() → useRef
          </button>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-green-900 mb-4">useLocation</h2>
        <p className="text-lg text-gray-700">
          Ruta actual: <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{location.pathname}</code>
        </p>
      </div>

      <div className="bg-purple-50 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-purple-900 mb-4">Idea clave</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Routes/Route</strong>: mapa URL → componente</li>
          <li><strong>Link/NavLink</strong>: navegación declarativa</li>
          <li><strong>useNavigate</strong>: navegación programática (botones, después de un submit…)</li>
        </ul>
      </div>
    </div>
  );
}