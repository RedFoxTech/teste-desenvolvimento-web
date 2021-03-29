import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import { Create, DeleteOutline, Visibility, Wallpaper } from "@material-ui/icons";

import useStyles from "./styles";

function CardPokemon({ image, name, handleViewPokemon, handleDelete, handleUpdateImage, handleUpdatePokemon }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">
           { name }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button onClick={handleViewPokemon} className={classes.buttonView} variant="contained" size="large">
          <Visibility style={{ fontSize: "30px"}}/>
        </Button>
        <Button onClick={handleUpdatePokemon} className={classes.buttonUpdate} variant="contained" size="large">
          <Create style={{ fontSize: "30px"}} />
        </Button>
        <Button onClick={handleUpdateImage} className={classes.buttonImage} variant="contained" size="large">
          <Wallpaper style={{ fontSize: "30px"}} />
        </Button>
        <Button onClick={handleDelete} className={classes.buttonDelete} variant="contained" size="large">
          <DeleteOutline style={{ fontSize: "30px"}}/>
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardPokemon;