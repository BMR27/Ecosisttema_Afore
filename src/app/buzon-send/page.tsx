// components/Dashboard.js
import React from "react";
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
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                <div className="flex items-center">
                    <form>
                    <h3 className="text-2xl font-bold tracking-tight">
                        Panel Administrativo para Buzon de Archivos
                    </h3>
                    <br></br>
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-6 w-6 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search products..."
                                className="w-full md:w-96 lg:w-128 appearance-none bg-background pl-10 pr-4 shadow-none"
                            />
                        </div>
                        <br></br>
                        <h3 className="text-2xl font-bold tracking-tight">
                        Envio de Archivos
                        </h3>
                    </form>
                </div>
                <div className="flex flex-row gap-4">
  {/* Primera columna */}
    <div className="flex-1 items-center justify-left rounded-lg border border-dashed shadow-sm p-4">
        <div>
            <div className="flex items-center gap-4">
                <label htmlFor="tipoTransferencia" className="text-left w-48">
                Tipo de Transferencia:
                </label>
                <input type="text" id="tipoTransferencia" name="tipoTransferencia" className="p-2 border rounded-md w-40 bg-gray-100 text-gray-500 cursor-not-allowed" value="Envio" readOnly/>
            </div>
            <br />
            <div className="flex items-center gap-4">
                <label htmlFor="institucionOrigen" className="text-left w-48">
                Institucion de Origen:
                </label>
                <input type="text" id="institucionOrigen" name="institucionOrigen" className="p-2 border rounded-md w-40 bg-gray-100 text-gray-500 cursor-not-allowed" value="Grupo Salinas"
            readOnly/>
            </div>
            <br/>
            <div className="flex items-center gap-4">
                <label htmlFor="rutaOrigenDoc" className="text-left w-48">
                Ruta de Origen :
                </label>
                    <DropdownButton className="p-2 border rounded-md w-60 bg-gray-100 text-gray-500 cursor-not-allowed" title="Seleccionar un Archivo" id="dropdown-button">
                        <button className="p-2 border rounded-md bg-gray-100 text-gray-800 bg-gray-100 text-gray-500 cursor-not-allowed">
                            Seleccionar un Archivo
                        </button>
                        <DropdownMenu>
                            <ul className="bg-white border rounded-md shadow-md ">
                            <li className="py-1 px-3 hover:bg-gray-100">Opción 1</li>
                            <li className="py-1 px-3 hover:bg-gray-100">Opción 2</li>
                            <li className="py-1 px-3 hover:bg-gray-100">Opción 3</li>
                            </ul>
                        </DropdownMenu>
                    </DropdownButton>

            </div>
        </div>
    </div>

  {/* Segunda columna */}
  <div className="flex-1 items-center justify-left rounded-lg border border-dashed shadow-sm p-4">
        <div>
            <div className="flex items-center gap-4">
                <label htmlFor="tipoTransferencia" className="text-left w-48">
                Nombre del Archivo:
                </label>
                <input type="text" id="tipoTransferencia" name="tipoTransferencia" className="p-2 border rounded-md w-60"/>
            </div>
            <br />
            <div className="flex items-center gap-4">
                <label htmlFor="institucionOrigen" className="text-left w-48">
                Entidad de Envio :
                </label>
                <DropdownButton className="p-2 border rounded-md w-60 bg-gray-100 text-gray-500 cursor-not-allowed" title="Seleccionar una Entidad" id="dropdown-button">
                        <button className="p-2 border rounded-md bg-gray-100 text-gray-800 bg-gray-100 text-gray-500 cursor-not-allowed">
                            Seleccionar una Entidad
                        </button>
                        <DropdownMenu>
                            <ul className="bg-white border rounded-md shadow-md ">
                            <li className="py-1 px-3 hover:bg-gray-100">Procesar</li>
                            <li className="py-1 px-3 hover:bg-gray-100">Consar</li>
                            </ul>
                        </DropdownMenu>
                    </DropdownButton>
            </div>
            <br/>
            <div className="flex items-center gap-4">
                <label htmlFor="rutaOrigenDoc" className="text-left w-48">
                Ruta de Destino :
                </label>
                    <DropdownButton className="p-2 border rounded-md w-60 bg-gray-100 text-gray-500 cursor-not-allowed" title="Seleccionar un Archivo" id="dropdown-button">
                        <button className="p-2 border rounded-md bg-gray-100 text-gray-800 bg-gray-100 text-gray-500 cursor-not-allowed">
                            Seleccionar un Archivo
                        </button>
                        <DropdownMenu>
                            <ul className="bg-white border rounded-md shadow-md ">
                            <li className="py-1 px-3 hover:bg-gray-100">Opción 1</li>
                            <li className="py-1 px-3 hover:bg-gray-100">Opción 2</li>
                            <li className="py-1 px-3 hover:bg-gray-100">Opción 3</li>
                            </ul>
                        </DropdownMenu>
                    </DropdownButton>

            </div>  
        </div>
    </div>
</div>
<div className="flex justify-center">
    <button className="mt-1 px-20 py-1.5 bg-green-500 text-white rounded-md text-lg hover:bg-black-600">
        Realizar Envío
    </button>
</div>

<Table>
  <TableCaption></TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="text-left">Tipo de Transferencia</TableHead>
      <TableHead>Numero de Proceso CD</TableHead>
      <TableHead>Nombre de Archivo</TableHead>
      <TableHead>Ruta Origen</TableHead>
      <TableHead>Ruta Destino</TableHead>
      <TableHead>Fecha</TableHead>
      <TableHead className="text-right">Detalle</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">Envio</TableCell>
      <TableCell className="text-center">9938765</TableCell>
      <TableCell className="text-center">20240422_AF_556_016_00000.006.gpg</TableCell>
      <TableCell className="text-center">repore/envio/355/</TableCell>
      <TableCell className="text-center">repore/envio/355/</TableCell>
      <TableCell className="text-center">2024/06/18 10:00</TableCell>
      <TableCell className="text-center">
            <Button variant="primary" size="small" className="ml-2">
                Buscar
            </Button>
        </TableCell>
      
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">Envio</TableCell>
      <TableCell className="text-center">993645</TableCell>
      <TableCell className="text-center">20240422_AF_556_016_00000.006.gpg</TableCell>
      <TableCell className="text-center">repore/envio/355/</TableCell>
      <TableCell className="text-center">repore/envio/355/</TableCell>
      <TableCell className="text-center">2024/06/18 10:00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">Envio</TableCell>
      <TableCell className="text-center">998445</TableCell>
      <TableCell className="text-center">20240422_AF_556_016_00000.006.gpg</TableCell>
      <TableCell className="text-center">repore/envio/355/</TableCell>
      <TableCell className="text-center">repore/envio/355/</TableCell>
      <TableCell className="text-center">2024/06/18 10:00</TableCell>
    </TableRow><TableRow>
      <TableCell className="font-medium">Envio</TableCell>
      <TableCell className="text-center">986645</TableCell>
      <TableCell className="text-center">20240422_AF_556_016_00000.006.gpg</TableCell>
      <TableCell className="text-center">repore/envio/355/</TableCell>
      <TableCell className="text-center">repore/envio/355/</TableCell>
      <TableCell className="text-center">2024/06/18 10:00</TableCell>
    </TableRow>

  </TableBody>
</Table>



            </main>
        </>
    );
}

export default BuzonEnvio;
