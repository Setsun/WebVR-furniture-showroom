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
          material="transparent: true; opacity: 0.5"
          position="0.5 0 0"
          radius="0.5"
        />
        <a-plane
          material="transparent: true; opacity: 0.5"
          position="0 0 0"
          height="1"
          width="1"
        />
        <a-circle
          material="transparent: true; opacity: 0.5"
          position="-0.5 0 0"
          radius="0.5"
        />
      </a-entity>
    )
  }

  render() {
    const {
      product
    } = this.props;

    return (
      <a-entity>
        {this.renderBubble()}
        <a-entity position="0.5 0 0.01">
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
