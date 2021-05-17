import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Alert, Breadcrumb, BreadcrumbItem, Card, Form, Container, Row, Col} from "react-bootstrap";

import { BsJustify } from "react-icons/bs";
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Sidebar/>
    </div>
  );
}

export default App;
