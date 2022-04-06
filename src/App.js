import './App.css';
import styled from 'styled-components';
import { Pokedex } from 'pokeapi-js-wrapper';

export function App() {

  const Header = styled.p`
    font-size: 30px;
    text-align: center;
  `

  new Pokedex().getPokemonByName("eevee").then(function (response) {
    console.log(response)
  })

  return (
    <div className="App">
      <Header>Pokedex</Header>
    </div>
  );
}
