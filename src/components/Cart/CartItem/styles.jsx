import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
  media: {
    height: 260
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  button: {
    display: 'flex',
    alignItems: 'center'
  }
}));