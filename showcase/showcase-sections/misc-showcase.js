import React, {Component} from 'react';
import {mapSection} from '../showcase-components/showcase-utils';
import {showCase} from '../index';
const {
  AnimationExample,
  AnimationExampleFalls,
  AnimationExampleStruckBy,
  LabelSeriesExample,
  GradientExample,
  SyncedCharts,
  TimeChart,
  TriangleExample,
  VoronoiLineChart
} = showCase;

const MISC = [{
  component: AnimationExample,
  },{
  component: AnimationExample,
}];

class MiscShowcase extends Component {
  render() {

    return (
      <div>
      <article id="misc">
        <section >
        <AnimationExampleFalls data = {this.props.data}/>
        </section >
        <section >
        <AnimationExampleStruckBy data = {this.props.data}/>
        </section >
      </article>
    </div>
    );
  }
}

export default MiscShowcase;
