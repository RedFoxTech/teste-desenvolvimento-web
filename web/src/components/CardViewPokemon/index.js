import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";

import useStyles from "./styles";

function CardViewPokemon({ data, name }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`${process.env.REACT_APP_URL_API}/api/images/${data[0].image_name}`}
          title={name}
        />
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">
           { name }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        {
          data.map(item => (
            <>
              <h3 key='typeone' className="lineItem">Type one: <span>{item.type_one}</span></h3>
              <h3 key='typetwo' className="lineItem">Type Two: <span>{item.type_two}</span></h3>
              <h3 key='weatherone' className="lineItem">Weather One: <span>{item.weather_one}</span></h3>
              <h3 key='weathertwo' className="lineItem">Weather Two: <span>{item.weather_two}</span></h3>
              <h3 key='generation' className="lineItem">Generation: <span>{item.generation}</span></h3>
              <h3 key='atk' className="lineItem">Atk: <span>{item.atk}</span></h3>
              <h3 key='def' className="lineItem">Def: <span>{item.def}</span></h3>
              <h3 key='stat' className="lineItem">Stat: <span>{item.stat}</span></h3>
              <h3 key='stattotal' className="lineItem">Stat total: <span>{item.stat_total}</span></h3>
              <h3 key='raidable' className="lineItem">Raidable: <span>{item.raidable}</span></h3>
              <h3 key='hatchable' className="lineItem">Hatchable: <span>{item.hatchable}</span></h3>
              <h3 key='evolutionstage' className="lineItem">Evolution Stage: <span>{item.evolution_stage}</span></h3>
            </>
          ))
        }
      </CardActions>
    </Card>
  )
}

export default CardViewPokemon;