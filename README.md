# Apolo
Un buscador de canciones que utiliza la [API de Spotify](https://developer.spotify.com/documentation/web-api/) para obtener los datos de las canciones y [lyricsovh](https://lyricsovh.docs.apiary.io/#) para las letras de las mismas. La aplicación permite: ver detalles y reproducir una preview de la canción buscada, siempre que este recurso este disponible.

![2](https://i.ibb.co/YTDp7cd/responsive-apolo.png)

## Video de presentación
#### **`¡IMPORTANTE!`**
Los videos en modo ventana se reproducen en calidad baja (360p), recomiendo ponerlos en pantalla completa para verlos en 720p o bien ajustar la calidad manualmente. 
[![apolo-yt](https://i.ibb.co/0CPfth7/apolo-yt.png)](https://drive.google.com/file/d/1nA2AtV3LSzcH7RouyZo5MpNO267axh4e/view?usp=sharing)

## Live demo
https://apolo-kev357.herokuapp.com

## Tecnologías
- ![10](https://i.ibb.co/hXmqN5t/typescript.png) TypeScript
- ![11](https://i.ibb.co/7Yb8sZf/react.png) React.JS
- ![12](https://i.ibb.co/fNzydrw/sc.png) Styled Components

## Recursos
Utilizada [Spotify API](https://developer.spotify.com/documentation/web-api/) para consumir recursos de las canciones.

![12](https://i.ibb.co/56Svtgx/spotify-api-overview.png)

## Instalación
Para instalar el proyecto descargue y abra en su editor de código, o bien desde la consola de preferencia y ejecute el comando **`npm install`**. Esto comenzara a instalar todas las dependencias necesarias para correr el proyecto.

**NOTA:** Necesitará obtener las credenciales de [Spotify](https://developer.spotify.com/documentation/web-api/) y asignar las claves en un archivo **`.env`** con los siguientes nombres:
- **REACT_APP_CLIENT_ID**
- **REACT_APP_CLIENT_SECRET**

## Ejecutar
Para hacerlo utilice el comando **`npm start`**, esto ejecutara el proyecto automáticamente en su navegador predeterminado, en el siguiente enlace: http://localhost:3000/.
