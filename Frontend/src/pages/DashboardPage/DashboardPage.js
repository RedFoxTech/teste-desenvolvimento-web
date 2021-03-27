import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PetsIcon from '@material-ui/icons/Pets';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import TextField from '@material-ui/core/TextField';

import { useHistory } from "react-router-dom";
import { getToken } from '../../services/authentication';
import API from '../../services/api';

//Importações locais
import ThemePage from '../../components/theme';

const useStyles = makeStyles((theme) => ({

    btnAdd: {
        zIndex: 1,
        bottom: 0,
        right: 0,
        position: 'fixed',
        margin: '1em',
        color: '#FFF',
        backgroundColor: 'slategray'
    },
    prev: {
        float: 'left',
        width: 80,
        height: 'auto',
        textAlign: 'left',
    },
    next: {
        float: 'right',
        width: 80,
        height: 'auto',
        textAlign: 'right',
    },
    actualPage: {
        textAlign: 'center',
        width: 'auto',
        height: 'auto',
        alignSelf: 'center',
        fontFamily: ['Manrope', 'sans-serif'],
    }


}));

export default function QuestionsPage() {

    const classes = useStyles();
    const history = useHistory();
    const [page, setPage] = useState(1);
    const [perPage,] = useState(20);
    const [pokemons, setPokemons] = useState([]);
    const [control, setControl] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        if (!control && pokemons.length === 0) {
            handleToNextPage(page);
        }
    });

    const handleGoToAddPokemon = () => {
        history.push("/addpokemon");
    }

    const handleGoToUpdatePokemon = (value) => {
        history.push({
            pathname: "/updatepokemon",
            state: { id: value }
        });
    }

    const handleToNextPage = async (value) => {
        API.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;
        await API.get(`/pokemon`, {
            params: {
                page: value
            }
        })
            .then((response) => {
                if (response.status === 200 && response.statusText === "OK") {
                    setPokemons(() => response.data)
                    setPage(value + 1);
                    setCurrentPage(value);
                    setControl(true);
                } else {
                    setControl(true);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleToPrevPage = async (value) => {
        let temp = pokemons.length < perPage ? currentPage : value - 1;
        API.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;
        await API.get(`/pokemon`, {
            params: {
                page: temp - 1
            }
        })
            .then((response) => {
                if (response.status === 200 && response.statusText === "OK") {
                    setPokemons(() => response.data)
                    setPage(temp);
                    setCurrentPage(temp - 1);
                    setControl(true);
                } else {
                    setControl(true);

                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <ThemePage pageTitle="Dashboard">
            <Grid item xs={12}>
                <CssBaseline />
                <Container maxWidth="md">
                    <Typography component="div" style={{ height: 'auto', maxheight: '80vh', marginBottom: '5em' }}>
                        <List>
                            {
                                pokemons.map((value, index) => {
                                    return (
                                        <Typography component="div" key={`${index}`}>
                                            <ListItem button onClick={() => handleGoToUpdatePokemon(value.id)}>
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <PetsIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                {
                                                    typeof value !== "undefined" &&
                                                    <ListItemText
                                                        primary={value.name}
                                                        secondary={value.type_1}
                                                    />


                                                }
                                                <ListItemSecondaryAction>
                                                    <IconButton edge="end" aria-label="delete">
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        </Typography>
                                    )
                                })

                            }
                        </List>
                        <Typography component="div" style={{ flexDirection: 'row', justifyContent: 'space-between', display: 'flex' }}>
                            {
                                currentPage <= 1 ?
                                    <Typography component="div" className={classes.prev}>
                                        <Button
                                            variant="contained"
                                            color="default"
                                            className={classes.button}
                                            onClick={() => handleToPrevPage(page)}
                                            disabled
                                        >
                                            <NavigateBeforeIcon /> Prev
                                        </Button>
                                    </Typography>
                                    :
                                    <Typography component="div" className={classes.prev}>
                                        <Button
                                            variant="contained"
                                            color="default"
                                            className={classes.button}
                                            onClick={() => handleToPrevPage(page)}
                                        >
                                            <NavigateBeforeIcon /> Prev
                                        </Button>
                                    </Typography>
                            }
                            <Typography component="div" className={classes.actualPage}>
                                {`Page: `}
                                <TextField id="outlined-basic" variant="outlined" disabled value={currentPage} onChange={(e) => setPage(e.target.value)}
                                    style={{ minWidth: 30, maxWidth: 40 }}
                                    inputProps={{
                                        style: {
                                            fontSize: 18,
                                            padding: 0,
                                            backgroundColor: '#cdcdcd20',
                                            height: 30,
                                            textAlign: 'center'
                                        },
                                    }}
                                />
                            </Typography>
                            {
                                page !== 1 && pokemons.length < perPage ?
                                    <Typography component="div" className={classes.next}>
                                        <Button
                                            variant="contained"
                                            color="default"
                                            className={classes.button}
                                            onClick={() => handleToNextPage(page)}
                                            disabled
                                        >
                                            <NavigateNextIcon /> Next
                                        </Button>
                                    </Typography>
                                    :
                                    <Typography component="div" className={classes.next}>
                                        <Button
                                            variant="contained"
                                            color="default"
                                            className={classes.button}
                                            onClick={() => handleToNextPage(page)}
                                        >
                                            Next <NavigateNextIcon />
                                        </Button>
                                    </Typography>
                            }

                        </Typography>
                    </Typography>
                </Container>
            </Grid>
            <Fab color="primary" aria-label="add" className={classes.btnAdd} onClick={handleGoToAddPokemon}>
                <AddIcon />
            </Fab>
        </ThemePage>
    );
}