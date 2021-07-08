import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    marginRight: '10px',
    marginTop: '10px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}))