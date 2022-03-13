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

class CardBox extends Component {
  render() {
    //console.log("THIS", this);
    const productsList = this.props.prodCat;
    //console.log("Props:", this.props);
    return (
      <Container>
        <h2>Category</h2>
        {this.props.loader ? (
          <div className="loader"></div>
        ) : (
          <Row>
            {productsList.map((item, i) => {
              return (
                <Col sm="3" key={i}>
                  <Card>
                    <CardImg
                      alt="Card image cap"
                      src={item.image}
                      top
                      width="100%"
                    />
                    <CardBody>
                      <CardTitle tag="h5">{item.title}</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {item.category}
                      </CardSubtitle>
                      <CardText>{item.description}</CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
    );
  }
}

export default CardBox;
