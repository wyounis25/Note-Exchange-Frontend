import React from 'react'
import './Subject.css'
import { Button } from '@material-ui/core'
function Subject() {
    return (
        <div className="subject">
            <Button variant="outlined" color="primary" className="subject__button" >MATH</Button>
            <Button variant="outlined" color="primary" className="subject__button" >SCIENCE</Button>
            <Button variant="outlined" color="primary" className="subject__button" >HISTORY</Button>
            <Button variant="outlined" color="primary" className="subject__button" >ART</Button>
            <Button variant="outlined" color="primary" className="subject__button" >ECONOMICS</Button>
            <Button variant="outlined" color="primary" className="subject__button" >FINANCE</Button>
            <Button variant="outlined" color="primary" className="subject__button" >ENGINEERING</Button>
            <Button variant="outlined" color="primary" className="subject__button" >PHYSICS</Button>
            <Button variant="outlined" color="primary" className="subject__button" >MUSIC</Button>
        </div>
    )
}

export default Subject
