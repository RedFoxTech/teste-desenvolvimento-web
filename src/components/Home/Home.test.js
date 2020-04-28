import React from 'react';
import Home from './Home';

let wrapper;
beforeEach(() => {
    wrapper = shallow(<Home/>);
})

describe("rendering test/snapshot", () => {
    it('should render a pokeball button', () => {
        expect(wrapper).toMatchSnapshot()
    })
})