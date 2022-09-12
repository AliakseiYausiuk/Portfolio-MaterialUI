import Grid from '@material-ui/core/Grid/Grid'
import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box/Box';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    resumeItem: {
        background: '#111',
        height: '1000px'
    },
    headingResume: {
        fontSize: '110px',
        letterSpacing: '10px',
        lineHeight: '0.7',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        position: 'absolute',
        transform: 'translateY(-50%)',
        color: 'rgba(255, 255, 255, 0.07)',
    },
    textResume: {
        fontSize: '56px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
});



export const Resume = () => {

    const classes = useStyles()

    return (
        <Grid container xs={12} className={classes.resumeItem}>
            <Grid item container xs={12} justify="center" alignItems="center" style={{ height: '250px' }}>
                <Box component='span' className={classes.headingResume}>
                    Resume
                </Box>
                <Typography variant='h1'>About me</Typography>
            </Grid>
            <Grid item xs={12}></Grid>
        </Grid>
    )
}
