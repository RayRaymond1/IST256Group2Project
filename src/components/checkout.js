import { Container, Row, Col, Stack, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import pies from '../assets/pies.json';
import { useState } from 'react'

export default function Checkout(){
    let subTotalAmount = 0; //starting up some values now so i wont have null errors
    let tax = 0;
    let total = 0;
    var formatter = new Intl.NumberFormat('en-US', { //found out about a numberformatter in JS through stackexchange
    style: 'currency',
    currency: 'USD',
    });
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

    let counter = 0; 

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
                        {
                            listCart()
                        }
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
                                    <p>Tax:</p>
                                </Col>
                                <Col>
                                    <p style={{ textAlign: 'right' }}>{findTax()}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Total:</p>
                                </Col>
                                <Col>
                                    <p style={{ textAlign: 'right' }}>{findTotal()}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ textAlign: 'center' }}>
                                    <Button href="/invoice" variant="primary" size="lg" >Finalize</Button>
                                </Col>
                            </Row>
                        </Stack>
                    </Col>
                </Row>
            </Stack>
        </Container>

    )
}