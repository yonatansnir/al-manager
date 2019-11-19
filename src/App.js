import React, { Component } from 'react';
import Tenants from './database/Tenants';
import Head from './components/head/Head';
import List from './components/list/List';

class App extends Component {
  constructor(){
    super()
    this.state = {
      tenants: Tenants,
      searchField: ''
    }
  }
  searchRun = (event) => {
    this.setState( {searchField: event.target.value} );
  }
  render(){
    const filterTenants = this.state.tenants.filter(tenant => tenant.fullname.includes(this.state.searchField));
    return (
      <div>
        <div id="mainPage">
          <Head searchBox={this.searchRun} />
          <List 
            tenants={filterTenants}
          />
        </div>
      </div>
    );
}
}

export default App;