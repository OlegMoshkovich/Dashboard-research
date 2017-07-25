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

import ShowcaseButton from '../showcase-components/showcase-button';
import {
  XYPlot,
  XAxis,
  YAxis,
  makeWidthFlexible,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeries
} from 'index';

const FlexibleXYPlot = makeWidthFlexible(XYPlot);



function processData(data,motion) {
  var dataVis =[];
   for (var i = 0; i < 10; i++){

     var datapoint = {
       'i':i,
       'x':data[i][motion],
       'y':data[i]["falls"]
     }
     dataVis.push(datapoint)
   }

  return dataVis
}

var i=0;


const MODE = [
  'noWobble',
  'gentle',
  'wobbly',
  'stiff'
];
const name = [
  'struckBy',
  'twists',
  'squats',
  'trips',
  'reaches',
  'slips'
];

function setName(){
  i=i+1
  console.log('number:' + i)
  console.log('name:' + name[i])
  if (i==5){
    i=0
  }
  return name[i]
}



export default class Example extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        componentName:this.props.name,
        motion:'struckBy',
        data: this.props.data.Pattern,
        modeIndex: 0,
        name: name,
        i:0
      }

}



  updateModeIndex = increment => () => {
    const newIndex = this.state.modeIndex + (increment ? 1 : -1);
    const modeIndex = newIndex < 0 ? MODE.length - 1 : newIndex >= MODE.length ? 0 : newIndex;
    this.setState({
      modeIndex
    });
  }

  render() {

    const {modeIndex, data} = this.state;
    return (
      <div className="centered-and-flexed-controls">
        <XYPlot
          width={400}
          height={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
            <MarkSeries
        animation={'stiff'}
        data={processData(this.state.data,this.state.motion)}/>
        </XYPlot>

        <ShowcaseButton onClick={() => this.setState({motion:setName()})} buttonContent={this.state.motion} />

    </div>
    );
  }
}
