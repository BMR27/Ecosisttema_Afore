import React from 'react';
import Image from 'next/image'

const Login = () => {
    return (
        <div className="min-h-screen flex">
            {/* Left Section */}
            <div className="w-1/2 flex items-center justify-center bg-yellow-500">
                <div className="text-white text-center p-8">
                    <h1 className="text-4xl font-bold mb-4">¡Bienvenido!</h1>
                    <h1 className="text-4xl">Ecosistema Afore Azteca</h1>
                    <br></br>

                    <img className="mx-auto h-auto mb-1" src="/image/Login/gruposalinas3.jpeg" alt="Imagen de inicio de sesión" style={{ maxWidth: '150%', maxHeight: '1500px' }} />

                </div>
            </div>

            {/* Right Section */}
            <div className="w-1/2 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                        <img className="mx-auto h-auto mb-6" src="/image/Login/afore.jpeg" alt="Imagen de inicio de sesión" style={{ maxWidth: '80%', maxHeight: '300px' }} />
                        <div className="text-black text-center p-8">
                        <h1 className="text-4xl font-bold mb-4">¡Bienvenido de nuevo!</h1>
                        <p className="text-lg">Inicia sesión para continuar a tu cuenta</p>
                    </div>
                    <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">Iniciar sesión</h2>
                    </div>
                    <form className="mt-8 space-y-6">
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="username" className="sr-only">Usuario</label>
                                <input id="username" name="username" type="text" required className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Usuario" />
                            </div>
                            <br></br>
                            <div>
                                <label htmlFor="password" className="sr-only">Contraseña</label>
                                <input id="password" name="password" type="password" required className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Contraseña" />
                            </div>
                        </div>

                        <div>
                            <button 
                                type="submit" 
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Iniciar sesión
                            </button>                   
                        </div>
                        <div>
                            <button 
                                type="submit" 
                                className="group relative w-full flex justify-center py-2 px-3 border border-transparent text-sm font-medium rounded-md text-black bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Olvidé Contraseña
                            </button>                
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
