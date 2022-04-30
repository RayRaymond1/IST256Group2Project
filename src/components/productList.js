import myPie from '../assets/pies.json';
import Product from './product';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Component, React } from 'react';
export default function ProductList(){

    const addToCart = function(id, qty){ //friend had taught me how to write this
        var cart = sessionStorage.getItem('cart');
        if(cart === null) cart = [];
        else cart = JSON.parse(cart);

        if(typeof id !== 'number') throw new Error('a2c_invalidID');
    
        switch(typeof qty){
        case 'number': break; //we'll happily accept negative and zero i guess
        case 'undefined': //when calling addToCart(myCart, 69) or such; if we're storing just one cart obj in local/session storage we can just do addToCart(69) even
            qty = 1;
            break;

        }
    

        let destIdx = cart.findIndex(x => x.id === id); //find idx of id-qty pair
    
        if(destIdx === -1){ //not found; add to cart
            cart.push({id: id,
                       qty: qty});
        }
    
        else{ //found; update line item on cart
            cart[destIdx].qty += qty;
        }

        sessionStorage.setItem('cart', JSON.stringify(cart));
        alert("added item!");
    }

    return (
        <div className="productList">
            <Container>
                <Row>
                    {
                        myPie.map(pie=>{
                            return (
                                <Col lg={4} key = {pie.id}>
                                    <Product  id={pie.id} name ={pie.name} price = {pie.price} calories = {pie.calories} image = {pie.image} add = {addToCart}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}