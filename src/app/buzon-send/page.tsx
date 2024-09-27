import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Bell,
    CircleUser,
    Home,
    LineChart,
    Menu,
    Package,
    Package2,
    Search,
    ShoppingCart,
    Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Label } from "@radix-ui/react-label";

import { DropdownButton } from 'react-bootstrap';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const BuzonEnvio = () => {
    return (
        <>
            <main className="flex flex-1 flex-col gap-6 p-6 bg-gray-100">
                <header className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-800">
                        Panel Administrativo para Buzon de Archivos
                    </h3>
                    <div className="relative mt-4">
                        <Search className="absolute left-3 top-3 h-6 w-6 text-gray-500" />
                        <Input
                            type="search"
                            placeholder="Buscar productos..."
                            className="w-full md:w-96 lg:w-128 pl-12 pr-4 bg-white border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-700 mt-6">
                        Envio de Archivos
                    </h3>
                </header>

                <div className="flex flex-wrap gap-6">
                    {/* Primera columna */}
                    <div className="flex-1 bg-white rounded-lg border border-gray-300 shadow-sm p-6">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <label htmlFor="tipoTransferencia" className="text-gray-600 w-48">
                                    Tipo de Transferencia:
                                </label>
                                <input
                                    type="text"
                                    id="tipoTransferencia"
                                    name="tipoTransferencia"
                                    className="p-2 border border-gray-400 rounded-md w-40 bg-gray-200 text-gray-600 cursor-not-allowed"
                                    value="Envio"
                                    readOnly
                                />
                            </div>
                            <div className="flex items-center gap-4 mb-4">
                                <label htmlFor="institucionOrigen" className="text-gray-600 w-48">
                                    Institucion de Origen:
                                </label>
                                <input
                                    type="text"
                                    id="institucionOrigen"
                                    name="institucionOrigen"
                                    className="p-2 border border-gray-400 rounded-md w-40 bg-gray-200 text-gray-600 cursor-not-allowed"
                                    value="Grupo Salinas"
                                    readOnly
                                />
                            </div>
                            <div className="flex items-center gap-4 mb-4">
                                <label htmlFor="rutaOrigenDoc" className="text-gray-600 w-48">
                                    Ruta de Origen:
                                </label>
                                <DropdownButton className="p-2 border rounded-md w-60 bg-gray-200 text-gray-600" title="Seleccionar un Archivo" id="dropdown-button">
                                    <button className="p-2 border rounded-md bg-gray-300 text-gray-800">
                                        Seleccionar un Archivo
                                    </button>
                                    <DropdownMenu>
                                        <ul className="bg-white border border-gray-300 rounded-md shadow-sm">
                                            <li className="py-2 px-4 hover:bg-gray-100">Opción 1</li>
                                            <li className="py-2 px-4 hover:bg-gray-100">Opción 2</li>
                                            <li className="py-2 px-4 hover:bg-gray-100">Opción 3</li>
                                        </ul>
                                    </DropdownMenu>
                                </DropdownButton>
                            </div>
                        </div>
                    </div>

                    {/* Segunda columna */}
                    <div className="flex-1 bg-white rounded-lg border border-gray-300 shadow-sm p-6">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <label htmlFor="nombreArchivo" className="text-gray-600 w-48">
                                    Nombre del Archivo:
                                </label>
                                <input
                                    type="text"
                                    id="nombreArchivo"
                                    name="nombreArchivo"
                                    className="p-2 border border-gray-400 rounded-md w-60 bg-gray-200 text-gray-800"
                                />
                            </div>
                            <div className="flex items-center gap-4 mb-4">
                                <label htmlFor="entidadEnvio" className="text-gray-600 w-48">
                                    Entidad de Envio:
                                </label>
                                <DropdownButton className="p-2 border rounded-md w-60 bg-gray-200 text-gray-600" title="Seleccionar una Entidad" id="dropdown-button">
                                    <button className="p-2 border rounded-md bg-gray-300 text-gray-800">
                                        Seleccionar una Entidad
                                    </button>
                                    <DropdownMenu>
                                        <ul className="bg-white border border-gray-300 rounded-md shadow-sm">
                                            <li className="py-2 px-4 hover:bg-gray-100">Procesar</li>
                                            <li className="py-2 px-4 hover:bg-gray-100">Consar</li>
                                        </ul>
                                    </DropdownMenu>
                                </DropdownButton>
                            </div>
                            <div className="flex items-center gap-4 mb-4">
                                <label htmlFor="rutaDestinoDoc" className="text-gray-600 w-48">
                                    Ruta de Destino:
                                </label>
                                <DropdownButton className="p-2 border rounded-md w-60 bg-gray-200 text-gray-600" title="Seleccionar un Archivo" id="dropdown-button">
                                    <button className="p-2 border rounded-md bg-gray-300 text-gray-800">
                                        Seleccionar un Archivo
                                    </button>
                                    <DropdownMenu>
                                        <ul className="bg-white border border-gray-300 rounded-md shadow-sm">
                                            <li className="py-2 px-4 hover:bg-gray-100">Opción 1</li>
                                            <li className="py-2 px-4 hover:bg-gray-100">Opción 2</li>
                                            <li className="py-2 px-4 hover:bg-gray-100">Opción 3</li>
                                        </ul>
                                    </DropdownMenu>
                                </DropdownButton>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    <button className="px-8 py-2 bg-[#28603B] text-white rounded-md text-lg hover:bg-[#1d4f2a] shadow-sm transition duration-300">
                        Realizar Envio
                    </button>
                </div>

                <Table className="mt-6 bg-white rounded-lg shadow-sm border border-gray-300">
                    <TableCaption className="text-gray-800 bg-[#28603B] p-2 text-white rounded-t-lg">Detalles de Envío</TableCaption>
                    <TableHeader>
                        <TableRow className="bg-[#28603B]">
                            <TableHead className="text-gray-800 bg-[#28603B] p-2 text-white">Tipo de Transferencia</TableHead>
                            <TableHead className="text-gray-800 bg-[#28603B] p-2 text-white">Numero de Proceso CD</TableHead>
                            <TableHead className="text-gray-800 bg-[#28603B] p-2 text-white">Nombre de Archivo</TableHead>
                            <TableHead className="text-gray-800 bg-[#28603B] p-2 text-white">Ruta Origen</TableHead>
                            <TableHead className="text-gray-800 bg-[#28603B] p-2 text-white">Ruta Destino</TableHead>
                            <TableHead className="text-gray-800 bg-[#28603B] p-2 text-white">Fecha</TableHead>
                            <TableHead className="text-gray-800 bg-[#28603B] p-2 text-white">Detalle</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="hover:bg-gray-100">
                            <TableCell className="font-medium text-gray-800">Envio</TableCell>
                            <TableCell className="text-center text-gray-700">9938765</TableCell>
                            <TableCell className="text-center text-gray-700">20240422_AF_556_016_00000.006.gpg</TableCell>
                            <TableCell className="text-center text-gray-700">repore/envio/355/</TableCell>
                            <TableCell className="text-center text-gray-700">repore/envio/355/</TableCell>
                            <TableCell className="text-center text-gray-700">2024/06/18 10:00</TableCell>
                            <TableCell className="text-center text-gray-700"></TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-100">
                            <TableCell className="font-medium text-gray-800">Envio</TableCell>
                            <TableCell className="text-center text-gray-700">9938765</TableCell>
                            <TableCell className="text-center text-gray-700">20240422_AF_556_016_00000.006.gpg</TableCell>
                            <TableCell className="text-center text-gray-700">repore/envio/355/</TableCell>
                            <TableCell className="text-center text-gray-700">repore/envio/355/</TableCell>
                            <TableCell className="text-center text-gray-700">2024/06/18 10:00</TableCell>
                            <TableCell className="text-center text-gray-700"></TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-100">
                            <TableCell className="font-medium text-gray-800">Envio</TableCell>
                            <TableCell className="text-center text-gray-700">9938765</TableCell>
                            <TableCell className="text-center text-gray-700">20240422_AF_556_016_00000.006.gpg</TableCell>
                            <TableCell className="text-center text-gray-700">repore/envio/355/</TableCell>
                            <TableCell className="text-center text-gray-700">repore/envio/355/</TableCell>
                            <TableCell className="text-center text-gray-700">2024/06/18 10:00</TableCell>
                            <TableCell className="text-center text-gray-700"></TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-100">
                            <TableCell className="font-medium text-gray-800">Envio</TableCell>
                            <TableCell className="text-center text-gray-700">9938765</TableCell>
                            <TableCell className="text-center text-gray-700">20240422_AF_556_016_00000.006.gpg</TableCell>
                            <TableCell className="text-center text-gray-700">repore/envio/355/</TableCell>
                            <TableCell className="text-center text-gray-700">repore/envio/355/</TableCell>
                            <TableCell className="text-center text-gray-700">2024/06/18 10:00</TableCell>
                            <TableCell className="text-center text-gray-700"></TableCell>
                        </TableRow>
                        {/* Agrega más filas según sea necesario */}
                    </TableBody>
                </Table>
            </main>
        </>
    );
}

export default BuzonEnvio;
