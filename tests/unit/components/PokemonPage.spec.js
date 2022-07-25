import { shallowMount, mount } from '@vue/test-utils';
import PokemonPage from '@/pages/PokemonPage'
import { pokemons } from '../mocks/pokemons.mock'
describe('PokemonPage component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(PokemonPage);
    });

    test('Debe de hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('Debe de llamar mixPokemonArray al montar', () => {
        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray');
        const wrapper = shallowMount(PokemonPage);
        expect(mixPokemonArraySpy).toHaveBeenCalled();
    });

    test('Debe de hacer match con el snapshot cuando cargan los pokemos', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    showModal: false,
                    message: "",
                    score: 0,
                    lives: 3
                }
            }
        });
        expect(wrapper.html()).toMatchSnapshot();
    })

    test('Debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    showModal: false,
                    message: "",
                    score: 0,
                    lives: 3
                }
            }
        });

        const picture = wrapper.find('pokemon-picture-stub');
        const options = wrapper.find('pokemon-options-stub');
        //PokemonPicture debe de existir 
        expect(picture.exists()).toBeTruthy();
        //PokemonOptions debe de existir
        expect(options.exists()).toBeTruthy();
        //PokemonPicture attribute pokemon === '1'
        expect(picture.attributes('pokemonid')).toBe('1');

        expect(options.attributes('pokemons')).toBeTruthy();
    });

    test('Pruebas con checkAnswer', async() => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    showModal: false,
                    message: "",
                    score: 0,
                    lives: 3
                }
            }
        });

        await wrapper.vm.checkAnswer(1);
        expect(wrapper.find('h2').exists()).toBeTruthy();
        expect(wrapper.vm.showPokemon).toBe(true);
        expect(wrapper.find('h2').text()).toBe(`Correct, it's ${pokemons[0].name}`);
    });
})