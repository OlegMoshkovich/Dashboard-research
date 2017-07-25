import React, {Component} from 'react';
import {mapSection} from '../showcase-components/showcase-utils';
import {showCase} from '../index';
const {
  AnimationExample,
  LabelSeriesExample,
  GradientExample,
  SyncedCharts,
  TimeChart,
  TriangleExample,
  VoronoiLineChart
} = showCase;

const MISC = [  {

  component: AnimationExample,
  docsLink: 'http://uber.github.io/react-vis/#/documentation/overview/animation'
},{

  component: AnimationExample,
  docsLink: 'http://uber.github.io/react-vis/#/documentation/overview/animation'
},{
  name: 'Daily Patterns - MultiDimensional space',
  component: VoronoiLineChart
}
];

class MiscShowcase extends Component {
  render() {
    return (
      <article id="misc">
        {MISC.map(mapSection)}
      </article>
    );
  }
}

export default MiscShowcase;
