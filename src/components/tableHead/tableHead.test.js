import React from 'react';
import tableHead from './tableHead';

let wrapper;
beforeEach(() => {
    wrapper = shallow(<tableHead/>);
})

describe("rendering test/snapshot", () => {
    it('should render the proper header prototype', () => {
        expect(wrapper).toMatchSnapshot()
    })
})