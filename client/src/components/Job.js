import React from 'react';
import '../App.css'
// import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import useStyles from './styles.js'
import moment from 'moment'

const Job = ({job}) => {
    const style = useStyles()
    return (
       <div className="contained">
        <br/>
        <hr/>
        <Avatar className={style.greenAvatar}>
        <AssignmentIcon />
      </Avatar>
      <div className={style.jobs}>
      <p><a href="/">Job Title: {job.title}</a></p>
        <p>Company: {job.company}</p> 
         <p>Location: {job.location}</p>      
          </div>
            <div className={style.date}>Date: {moment(job.created_at).format("MM/DD/YY")}</div>
        
         <hr/>       
       </div>
      
    );
}

export default Job;
