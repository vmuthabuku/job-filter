import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './styles.js'


 export default function FilledTextFields() {
  const classes = useStyles();
//   const [values, setValues] = React.useState({
//     name: 'Cat in the Hat',
//     age: '',
//     multiline: 'Controlled',
//     currency: 'EUR',
//   });

//   const handleChange = name => event => {
//     setValues({ ...values, [name]: event.target.value });
//   };

  return (

       <TextField
        id="filled-with-placeholder"
        label="Search job by title"
        placeholder="search job"
        className={classes.textField}
        margin="normal"
        fullWidth
        variant="filled"
      />
  )

 }
