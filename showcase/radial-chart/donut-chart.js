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
  RadialChart,
  Hint
} from 'index';

export default class SimpleRadialChart extends Component {
  state = {
    value: false
  }
  render() {
    const {value} = this.state;
    console.log(value);
    return (
      <RadialChart
        className={'donut-chart-example'}
        innerRadius={70}
        radius={140}
        data={[
          {angle: 0.319445,label: 'Slips'},
          {angle: 0.219434,label: 'Slips'},
          {angle: 0.196965,label: 'Slips'},
          {angle: 0.143882,label: 'Slips'},
          {angle: 0.043137,label: 'Slips'},
          {angle: 0.014971,label: 'Slips'}
        ]}
        onValueMouseOver={v => this.setState({value: g})}
        onSeriesMouseOut={v => this.setState({value: false})}

        width={300}
        height={300}>

        {value && <Hint value={value}/>}

      </RadialChart>
    );
  }
}
