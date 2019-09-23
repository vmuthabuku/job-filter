import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    textField: {
    margin:"1em 9em"

  },
   date:{
        position:"relative",
        bottom:"70px",
        left:"800px"
    },
    greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: "green",
    position:"relative"
  },
    jobs:{
    marginLeft:"5em",
        '& p': {
      color: 'green',      
    },
    '& a':{
        textDecoration:"none"
    },
    image:{
        width:"100%",
        margin:"2em 2em",
        '& img':{
            height:"25%",            
        }
    }
    },

  }));

export default useStyles;