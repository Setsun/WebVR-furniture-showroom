import 'aframe-animation-component';
import 'aframe-layout-component';

import React from 'react';
import PropTypes from 'prop-types';

class CartCarousel extends React.Component {
  static propTypes = {
    products: PropTypes.array,
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

  renderProducts() {
    return (
      <a-entity layout="type: circle; margin: 6; radius: 3.25">
        <a-entity obj-model="obj: #sq-table-obj; mtl: #sq-table-mtl" rotation="90 0 0" scale="0.5 0.5 0.5"/>
        <a-entity obj-model="obj: #sq-table-obj; mtl: #sq-table-mtl" rotation="90 0 0" scale="0.5 0.5 0.5"/>
        <a-entity obj-model="obj: #sq-table-obj; mtl: #sq-table-mtl" rotation="90 0 0" scale="0.5 0.5 0.5"/>
        <a-entity obj-model="obj: #sq-table-obj; mtl: #sq-table-mtl" rotation="90 0 0" scale="0.5 0.5 0.5"/>
        <a-entity obj-model="obj: #sq-table-obj; mtl: #sq-table-mtl" rotation="90 0 0" scale="0.5 0.5 0.5"/>
        <a-entity obj-model="obj: #sq-table-obj; mtl: #sq-table-mtl" rotation="90 0 0" scale="0.5 0.5 0.5"/>
        <a-entity obj-model="obj: #sq-table-obj; mtl: #sq-table-mtl" rotation="90 0 0" scale="0.5 0.5 0.5"/>
        <a-entity obj-model="obj: #sq-table-obj; mtl: #sq-table-mtl" rotation="90 0 0" scale="0.5 0.5 0.5"/>
        <a-entity obj-model="obj: #sq-table-obj; mtl: #sq-table-mtl" rotation="90 0 0" scale="0.5 0.5 0.5"/>
        <a-entity obj-model="obj: #sq-table-obj; mtl: #sq-table-mtl" rotation="90 0 0" scale="0.5 0.5 0.5"/>
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
          dur: 2000;
          to: 1 1 1
        `}>
        {this.renderRing()}
        {this.renderProducts()}
      </a-entity>
    );
  }
}

export default CartCarousel;
