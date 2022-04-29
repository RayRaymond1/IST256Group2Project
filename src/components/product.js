import {React} from 'react'
import { Card, Button } from 'react-bootstrap'

export default function Product(props){
    return <div className='pie'>
        <Card>
            <Card.Img variant="top" src= {props.image}/>
            <Card.Body>
            <Card.Text>
            <p>{props.name}</p>
            </Card.Text>
            <Card.Text>
            <p>${props.price}</p>
            </Card.Text>
            <Card.Text>
            <p>Calories: {props.calories}</p>
            </Card.Text>
            <Button variant="primary" onClick={console.log(props.id)}>Add to Cart</Button>
            </Card.Body>
        </Card>
    </div>
}