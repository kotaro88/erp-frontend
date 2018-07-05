import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Switch, Route } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainContent from "./MainContent";
import SlideNav from "./SlideNav";
import HomePage from "../HomePage/index";
import DepartmentPage from "../DepartmentPage/index";
import TodoPage from "../TodoPage/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet
          titleTemplate="%s - PhaLe Plastic"
          defaultTitle="PhaLe Plastic"
        >
          <meta name="description" content="An ATH VN web application" />
        </Helmet>
        <Header />
        <SlideNav />
        <MainContent>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/departments" component={DepartmentPage} />
            <Route path="/todos" component={TodoPage} />
          </Switch>
        </MainContent>

      </div>
    );
  }
}

export default App;
