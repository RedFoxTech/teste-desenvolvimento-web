import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useTheme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

import { useHistory } from "react-router-dom";

//Importações locais
import { logout } from '../../services/authentication'

const useStyles = makeStyles(() => ({

    bar: {
        justifyContent: 'space-between'
    },
    appbar: {
        backgroundColor: 'slategray'
    },
    title: {
        fontFamily: ['Manrope', 'sans-serif'],
        fontSize: 30,
        marginTop: '1em',
        marginBottom: '1em'
    },
    txtAccount: {
        marginBottom: '1em'
    }
}));

function ThemePage(props) {

    const classes = useStyles();
    const history = useHistory();
    const minW = useMediaQuery('(min-width: 415px)');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [openAccount, setOpenAccount] = React.useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleToExit = () => {
        logout();
        history.push("/");
    }

    const handleToGoback = () => {
        history.goBack();
    }

    const handleOpenAccount = () => {
        setOpenAccount(true);
        handleClose(false);
    };

    const handleCloseAccount = () => {
        setOpenAccount(false);
    };

    return (

        <div style={{ flexGrow: 1 }}>
            <AppBar position="relative" className={classes.appbar}>
                <Toolbar className={classes.bar}>
                    {
                        props.btnBack ?
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleToGoback}
                                color="inherit"
                                edge="start"
                            >
                                <ArrowBackIcon />
                            </IconButton>
                            :
                            <div></div>
                    }
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleClick}
                        color="inherit"
                        edge="end"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleOpenAccount}>Minha conta</MenuItem>
                        <MenuItem onClick={handleToExit}>Sair</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="xl">
                    <Typography component="div" style={{ height: 'auto' }}>
                        <header className={classes.title} style={{ textAlign: !minW ? 'center' : null }}>{props.pageTitle}</header>
                        {props.children}
                    </Typography>
                </Container>
            </React.Fragment>
            <Dialog
                fullScreen={fullScreen}
                open={openAccount}
                onClose={handleCloseAccount}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Minha conta"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Aqui você poder visualizar ou atualizar seus dados.
                    </DialogContentText>
                    <TextField
                        id="outlined-basic-name"
                        label="Nome"
                        variant="outlined"
                        type="text"
                        fullWidth
                        //value={}
                        className={classes.txtAccount}
                        InputLabelProps={{
                            style: {
                                fontSize: 18,
                                fontFamily: ['Poiret One', 'cursive'],
                            },
                        }}
                        inputProps={{
                            style: {
                                fontSize: 25,
                                fontFamily: ['Poiret One', 'cursive'],
                            },
                        }}
                    />
                    <TextField
                        id="outlined-basic-email"
                        label="Email"
                        variant="outlined"
                        type="email"
                        fullWidth
                        //value={}
                        className={classes.txtAccount}
                        InputLabelProps={{
                            style: {
                                fontSize: 18,
                                fontFamily: ['Poiret One', 'cursive'],
                            },
                        }}
                        inputProps={{
                            style: {
                                fontSize: 25,
                                fontFamily: ['Poiret One', 'cursive'],
                            },
                        }}
                    />
                    <TextField
                        id="outlined-basic-pass"
                        label="Senha"
                        variant="outlined"
                        type="password"
                        fullWidth
                        placeholder="******"
                        className={classes.txtAccount}
                        InputLabelProps={{
                            style: {
                                fontSize: 18,
                                fontFamily: ['Poiret One', 'cursive'],
                            },
                        }}
                        inputProps={{
                            style: {
                                fontSize: 25,
                                fontFamily: ['Poiret One', 'cursive'],
                            },
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleCloseAccount} color="primary">
                        Fechar
                </Button>
                    <Button onClick={handleCloseAccount} color="primary" autoFocus>
                        Salvar
                </Button>
                </DialogActions>
            </Dialog>
        </div>

    );
}

export default ThemePage;