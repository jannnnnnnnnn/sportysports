import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Alert, Breadcrumb, BreadcrumbItem, Card, Form, Container, Row, Col} from "react-bootstrap";

import Sidebar from './components/Sidebar';
import Main from './pages/Main';
import CheckBalance from './components/CheckBalance/CheckBalance';
import ConnectToWallet from './components/ConnectToWallet/ConnectToWallet';
import About_us from './pages/About_us';
import FAQ from './pages/FAQ';
import Playoff_pool from './pages/Playoff_pool';
import Winner_pool from './pages/Winner_pool';




function App() {
  return (
    <div className="container-fluid" id="wrapper">
     
      <header>
        <Row>
          <Col className="col-9">
            <h1>Sporty Sports</h1>
          </Col>
          <Col>
            <CheckBalance />
            <ConnectToWallet />
          </Col>
        </Row>
      </header>

      <div className="row">
        <Row>
          <Col>
            <div id="sidebar">
              <Sidebar />
            </div>
          </Col>
          <Col className="col-8">
          <Route exact path="/winner-pool" component={Winner_pool} />
          <Route exact path="/about-us" component={About_us} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/playoff-pool" component={Playoff_pool} />
          <Route exact path="/main" component={Main} />
      </Col>
      </Row>
      </div>
      
    </div>
  );
}



export default App;
