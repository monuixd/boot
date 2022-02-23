import React, { Component } from "react";
import { Row, Col, Card, CardColumns, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

class CardBox extends Component {

    render() {
        return (

            <CardColumns>
                <Row>
                    <Col sm="4">
                        <Card>
                            <CardImg
                                alt="Card image cap"
                                src="https://picsum.photos/256/186"
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </CardText>
                                <Button>
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardImg
                                alt="Card image cap"
                                src="https://picsum.photos/256/186"
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </CardText>
                                <Button>
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardImg
                                alt="Card image cap"
                                src="https://picsum.photos/256/186"
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </CardText>
                                <Button>
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </CardColumns>
        )
    }
}

export default CardBox;