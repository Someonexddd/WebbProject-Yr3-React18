import React, { Component } from 'react';
import { Container } from 'reactstrap';
import  NavMenuNew  from './NavMenuNew'
import './Layout.css';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div className=''>
        <NavMenuNew />
        <Container fluid className='color-padding'>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
