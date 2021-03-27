import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { CssBaseline } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Switch from '@material-ui/core/Switch';

import { useHistory, useLocation } from "react-router-dom";

//Importações locais
import ThemePage from '../../components/theme';
import { getToken } from '../../services/authentication';
import API from '../../services/api';

const useStyles = makeStyles((theme) => ({
    paper: {
        //padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: 'transparent',
        boxShadow: 'none',
        padding: 'none'
    },
    field: {

    },
    btnSalve: {
        margin: '1em 1em 1em 0px',
        color: '#FFF',
        backgroundColor: 'slategray',
        float: 'right'
    },
    label: {
        textAlign: 'left',
        marginBottom: '0.5em'
    }
}));

export default function AddQuestionsPage() {

    const classes = useStyles();
    const minW = useMediaQuery('(min-width: 415px)');
    const history = useHistory();
    const location = useLocation();

    const [open, setOpen] = React.useState(false);
    const [hasError, setHasError] = useState(false);
    const [feedbackTitle, setFeedbackTitle] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const [name, setName] = useState('');
    const [generation, setGeneration] = useState('');
    const [evolved, setEvolved] = useState('');

    const [typeOne, setTypeOne] = useState('');
    const [typeTwo, setTypeTwo] = useState('');

    const [weatherOne, setWeatherOne] = useState('');
    const [weatherTwo, setWeatherTwo] = useState('');

    const [atk, setAtk] = useState(0);
    const [def, setDef] = useState(0);
    const [sta, setSta] = useState(0);
    const [total, setTotal] = useState(0);
    const [status, setStatus] = useState(false);

    const [cpOne, setCpOne] = useState('');
    const [cpTwo, setCpTwo] = useState('');

    const [types, setTypes] = useState([]);
    const [weathers, setWeathers] = useState([]);

    const [idPokemon,] = useState(location.state.id);

    useEffect(() => {
        handleToGetTypes();
        handleToGetWeathers();
        handleToGetPokemon();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleToRedirect = () => {
        history.push("/app");
    }

    const handleToAtk = (e) => {
        setAtk(e.target.value);
        let temp = parseInt(e.target.value) + parseInt(def) + parseInt(sta);
        setTotal(temp);
        if (total === 'NaN') {
            setTotal(parseInt(atk) + parseInt(def) + parseInt(sta))
        }
        //total += parseFloat(e.target.value);
        //handleToTotal(parseInt(e.target.value));
    }

    const handleToDef = (e) => {
        setDef(e.target.value);
        let temp = parseInt(atk) + parseInt(e.target.value) + parseInt(sta);
        setTotal(temp);
        if (total === 'NaN') {
            setTotal(parseInt(atk) + parseInt(def) + parseInt(sta))
        }
        //total += parseFloat(e.target.value);
        //handleToTotal(parseInt(e.target.value));
    }

    const handleToSta = (e) => {
        setSta(e.target.value);
        let temp = parseInt(atk) + parseInt(def) + parseInt(e.target.value);
        setTotal(temp);
        if (total === 'NaN') {
            setTotal(parseInt(atk) + parseInt(def) + parseInt(sta))
        }
        //total += parseFloat(e.target.value);
        //handleToTotal(parseInt(e.target.value));
    }

    const handleToGetTypes = () => {
        API.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;
        API.get("/types")
            .then((response) => {
                if (response.status === 200 && response.statusText === "OK") {
                    setTypes(() => response.data.types);

                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleToGetWeathers = () => {
        API.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;
        API.get("/weather")
            .then((response) => {
                if (response.status === 200 && response.statusText === "OK") {
                    setWeathers(() => response.data.weather);

                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleToSavePokemon = async () => {
        if (name !== '') {
            API.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;
            await API.put(`/pokemon/${idPokemon}`, {
                name,
                type_1: parseInt(typeOne),
                type_2: parseInt(typeTwo),
                weather_1: parseInt(weatherOne),
                weather_2: parseInt(weatherTwo),
                atk: parseInt(atk),
                def: parseInt(def),
                sta: parseInt(sta),
                stat_total: parseInt(total),
                cp39: parseInt(cpOne),
                cp40: parseInt(cpTwo),
                active: status
            })
                .then((response) => {
                    if (response.status === 200 && response.statusText === "OK") {
                        //console.log(response);
                        handleClickOpen();
                        setHasError(false);
                        setFeedbackTitle('Pokémon atualizado com sucesso');
                        setFeedbackMessage('Seu pokémon foi atualizado com sucesso');
                    } else {
                        handleClickOpen();
                        setHasError(true);
                        setFeedbackTitle('Erro ao atualizar Pokémon');
                        setFeedbackMessage('Houve um erro. Tente novamente mais tarde.');

                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        } else {
            console.log('no name');
        }
    }

    const handleToGetPokemon = async () => {
        API.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;
        await API.get(`/pokemon/${idPokemon}`)
            .then((response) => {
                if (response.status === 200 && response.statusText === "OK") {
                    setName(response.data.name);
                    setTypeOne(response.data.type1.id);
                    setTypeTwo(response.data.type2 !== null ? response.data.type2.id : '');
                    setWeatherOne(response.data.weather1.id);
                    setWeatherTwo(response.data.weather2 !== null ? response.data.weather2.id : '');
                    setAtk(response.data.atk);
                    setDef(response.data.def);
                    setSta(response.data.sta);
                    setTotal(response.data.stat_total);
                    setCpOne(response.data.cp39);
                    setCpTwo(response.data.cp40);
                } else {
                    console.log(response);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <ThemePage pageTitle="Adicionar Pokémon" btnBack={true}>
            <CssBaseline />
            <Container maxWidth="md">
                <Typography component="div" style={{ height: 'auto' }}>
                    <form noValidate autoComplete="off">

                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <InputLabel id="demo-simple-select-helper-label" className={classes.label}>Name</InputLabel>
                                    <TextField
                                        id={`pokemon-name`}
                                        variant="outlined"
                                        fullWidth
                                        className={classes.field}
                                        InputLabelProps={{
                                            style: {
                                                fontSize: 16,
                                                fontFamily: ['Manrope', 'sans-serif'],
                                            },
                                        }}
                                        inputProps={{
                                            style: {
                                                fontSize: 16,
                                                fontFamily: ['Manrope', 'sans-serif'],
                                            },
                                        }}
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={classes.paper}>
                                    <InputLabel id="demo-simple-select-helper-label" className={classes.label}>Generation</InputLabel>
                                    <TextField
                                        id={`pokemon-generation`}
                                        variant="outlined"
                                        fullWidth
                                        className={classes.field}
                                        InputLabelProps={{
                                            style: {
                                                fontSize: 16,
                                                fontFamily: ['Manrope', 'sans-serif'],
                                            },
                                        }}
                                        inputProps={{
                                            style: {
                                                fontSize: 16,
                                                fontFamily: ['Manrope', 'sans-serif'],
                                            },
                                        }}
                                        onChange={(e) => setGeneration(e.target.value)}
                                        value={generation}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={classes.paper}>
                                    <InputLabel id="demo-simple-select-helper-label" className={classes.label}>Evolved</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="Evolved"
                                        variant="outlined"
                                        value={evolved}
                                        onChange={(e) => setEvolved(e.target.value)}
                                        defaultValue="123"
                                        fullWidth
                                        inputProps={{
                                            style: {
                                                fontSize: 25,
                                                fontFamily: ['Manrope', 'sans-serif'],
                                            },
                                        }}
                                    >

                                        <MenuItem value={10}>Yes</MenuItem>
                                        <MenuItem value={20}>Not</MenuItem>
                                    </Select>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <InputLabel id="demo-simple-select-helper-label" className={classes.label}>Type 1</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="type_1"
                                        variant="outlined"
                                        value={typeOne}
                                        onChange={(e) => setTypeOne(e.target.value)}
                                        fullWidth
                                        inputProps={{
                                            style: {
                                                fontSize: 25,
                                                fontFamily: ['Manrope', 'sans-serif'],
                                            },
                                        }}
                                    >
                                        {
                                            types.length !== 0 && (
                                                types.map((type, index) => {
                                                    return (
                                                        <MenuItem key={`${index}_${type.id}`} value={type.id}>{type.name}</MenuItem>
                                                    )
                                                })
                                            )
                                        }
                                    </Select>
                                </Paper>
                            </Grid>
                            {
                                typeOne !== '' && (
                                    <Grid item xs={12}>
                                        <Paper className={classes.paper}>
                                            <InputLabel id="demo-simple-select-helper-label" className={classes.label}>Type 2</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="type_2"
                                                variant="outlined"
                                                value={typeTwo}
                                                onChange={(e) => setTypeTwo(e.target.value)}
                                                fullWidth
                                                inputProps={{
                                                    style: {
                                                        fontSize: 25,
                                                        fontFamily: ['Manrope', 'sans-serif'],
                                                    },
                                                }}
                                            >

                                                <MenuItem value={30}>None</MenuItem>
                                                {
                                                    types.length !== 0 && (
                                                        types.map((type, index) => {
                                                            return (
                                                                <MenuItem key={`${index}_${type.id}_${Math.random()}`} value={type.id}>{type.name}</MenuItem>
                                                            )
                                                        })
                                                    )
                                                }
                                            </Select>
                                        </Paper>
                                    </Grid>
                                )
                            }
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <InputLabel id="demo-simple-select-helper-label" className={classes.label}>Weather 1</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="weather1"
                                        variant="outlined"
                                        value={weatherOne}
                                        onChange={(e) => setWeatherOne(e.target.value)}
                                        fullWidth
                                        inputProps={{
                                            style: {
                                                fontSize: 25,
                                                fontFamily: ['Manrope', 'sans-serif'],
                                            },
                                        }}
                                    >
                                        {
                                            weathers.length !== 0 && (
                                                weathers.map((weather, index) => {
                                                    return (
                                                        <MenuItem key={`${weather.id}_${index}_${index + weather.id}`} value={weather.id}>{weather.name}</MenuItem>
                                                    )
                                                })
                                            )
                                        }
                                    </Select>
                                </Paper>
                            </Grid>
                            {
                                weatherOne !== '' && (
                                    <Grid item xs={12}>
                                        <Paper className={classes.paper}>
                                            <InputLabel id="demo-simple-select-helper-label" className={classes.label}>Weather 2</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="weaher2"
                                                variant="outlined"
                                                value={weatherTwo}
                                                onChange={(e) => setWeatherTwo(e.target.value)}
                                                fullWidth
                                                inputProps={{
                                                    style: {
                                                        fontSize: 25,
                                                        fontFamily: ['Manrope', 'sans-serif'],
                                                    },
                                                }}
                                            >

                                                <MenuItem value={0}>None</MenuItem>
                                                {
                                                    weathers.length !== 0 && (
                                                        weathers.map((weather, index) => {
                                                            return (
                                                                <MenuItem key={`${weather.id}_${index}_${Math.random()}`} value={weather.id}>{weather.name}</MenuItem>
                                                            )
                                                        })
                                                    )
                                                }
                                            </Select>
                                        </Paper>
                                    </Grid>
                                )
                            }
                            <Grid item xs={3}>
                                <Paper className={classes.paper}>
                                    <InputLabel id="demo-simple-select-helper-label" className={classes.label}>ATK</InputLabel>
                                    <TextField
                                        id={`pokemon-atk`}
                                        variant="outlined"
                                        fullWidth
                                        className={classes.field}
                                        InputLabelProps={{
                                            style: {
                                                fontSize: 18,
                                                fontFamily: ['Manrope', 'sans-serif'],
                                            },
                                        }}
                                        inputProps={{
                                            style: {
                                                fontSize: 25,
                                                fontFamily: ['Manrope', 'sans-serif'],
                                            },
                                        }}
                                        onChange={(e) => handleToAtk(e)}
                                        value={atk}
                                        onClick={() => setAtk('')}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper className={classes.paper}>
                                    <InputLabel id="demo-simple-select-helper-label" className={classes.label}>DEF</InputLabel>
                                    <TextField
                                        id={`pokemon-def`}
                                        variant="outlined"
                                        fullWidth
                                        className={classes.field}
                                        InputLabelProps={{
                                            style: {
                                                fontSize: 18,
                                                fontFamily: ['Manrope', 'sans-serif'],
                                            },
                                        }}
                                        inputProps={{
                                            style: {
                                                fontSize: 25,
                                                fontFamily: ['Manrope', 'sans-serif'],
                                            },
                                        }}
                                        onChange={(e) => handleToDef(e)}
                                        value={def}
                                        onClick={() => setDef('')}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper className={classes.paper}>
                                    <InputLabel id="demo-simple-select-helper-label" className={classes.label}>SPA</InputLabel>
                                    <TextField
                                        id={`pokemon-sta`}
                                        variant="outlined"
                                        fullWidth
                                        className={classes.field}
                                        InputLabelProps={{
                                            style: {
                                                fontSize: 18,
                                                fontFamily: ['Manrope', 'sans-serif'],
                                            },
                                        }}
                                        inputProps={{
                                            style: {
                                                fontSize: 25,
                                                fontFamily: ['Manrope', 'sans-serif'],
                                            },
                                        }}
                                        onChange={(e) => handleToSta(e)}
                                        value={sta}
                                        onClick={() => setSta('')}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper className={classes.paper}>
                                    <InputLabel id="demo-simple-select-helper-label" className={classes.label}>Total</InputLabel>
                                    <TextField
                                        id={`pokemon-total`}
                                        variant="outlined"
                                        fullWidth
                                        disabled
                                        className={classes.field}
                                        InputLabelProps={{
                                            style: {
                                                fontSize: 18,
                                                fontFamily: ['Manrope', 'sans-serif'],
                                            },
                                        }}
                                        inputProps={{
                                            style: {
                                                fontSize: 25,
                                                fontFamily: ['Manrope', 'sans-serif'],
                                            },
                                        }}
                                        value={total}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <InputLabel id="demo-simple-select-helper-label" className={classes.label}>CP 1</InputLabel>
                                    <TextField
                                        id={`pokemon-pc_1`}
                                        variant="outlined"
                                        fullWidth
                                        className={classes.field}
                                        InputLabelProps={{
                                            style: {
                                                fontSize: 16,
                                                fontFamily: ['Manrope', 'sans-serif'],
                                            },
                                        }}
                                        inputProps={{
                                            style: {
                                                fontSize: 16,
                                                fontFamily: ['Manrope', 'sans-serif'],
                                            },
                                        }}
                                        onChange={(e) => setCpOne(e.target.value)}
                                        value={cpOne}
                                    />
                                </Paper>
                            </Grid>
                            {
                                cpOne !== '' && (
                                    <Grid item xs={12}>
                                        <Paper className={classes.paper}>
                                            <InputLabel id="demo-simple-select-helper-label" className={classes.label}>CP 2</InputLabel>
                                            <TextField
                                                id={`pokemon-pc_2`}
                                                variant="outlined"
                                                fullWidth
                                                className={classes.field}
                                                InputLabelProps={{
                                                    style: {
                                                        fontSize: 16,
                                                        fontFamily: ['Manrope', 'sans-serif'],
                                                    },
                                                }}
                                                inputProps={{
                                                    style: {
                                                        fontSize: 16,
                                                        fontFamily: ['Manrope', 'sans-serif'],
                                                    },
                                                }}
                                                onChange={(e) => setCpTwo(e.target.value)}
                                                value={cpTwo}
                                            />
                                        </Paper>
                                    </Grid>
                                )
                            }
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <InputLabel id="demo-simple-select-helper-label" className={classes.label}>Status</InputLabel>
                                    <Grid component="label" container alignItems="center" spacing={1}>
                                        <Grid item className={classes.required}>Inactive</Grid>
                                        <Grid item>
                                            <Switch
                                                checked={status}
                                                onChange={() => setStatus(!status)}
                                                name={`checked-status`}
                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                multiple={true}
                                                className={classes.switch}
                                                color="primary"
                                            />
                                        </Grid>
                                        <Grid item className={classes.required}>Active</Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.btnSalve}
                            startIcon={<SaveIcon />}
                            onClick={handleToSavePokemon}
                        >
                            Salvar
                        </Button>

                    </form>
                </Typography>
            </Container>

            <Dialog
                fullScreen={!minW}
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
        </ThemePage>
    );
}