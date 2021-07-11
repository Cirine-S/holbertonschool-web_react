import App from './App';
import React from 'react';
import { shallow } from 'enzyme';

const wrapper = shallow(<App />);

describe('<App />', () => {
  it('App renders without crashing', () => {
    wrapper;
	});

  it('App renders a div with the class App-header', () => {
      expect(wrapper.find('div.App-header')).toHaveLength(1);
  });
  it('App renders a div with the class App-body', () => {
      expect(wrapper.find('div.App-body')).toHaveLength(1);
  });
  it('App renders a div with the class App-footer', () => {
      expect(wrapper.find('div.App-footer')).toHaveLength(1);
  });

});


