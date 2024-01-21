import React from 'react';
import ReactDOM from 'react-dom';
import Madlibs from './Madlibs';

it('renders without crashing', function() {
  const div = document.createElement('div');
  ReactDOM.render(<Madlibs />, div);
  ReactDOM.unmountComponentAtNode(div);
});
