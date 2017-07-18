import React, {Component} from 'react';
import AxesShowcase from './showcase-sections/axes-showcase';
import PlotsShowcase from './showcase-sections/plots-showcase';
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

      console.log(queryResults[1]);

      for (i = 0; i < 50; i++){
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
                <li><a href="#plots">Baseline</a></li>
              </nav>
            </div>
          </header>)}
          <PlotsShowcase forExample={forExample}
            data = {data}/>
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
