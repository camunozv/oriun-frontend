export const ACCESS_TOKEN = 'access';
export const REFRESH_TOKEN = 'refresh';

export const LINKS_ESTUDIANTE = [
    {href:"/Convocatorias/ConvocatoriasEstudiante/ConvocatoriasAbiertas", key:"convocatorias_abiertas", label:"Convocatorias Abiertas"},
    {href:"/Convocatorias/ConvocatoriasEstudiante/ConvocatoriasCerradas", key:"convocatorias_cerradas", label:"Convocatorias Cerradas"},
    {href:"/MisConvocatorias", key:"mis_convocatorias", label:"Mis Convocatorias"},
]

export const LINKS_ADMIN = [
    {href:"/Convocatorias/ConvocatoriasAdmin/ConvocatoriasAbiertas", key:"consultar_abiertas", label:"Convocatorias Abiertas"},
    {href:"/Convocatorias/ConvocatoriasAdmin/ConvocatoriasCerradas", key:"consultar_cerradas", label:"Convocatorias Cerradas"},
    {href:"/Convocatorias/ConvocatoriasAdmin/CrearConvocatorias", key:"crear_convocatorias",label:"Crear Convocatorias"},
]

// Dentro de consultar convocatorias se mostraran las convocatorias publicadas, para las que habrá un botón de opciones
// allí se desplegarán las opciones del crud que puede hacer el admin.

// Para la opción de crear convocatorias simplemente se desplegará un formulario en el cual el admin podrá publicar las 
// convocatorias que desee.