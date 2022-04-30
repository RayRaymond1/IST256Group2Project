import {React} from 'react'
import { Card, Button } from 'react-bootstrap'

export default function Product(props){
    return <div className='pie'>
        <Card>
            <Card.Img variant="top" src= {props.image}/>
            <Card.Body>
            <Card.Text>
            {props.name}
            </Card.Text>
            <Card.Text>
            ${props.price}
            </Card.Text>
            <Card.Text>
            Calories: {props.calories}
            </Card.Text>
            <Button variant="primary" onClick={() => {props.add(props.id)}}>Add to Cart</Button>
            </Card.Body>
        </Card>
    </div>
}