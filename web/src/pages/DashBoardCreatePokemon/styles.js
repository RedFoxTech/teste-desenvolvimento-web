import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    '@media screen and (max-width: 779px)': {
      width: '380px',
      margin: '0 auto',
    }
  },
}))

export default useStyles;