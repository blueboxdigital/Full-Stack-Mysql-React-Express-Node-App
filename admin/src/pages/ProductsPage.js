import React, { Component } from "react";

export class ProductsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      productDetails: []
    };

    this.handleMoney = this.handleMoney.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/products")
      .then(res => res.json())
      .then(res => this.setState({ products: res }))
      .catch(function(error) {
        // Catch errors here
      });
    fetch("http://localhost:3001/api/productDetails")
      .then(res => res.json())
      .then(res => this.setState({ productDetails: res }))
      .catch(function(error) {
        // Catch errors here
      });

    // fetch("")
    //   .then(res => res.json())
    //   .then(res => this.setState({ test: res }))
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  handleMoney(num) {
    let dollars = num / 100;
    let price = dollars.toLocaleString("en-US", { style: "currency", currency: "USD" });
    return price;
  }

  productAvailability = availability => {
    if (availability) {
      return `Available`;
    } else {
      return `Out of Stock`;
    }
  };

  render() {
    console.log(this.state.weather);
    return (
      <React.Fragment>
        <h2>Products</h2>
        <ul>
          {this.state.products.map(product => {
            let moneys = product.productPrice;
            return (
              <li key={product.productId}>
                <h4>{product.productName}</h4>
                <div>
                  <img src={product.productThumbnail} alt="" width="80" />
                </div>
                <p>{this.handleMoney(moneys)}</p>
                {this.state.productDetails.map(productDetail => {
                  if (productDetail.productId === product.productId) {
                    return (
                      <React.Fragment key={productDetail.productDetailId}>
                        <p>{productDetail.productType}</p>
                        <p>{productDetail.ProductDescription}</p>
                        <p>
                          Availability:{" "}
                          {this.productAvailability(productDetail.productAvailability)}
                        </p>
                        <p>{productDetail.productSKU}</p>
                      </React.Fragment>
                    );
                  }
                  return <p key={productDetail.productDetailId}>Can't find product details</p>;
                })}
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default ProductsPage;
