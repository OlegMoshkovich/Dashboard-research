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

import React, {Component} from 'react';

import {
  CircularGridLines,
  RadialChart

} from 'index';

const DATA = [
  {
    angle: 0.319445,
    id: 2,
    radius: 10,
    color:'#19CDD7',
    label: 'StruckBy'
  },
  {
    angle: 0.219434,
    label: 'Twist',
    color:'#DDB27C',
    id: 10,
    radius: 11
  },
  {
    angle: 0.196965,
    id: 4,
    radius: 10,
    color:'#88572C',
    label: 'Squats'
  },
  {
    angle: 0.143882,
    id: 4,
    radius: 11,
    color:'#FF991F',
    subLabel: 'Trips'
  },

  {
    angle: 0.043137,
    id: 2,
    radius: 9,
    color:'#776E57',
    label: 'Reaches'
  },
  {
    angle: 0.014971,
    id: 2,
    radius: 12,
    color:'#125C77',
    label: 'Slips'
  }



];

function mapData(hoveredSection) {
  return DATA.map((row, index) => {
    return {
      ...row,
      innerRadius: hoveredSection === (index + 1) ? row.radius - 1 : null,
      opacity: (!hoveredSection || hoveredSection === index + 1) ? 1 : 0.6
    };
  });
}

export default class SimpleRadialChart extends Component {
  state = {
    hoveredSection: false,
    value: false
  }

  render() {
    const {hoveredSection,value} = this.state;
    return (
      <RadialChart

        showLabels
        radiusDomain={[0, 20]}
        data={mapData(hoveredSection)}
        labelsAboveChildren
        colorType="literal"




        width={500}
        height={300} >


      </RadialChart>
    );
  }
}
