import React, { Component } from "react";
import CardBox from "./CardBox";
import Products from "./products";
import axios from "axios";
import Slider from "./Slider";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
      loader: true,
    };
  }

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log("NN", response);

      this.setState({
        products: response.data,
        loader: false,
      });

      let productCatArray = [];

      this.state.products.filter((item) => {
        let productData = productCatArray.findIndex((el) => {
          return item.category === el.category;
        });
        // console.log("productData+", productData)
        if (productData <= -1) {
          productCatArray.push({
            category: item.category,
            name: item.name,
            price: item.price,
            image: item.image,
          });
        }
      });

      this.setState({
        categories: productCatArray,
      });

      this.props.fromParent({
        productCatArray,
        loader: false,
      });
    });
  }

  render() {
    return (
      <>
        <Slider />
        <CardBox prodCat={this.state.categories} />
        <Products proList={this.state.products} />
      </>
    );
  }
}

export default Home;
