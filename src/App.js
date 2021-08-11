import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import {Switch ,Route} from 'react-router-dom';
import Question from './Component/Question';
import HomePage from './Component/HomePage';
import Result from './Component/Result';
import './App.scss';
const App = () => {
  return (
    <>
    
    <Switch>
      <Route exact path = "/" component = {HomePage}/>
      <Route exact path = "/question" component = {Question}/>
      <Route exact path = "/result" component = {Result}/>
    </Switch>
    

    </>
  )
}

export default App
