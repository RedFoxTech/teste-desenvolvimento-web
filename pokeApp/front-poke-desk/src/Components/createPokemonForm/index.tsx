import { useFormik } from 'formik';
import { Grid, MenuItem, Select, Input, Button, InputLabel } from '@mui/material';
import api from '../../services/api'

interface PokemonSend {
    Name: string,
    pokedexNumber: number,
    Type_1: string,
    Type_2?: string,
    STAT_TOTAL: number,
    ATK: number,
    DEF: number,
    STA: number
}

export const CreatePokemonForm = (props: any) => {
    const { values, handleChange, handleSubmit, } = useFormik({
        initialValues: {
            pokeName: '',
            PokedexNumber: Number(props.number + 1),
            typePokemon: '',
            ataque: "",
            defesa: "",
            stamina: "",
            totalStats: ""
        },
        onSubmit: values => {
            api.post<PokemonSend>("createPokemon", {
                Name: values.pokeName,
                pokedexNumber: Number(values.PokedexNumber),
                Type_1: values.typePokemon,
                STAT_TOTAL: Number(values.totalStats),
                ATK: Number(values.ataque),
                DEF: Number(values.defesa),
                STA: Number(values.stamina)

            })
                .then(res => { alert(JSON.stringify(values, null, 2)); })
                .catch(err => alert("F"))
        },
    });

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item>
                    <InputLabel htmlFor="pokeName">Poke Name</InputLabel>
                    <Input
                        id="pokeName"
                        name="pokeName"
                        type="text"
                        onChange={handleChange}
                        value={values.pokeName}
                    />
                </Grid>
                <Grid item>
                    <InputLabel htmlFor="PokedexNumber">Pokedex Number</InputLabel>
                    <Input
                        id="PokedexNumber"
                        name="PokedexNumber"
                        type="PokedexNumber"
                        disabled={true}
                        onChange={handleChange}

                        value={values.PokedexNumber}
                    />
                </Grid>
                <Grid item>
                    <InputLabel id="typePokemon">Tipo Primário Pokemon</InputLabel>
                    <Select
                        id="typePokemon"
                        label="Tipo POkemon"
                        name="typePokemon"
                        value={values.typePokemon}
                        onChange={handleChange}
                        sx={{ width: "100%"}}
                    >
                        <MenuItem value="">Selecione um tipo primário para o pokemon</MenuItem >
                        <MenuItem value="Fire">Fire</MenuItem >
                        <MenuItem value="Water">Water</MenuItem >
                        <MenuItem value="Grass">Grass</MenuItem >
                        <MenuItem value="Flying">Flying</MenuItem >
                        <MenuItem value="Fighting">Fighting</MenuItem >
                        <MenuItem value="Poison">Poison</MenuItem >
                        <MenuItem value="Electric">Electric</MenuItem >
                        <MenuItem value="Ground">Ground</MenuItem >
                        <MenuItem value="Rock">Rock</MenuItem >
                        <MenuItem value="Psychic">Psychic</MenuItem >
                        <MenuItem value="Ice">Ice </MenuItem >
                        <MenuItem value="Bug">Bug </MenuItem >
                        <MenuItem value="Ghost">Ghost</MenuItem >
                        <MenuItem value="Steel">Steel</MenuItem >
                        <MenuItem value="Dragon">Dragon</MenuItem >
                        <MenuItem value="Dark">Dark</MenuItem >
                        <MenuItem value="Fairy">Fairy</MenuItem >
                    </Select>
                </Grid>
                <Grid item>
                    <InputLabel htmlFor="ataque">Ataque</InputLabel>
                    <Input
                        id="ataque"
                        name="ataque"
                        type="ataque"
                        onChange={handleChange}
                        value={values.ataque}
                    />
                </Grid>
                <Grid item>
                    <InputLabel htmlFor="defesa">Defesa</InputLabel>
                    <Input
                        id="defesa"
                        name="defesa"
                        type="defesa"
                        onChange={handleChange}
                        value={values.defesa}
                    />
                </Grid>
                <Grid item>
                    <InputLabel htmlFor="stamina">Stamina</InputLabel>
                    <Input
                        id="stamina"
                        name="stamina"
                        type="stamina"
                        onChange={handleChange}
                        value={values.stamina}
                    />
                </Grid>
                <Grid item>
                    <InputLabel htmlFor="totalStats">Total Stats</InputLabel>
                    <Input
                        id="totalStats"
                        name="totalStats"
                        type="totalStats"
                        disabled={true}
                        onChange={handleChange}
                        value={values.totalStats = (Number(values.ataque) + Number(values.defesa) + Number(values.stamina)).toString()}
                    />
                </Grid>
                <Button type="submit">Submit</Button>
            </Grid>
        </form>
    );
};

