import React from 'react';
import PokeInfo from './pokeInfo';

let wrapper;
let pokemon = [{
    "Img name":1,
    Name:"Bulbasaur",
    Generation:1,
    "Type 1": "grass",
    "Type 2": "poison",
    ATK: 1000,
    DEF: 1000,
    STA: 1000,
    "100% CP @ 40": 1000,
    "100% CP @ 39": 1000,
    Evolved: 1,
    "Cross Gen": 0,
    Legendary: 0,
    Spawns: 0
}]

beforeEach(() => {
    wrapper = shallow(<PokeInfo searchResults={pokemon}/>);
})

describe("rendering test/snapshot", () => {
    it('should render the pokeInfo card', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should have the correct number of sim/nao questions', ()=> {
        expect(wrapper.find('.question')).toHaveLength(4)
    })

    it('should have the correct number of answers', ()=> {
        expect((wrapper.find('strong').at(0)).children()).toIncludeText('Sim!');
        expect((wrapper.find('strong').at(1)).children()).toIncludeText('Não!');
        expect((wrapper.find('strong').at(2)).children()).toIncludeText('Não!');
        expect((wrapper.find('strong').at(3)).children()).toIncludeText('Não!');
    })
})