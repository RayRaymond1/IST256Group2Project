import { Container, Row, Col, Stack, Dropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Checkout(){
    return (
        <Container>
            <Stack gap={2}>
                <Row>
                    <Col sm={8}>
                        <Stack gap={2}>
                            <Row>
                                <p style={{textAlign: 'center'}}>Billing Information</p>
                            </Row>
                            <Row>
                                <Col>
                                <p style={{textAlign: 'left'}}>First Name</p>
                                </Col>
                                <Col>
                                <input style={{textAlign: 'left'}} type="text" id="firstName" name="firstName"></input>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <p style={{textAlign: 'left'}}>Last Name</p>
                                </Col>
                                <Col>
                                <input style={{textAlign: 'left'}} type="text" id="lastName" name="lastName"></input>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <p style={{textAlign: 'left'}}>Phone Number</p>
                                </Col>
                                <Col>
                                <input style={{textAlign: 'left'}} type="text" id="phone" name="phone"></input>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <p style={{textAlign: 'left'}}>Street Address</p>
                                </Col>
                                <Col>
                                <input style={{textAlign: 'left'}} type="text" id="address" name="address"></input>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Stack>
                                        <p style={{textAlign: 'left'}}>City</p>
                                        <input style={{textAlign: 'left'}} type="text" id="city" name="city"></input>
                                    </Stack>
                                </Col>
                                <Col>
                                    <Stack>
                                        <p style={{textAlign: 'left'}}>State</p>
                                        <input style={{textAlign: 'left'}} type="text" id="state" name="state"></input>
                                    </Stack>
                                </Col>
                                <Col>
                                    <Stack>
                                        <p style={{textAlign: 'left'}}>Zip Code</p>
                                        <input style={{textAlign: 'left'}} type="text" id="state" name="state"></input>
                                    </Stack>
                                </Col>
                            </Row>
                            <br/>

                            <Row>
                                <p style={{textAlign: 'center'}}>Shipping Method</p>
                            </Row>

                            <Row>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="shipping" id="visa" value="option1" checked>
                                </input>
                                <label style={{color:"white"}} class="form-check-label" for="visa">
                                Free(7-10 buisness days)
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="shipping" id="masterCard" value="option2"></input>
                                <label style={{color:"white"}} class="form-check-label" for="masterCard">
                                $3.00(3 day Shipping)
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="shipping" id="discover" value="option2"></input>
                                <label style={{color:"white"}} class="form-check-label" for="discover">
                                $10.00(overnight Shipping)
                                </label>
                            </div>
                                
                            </Row>
                            <br/>

                            <Row>
                                <p style={{textAlign: 'center'}}>Payment Method</p>
                            </Row>

                            <Row>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="paymentMethod" id="visa" value="option1" checked></input>
                                <label style={{color:"white"}} class="form-check-label" for="visa">
                                Visa
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="paymentMethod" id="masterCard" value="option2"></input>
                                <label style={{color:"white"}} class="form-check-label" for="masterCard">
                                MasterCard
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="paymentMethod" id="discover" value="option2"></input>
                                <label style={{color:"white"}} class="form-check-label" for="discover">
                                Discover
                                </label>
                            </div>
                                
                            </Row>
                            <Row>
                                <Stack>
                                    <p style={{textAlign: 'left'}}>Card Number</p>
                                    <input style={{textAlign: 'left'}} type="text" id="cardNum" name="cardNum"></input>
                                </Stack>
                            </Row>
                            <Row>
                                <Col>
                                    <Stack>
                                        <p style={{textAlign: 'left'}}>Expiration Date</p>
                                        <Stack gap={3} direction ="horizontal">
                                        <input style={{textAlign: 'left'}} type="text" id="expirationMonth" name="expirationMonth"></input>
                                        <input style={{textAlign: 'left'}} type="text" id="expirationYear" name="expirationYear"></input>
                                        </Stack>
                                    </Stack>
                                </Col>
                                <Col>
                                <Stack>
                                    <p style={{textAlign: 'left'}}>Security Code</p>
                                    <input length = {3} style={{textAlign: 'left'}} type="text" id="state" name="state"></input>
                                </Stack>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ textAlign: 'right' }}>
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