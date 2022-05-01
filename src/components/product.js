import {React} from 'react'
import { Card, Button } from 'react-bootstrap'

export default function Product(props){
    return <div className='pie'>
        <Card style={{width:"20rem"}}>
            <Card.Img variant="top" src= {props.image} width={250} height={300}/>
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