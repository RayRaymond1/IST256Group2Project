import myPie from '../assets/pies.json';
import Product from './product';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Component, React } from 'react';

export default function ProductList(){
    return (
        <div className="productList">
            <Container>
                <Row>
                    {
                        myPie.map(pie=>{
                            return (
                                <Col lg={4} key = {pie.id}>
                                    <Product  id={pie.id} name ={pie.name} price = {pie.price} calories = {pie.calories} image = {pie.image}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}