import { jwtDecode } from 'jwt-decode';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    console.log('im executing me');

    const url = request.nextUrl.clone();
    const token = request.cookies.get('token');

    console.log('token', token);

    /*if (token) {
        //@ts-ignore
        const decodedToken: any = jwtDecode(token.value);

        console.log('decodedToken', decodedToken);

        if (decodedToken.exp * 1000 < Date.now()) {
            // Caducó el token, limpiar cookies y redirigir
            request.cookies.clear();
            return NextResponse.rewrite(new URL('/login', request.url));
        }

        if (url.pathname === '/login' || url.pathname === '/register') {
            // Usuario autenticado intenta acceder a /login o /register, redirigir a la página de inicio
            url.pathname = '/';
            return NextResponse.redirect(url);
        }

        return NextResponse.next();
    } else {
        if (url.pathname === '/dashboard') {
            // Usuario no autenticado intenta acceder a /, redirigir a la página de inicio de sesión
            url.pathname = '/login';
            return NextResponse.redirect(url);
        }

        return NextResponse.next();
    }*/
}

export const config = {
    matcher: ['/login', '/', '/((?!api|_next|.*\\..*).*)'],
};