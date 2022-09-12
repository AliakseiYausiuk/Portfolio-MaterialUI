import Grid from '@material-ui/core/Grid/Grid';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import './App.css';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Typography from '@material-ui/core/Typography/Typography';
import CardActions from '@material-ui/core/CardActions/CardActions';
import {Navbar} from './componets/Navbar';
import {Resume} from './componets/pages/Resume';
import {Route, BrowserRouter} from 'react-router-dom';
import {Portfolio} from './componets/pages/Portfolio';
import {Contact} from './componets/pages/Contact';
import {Blog} from './componets/pages/Blog';


const useStyles = makeStyles({
    gridHeight: {
        height: '90%',

        borderRadius: '15px',
        textAlign: 'center',
    },
    gridRoot: {
        height: '100vh',
        position: 'relative',
    },
    fabStyle: {
        background: '#ffc107'
    }
});

function App() {
    const classes = useStyles();


    return (
        <BrowserRouter>
            <div className="App">
                <div className="yellow"></div>
                <Grid container className={classes.gridRoot} alignItems="center" justify="space-around">
                    <Grid item xs={3} className={classes.gridHeight} style={{
                        backgroundImage: `https://source.unsplash.com/random`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}></Grid>
                    <Grid item container xs={4} className={classes.gridHeight} alignItems="center" justify="center">
                        <Grid item xs={12}>
                            <Card style={{background: '#111', color: 'white'}}>
                                <CardContent>
                                    <Typography gutterBottom>
                                        HI THERE !
                                    </Typography>
                                    <Typography variant="h1" component="h1" style={{
                                        color: '#ffb400',
                                        fontSize: '45px',
                                        lineHeight: '45px',
                                        fontWeight: 'bold',
                                    }}>
                                        I'M ALIAKSEI YAUSIUK.
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        I am a beginner web developer.
                                        I am passionate about building excellent software that improves the lives of
                                        those
                                        around me.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Fab className={classes.fabStyle} variant="extended" color="secondary">
                                        More about me <PermIdentityOutlinedIcon/>
                                    </Fab>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid item container xs={1} className={classes.gridHeight} direction="column" justify="center"
                          alignItems="center" spacing={4}>
                        <Navbar/>
                    </Grid>
                </Grid>
                <Route  component={Resume}/>
                <Route component={Portfolio}/>
                <Route component={Contact}/>
                <Route component={Blog}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
