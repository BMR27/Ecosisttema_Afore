# Usa una imagen base de Node.js
FROM node:18 AS build

# Establece el directorio de trabajo
WORKDIR /app

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
CMD ["npm", "start"]