import React from 'react';
import ReactDOM from 'react-dom';

// import Student from './Student';
import Card from './Card';
import Increase from './Increase';
import Forms from './Forms';
import * as serviceWorker from './serviceWorker';
import Cartoon from './Cartoon';

ReactDOM.render(
  <>
    {/* <div className="col-12"> 
    <div className="row">
        <div className="col-4">
          <Card name='dog' text='this is dog' img='https://source.unsplash.com/user/erondu/1600x900' />
        </div>
        <div className="col-4">
          <Card name='cat' text='this is cat' img='https://source.unsplash.com/user/erondu' />
        </div>
        <div className="col-4">
          <Card name='cow' text='this is cow' img='https://source.unsplash.com/random' />
        </div>
      </div>
    </div> */}

    {/* <Forms /> */}

    <Cartoon />
      
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
