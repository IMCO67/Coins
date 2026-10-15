import React, { useContext } from 'react'
import { ContextAuthor } from '../context/ContextAuthor'
import { Box, Typography, Paper, Divider } from '@mui/material'

export const About = () => {
  const { author } = useContext(ContextAuthor);

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', p: 3 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" color="primary" fontWeight="bold" gutterBottom textAlign="center">
          Acerca de este Proyecto
        </Typography>
        
        <Typography variant="subtitle1" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
          Desarrollado por <strong>{author}</strong>
        </Typography>

        <Divider sx={{ mb: 4 }} />

        {/* Sección 1: Objetivo de la página */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" color="secondary" fontWeight="bold" gutterBottom>
            1. Objetivo de la Página
          </Typography>
          <Typography variant="body1" paragraph align="justify">
            Esta plataforma fue diseñada y creada por {author} con la finalidad de ofrecer una herramienta accesible, clara e interactiva para monitorear el dinámico mercado de las criptomonedas en tiempo real. Su propósito principal es democratizar el acceso a la información financiera, permitiendo a cualquier usuario, desde principiantes hasta entusiastas de la tecnología, consultar datos clave sobre los activos digitales más relevantes del mundo.
          </Typography>
          <Typography variant="body1" paragraph align="justify">
            A través de una interfaz visualmente limpia y moderna, la aplicación simplifica la exploración de cotizaciones y detalles específicos de cada activo. Además de funcionar como un panel de consulta rápida, busca servir como un portal educativo que facilite la comprensión del comportamiento del mercado cripto global.
          </Typography>
        </Box>

        {/* Sección 2: ¿Qué son las monedas virtuales? */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" color="secondary" fontWeight="bold" gutterBottom>
            2. ¿Qué son las Monedas Virtuales?
          </Typography>
          <Typography variant="body1" paragraph align="justify">
            Las monedas virtuales, conocidas popularmente como criptomonedas o activos digitales, son medios de intercambio digitales diseñados para transferir valor de manera rápida y directa entre personas. A diferencia de las monedas tradicionales expedidas por bancos centrales, la mayoría de las criptomonedas operan de forma descentralizada mediante tecnologías criptográficas avanzadas.
          </Typography>
          <Typography variant="body1" paragraph align="justify">
            La piedra angular de este ecosistema es la tecnología <em>blockchain</em> (o cadena de bloques), un libro contable público, inalterable y transparente que registra todas las transacciones dentro de la red. Esto garantiza la autenticidad, previene la falsificación de activos y elimina la necesidad de intermediarios en las operaciones financieras.
          </Typography>
        </Box>

        {/* Sección 3: ¿Por qué conviene conocer las monedas virtuales? */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h5" color="secondary" fontWeight="bold" gutterBottom>
            3. ¿Por qué Conviene Conocer las Monedas Virtuales?
          </Typography>
          <Typography variant="body1" paragraph align="justify">
            Comprender el funcionamiento de las monedas virtuales es fundamental en la actualidad, ya que representan una de las mayores innovaciones tecnológicas del siglo XXI. El ecosistema cripto no solo ha transformado la manera en que entendemos el dinero, sino que también ha impulsado nuevos paradigmas en contratos inteligentes, finanzas descentralizadas (DeFi) y economía digital transfronteriza.
          </Typography>
          <Typography variant="body1" paragraph align="justify">
            Estar informado sobre estas tecnologías permite a los usuarios tomar decisiones financieras conscientes, entender la evolución del comercio electrónico global y mantenerse preparados ante la inevitable digitalización de la economía. Conocer estos activos contribuye a mitigar riesgos y comprender las tendencias que darán forma al futuro financiero.
          </Typography>
        </Box>
      </Paper>
    </Box>
  )
}