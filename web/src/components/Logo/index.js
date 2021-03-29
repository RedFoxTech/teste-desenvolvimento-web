import { Box, Typography } from "@material-ui/core";

import useStyles from "./styles";

function Logo() {
  const classes = useStyles();

  return (
    <Box height='5rem' fontWeight="fontWeightBold" display='flex' justifyContent="center" alignItems='center'>
      <Typography className={classes.font} variant="h3" color="white" component="span">Poke</Typography>
      <Typography className={classes.font} variant="h3" color="secondary"component="span">Store</Typography>
    </Box>
  )
}

export default Logo;