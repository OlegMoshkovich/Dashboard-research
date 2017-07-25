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
  VerticalGridLines,
  makeWidthFlexible,
  LineSeries,
  VerticalRectSeries,
  DiscreteColorLegend,
  SearchableDiscreteColorLegend,
  Crosshair
} from 'index';

const FlexibleXYPlot = makeWidthFlexible(XYPlot);


export default class Example extends React.Component {

  constructor(props) {
    super(props);


    this.state = {

      series: [
        {
          title: 'Bends',
          disabled: false,
          data: this.props.data.Bends,
          color:"#3a3",
          style:{
                  strokeLinejoin: 'round',
                  strokeWidth: 2,
                  stroke:"#3a3"
                }
        },
        {
          title: 'Squats',
          disabled:true,
          data: this.props.data.Squats,
          color:'#337',
          style:{
                  strokeLinejoin: 'round',
                  strokeWidth: 2,
                  stroke:'#337'
                }
        },
        {
          title: 'Twists',
          disabled: true,
          data: this.props.data.Twists,
          color:'#f93',
          style:{
                  strokeLinejoin: 'round',
                  strokeWidth: 2,
                  stroke:'#f93'
                }
        },
        {
          title: 'Reaches',
          disabled: true,
          data: this.props.data.Reaches,
          color:'#766',
          style:{
                  strokeLinejoin: 'round',
                  strokeWidth: 2,
                  stroke:'#766'
                }
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

    const {series} = this.state;
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
            <VerticalGridLines
              tickValues={this.props.data.TickValues}/>

            <YAxis
              className="cool-custom-name"
              tickSizeInner={0}
              tickSizeOuter={8}
            />

            <XAxis
              tickValues={this.props.data.TickValues}
              tickFormat={v => `Worker ${v}`} tickLabelAngle={-50}
              className="even-cooler-custom-name"
              tickValues={this.props.data.TickValues}
              tickSizeInner={0}
              tickSizeOuter={8}
            />


            <LineSeries
              data={series[0].data}

              style={series[0].style}
              {...(series[0].disabled ? {opacity: 0.08} : null)}/>

            <LineSeries
              data={series[1].data}
              style={series[1].style}

              {...(series[1].disabled ? {opacity: 0.08} : null)}/>

            <LineSeries
              data={series[2].data}
              style={series[2].style}

              {...(series[2].disabled ? {opacity: 0.08} : null)}/>

            <LineSeries
              data={series[3].data}
              style={series[3].style}

              {...(series[3].disabled ? {opacity: 0.08} : null)}/>



          </FlexibleXYPlot>
        </div>


      </div>
    );
  }
}
