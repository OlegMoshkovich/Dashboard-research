import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {showCase} from '../index';
import {mapSection} from '../showcase-components/showcase-utils';
const {
  ComplexChartMotions,
  ComplexChartEvents,
  LineChart,
  LineChartManyColors,
  LineChartWithStyle,
  LineChartCanvas,
  ScatterplotChart,
  ScatterplotCanvas,
  LineMarkChart
} = showCase;

const PLOTS = [{
  component: LineChart,
  name: 'Critical Events',
}
];



class PlotsShowcase extends Component {

  render() {

    return (


      <article id="plots">
        <h2>Clusters</h2>



        <section >


          <h3>{'Motions'}</h3>
            <ScatterplotCanvas/>


      </section>

      </article>



    );
  }
}

PlotsShowcase.propTypes = {
  forExample: PropTypes.bool
};

export default PlotsShowcase;
