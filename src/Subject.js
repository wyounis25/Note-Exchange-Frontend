import React from 'react'
import './Subject.css'
import { Button } from '@material-ui/core'
function Subject() {
    return (
        <div className="subject">
            <Button className="q" variant="outlined"  className="subject__button" >MATH</Button>
            <Button className="w"variant="outlined"  className="subject__button" >SCIENCE</Button>
            <Button className="e"variant="outlined"  className="subject__button" >HISTORY</Button>
            <Button className="r"variant="outlined"  className="subject__button" >ART</Button>
            <Button className="t"variant="outlined"  className="subject__button" >ECONOMICS</Button>
            <Button className="y"variant="outlined"  className="subject__button" >FINANCE</Button>
            <Button className="u"variant="outlined"  className="subject__button" >ENGINEERING</Button>
            <Button className="i"variant="outlined"  className="subject__button" >PHYSICS</Button>
            <Button className="o"variant="outlined"  className="subject__button" >MUSIC</Button>
        </div>
    )
}

export default Subject
