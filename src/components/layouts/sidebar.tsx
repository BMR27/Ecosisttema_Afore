"use client";

import { Transition } from '@headlessui/react';

type SidebarProps = {
    selectedOption: 'envio' | 'recepcion';
    handleOptionChange: (option: 'envio' | 'recepcion') => void;
    dropdownOpen: boolean;
    toggleDropdown: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ selectedOption, handleOptionChange, dropdownOpen, toggleDropdown }) => {
    return (
        <aside className="w-64 bg-gray-500 h-full shadow-md flex flex-col">
            <div className="flex items-center justify-center h-16 bg-gray-500 text-white font-bold text-xl">
                <span className="ml-2">Mi Marca</span>
            </div>
            <nav className="mt-6 flex-1">
                <h1 className="block py-2.5 px-4 text-sm text-gray-300 hover:bg-gray-500 hover:text-white transition duration-300">Menu</h1>
                <a href="#" className="block py-2.5 px-4 text-sm text-gray-300 hover:bg-gray-500 hover:text-white transition duration-300">Inicio</a>
                <div className="relative">
                    <button
                        onClick={toggleDropdown}
                        className="block py-2.5 px-4 text-sm text-gray-300 hover:bg-gray-700 hover:text-white w-full text-left transition duration-300">
                        Buzón de Archivos <span className="ml-2">&#9660;</span>
                    </button>
                    <Transition
                        show={dropdownOpen}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-150"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <div className="bg-gray-800 rounded-lg shadow-lg z-10">
                            <button
                                onClick={() => handleOptionChange('envio')}
                                className={`block w-full py-2 px-4 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300 ${selectedOption === 'envio' ? 'bg-gray-700' : ''}`}>
                                Envío
                            </button>
                            <button
                                onClick={() => handleOptionChange('recepcion')}
                                className={`block w-full py-2 px-4 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300 ${selectedOption === 'recepcion' ? 'bg-gray-700' : ''}`}>
                                Recepción
                            </button>
                        </div>
                    </Transition>
                    <a href="#" className="block py-2.5 px-4 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300">Configuración</a>
                    <a href="#" className="block py-2.5 px-4 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300">Cerrar sesión</a>
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;
