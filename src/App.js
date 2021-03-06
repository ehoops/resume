import React, { Component } from 'react';
import './App.css';
import CardCarousel from './CardCarousel';
import HeaderComponent from './HeaderComponent';
import AboutPage from './AboutPage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "main",
    }
  }

  changePage(activePage) {
    this.setState({activePage});
  }

  render() {
    let page = this.state.activePage === "main" ?
      <CardCarousel /> : <AboutPage />;

    return (
      <div className="App">
        <HeaderComponent onPageClick={(page) => this.changePage(page)}/>
        {page}
      </div>
    );
  }
}
