import { Component } from 'react';
import { Container, Image, Row, Col, Stack, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
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
                                    <h2>$15.00</h2>
                                    <h5>AMOUNT DUE</h5>
                                </Stack>
                            </Col>
                        </Row>
                    </Container>
                    <Table striped bordered className="details" fluid style={{ textAlign: 'center'}}>
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
                        <tbody>
                            <tr>
                                <td sm={1}>
                                    <h5>#</h5>
                                </td>
                                <td sm={8}>
                                    <h5>ITEMS & DESCRIPTION</h5>
                                </td>
                                <td>
                                    <h5>QUANTITY</h5>
                                </td>
                                <td>
                                    <h5>PRICE</h5>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Stack>
            </Container>

        )
    }
}