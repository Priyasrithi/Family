import React, { Component } from 'react';
import './App.css';
import {CardList} from './Components/Card-List/Card-List.Components';
import {SearchBox} from './Components/Searchbox/Searchbox.Components';

class App extends Component {

  constructor(){
    super();
    this.state = {
      family: [],
      searchField: ''
          
    };
  
  }
 componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(user => this.setState({family: user})); 
 }
  render() {
    const { family, searchField } = this.state;
    const filteredfamily = family.filter(fam => 
      fam.name.toLowerCase().includes(searchField.toLocaleLowerCase())
       );

    return(
        <div className="App">  
        <h1>FAMILY</h1>
        <SearchBox
        placeholder='Search family'
        handlesearch={e => {this.setState({searchField: e.target.value});
        }}/>
        
        <CardList family={filteredfamily}>
         
          </CardList>
       </div>
      );
    }
    
  }

  
export default App;
