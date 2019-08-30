import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {

    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        };

        //! define this context for methods created by me
        // TODO Use ()=>{} arrow functions on any class methods you define and are not part of React ie.render(), componentDidMount()...
        // this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => this.setState({monsters: users}));
    }

    //! arrow function BIND the this to the class, when the class is created, avoiding the .bind()
    // TODO Use ()=>{} arrow functions on any class methods you define and are not part of React ie.render(), componentDidMount()...
    handleChange = e => {
        this.setState({ searchField: e.target.value })
    }

    render() {

        // show filtered monsters
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

        return(
            <div className="App">
                <SearchBox 
                    placeholder="search for robo-monster" 
                    handleChange={this.handleChange} />
                <CardList monsters={filteredMonsters} />
            </div>
        )
    }
}

export default App;
