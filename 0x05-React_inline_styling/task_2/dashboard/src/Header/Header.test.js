import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { StyleSheetTestUtils } from 'aphrodite';

import Header from './Header';

describe('Header', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test('renders without crashing', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.exists());
  });

  test('renders an image and h1', () => {
    const wrapper = shallow(<Header />);

    const image = wrapper.find('img');
    const h1 = wrapper.find('h1');

    expect(image.exists());
    expect(h1.exists());
  });
});
