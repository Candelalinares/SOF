import React, { Component } from 'react';
import Pdf from '../assets/goodpaper.pdf';

class Download extends Component {

  render() {

    return (
        <div>
          <a href = {Pdf} target="_blank" rel="noreferrer" className='btn nuevo'>GOODPAPER</a>
        </div>
    );

  }
}

export default Download;