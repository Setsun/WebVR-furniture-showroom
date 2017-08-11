import 'aframe-animation-component';
import 'aframe-layout-component';

import React from 'react';
import PropTypes from 'prop-types';

class CartCarousel extends React.Component {
  static propTypes = {
    products: PropTypes.array,
  }

  constructor(props) {
    super(props);

    this.state = {
      willExit: false,
      rotationDegrees: 0
    }
  }

  handleClose() {
    this.setState({willExit: true});

    setTimeout(() => {
      this.props.onClick();
    }, 2000);
  }

  rotateLeft() {
    const currentDegrees = this.state.rotationDegrees || 0;

    this.setState({rotationDegrees: currentDegrees - 60});
  }

  rotateRight() {
    const currentDegrees = this.state.rotationDegrees || 0;

    this.setState({rotationDegrees: currentDegrees + 60});
  }

  rotateAnimation() {
    const {rotationDegrees} = this.state;

    return (
      <a-animation
        key={Date.now()}
        attribute="rotation"
        easing="linear"
        dur="500"
        to={`0 0 ${rotationDegrees}`}
      />
    );
  }

  exitAnimation() {
    if (!this.state.willExit) {
      return null;
    }

    return `
      property: scale;
      dur: 1500;
      elasticity: 300;
      easing: easeInOutElastic;
      to: 0 0 0
    `;
  }

  getPosition(x0, y0, radius, theta) {
    const x = x0 + (radius * Math.cos(theta));
    const y = y0 + (radius * Math.sin(theta));

    return {x, y};
  }

  renderRing() {
    return (
      <a-entity>
        <a-ring color="#8200AF" radius-inner="3.95" radius-outer="4.0" material="transparent:true; opacity: 0.5;" />
        <a-ring color="#EEEEEE" radius-inner="2.5" radius-outer="3.95" material="transparent:true; opacity: 0.5;" />
        <a-ring color="#8200AF" radius-inner="2.45" radius-outer="2.5" material="transparent:true; opacity: 0.5;" />
      </a-entity>
    );
  }

  renderButtons() {
    return (
      <a-entity position="0 2.25 0.25" rotation="75 0 0">
        <a-image
          src="#icon-left-circle"
          position="-0.75 0 0"
          height="0.2"
          width="0.2"
          onClick={() => this.rotateLeft()}
        />
        <a-image
          src="#icon-close-circle"
          position="0 0 0"
          height="0.2"
          width="0.2"
          onClick={() => this.handleClose()}
        />
        <a-image
          src="#icon-right-circle"
          position="0.75 0 0"
          height="0.2"
          width="0.2"
          onClick={() => this.rotateRight()}
        />
      </a-entity>
    );
  }

  renderProducts() {
    const slice = (2 * Math.PI) / (this.props.products.length - 1);

    const products = this.props.products.map((product, index) => {
      const {x, y} = this.getPosition(0, 0, 3.25, slice * index);

      if(product.textureId){
        const model = "obj: "+product.modelId+"; mtl:"+ product.textureId;
        return (
          <a-entity
            key={`${product.modelId}-${index}`}
            obj-model={model}
            rotation="90 0 0"
            position={`${x} ${y} 0`}
            scale="0.25 0.25 0.25"
          />
        )
      }

      return (
        <a-gltf-model
          key={`${product.modelId}-${index}`}
          src={product.modelId}
          rotation="90 0 0"
          position={`${x} ${y} 0`}
          scale="0.25 0.25 0.25"
        />
      );
    });

    return (
      <a-entity>
        {products}
      </a-entity>
    );
  }

  render() {
    return (
      <a-entity
        position="0 0 0"
        rotation="-90 0 0"
        scale="0 0 0"
        animation={`
          property: scale;
          dur: 1500;
          to: 1 1 1
        `}
        animation__exit={this.exitAnimation()}>
        <a-entity>
          {this.rotateAnimation()}
          {this.renderRing()}
          {this.renderProducts()}
        </a-entity>
        {this.renderButtons()}
      </a-entity>
    );
  }
}

export default CartCarousel;
