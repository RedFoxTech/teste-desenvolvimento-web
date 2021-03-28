import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  fontTitleMain: {
    fontSize: "4rem",
    fontWeight: 600,
  },
  text: {
    fontSize: "2rem",
    color: "#A1A1AA",
    margin: "4rem 0"
  },
  bgImgStyles: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "100%",
    objectFit: "cover",
  },
  btn: {
    padding: '1.2rem',
    width: '180px',
    marginBottom: "4rem",
  },
  btnStyles: {
    fontSize: "1.8rem", 
    fontWeight: 600,
  }
}))

export default useStyles;