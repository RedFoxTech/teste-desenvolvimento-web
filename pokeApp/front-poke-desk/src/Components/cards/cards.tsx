import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Pokemon{
  pokemon: {
    Name: string,
    Pokedex_Number: number,
    Type_1: string,
    Type_2: string,
    STAT_TOTAL: string,
    ATK: string,
    DEF: string,
    STA: string
  }
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const UrlNumberPath = (PokedexNumber: number): string => {
  if (PokedexNumber < 10) {
    return `00${PokedexNumber}`
  } else if (PokedexNumber < 100) {
    return `0${PokedexNumber}`
  }
  return `${PokedexNumber}`

}
export default function Cards(props: Pokemon) {
  const [expanded, setExpanded] = React.useState(false);
  const [pokemon, setPokemon] = React.useState<any>()

  React.useEffect(() => {
    props.pokemon ? setPokemon(props.pokemon) : setPokemon("loading")
  }, [props])

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ minWidth: 215 }}>
      <CardHeader
        title={pokemon ? pokemon.Name : "Loading"}
      />
      <CardMedia
        component="img"
        height="215"
        image={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${UrlNumberPath(props.pokemon.Pokedex_Number)}.png`}
        alt="Pokemon"
      />
      <CardContent>
      </CardContent>
      <CardActions disableSpacing>
        <Typography paragraph>Pokemon Stats</Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph={true}>{`Total Stats: ${props.pokemon.STAT_TOTAL} `}</Typography>
          <Typography>
            {`Attack: ${props.pokemon.ATK} Deffense: ${props.pokemon.DEF} Stamina: ${props.pokemon.STA} `}
          </Typography>
          <Typography paragraph={true}>{`Tipos: `}</Typography>
          <Typography>
            {`Tipo Primário: ${props.pokemon.Type_1}`}
          </Typography>
          <Typography>
            {`Tipo Secundário: ${props.pokemon.Type_2}`}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}