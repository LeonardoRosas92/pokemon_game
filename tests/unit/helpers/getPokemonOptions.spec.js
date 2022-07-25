import getPokemonOptions,  { getPokemons, getPokemonNames } from '@/helpers/getPokemonOptions'

describe('getPokemonOptions helpers', () => {
    test('debe de regresar un arreglo de numeros', () => {
        const pokemon = getPokemons();
        expect(pokemon.length).toBe(650);
        expect(pokemon[0]).toBe(1);
        expect(pokemon[500]).toBe(501);
        expect(pokemon[649]).toBe(650);
    });

    test('debe de retornar un arreglo de 4 elementos con nombres de pokemon', async () => {
        const pokemons = await getPokemonNames([1, 2, 3, 4]);
        expect(pokemons).toStrictEqual([
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
        ]);
    });

    test('getPokemonOptions debe de retomar un arreglo mezclado', async () => {
        const pokemons = await getPokemonOptions();
        expect(pokemons.length).toBe(4);
        expect(pokemons).toStrictEqual([
            { 
                name: expect.any(String), 
                id: expect.any(Number) 
            },
            { 
                name: expect.any(String), 
                id: expect.any(Number) 
            },
            { 
                name: expect.any(String), 
                id: expect.any(Number) 
            },
            { 
                name: expect.any(String), 
                id: expect.any(Number) 
            }
        ]);
    });
});