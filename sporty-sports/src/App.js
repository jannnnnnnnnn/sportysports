import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Alert, Breadcrumb, BreadcrumbItem, Card, Form, Container, Row, Col} from "react-bootstrap";

import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  return (
    <div className="container-fluid" id="wrapper">
      <div className="row">
        <div id="sidebar">
          <Sidebar />
        </div>
        <div id="content">
          <Main />
        </div>
        
      </div>
    </div>
  );
}

export default App;
