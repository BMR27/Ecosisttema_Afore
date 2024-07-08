"use client";  // Marcar este archivo como componente cliente

import Sidebar from '@/components/layouts/sidebar';
import { useState } from 'react';

const Page = () => {
    const [selectedOption, setSelectedOption] = useState<'envio' | 'recepcion'>('envio');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleOptionChange = (option: 'envio' | 'recepcion') => {
        setSelectedOption(option);
        if (option === 'envio') {
            console.log('Cargando datos para la opción de Envío');
        } else if (option === 'recepcion') {
            console.log('Cargando datos para la opción de Recepción');
        }
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="flex h-screen">
            <Sidebar
                selectedOption={selectedOption}
                handleOptionChange={handleOptionChange}
                dropdownOpen={dropdownOpen}
                toggleDropdown={toggleDropdown}
            />
            <main className="flex-1 bg-gray-100">
                <div className="p-8">
                    <h1 className="text-3xl font-bold text-gray-900">Bienvenido al Dashboard</h1>
                    <p className="mt-4 text-gray-600">Aquí puedes administrar tu aplicación.</p>
                    <div className="mt-8">
                        {selectedOption === 'envio' && (
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">Gestión de Envíos</h2>
                                <p>Contenido para la opción de Envío</p>
                            </div>
                        )}
                        {selectedOption === 'recepcion' && (
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">Gestión de Recepciones</h2>
                                <p>Contenido para la opción de Recepción</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Page;
