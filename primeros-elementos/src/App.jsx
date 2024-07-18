import { Box, Button, Container, Typography } from "@mui/material";

export default function app () {
  return(
    <Container maxWidth='sm'
    sx={{ border:2, boxShadow: 8, pb: 2, m: 3}}>
      <Typography variant="h1" component='h3' textAlign='center' color='orange' mt={5}>
        Primeros componentes
      </Typography> 
      <Box sx={{border:2, m:4, p:2, bgcolor:'lightgray', borderColor:'red'}}>
        <Typography variant="h4" component='span'>
          Nuevo Box 
        </Typography>
      </Box>
    
      <Button variant="contained">Mi primer boton</Button>    
    </ Container>
  )
}