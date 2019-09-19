import React, { Component } from 'react';
import Flat from "./flat";

const FlatList = (props) => {
  const renderList = () => {
    this.props.flats.map((flat, index) => {
      return {
        console.log(flat);
        console.log(index);
      };
    });
  };

  return {

  }
};

export default FlatList
