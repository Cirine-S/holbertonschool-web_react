import {Notif} from './Notifications';
import React from 'react';
import { shallow } from 'enzyme';

const wrapper = shallow(<Notif />);

describe('<Notif />', () => {
  it('Notif renders without crashing', () => {
        wrapper;
	});

  it('Notif renders a list of 3 items', () => {
      expect(wrapper.find('li')).toHaveLength(3);
  });
  it('App renders a div with the class App-body', () => {
      expect(wrapper.find('p').get(0)).toEqual(<p>Here is the list of notifications</p>);
  });

});


