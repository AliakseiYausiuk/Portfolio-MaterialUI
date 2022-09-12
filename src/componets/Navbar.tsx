import Fab from '@material-ui/core/Fab/Fab'
import Grid from '@material-ui/core/Grid/Grid'
import Tooltip from '@material-ui/core/Tooltip/Tooltip'
import React from 'react'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import {v1} from 'uuid'
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    fabStyle: {
        background: '#ffc107'
    }
});


export const Navbar = () => {

    const classes = useStyles()

    const sidebarArr = [
        {id: v1(), title: 'Home', icon: <HomeOutlinedIcon/>},
        {id: v1(), title: 'Person', icon: <PermIdentityOutlinedIcon/>},
        {id: v1(), title: 'Work', icon: <WorkOutlineIcon/>},
        {id: v1(), title: 'Contact', icon: <MailOutlineIcon/>},
        {id: v1(), title: 'Hobbies', icon: <FavoriteBorderOutlinedIcon/>},
    ]


    return (
        <>
            {sidebarArr.map(el => {
                return <Grid item id={el.id}>
                    <Tooltip key={el.id} title={el.title}>
                        <Fab className={classes.fabStyle} color="secondary"> {el.icon}</Fab>
                    </Tooltip>
                </Grid>
            })}
        </>
    )
}
