import React from 'react';
import Footer from './components/Footer';

import { shallow } from 'enzyme';
let footer;

beforeEach(() => {
    footer = shallow(<Footer/>);
});

afterEach(() => {
    footer = undefined;
});

describe('Footer Dumb Component', () => {
    it('should render without crashing', () => {
        expect(typeof footer).toBe('object');
    });
    it('should have a "p" tag have "TV Maze API" text', () => {
        expect(footer.find('p').text()).toBe('TV Maze API');
    });
});