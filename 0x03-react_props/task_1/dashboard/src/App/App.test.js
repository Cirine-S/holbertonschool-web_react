import App from './App';
import React from 'react';
import { shallow } from 'enzyme';

const wrapper = shallow(<App />);

describe('<App />', () => {
  it('App renders without crashing', () => {
    wrapper;
	});

});


