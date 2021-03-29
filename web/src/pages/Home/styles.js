import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  fontTitleMain: {
    fontSize: "2.5rem",
    fontWeight: 600,
  },
  text: {
    fontSize: "1.25rem",
    color: "#A1A1AA",
    margin: "40px 0"
  },
  bgImgStyles: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "100%",
    objectFit: "cover",
  },
  btn: {
    padding: '12px',
    width: '180px',
    marginBottom: "40px",
  },
  btnStyles: {
    fontSize: "1.125rem", 
    fontWeight: 600,
  }
}))

export default useStyles;