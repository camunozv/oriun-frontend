export const LINKS_ESTUDIANTE = [
    {href:"/ConvocatoriasDisponibles", key:"convocatorias_disponibles", label:"Convocatorias Disponibles"},
    {href:"/ConvocatoriasCerradas", key:"convocatorias_cerradas", label:"Convocatorias Cerradas"},
    {href:"/MisConvocatorias", key:"mis_convocatorias", label:"Mis Convocatorias"},
]

export const LINKS_ADMIN = [
    {href:"/ConvocatoriasAdmin/CrearConvocatoria", key:"crear_convocatorias",label:"Crear Convocatorias"},
    {href:"/ConvocatoriasAdmin", key:"consultar_convocatorias", label:"Consultar Convocatorias"},
]

// Dentro de consultar convocatorias se mostraran las convocatorias publicadas, para las que habrá un botón de opciones
// allí se desplegarán las opciones del crud que puede hacer el admin.

// Para la opción de crear convocatorias simplemente se desplegará un formulario en el cual el admin podrá publicar las 
// convocatorias que desee.