import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/home.css';
import { Container } from 'react-bootstrap/lib/Tab';

export class Home extends Component {
    render() {
      return (
        <Container>
        <div class='content'>
            <h1>Welcome to Life of Pie Bakery</h1>
            <p>We have all your bakery needs! Using the freshest ingredients, we offer various pastries, pies, and muffins for all occasions! Baked daily! <br />Order Today</p>
        </div>
        
        <div>
            <div class="bestSeller">
                <h2>Best Sellers</h2>
                <p>Our pies are our specialty! Try a slice or the whole pie! We offer various flavors from classic Apple to Cocunut Cream. Find your favorite today!</p>
            </div>
            <div class="sale">
                <h3>On Sale</h3>
                <p>Our Muffins are currently marked down! Don't worry, they are still just as delicious at a cheaper price! Act Fast, Sale will end soon</p>
            </div>
        </div>
        </Container>
      )
    }
  }