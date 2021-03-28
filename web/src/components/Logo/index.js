import { Box, Typography } from "@material-ui/core";

import useStyles from "./styles";

function Logo() {
  const classes = useStyles();

  return (
    <Box fontWeight="fontWeightBold">
      <Typography variant="h3" component="h3">
        <Typography className={classes.font} variant="h3" color="white" component="span">Poke</Typography>
        <Typography className={classes.font} variant="h3" color="secondary"component="span">Store</Typography>
      </Typography>
    </Box>
  )
}

export default Logo;