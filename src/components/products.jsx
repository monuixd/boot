import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Container,
} from "reactstrap";

class Products extends Component {
  render() {
    console.log("PRO Page", this.props);
    return (
      <Container>
        <h2>Item</h2>
        <Row>
          <Col sm="3">
            {/* <Card>
              <CardImg
                alt="Card image cap"
                src="{item.image}"
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">Title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  category
                </CardSubtitle>
                <CardText>{item.description}</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card> */}
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Products;
