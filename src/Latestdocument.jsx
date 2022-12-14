import React, {useState, useEffect} from 'react'
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'; 
import Link from '@mui/material/Link';
import ListItemText from '@mui/material/ListItemText';



const Latestdocument = () => { 
     const [documentos, setDocumentos] = useState([])
      

     const URL = 'https://jsonplaceholder.typicode.com/posts'
     
     const showData = async () => { 

        const response = await fetch(URL)
        const data = await response.json() 
        setDocumentos(data)
        
     }

     useEffect( () => {
     showData()
     
}, []) 
     return(

        <div>
            {    
        
                documentos.slice(0,5).map((Documentos ) => ( 
                        <ListItem
                              key={Documentos.id}
                              disableGutters
                              //lg={{ borderBottom: 'solid #DFE0EB 0.1rem ', display: 'flex', flexDirection: 'row'}}
                              sx={{ borderBottom: 'solid #DFE0EB 0.1rem ', display: 'flex'}}
                           > 
                           <ListItemText
                                primary={Documentos.title} />
                                <IconButton aria-label="comment" 
                                sx={{marginTop: '0.2rem', fontSize: '1rem'}}>   
                                  <Link sx={{ fontSize: '1rem'}} href="#">View details</Link> 
                                  <Typography sx={{ marginLeft: '5px', fontSize: '1rem' }}>
                                   {Math.floor((Math.random() * (250 - 200 + 1)) + 200)}pag
                                  </Typography>
                                  
                                </IconButton>
                            </ListItem> 
                       
                         
                ))
            }
        </div>
     )
}
 
export default Latestdocument