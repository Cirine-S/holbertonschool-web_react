import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import BodySection from './BodySection';

describe('BodySection', () => {
    test('should properly render children', () => {
      const wrapper = shallow(
        <BodySection title='Title'>
          <p>paragraph 1</p>
          <p>paragraph 2</p>
        </BodySection>
      );
      const heading = wrapper.find('h2');
      const p = wrapper.find('p');
  
      expect(heading).to.have.lengthOf(1);
      expect(heading.text()).to.equal('Title');
  
      expect(p).to.have.lengthOf(2);
      expect(p.at(0).text()).to.equal('paragraph 1');
      expect(p.at(1).text()).to.equal('paragraph 2');
    });
});
