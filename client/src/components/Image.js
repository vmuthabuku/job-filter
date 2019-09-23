import React from 'react'
import useStyles from './styles.js'

function Image() {
    const style = useStyles()
    return (
        <div className={style.image}>
        <img style={{width:"100%", marginTop:"2em"}} src="https://cdn.pixabay.com/photo/2017/10/17/10/05/job-2860035_960_720.jpg" alt="none"/>            
        </div>
    )
}

export default Image;