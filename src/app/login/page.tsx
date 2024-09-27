import Image from 'next/image';
import { Input } from '@/components/ui/input';
import logo from '@/assets/images/login/afore.jpeg';
import { Button } from '@/components/ui/button';
import { requestImageBackground } from '@/api/auth';

const getData = async () => {
    const response = await requestImageBackground();
    return response.data;
}

const Login = async () => {
    const data = await getData();

    return (
        <div className="min-h-screen flex flex-col sm:flex-row">
            <div className="centered-div">
                <Image
                  src="/assets/images/background/Afore_1.jpg"
                  alt=""
                  width={1500}
                  height={100}
                />
              </div>
            {/* Left Section 
            <div className="hidden sm:flex sm:w-1/2 items-center justify-center" style={{
                backgroundImage: `url(${data.links.download || '/assets/images/background/default.jpeg'
                    })`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                opacity: 0.8,
            }}>
                {/* <div className="text-white text-center p-8">
                    <h1 className="text-4xl font-bold mb-4">¡Bienvenido!</h1>
                    <h1 className="text-4xl">Ecosistema Afore Azteca</h1>
                    <br></br>
                    <img className="mx-auto h-auto mb-1" src="/images/login/gruposalinas3.jpeg" alt="Imagen de inicio de sesión" style={{ maxWidth: '150%', maxHeight: '1500px' }} />
                </div> 
            </div> */}

            {/* Right Section */}
            <div className="w-full sm:w-1/2 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <Image src={logo} alt='Afore Logo' className="mx-auto h-auto mb-6" width={250} height={250} style={{ maxWidth: '80%', maxHeight: '300px' }} />
                        <div className="text-black text-center p-8">
                            <h1 className="text-4xl font-bold mb-4">¡Bienvenido!</h1>
                            <h1 className="text-2xl font-bold mb-4">Regulatorios Afore Azteca</h1>
                            <p className="text-lg">Inicia sesión para continuar a tu cuenta</p>
                        </div>
                        <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">Iniciar sesión</h2>
                    </div>
                    <form className="mt-8 space-y-6">
                        <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="username" className="sr-only">Usuario</label>
                            <Input
                                id="username"
                                name="username"
                                type="text"
                                required
                                className="appearance-none rounded-lg relative block w-full px-3 py-5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Usuario"
                            />
                            </div>
                            <br></br>
                            <div>
                            <label htmlFor="password" className="sr-only">Contraseña</label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                security={'true'}
                                required
                                className="appearance-none rounded-lg relative block w-full px-3 py-5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Contraseña"
                            />
                            </div>
                        </div>

                        <div>
                        <Button
                        className="group relative w-full flex justify-center py-6 px-8 border border-transparent text-sm font-medium rounded-md text-white bg-[#28603B] hover:bg-[#1e4a29] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        variant="outline"
                        >
                        Iniciar sesión
                        </Button>
                        </div>
                        <div>
                            <Button
                                type="submit"
                                className="group relative w-full flex justify-center py-6 px-3 border border-transparent text-sm font-medium rounded-md text-black bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                variant="outline"
                            >
                                Olvidé Contraseña
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
