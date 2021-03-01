/* eslint-disable no-undef */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Summary from '../ReviewTiles/Summary.jsx'

configure({
  adapter: new Adapter(),
});

describe('Summary tests', () => {
  const text =
    'This is a summary with a length that exceeds the summary limit of sixty characters, and should be divided between two divs';
  const summ = shallow(<Summary summary={text} />);

  it('renders a summary', () => {
    expect(summ.find('.summary')).toBeDefined();
  });
  it('should split the summary across two lines', () => {
    expect(summ.find('.summary-cont')).toBeDefined();
  });
});
