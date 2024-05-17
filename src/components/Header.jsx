import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: [],
      items: [],
      nextPage: this.nextPage.bind(this),
    };
  }
  nextPage(card) {
    this.setState({ items: card });
  }

  componentDidMount() {
    const fetchData = async () => {
      const response = await fetch(`https://dummyjson.com/products`);
      const jsonResponse = await response.json();
      const res = jsonResponse.products;
      this.setState({ profileData: res });
      return res;
    };
    fetchData();
  }

  render() {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>ecommerce shope</h1>
        <div className="container">
          <div class="wrapper">
            {this.state.profileData?.map((card) => {
              return (
                <div className="cards" id="allcards" key={card.id}>
                  <div className="card-container">
                    <img src={card.thumbnail} alt="" />
                    <div className="card-content">
                      <p className="description">
                        {card.description.length < 60
                          ? card.description
                          : card.description.slice(0, 62)}
                      </p>
                      <p className="title">{card.title}</p>
                      <div className="btn_container">
                        <button
                          className="btn"
                          onClick={() => this.nextPage(card)}
                        >
                          <Link to={`nextPage/${card.id - 1}`} id="link">
                            More details
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
export default Header;
