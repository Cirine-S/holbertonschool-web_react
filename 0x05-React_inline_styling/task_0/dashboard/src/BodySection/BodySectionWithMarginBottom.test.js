import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom', () => {
    test('should properly render children', () => {
      const wrapper = mount(
        <BodySectionWithMarginBottom title='Title'>
          <p>paragraph 1</p>
          <p>paragraph 2</p>
        </BodySectionWithMarginBottom>
      );
      const bodySection = wrapper.find(BodySection);
      const heading = bodySection.find('h2');
      const p = bodySection.find('p');
  
      expect(heading).to.have.lengthOf(1);
      expect(heading.text()).to.equal('Title');
  
      expect(p).to.have.lengthOf(2);
      expect(p.at(0).text()).to.equal('paragraph 1');
      expect(p.at(1).text()).to.equal('paragraph 2');
    });
    test('should have correct style applied', () => {
        const wrapper = mount(<BodySectionWithMarginBottom />);
        const div = wrapper.find('.bodySectionWithMargin');
    
        expect(div.exists()).to.equal(true);
      });
});
