import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css'
// The parent commands the state to its children STATE >> props

function App(){
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users))
    }, [count]); // only run if count changes
    
    const onSearchChange = (event) => {
        setSearchField(event.target.value)       
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });
    console.log(count);
    return !robots.length? <h1 className="tc">Loading</h1> :
        (
            <div className="tc">
                <h1 className="ma10">RoboFriends</h1>
                <button onClick={() => setCount(count + 1)}>Click me</button>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>                    
            </div>
        );
}

export default App;