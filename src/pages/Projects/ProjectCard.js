import React from 'react'
import { Card, Button} from 'react-bootstrap'


function ProjectCards (props) {
    return(
      
        <Card key={props.id} style={{ width: '18rem'}}>
                <Card.Img variant='top' src={props.image}/>
                <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Button variant="primary" href={props.gitHub} target="_blank">GitHub</Button>
                <Button variant="primary" href={props.deployed} target="_blank">Demo</Button>
                </Card.Body>
        </Card>  
    
    )
}

export default ProjectCards