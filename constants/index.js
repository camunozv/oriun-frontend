import sql from "better-sqlite3";
export const LINKS_ESTUDIANTE = [
    {href:"/ConvocatoriasEstudiante", key:"convocatorias_cerradas", label:"Convocatorias"},
    {href:"/MisConvocatorias", key:"mis_convocatorias", label:"Mis Convocatorias"},
]

export const LINKS_ADMIN = [
    {href:"/ConvocatoriasAdmin", key:"consultar_convocatorias", label:"Convocatorias"},
    {href:"/ConvocatoriasAdmin/CrearConvocatoria", key:"crear_convocatorias",label:"Crear Convocatorias"},
]

export const ACCESS_TOKEN = 'access';
export const REFRESH_TOKEN = 'refresh';

// Dentro de consultar convocatorias se mostraran las convocatorias publicadas, para las que habrá un botón de opciones
// allí se desplegarán las opciones del crud que puede hacer el admin.

// Para la opción de crear convocatorias simplemente se desplegará un formulario en el cual el admin podrá publicar las 
// convocatorias que desee.