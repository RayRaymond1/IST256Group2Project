import { Container, Row, Col, Stack, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import pies from '../assets/pies.json';
let totalAmount = 0;

var formatter = new Intl.NumberFormat('en-US', { //found out about a numberformatter in JS through stackexchange
    style: 'currency',
    currency: 'USD',
});

export default function Cart() {
    function DetailedCart()
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
        return detailedCart;
        }
    }
    var cartWithData = DetailedCart();
    let counter = 0;

    function listCart()
    {
        var display;
        if (cartWithData == null)
        {
            return;
        }else{
        console.log("listing table");
        console.log(cartWithData);
        display = cartWithData.map(x => {
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

    function findTotal()
    {
        if(cartWithData == null)
        {
        totalAmount = 0;
        } else
        {
            totalAmount= cartWithData.reduce(
                (previousValue, currentValue) => previousValue + (currentValue.price * currentValue.qty)
                , 0
            )
        }
        console.log(totalAmount);
        totalAmount = formatter.format(totalAmount);
        return totalAmount;
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
                                    <p style={{ textAlign: 'right' }}>{findTotal()}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ textAlign: 'center' }}>
                                    <Button variant="primary" size="lg" >Checkout</Button>
                                </Col>
                            </Row>
                        </Stack>
                    </Col>
                </Row>
            </Stack>
        </Container>

    )
}