import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Creatures from './Creatures';
import CreatureDetails from './CreatureDetails';
import unicornsData from './data/unicorn-data';
import puppiesData from './data/puppy-data';
import sharksData from './data/shark-data';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <header>
          <NavLink to="/unicorns" className="nav">Unicorns</NavLink>
          <NavLink to="/puppies" className="nav">Puppies</NavLink>
          <NavLink to="/sharks" className="nav">Sharks</NavLink>
        </header>
        <Route exact path="/" component={ Home } />
        <Route exact path="/unicorns" render={ () => <Creatures data={unicornsData} /> } />
        <Route exact path="/puppies" render={ () => <Creatures data={puppiesData} /> } />
        <Route exact path="/sharks" render={ () => <Creatures data={sharksData} /> } />
        <Route path="/unicorns/:id" render={({ match }) => {
          const { id } = match.params;
          console.log(match);
          const creature = unicornsData.find(unicorn => unicorn.id === parseInt(id))
          console.log('creature is ', creature);
        return creature && <CreatureDetails {...creature} /> 
        }} />
        <Route path="/puppies/:id" render={({ match }) => {
          const { id } = match.params;
          const creature = puppiesData.find(puppy => puppy.id === parseInt(id))
          console.log('creature is ', creature);
        return creature && <CreatureDetails {...creature} /> 
        }} />
          <Route path="/sharks/:id" render={({ match }) => {
          const { id } = match.params;
          const creature = sharksData.find(shark => shark.id === parseInt(id))
          console.log('creature is ', creature);
        return creature && <CreatureDetails {...creature} /> 
        }} />
        {/* <Route path="/:creaturePath/:id" render={({ match }) => {
          const { id, creaturePath } = match.params;
          const creature = puppiesData.find(puppy => puppy.id === parseInt(id))
          return creature && <CreatureDetails {...creature}  />
        }} 
        /> */}
      </main>
    );
  }
}
