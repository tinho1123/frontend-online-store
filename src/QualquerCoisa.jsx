import React, { Component } from 'react';
import * as api from './services/api';

export default class QualquerCoisa extends Component {
  render() {
    return (
      <div>
        {api.getCategories()}
      </div>
    );
  }
}
