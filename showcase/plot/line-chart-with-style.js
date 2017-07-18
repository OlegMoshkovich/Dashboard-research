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
import {curveCatmullRom} from 'd3-shape';

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  DiscreteColorLegend,
  Crosshair
} from 'index';

export default class Example extends React.Component {
  render() {
    return (
      <XYPlot
        width={1000}
        height={300}>
        <HorizontalGridLines style={{stroke: '#B7E9ED'}}/>
        <VerticalGridLines style={{stroke: '#B7E9ED'}}/>
        <XAxis title="X Axis" style={{
          line: {stroke: '#ADDDE1'},
          ticks: {stroke: '#ADDDE1'},
          text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
        }}/>
        <YAxis title="Y Axis" />


      <LineSeries
          className="first-series"
          data={this.props.data.Falls}
          curve={curveCatmullRom.alpha(0.5)}
          style={{
            strokeLinejoin: 'round',
            strokeWidth: 2,
            stroke: '#e05038'
          }}
        />
        <LineSeries
          className="first-series"
          data={this.props.data.StruckBys}
          curve={curveCatmullRom.alpha(0.5)}
          style={{
            strokeLinejoin: 'round',
            strokeWidth: 2,
            stroke: "#334431"
          }}
        />

        <LineSeries
          className="first-series"
          data={this.props.data.Bends}
          curve={curveCatmullRom.alpha(0.5)}
          style={{
            strokeLinejoin: 'round',
            strokeWidth: 1,
            stroke: "#252839"
          }}
        />

        <LineSeries
          className="first-series"
          data={this.props.data.Twists}
          curve={curveCatmullRom.alpha(0.5)}
          style={{
            strokeLinejoin: 'round',
            strokeWidth: 1,
            stroke: "#f2b632"
          }}
        />

        <LineSeries
          className="first-series"
          data={this.props.data.Reaches}
          curve={curveCatmullRom.alpha(0.5)}
          style={{
            strokeLinejoin: 'round',
            strokeWidth: 1,
            stroke: "#b5b5b7"
          }}
        />

        <LineSeries
          className="first-series"
          data={this.props.data.Squats}
          curve={curveCatmullRom.alpha(0.5)}
          style={{
            strokeLinejoin: 'round',
            strokeWidth: 1,
            stroke: "#677077"
          }}
        />

      </XYPlot>
    );
  }
}
