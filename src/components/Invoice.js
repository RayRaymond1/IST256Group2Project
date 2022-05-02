import { Component } from 'react';
import { Container, Image, Row, Col, Stack, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import tiger from '../images/tiger.png';
import pies from '../assets/pies.json';
import { useState } from 'react'
let tax = 0;
let total = 0;
let subTotalAmount = 0;
let counter = 0;


var formatter = new Intl.NumberFormat('en-US', { //found out about a numberformatter in JS through stackexchange
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

let totalAmount = formatter.format(15.00);
//TODO: CSS Rules for header, summary, details
export default function Invoice(){
    
    const [currentCart, updateCart] = useState(() => detailedCart());

    function detailedCart() //this imports the cart from sessionStorage so i can display it onto the table
    {
        let cart = JSON.parse(sessionStorage.getItem('cart'));
        let products = pies;
        if(cart == null)
        {
            return;
        } else
        {
        let detailedCart = cart.map( x => {let currProd = products.find(y => x.id == y.id)
                                           currProd.qty = x.qty;

                                           return currProd;
        });
        sessionStorage.setItem('detailedCart', JSON.stringify(detailedCart));
        console.log("constructor ran");
        return detailedCart;
        }
    }

    function listCart() //this displays the cart by creating new <tr>s (table rows), so paste this into <tbody>
    {
        var display;
        if (currentCart == null)
        {
            return;
        }else{
        display = currentCart.map(x => {
            counter++;
            return(
                <tr key ={x.id}>
                    <td>{counter}</td>
                    <td>{x.name}</td>
                    <td>{x.qty}</td>
                    <td>{x.price}</td>
                </tr>
            );
        })
       }
       return display;
    }
    function findSubtotal() //finds the subtotal
    {
        if(currentCart == null)
        {
        subTotalAmount = 0;
        } else
        {
            subTotalAmount= currentCart.reduce(
                (previousValue, currentValue) => previousValue + (currentValue.price * currentValue.qty)
                , 0
            )
        }
        subTotalAmount = formatter.format(subTotalAmount);
        return subTotalAmount;
    }

    function findTax() //finds the subtotal
    {
        if(currentCart == null)
        {
        subTotalAmount = 0;
        } else
        {
            subTotalAmount= currentCart.reduce(
                (previousValue, currentValue) => previousValue + (currentValue.price * currentValue.qty)
                , 0
            )
        }
        tax = subTotalAmount*0.06;
        tax = formatter.format(tax);
        return tax;
    }

    function findTotal() //finds the subtotal
    {
        if(currentCart == null)
        {
        subTotalAmount = 0;
        } else
        {
            subTotalAmount= currentCart.reduce(
                (previousValue, currentValue) => previousValue + (currentValue.price * currentValue.qty)
                , 0
            )
        }
        tax = subTotalAmount*0.06;
        total= subTotalAmount+tax;
        total = formatter.format(total);
        return total;
    }
        return (
            <Container>
                <Stack gap={3}>
                    <Row className="header">
                        <Col sm={9}>
                            <Image src={tiger} align='start' />
                        </Col>
                        <Col>
                            <Stack algin='end' style={{ textAlign: 'right' }} gap={3}>
                                <h2>INVOICE</h2>
                                <h5>Group 2</h5>
                            </Stack>
                        </Col>
                    </Row>
                    <Container className="summary">
                        <Row>
                            <Col sm={9}>
                                <Stack algin='start' gap={1}>
                                    <h2 style={{ textAlign: 'left'}}>Invoice No# 12</h2>
                                    <h5 style={{ textAlign: 'left'}}>Invoice Date: {new Date().toLocaleDateString()} </h5>
                                </Stack>
                            </Col>
                            <Col>
                                <Stack algin='end' style={{ textAlign: 'right' }} gap={1}>
                                    <h2>{findTotal()}</h2>
                                    <h5>AMOUNT DUE</h5>
                                </Stack>
                            </Col>
                        </Row>
                    </Container>
                    <Table bordered className="details" style={{ textAlign: 'center', color: 'white' }}>
                        <thead>
                            <tr>
                                <th sm={1}>
                                    <h5>#</h5>
                                </th>
                                <th sm={8}>
                                    <h5>ITEMS & DESCRIPTION</h5>
                                </th>
                                <th>
                                    <h5>QUANTITY</h5>
                                </th>
                                <th>
                                    <h5>PRICE</h5>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="itemData">
                            {listCart()}
                        </tbody>
                    </Table>
                    <Row>
                        <Col sm={8}></Col>
                        <Col>
                            <Stack gap={3}>
                                <Row>
                                    <Col>
                                        <p>Subtotal:</p>
                                    </Col>
                                    <Col>
                                        <p style={{ textAlign: 'right' }}>{findSubtotal()}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p>Shipping:</p>
                                    </Col>
                                    <Col>
                                        <p style={{ textAlign: 'right' }}>{formatter.format(0.00)}</p>
                                    </Col>
                                </Row>
                                <Row>    
                                <Col>
                                    <p>Tax:</p>
                                </Col>
                                <Col>
                                    <p style={{ textAlign: 'right' }}>{findTax()}</p>
                                </Col>
                                </Row>
                                <hr></hr>
                                <Row>
                                <Col>
                                    <p>Total:</p>
                                </Col>
                                <Col>
                                    <p style={{ textAlign: 'right' }}>{findTotal()}</p>
                                </Col>
                            </Row>
                                <hr></hr>
                            </Stack>
                        </Col>
                    </Row>
                </Stack>
            </Container>

        )
    
}