import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';

export default class App extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        platform = "default"
        round = {true}
        lightTheme = {true}
        placeholder="Search events here"
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}