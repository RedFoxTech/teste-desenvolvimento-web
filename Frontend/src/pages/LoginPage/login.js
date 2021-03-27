import React, { useState } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { useHistory } from "react-router-dom";

//Importações locais
import { login } from '../../services/authentication';
import API from '../../services/api';

const useStyles = makeStyles(() => ({
    container: {
        height: '100vh'
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: '50%',
        left: '50%',
        transform: 'translateY(-50%) translateX(-50%)',
    },
    title: {
        fontFamily: ['Manrope', 'sans-serif'],
        fontSize: 80
    },
    input: {
        marginTop: '1em'
    },
    btnEntrar: {
        margin: '1em 0 1em 0'
    },
}));

export default function LoginPage() {

    const classes = useStyles();
    let history = useHistory();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = React.useState(false);
    const [feedbackTitle, setFeedbackTitle] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const handleLoginClick = async () => {

        if (email !== '' && password !== '') {
            API.post("/session", {
                email,
                password
            })
                .then((response) => {
                    if (response.status === 200 && response.statusText === "OK") {
                        console.log(response.data);
                        login(response.data.token);
                        history.push("/app");
                    } else {
                        handleClickOpen();
                        setFeedbackTitle('Erro ao fazer login');
                        setFeedbackMessage('Houve um erro ao fazer login. Tente novamente mais tarde.');
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        } else {
            handleClickOpen();
            setFeedbackTitle('Ops! há algo errado');
            setFeedbackMessage('Os campos de e-mails e/ou senha não podem ficar em branco.');
        }

    }

    const handleSignupClick = () => {
        history.push("/register");
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography component="div" className={classes.container}>
                    <FormControl fullWidth className={classes.form} variant="outlined">
                        <header className={classes.title}>Login</header>
                        <TextField fullWidth placeholder="E-mail" type="email" variant="outlined" className={classes.input} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <TextField fullWidth placeholder="Senha" type="password" variant="outlined" className={classes.input} value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Button fullWidth color="primary" variant="contained" btntype={'sucess'} onClick={handleLoginClick} className={classes.btnEntrar} >Entrar</Button>
                        <Button
                            color="primary"
                            fullWidth
                            variant="outlined"
                            btntype={'sucess'}
                            onClick={handleSignupClick}
                        >
                            Criar conta
                        </Button>
                    </FormControl>
                </Typography>
            </Container>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{feedbackTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {feedbackMessage}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleClose} color="primary" autoFocus>
                        Ok
                </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}