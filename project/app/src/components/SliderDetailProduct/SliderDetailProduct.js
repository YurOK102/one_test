import React, { useState, useRef } from "react";
import Slider from "react-slick";

export default class SliderDetailProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div className="slider">
        <div className="wrap-two-sliders">
          <div className="slider-detail_product">
            <Slider
              asNavFor={this.state.nav2}
              ref={(slider) => (this.slider1 = slider)}
              arrows={false}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              fade={true}
              dots={true}
              responsive={[
                {
                  breakpoint: 767,
                  settings: {
                    dots: true,
                  },
                },
              ]}
            >
              {this.props.data.map((item, key) => {
                return (
                  <div key={key}>
                    <div className="slide">
                      <img src={item.img} />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>

          <div className="slider-mimi_detail_product">
            <Slider
              asNavFor={this.state.nav1}
              ref={(slider) => (this.slider2 = slider)}
              arrows={false}
              infinite={true}
              speed={500}
              slidesToShow={3}
              slidesToScroll={1}
              focusOnSelect={true}
              dots={false}
              responsive={[
                {
                  breakpoint: 1279,
                  settings: {
                    vertical: false,
                    arrows: true,
                    slidesToShow: 3,
                  },
                },
              ]}
            >
              {this.props.data.map((item, key) => {
                return (
                  <div key={key}>
                    <div className="slide-mini">
                      <img src={item.img} />
                      <div className="slider-text">{item.name}</div>
                      <div className="slider-checkmark-wrap">
                        <div className="slider-checkmark"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
