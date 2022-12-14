import Theme from './theme/theme';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './components/DashboardComponent/Dashboard';
import UploadComponent from './components/UploadComponent';
import LoaderComponent from './components/LoaderComponent';
import LoaderSpinnerContextProvider from './context/LoaderSpinnerContextProvider';
import Detail from './pages/detail';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import { ResponsiveContainer } from 'recharts';
import Latestdocument from './Latestdocument';




function App() {

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      
    </Box>
  );

  return (
    <Theme>
      <LoaderSpinnerContextProvider>
        <BrowserRouter>
          <LoaderComponent />
          <Routes>
            <Route path="/" element={<>
              <Dashboard>
              <Grid container spacing={2}>
            
                  <Grid item xs={12}>
                    <React.Fragment>
                      <CssBaseline />
                      <Container maxWidth="full" >
                        <Box sx={{ bgcolor: 'white', height: '100%' , borderRadius: '0.5rem', border: '0.063rem solid #DFE0EB'}}>
                          <Box sx={{ padding: '10px'}}>
                            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' ,fontSize: '160%' }}>
                             
                              Ultimos documentos publicados
                               
                            </Typography>
                            <Typography sx={{ mb: 1.5, fontSize: '0.8rem' }}>
                              <span sx={{ color: '#808080' }}> Group: </span> <span sx={{ color: 'black' }}>Support</span>
                            </Typography>
                          </Box>

                          <List sx={{ width: '100%', bgcolor: 'background.paper', padding: '10px', borderRadius: '0.5rem', border: '0.063rem solid #DFE0EB'}}
                          >
                           <Latestdocument/>
                          </List>

                        </Box>
                        
                      </Container>
                    </React.Fragment>
                  </Grid>
                </Grid>

              </Dashboard>
            </>} />
            <Route path="/upload" element={<>
              <Dashboard>
                <UploadComponent />
              </Dashboard>
            </>} />
            <Route path="/detail/:slug" element={<>
              <Dashboard>
                <Detail />
              </Dashboard>
            </>} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </LoaderSpinnerContextProvider>
    </Theme>
  );
  
}

export default App;
