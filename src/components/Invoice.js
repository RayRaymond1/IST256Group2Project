import { Component } from 'react';
import { Container, Image, Row, Col, Stack, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';


var formatter = new Intl.NumberFormat('en-US', { //found out about a numberformatter through stackexchange
    style: 'currency',
    currency: 'USD',
});

let totalAmount = formatter.format(15.00);
//TODO: CSS Rules for header, summary, details
export default class Invoice extends Component {
    render() {
        return (
            <Container>
                <Stack gap={3}>
                    <Row className="header">
                        <Col sm={9}>
                            <Image src={logo} align='start' />
                        </Col>
                        <Col>
                            <Stack algin='end' style={{ textAlign: 'right' }} gap={3}>
                                <h2>INVOICE</h2>
                                <h5>Group name</h5>
                            </Stack>
                        </Col>
                    </Row>
                    <Container className="summary">
                        <Row>
                            <Col sm={9}>
                                <Stack algin='start' gap={1}>
                                    <h2>Inovice No#</h2>
                                    <h5>Inovice Date:</h5>
                                </Stack>
                            </Col>
                            <Col>
                                <Stack algin='end' style={{ textAlign: 'right' }} gap={1}>
                                    <h2>{totalAmount}</h2>
                                    <h5>AMOUNT DUE</h5>
                                </Stack>
                            </Col>
                        </Row>
                    </Container>
                    <Table striped bordered className="details" style={{ textAlign: 'center' }}>
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
                                    <Col>
                                        <p>Shipping:</p>
                                    </Col>
                                    <Col>
                                        <p style={{ textAlign: 'right' }}>0.00</p>
                                    </Col>
                                </Row>
                                <hr></hr>
                                <Row>
                                    <Col>
                                        <h3>TOTAL:</h3>
                                    </Col>
                                    <Col>
                                        <h3 style={{ textAlign: 'right' }}>{totalAmount}</h3>
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
}