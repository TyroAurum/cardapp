import { Button } from 'reactstrap';
import Axios from 'axios';
import './App.css';
import UserCard from './jsx/userCard';
import { useState } from 'react';

function App() {
  const [users,setUsers] = useState([]);

  const handleGet = () =>{
    Axios.get('https://reqres.in/api/users?page=1').then(response =>{
      setUsers(response.data.data);
      
    })

  }


  return (
    <div className="App">
      <div className='cardapp-title-section'>
        <header>Company Name</header>
      </div>
      <div className='cardapp-main-section'>
        
        <Button onClick={handleGet}>Get User</Button>
      </div>
      <div className='cardapp-card-section'>
        {users.map((user)=>(<UserCard data={user} />))}
      </div>
    </div>
  );
}

export default App;
