# Pizarra Frontend

**Pizarra** es una red social ligera inspirada en Twitter/X. Esta es la interfaz desarrollada con **React.js**, diseñada para interactuar con el [backend de Pizarra](https://github.com/sebsolezzi88/Backend-Pizzarra) construido en Node.js y Sequelize.

Permite a los usuarios registrarse, iniciar sesión, crear publicaciones (pizarras), comentar, seguir a otros usuarios, y próximamente dar likes.

---

## 🚀 Tecnologías utilizadas

- [React](https://es.react.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Context API](https://react.dev/reference/react/createContext) para manejo de autenticación
- [LocalStorage](https://es.javascript.info/localstorage) para persistencia del token y usuario

---

## ⚙️ Funcionalidades principales

✅ Registro e inicio de sesión de usuarios  
✅ Ver todos los posts ("pizarras")  
✅ Comentar en posts  
✅ Ver comentarios de un post  
✅ Seguir y dejar de seguir usuarios  
✅ Ver perfil de otros usuarios  
🚧 Likes (en desarrollo)

---

## 🔐 Autenticación

La autenticación se gestiona con JWT. Al iniciar sesión, el token se guarda en `localStorage` y se incluye automáticamente en los headers de cada request protegida:

```js
Authorization: Bearer <token>
```

---

## 📁 Estructura de carpetas

```
src/
│
├── api/             # Funciones Axios para llamadas al backend
├── components/      # Componentes reutilizables (Navbar, Alertas, etc.)
├── context/         # Contexto de autenticación
├── pages/           # Vistas principales (Login, Registro, Home, Perfil, etc.)
├── utils/           # Funciones auxiliares (formato de fechas, validaciones, etc.)
└── App.jsx          # Rutas principales
```

---

## 🔄 Conexión al backend

El frontend se comunica con las siguientes rutas del backend:

| Función        | Método | Endpoint Backend               |
|----------------|--------|--------------------------------|
| Registro       | POST   | `/api/user/register`           |
| Login          | POST   | `/api/user/login`              |
| Ver posts      | GET    | `/api/post`                    |
| Crear post     | POST   | `/api/post`                    |
| Comentar       | POST   | `/api/comment/:postId`         |
| Ver comentarios| GET    | `/api/comment/post/:postId`    |
| Seguir usuario | POST   | `/api/follower/:id/follow`     |
| Ver seguidores | GET    | `/api/follower/:id/followers`  |

---

## 🔧 Instalación y uso

1. Cloná el proyecto:

```bash
git clone https://github.com/sebsolezzi88/Frontend-Pizzarra-
cd pizarra-frontend
```

2. Instalá las dependencias:

```bash
npm install
```

3. Configurá la URL del backend si es necesario (por ejemplo, en un archivo `.env` o directamente en `api/auth.js`, `api/follower.js` y `api/post.js`).

4. Ejecutá la app:

```bash
npm run dev
```

---

## 📸 Capturas

![Login Sitio](https://i.imgur.com/gmPhXf4.png)
![Imagen Sitio](https://i.imgur.com/HPftML4.png)
---

## 📌 Notas

- El módulo de likes aún está en desarrollo.
- Este frontend fue creado como práctica personal y aún está en evolución.
- Las publicaciones y comentarios usan validación mínima. En el futuro se puede agregar sanitización y mejoras de UX.

---

## 📫 Autor

GitHub: [@Sebastián Solezzi](https://github.com/sebsolezzi88)

---