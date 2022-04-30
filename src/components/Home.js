import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/home.css';
import { Container, Button } from 'react-bootstrap';
import pies from '../images/pies.jpg';
import slice from '../images/slice.jpg';
import muffin from '../images/muffin.jpg';
import lion from '../images/images.jpeg';
import { useHref } from 'react-router-dom';

export class Home extends Component {
    render() {
      return (
        <Container>
        <div className='content'>
            <h1>Welcome to Life of Pie Bakery</h1>
            <br />
            <div className='lion'>
              <img src={lion}></img>
            </div>
            <br />
            <br />
            <p>We have all your bakery needs! Using the freshest ingredients, we offer various pastries, pies, and muffins for all occasions!</p>
        </div>

        <div>
          <div className='pie'>
            <img src= {pies}></img>
          </div>
          <br />
          <br />
          <p>Baked daily!</p>
          <br />

        </div>
        <br />
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card" id='piePic'>
              <div className="card-body">
                <h5 className="card-title">Best Sellers</h5>
                <p className="card-text">Our pies are our specialty! Try a slice or the whole pie! We offer various flavors from classic Apple to Cocunut Cream. Find your favorite today!</p>
              </div>
              <img id='slice' src={slice} class="card-img-bottom" alt="..."></img>
            </div>
          </div>
          <div className="col">
            <div className="card">
             <div className="card-body">
              <h5 className="card-title">On Sale</h5>
              <p className="card-text">Our Muffins are currently marked down! Don't worry, they are still just as delicious at a cheaper price! Act Fast, Sale will end soon</p>
            </div>
            <img src={muffin} className="card-img-bottom" alt="..."></img>
            </div>
          </div>
        </div>
        <br />
        </Container>
      )
    }
  }