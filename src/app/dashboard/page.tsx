
const Dashboard = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 h-screen">
                <div className="flex items-center justify-center h-16 bg-gray-900 text-white">
                    Dashboard
                </div>
                <nav className="mt-6">
                    <a href="#" className="block py-2.5 px-4 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Inicio</a>
                    <a href="#" className="block py-2.5 px-4 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Usuarios</a>
                    <a href="#" className="block py-2.5 px-4 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Configuración</a>
                    <a href="#" className="block py-2.5 px-4 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">Cerrar sesión</a>
                </nav>
            </aside>

            {/* Content */}
            <main className="flex-1">
                <div className="p-8">
                    <h1 className="text-3xl font-bold text-gray-900">Bienvenido al Dashboard</h1>
                    <p className="mt-4 text-gray-600">Aquí puedes administrar tu aplicación.</p>
                </div>
            </main>
        </div>
    )
}

export default Dashboard
