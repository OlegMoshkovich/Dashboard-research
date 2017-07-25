import React, {Component} from 'react';
import AxesShowcase from './showcase-sections/axes-showcase';
import PlotsShowcase from './showcase-sections/plots-showcase';
import ScatterShowcase from './showcase-sections/plots-showcase-scatter';
import SunburstSection from './showcase-sections/sunburst-showcase';
import RadialShowcase from './showcase-sections/radial-showcase';
import RadarShowcase from './showcase-sections/radar-showcase';
import LegendsShowcase from './showcase-sections/legends-showcase';
import SankeysShowcase from './showcase-sections/sankeys-showcase';
import TreemapShowcase from './showcase-sections/treemap-showcase';
import MiscShowcase from './showcase-sections/misc-showcase';
import {json} from 'd3-request';


import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.processResults = this.processResults.bind(this);
  }

  componentWillMount() {
  json(`${'https://sheetsu.com/apis/v1.0/04d703afe90a'}`,
    this.processResults);
}

processResults(error, queryResults) {


      const workerBends =[];
      const workerFalls =[];
      const workerSquats =[];
      const workerReaches = [];
      const workerTwists = [];
      const workerStruckBys = [];
      const workerSlips = [];
      const workerTrips = [];
      const tickValue = [];
      const workerPattern =[];


      var i;
      queryResults.map(function(worker){
            worker.Bends = Number(worker.Bends)
            worker.Squats = Number(worker.Squats)
            worker.Twists = Number(worker.Twists)
            worker.Jumps = Number(worker.Jumps)
            worker.Reaches = Number(worker.Reaches)
            worker.Falls = Number(worker.Falls)
            worker.StruckBy = Number(worker.StruckBy)
            worker.Trips = Number(worker.Trips)
            worker.Slips = Number(worker.Slips)
            worker.EmergencyAlert = Number(worker.EmergencyAlert)
            worker.SafetyAlert = Number(worker.SafetyAlert)
            worker.RiskLevel = Number(worker.RiskLevel)
            })


      for (i = 1; i < 11; i++){

        tickValue.push(i);


      var pattern={
        'bends':queryResults[i].Bends,
        'twists':queryResults[i].Twists,
        'squats':queryResults[i].Squats,
        'reaches':queryResults[i].Reaches,
        'falls':queryResults[i].Falls,
        'struckBy':queryResults[i].StruckBy,
        'trips':queryResults[i].Trips,
        'slips':queryResults[i].Slips
      }
      var bends={
        'i':i,
        'x':i,
        'y':queryResults[i].Bends
      }
      var twists={
        'i':i,
        'x':i,
        'y':queryResults[i].Twists
      }
      var squats={
        'i':i,
        'x':i,
        'y':queryResults[i].Squats
      }
      var reaches={
        'i':i,
        'x':i,
        'y':queryResults[i].Reaches
      }

      var falls={
        'i':i,
        'x':i,
        'y':queryResults[i].Falls
      }

      var struckBys={
        'i':i,
        'x':i,
        'y':queryResults[i].StruckBy
      }
      var trips={
        'i':i,
        'x':i,
        'y':queryResults[i].Trips
      }
      var slips={
        'i':i,
        'x':i,
        'y':queryResults[i].Slips
      }





      workerSquats.push(squats)
      workerReaches.push(reaches)
      workerTwists.push(twists)
      workerBends.push(bends)
      workerFalls.push(falls)
      workerStruckBys.push(struckBys)
      workerTrips.push(trips)
      workerSlips.push(slips)
      workerPattern.push(pattern)


      }


    const data = {
      'Bends':workerBends,
      'Falls':workerFalls,
      'Reaches':workerReaches,
      'Squats': workerSquats,
      'Twists':workerTwists,
      'StruckBys':workerStruckBys,
      'Slips':workerSlips,
      'Trips':workerTrips,
      'TickValues':tickValue,
      'Pattern':workerPattern
      }


      this.setState({data});

}

  render() {

    const {forExample,data} = this.state;
    if(data){
      console.log(data)

      return (
        <main>

          {!forExample && (<header>
            <div className="header-contents">
              <a className="header-logo" href="#">HCS + DPR Pilot</a>
              <nav>
                <li><a href="#">Baseline</a></li>
                <li><a href="#">Report #1</a></li>
                <li><a href="#">Report #2</a></li>
              </nav>
            </div>
          </header>)}

          <article>Following visualizations present data collected in the baseline phase of the pilot ||
          Some of the Graphs are interactive
          </article>


            <PlotsShowcase forExample={forExample} data = {data}/>
            <RadialShowcase  />
            <MiscShowcase   data = {data}/>

            <article>Sample of data interrogation toolset</article>




        </main>
      );

    }
    return <div >
    Loading data...
    </div>
  }
}

App.propTypes = {
  forExample: PropTypes.bool
};

export default App;
