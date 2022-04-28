import myPie from '../assets/pies.json';
import Product from './product';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import { React } from 'react';

export default function ProductList(){
    return (
        <div className="productList">
            <Container>
                <Row>
                    {
                        myPie.map(pie=>{
                            return (
                                <Col lg={4}>
                                    <Product key = {pie.id} id={pie.id} name ={pie.name} price = {pie.price} calories = {pie.calories}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}