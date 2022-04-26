import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/home.css';
import { Container, Button } from 'react-bootstrap';
import pies from '../images/pies.jpg';
import slice from '../images/slice.jpg';
import muffin from '../images/muffin.jpg';
import lion from '../images/images.jpeg';

export class Home extends Component {
    render() {
      return (
        <Container>
        <div class='content'>
            <h1>Welcome to Life of Pie Bakery</h1>
            <br />
            <img src={lion}></img>
            <br />
            <br />
            <p>We have all your bakery needs! Using the freshest ingredients, we offer various pastries, pies, and muffins for all occasions!</p>
        </div>

        <div>
          <img src= {pies}></img>
          <p>Baked daily!</p>
          <br />
        </div>
        <br />
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
        <div class="card" id='piePic'>
          <div class="card-body">
            <h5 class="card-title">Best Sellers</h5>
            <p class="card-text">Our pies are our specialty! Try a slice or the whole pie! We offer various flavors from classic Apple to Cocunut Cream. Find your favorite today!</p>
          </div>
          <img src={slice} class="card-img-bottom" alt="..."></img>
        </div>
        </div>
        <div class="card">
        <div class="col">
          <div class="card-body">
            <h5 class="card-title">On Sale</h5>
            <p class="card-text">Our Muffins are currently marked down! Don't worry, they are still just as delicious at a cheaper price! Act Fast, Sale will end soon</p>
          </div>
          <img src={muffin} class="card-img-bottom" alt="..."></img>
        </div>
        </div>
        </div>
        <br />
        <button class="btn btn-link" href="#products">
            Order Today!
          </button>
        </Container>
      )
    }
  }