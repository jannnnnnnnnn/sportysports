import './App.css';
import {Route} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Alert, Breadcrumb, BreadcrumbItem, Card, Form, Container, Row, Col} from "react-bootstrap";

import Sidebar from './components/Sidebar';
import Main from './pages/Main';
import ConnectToWallet from './components/ConnectToWallet/ConnectToWallet';
import About_us from './pages/About_us';
import FAQ from './pages/FAQ';
import Playoff_pool from './pages/Playoff_pool';
import Winner_pool from './pages/Winner_pool';
import Soccer_leagues from './pages/Soccer_leagues.js'
import Euro_cup from './pages/Euro_cup';
import MLS from './pages/MLS';
import Premier_league from './pages/Premier_league';
import FIFA from './pages/FIFA';



function App() {
  return (
    <div className="container-fluid" id="wrapper">
     
      <header>
        <Row>
          <Col className="col-2 ">
            
            <img className="align-img" id="ball"src="/Soccerball.gif" alt="Rotating Soccer Ball" />
            
          </Col>
          <Col className="col-8 ">
            <div className="align-me">
            <h1 id="main-color">Sporty Sports</h1>
            </div>
          </Col>
          <Col className="col-2" >
          <div className="align-button-header">
            <ConnectToWallet />
            </div>
            
          </Col>
        </Row>
      </header>

      <div className="row">
        <Row>
          <Col className="col-1">
            <div id="sidebar">
              <Sidebar />
            </div>
          </Col>
          <Col className="col-11 ">
          <Route exact path="/winner-pool" component={Winner_pool} />
          <Route exact path="/about-us" component={About_us} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/playoff-pool" component={Playoff_pool} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/soccer-leagues" component={Soccer_leagues} />
          <Route exact path="/euro-cup" component={Euro_cup} />
          <Route exact path="/fifa" component={FIFA} />
          <Route exact path="/premier-league" component={Premier_league} />
          <Route exact path="/mls" component={MLS} />
      </Col>
      </Row>
      </div>
      
    </div>
  );
}



export default App;
