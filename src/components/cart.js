import { Container, Row, Col, Stack, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import pies from '../assets/pies.json';
import { useState } from 'react'

let tax = 0;
let total = 0;
let subTotalAmount = 0; //starting up some values now so i wont have null errors
var formatter = new Intl.NumberFormat('en-US', { //found out about a numberformatter in JS through stackexchange
    style: 'currency',
    currency: 'USD',
});

export default function Cart() {

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

   function deleteItem(itemID) //deletes items on the cart page
    {
        let destIdx = currentCart.findIndex(x => x.id === itemID);
        delete currentCart[destIdx];
        var i=0;
        var len = currentCart.length, i;
        for(i = 0; i < len; i++ )
            currentCart[i] && currentCart.push(currentCart[i]); 

        currentCart.splice(0 , len);
        sessionStorage.setItem('cart', JSON.stringify(currentCart));
        const newCart = currentCart.filter(
          (item) => { return item.id !== itemID;}
        )

        console.log("new cart " +JSON.stringify(newCart,null,4));
        updateCart(prevCart => prevCart = newCart);
        console.log("new cart 2" +JSON.stringify(currentCart,null,4));
        sessionStorage.setItem('detailedCart', JSON.stringify(currentCart));


    }

    function addQty(itemID)
    {
        let destIdx = currentCart.findIndex(x => x.id === itemID); 
        currentCart[destIdx].qty += 1;
        sessionStorage.setItem('cart', JSON.stringify(currentCart));
        const newCart = currentCart.filter(
            (item) => { return item.id}
          )
        updateCart(prevCart => prevCart = newCart);
        console.log("cart with data " +JSON.stringify(currentCart,null,4))
        console.log("new cart " +JSON.stringify(currentCart,null,4));
        sessionStorage.setItem('detailedCart', JSON.stringify(currentCart));

    }

    function subQty(itemID)
    {
        let destIdx = currentCart.findIndex(x => x.id === itemID); 
        if(currentCart[destIdx].qty>1){
            currentCart[destIdx].qty -= 1;
        }
        else{
            deleteItem(itemID)
        }
        const newCart = currentCart.filter(
            (item) => { return item.id}
          )
        sessionStorage.setItem('cart', JSON.stringify(currentCart));
        updateCart(prevCart => prevCart = newCart);
        console.log("cart with data " +JSON.stringify(currentCart,null,4))
        console.log("new cart " +JSON.stringify(currentCart,null,4));
        sessionStorage.setItem('detailedCart', JSON.stringify(currentCart));

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
                    <td><Button variant="success" onClick={() => addQty(x.id)}>+</Button>{x.qty}<Button variant="danger" onClick={() => subQty(x.id)}>-</Button></td>
                    <td>{x.price} <Button onClick={() => deleteItem(x.id)}>X</Button></td>
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
            <h2>Shopping Cart</h2>
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
                                    <Button href="/checkout" variant="primary" size="lg" >Checkout</Button>
                                </Col>
                            </Row>
                        </Stack>
                    </Col>
                </Row>
            </Stack>
        </Container>

    )
}