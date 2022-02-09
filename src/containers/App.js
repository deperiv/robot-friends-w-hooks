import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css'
// The parent commands the state to its children STATE >> props

class App extends Component {
    constructor() {
        super();
        this.state = { //Something that only the parent can change // This is what changes in the app
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users})); 
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})        
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });
        return !robots.length? <h1 className="tc">Loading</h1> :
        (
            <div className="tc">
                <h1 className="ma10">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>                    
            </div>
        );            
    }
}

export default App;