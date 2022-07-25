import { shallowMount } from '@vue/test-utils';
import PokemonOptions from '@/components/PokemonOptions'
import { pokemons } from '../mocks/pokemons.mock'
describe('PokemonOptions component', () => {

    let wrapper;

    beforeEach( () => {
        wrapper = shallowMount (PokemonOptions,{
            props:{
                pokemons: pokemons
            }
        })
    });

    test('Debe de hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })

    test('Debe mostrar las 4 opciones correcta', () => {
        const btns = wrapper.findAll('button');
        expect(btns.length).toBe(4);
        expect(btns[0].text()).toBe('bulbasaur');
        expect(btns[1].text()).toBe('ivysaur');
        expect(btns[2].text()).toBe('venusaur');
        expect(btns[3].text()).toBe('charmander');
    })

})