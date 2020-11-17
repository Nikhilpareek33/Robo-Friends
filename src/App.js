import './App.css';
import 'tachyons'
import SearchBox from './Components/SearchBox.js'
import robots from './Components/robots'
import CardList from './Components/CardList.js'
import { useState, useEffect } from 'react'


function App() {

  const [a,updateRobots] = useState([])
  const [searchfield,updateSearch] =  useState('');
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => updateRobots(data))

  })

  const onSearchChange=(event)=>{

    updateSearch(event.target.value)
    
  }

  const filteredRobots = a.filter(robot =>{
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    
  })

  

  return (
    <div className="tc">
      
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange= {onSearchChange}/>
      <CardList robots={filteredRobots}/>
    </div>
  );
}

export default App;
