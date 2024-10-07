import { defineConfig } from "tinacms";

// Determina la rama que se va a utilizar; puede ser configurada mediante variables de entorno
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // ID del cliente de TinaCMS
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // Asegúrate de que esté configurado en el entorno
  token: process.env.TINA_TOKEN, // Asegúrate de que esté configurado en el entorno

  build: {
    outputFolder: "admin", // Carpeta donde se generará la interfaz de administración
    publicFolder: "public", // Carpeta pública para recursos
  },
  media: {
    tina: {
      mediaRoot: "../../public/images", // Establece la raíz de los medios si es necesario
      publicFolder: "public", // Carpeta pública para los medios
    },
  },
  
  // Configuración del esquema de contenido
  schema: {
    collections: [
      {
        name: "posts", // Este nombre debe coincidir con lo que usas en getCollection
        label: "Posts", // Nombre que se mostrará en la interfaz de administración
        path: "content/posts", // Ruta donde se almacenarán los archivos de contenido
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true, // Define este campo como el título principal
            required: true, // Este campo es obligatorio
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true, // Este campo es obligatorio
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true, // Este campo es obligatorio
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true, // Define este campo como el cuerpo del post
          },
        ],
      },
    ],
  },

});