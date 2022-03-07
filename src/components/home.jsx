import React, { Component } from "react";
import CardBox from "./CardBox";
import axios from "axios";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            loader: true

        }
    }

    componentDidMount() {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                console.log("NN", response);

                this.setState({
                    products: response.data,
                    loader: false
                })

                let productCatArray = []

                this.state.products.filter((item) => {
                    let productData = productCatArray.findIndex((el) => {
                        return item.category === el.category;
                    })
                    // console.log("productData+", productData)
                    if (productData <= -1) {
                        productCatArray.push({

                            category: item.category,
                            name: item.name,
                            price: item.price,
                            image: item.image

                        })
                    }
                })

                this.setState({
                    products: productCatArray
                })

                this.props.sendData({

                    productCatArray,
                    loader: false

                })


            })
    }

    render() {
        return (
            <>
                <CardBox productCat={this.state.products} loader={this.state.loader} />
            </>
        )
    }
}

export default Home;