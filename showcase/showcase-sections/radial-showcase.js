import React, {Component} from 'react';

import {mapSection} from '../showcase-components/showcase-utils';
import {showCase} from '../index';
const {
  CustomRadiusRadialChart,
  DonutChartExample,
  SimpleRadialChart
} = showCase;

const RADIAL = [ {
  name: 'Falls',
  component: CustomRadiusRadialChart
}, {
  name: 'StruckBy',
  component: CustomRadiusRadialChart
}];

class RadialShowcase extends Component {
  render() {
    return (
      <article id="radial-charts">
        <h2>Correlations</h2>
        {RADIAL.map(mapSection)}
      </article>
    );
  }
}

export default RadialShowcase;
