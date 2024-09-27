# Usa una imagen base de Node.js
<<<<<<< HEAD
FROM node:18 AS build
=======
FROM node:18-alpine
>>>>>>> 7802a7b6e9a23e1267cc18796040aaa6c5142b0c

# Establece el directorio de trabajo
WORKDIR /app

<<<<<<< HEAD
# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Construye la aplicación Next.js
RUN npm run build

# Usa una imagen base de Node.js para producción
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias de producción
RUN npm install --only=production

# Copia los archivos construidos desde el paso de build
COPY --from=build /app/.next .next
COPY --from=build /app/public public
COPY --from=build /app/node_modules node_modules

# Expone el puerto en el que la aplicación Next.js corre
EXPOSE 3000

# Define el comando para iniciar la aplicación
=======
# Copia package.json y package-lock.json
COPY package*.json ./

# Copia el directorio node_modules local al contenedor
COPY node_modules ./node_modules

# Copia el resto de los archivos de la aplicación
COPY . .

# Construye la aplicación
RUN npm run build

# Expone el puerto 3000
EXPOSE 3000

# Comando para ejecutar la aplicación
>>>>>>> 7802a7b6e9a23e1267cc18796040aaa6c5142b0c
CMD ["npm", "start"]