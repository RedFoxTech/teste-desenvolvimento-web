import { Typography } from "@material-ui/core";

import useStyles from "./styles";

function TitleSecondary({ label, color = '#e68b04'}) {
  const classes = useStyles();

  return (
    <Typography
      className={classes.title} 
      style={{ color }}
      variant="subtitle" 
      component="h2"
    >
      { label }
    </Typography>
  )
}

export default TitleSecondary;