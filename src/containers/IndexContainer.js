import 'aframe-animation-component';

import React from 'react';
import {connect} from 'react-redux';
import {Entity, Scene} from 'aframe-react';

import ProductTile from '../components/product/ProductTile';
import CartCarousel from '../components/carousels/CartCarousel';
import CategoriesCarousel from '../components/carousels/CategoriesCarousel';

import {onTextureChange} from '../data/userState';

class IndexContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCarouselOpen: false,
      categoriesCarouselOpen: false,
    }
  }

  componentDidMount() {
    // Test redux actions here
  }

  renderAssets() {
    return (
      <a-assets>
        <a-asset-item id="icon-change-color" src="/assets/images/icon-change-color.png"></a-asset-item>
        <a-asset-item id="icon-add-to-cart" src="/assets/images/icon-add-to-cart.png"></a-asset-item>
        <a-asset-item id="tree-obj" src="/assets/models/table_1/Jet_table.obj"></a-asset-item>
        <a-asset-item id="tree-mtl" src="/assets/models/table_1/Jet_table.mtl"></a-asset-item>
      </a-assets>
    );
  }

  renderController() {
    return (
      <Entity daydream-controls="hand: right" />
    );
  }

  renderRoom() {
    return (
      <Entity>
        <ProductTile />
      </Entity>
    );
  }

  renderCartCarousel() {
    return this.state.cartCarouselOpen && <CartCarousel />
  }

  renderCategoriesCarousel() {
    return this.state.categoriesCarouselOpen && <CategoriesCarousel />
  }

  render () {
    return (
      <Scene>
        <a-camera>
          <a-cursor></a-cursor>
        </a-camera>
        <a-sky color="#6EBAA7"></a-sky>
        {this.renderAssets()}
        {this.renderController()}
        {this.renderRoom()}
        {this.renderCartCarousel()}
        {this.renderCategoriesCarousel()}
      </Scene>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = () => {
  return {
    onButtonClick: onTextureChange
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexContainer);
