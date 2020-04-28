import React from 'react';
import pokeItem from './pokeItem';

let wrapper;
beforeEach(() => {
    wrapper = shallow(<pokeItem/>);
})

describe("rendering test/snapshot", () => {
    it('should render a pokeball button', () => {
        expect(wrapper).toMatchSnapshot()
    })
})