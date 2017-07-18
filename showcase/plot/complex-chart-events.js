// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  makeWidthFlexible,
  LineSeries,
  VerticalRectSeries,
  DiscreteColorLegend,
  Crosshair
} from 'index';

const FlexibleXYPlot = makeWidthFlexible(XYPlot);


export default class Example extends React.Component {

  constructor(props) {
    super(props);
    const totalValues = Math.random() * 50;

    this.state = {
      series: [
        {
          title: 'Falls',
          disabled: false,
          data: this.props.data.Falls
        },
        {
          title: 'StruckBys',
          disabled:true,
          data: this.props.data.StruckBys
        },
        {
          title: 'Slips',
          disabled: true,
          data: this.props.data.Slips
        },
        {
          title: 'Trips',
          disabled: true,
          data: this.props.data.Trips
        }

      ]

    };

     this._legendClickHandler = this._legendClickHandler.bind(this);
  }



  _legendClickHandler(item, i) {
    const {series} = this.state;
    series[i].disabled = !series[i].disabled;
    this.setState({series});
  }

  render() {
    console.log(this.props.data);
    const {series, crosshairValues} = this.state;
    return (

      <div className="example-with-click-me">
        <div className="legend">

          <DiscreteColorLegend
            onItemClick={this._legendClickHandler}
            width={180}
            items={series}/>
        </div>

        <div className="chart">

          <FlexibleXYPlot
            animation
            height={300}>
            <HorizontalGridLines />

            <YAxis
              className="cool-custom-name"
              tickSizeInner={0}
              tickSizeOuter={8}
            />

            <XAxis
              className="even-cooler-custom-name"
              tickSizeInner={0}
              tickSizeOuter={8}
            />


            <LineSeries
              data={series[0].data}
              curve="curveMonotoneX"
              {...(series[0].disabled ? {opacity: 0.08} : null)}/>

            <LineSeries
              data={series[1].data}
              curve="curveMonotoneX"
              {...(series[1].disabled ? {opacity: 0.08} : null)}/>

            <LineSeries
              data={series[2].data}
              curve="curveMonotoneX"
              {...(series[2].disabled ? {opacity: 0.08} : null)}/>

            <LineSeries
              data={series[3].data}
              curve="curveMonotoneX"
              {...(series[3].disabled ? {opacity: 0.08} : null)}/>



          </FlexibleXYPlot>
        </div>


      </div>
    );
  }
}
