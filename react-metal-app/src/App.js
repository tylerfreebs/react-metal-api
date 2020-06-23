import React, { Component } from 'react';
import SearchBand from './SearchBand/SearchBand'
import SelectGenre from './SelectGenre/SelectGenre'
// import STORE from './STORE'


class App extends Component {
    render() {
        return (
            <div>
                <SearchBand />
                <SelectGenre />
            </div>
          );
    }
  
}

export default App;