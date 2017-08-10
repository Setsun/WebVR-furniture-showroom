import 'aframe-animation-component';

import React from 'react';
import PropTypes from 'prop-types';

import AddToCartButton from './AddToCartButton';
import ExpandDescriptionButton from './ExpandDescriptionButton';
import ColorPaletteButton from './ColorPaletteButton';

class ProductInfoBubble extends React.Component {
  static propTypes = {
    product: PropTypes.object,
  }

  renderBubble() {
    return (
      <a-entity position="0.5 0.5 0">
        <a-circle
          position="0.5 0 0"
          radius="0.5"
        />
        <a-plane
          position="0 0 0"
          height="1"
          width="1"
        />
        <a-circle
          position="-0.5 0 0"
          radius="0.5"
        />
      </a-entity>
    )
  }

  renderDescription() {
    const {
      product
    } = this.props;

    return (
      <a-entity position="-0.15 0.75 0">
        <a-text position="0 0 0" value="Fancy Table" color="#000000"/>
        <a-text position="0 -0.35 0" value="$12.56" color="#8200FF"/>
      </a-entity>
    );
  }

  render() {
    const {
      product
    } = this.props;

    return (
      <a-entity>
        {this.renderBubble()}
        {this.renderDescription()}
        <a-entity position="-0.25 -0.25 0.01">
          <AddToCartButton
            onAddToCart={() => console.log('ATC clicked!')}
          />
        </a-entity>
        <a-entity position="0.75 0 0.02">
          <ExpandDescriptionButton
            onExpandDescription={() => console.log('ED clicked!')}
          />
        </a-entity>
        <a-entity position="1 0 0.03">
          <ColorPaletteButton
            colors={product.colors}
          />
        </a-entity>
      </a-entity>
    );
  }
}

export default ProductInfoBubble;
