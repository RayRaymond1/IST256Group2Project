import { Container, Row, Col, Stack, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import pies from '../assets/pies.json';
let totalAmount = 0;
export default function Cart() {
    function DetailedCart()
    {
        let cart = JSON.parse(sessionStorage.getItem('cart'));
        let products = pies;
        let detailedCart = cart.map( x => {let currProd = products.find(y => x.id == y.id)
                                           currProd.qty = x.qty;
                                           totalAmount += currProd.price * currProd.qty;
                                           return currProd;
        });
        return detailedCart;
    }
    var cartWithData = DetailedCart();
    let counter = 0;
    return (
        <Container>
            <h2>Shopping Cart</h2>
            <Stack gap={3}>
                <Table striped bordered variant='dark' className="details" style={{ textAlign: 'center', color: 'white' }}>
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
                            cartWithData.map(x => {
                                counter++;
                                return(
                                    <tr key ={x.id} className='tableText'>
                                        <td>{counter}</td>
                                        <td>{x.name}</td>
                                        <td>{x.qty}</td>
                                        <td>{x.price}</td>
                                    </tr>
                                )
                            })
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
                                    <p style={{ textAlign: 'right' }}>{totalAmount}</p>
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