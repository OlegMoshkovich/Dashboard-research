import React, {Component} from 'react';

import {showCase} from '../index';
import {mapSection} from '../showcase-components/showcase-utils';
const {
  AnimatedSunburst,
  ArcSeriesExample,
  BasicSunburst,
  ClockExample,
  SunburstWithTooltips
} = showCase;

const SUNBURSTS = [{
  name: 'Basic Sunburst',
  component: BasicSunburst,

},{
  name: 'Animated Sunburst',
  component: AnimatedSunburst
}];

class SunburstSection extends Component {
  render() {
    return (
      <article id="sunbursts">
        <h2>Correlations</h2>
        {SUNBURSTS.map(mapSection)}
      </article>
    );
  }
}

export default SunburstSection;
