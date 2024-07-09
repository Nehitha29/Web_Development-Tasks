import React, { Component } from 'react'
import './SearchBar.css'
const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
  };
export default class SearchBar extends Component {
    renderSortByOptions() {
        return (
          <div className="SearchBar-sort-options">
            {Object.keys(sortByOptions).map(option => {
              let sortByOptionValue = sortByOptions[option];
              return <li key={sortByOptionValue}>{option}</li>;
            })}
          </div>
        );
      }
  render() {
    return (
        <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
          {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    )
  }
}

