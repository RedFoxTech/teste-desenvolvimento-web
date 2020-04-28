import React from 'react';
import tableRow from './tableRow';

let wrapper;
beforeEach(() => {
    wrapper = shallow(<tableRow/>);
})

describe("rendering test/snapshot", () => {
    it('should render the proper prototype', () => {
        expect(wrapper).toMatchSnapshot()
    })
})