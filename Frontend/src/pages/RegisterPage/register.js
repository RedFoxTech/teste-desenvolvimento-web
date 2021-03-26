import React, { useState } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'

import { useHistory } from "react-router-dom";

//Importações locais
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
        margin: '1em 0 1em 0',
    },
    btnVoltar: {
        alignSelf: 'end'
    }
}));


export default function RegisterPage() {
    const classes = useStyles();
    let history = useHistory();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = React.useState(false);
    const [hasError, setHasError] = useState(false);
    const [feedbackTitle, setFeedbackTitle] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const handleRegisterClick = () => {

        API.post('/user', {
            name,
            email,
            password
        })
            .then(function (response) {

                if (response.status === 201 && response.statusText === "Created") {
                    console.log(response);
                    handleClickOpen();
                    setHasError(false);
                    setFeedbackTitle('Conta criada com sucesso');
                    setFeedbackMessage('Agora é só fazer login e gerenciar seus Pokémons');
                } else {
                    console.log(response);
                    handleClickOpen();
                    setHasError(true);
                    setFeedbackTitle('Erro ao criar conta');
                    setFeedbackMessage('Houve um erro, e sua conta não foi criada. Tente novamente mais tarde.');
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const handleBackClick = () => {
        history.goBack();
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleToRedirect = () => {
        history.push("/");
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography component="div" className={classes.container}>
                    <FormControl fullWidth className={classes.form} variant="outlined">
                        <header className={classes.title}>Signup</header>
                        <IconButton aria-label="delete" className={classes.btnVoltar} onClick={handleBackClick}>
                            <ArrowBackIcon />
                        </IconButton>
                        <TextField fullWidth placeholder="Nome" type="text" variant="outlined" className={classes.input} value={name} onChange={(e) => setName(e.target.value)} />
                        <TextField fullWidth placeholder="E-mail" type="email" variant="outlined" className={classes.input} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <TextField fullWidth placeholder="Senha" type="password" variant="outlined" className={classes.input} value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Button fullWidth variant="contained" btntype={'sucess'} onClick={handleRegisterClick} className={classes.btnEntrar}>Criar conta</Button>
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

                    <Button onClick={!hasError ? handleToRedirect : handleClose} color="primary" autoFocus>
                        Ok
                </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}