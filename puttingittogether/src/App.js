
import './App.css';
import User from './components/User';

function App() {

  const userObject = [
    {
      First_Name: 'Some',
      Last_Name: 'Guy',
      Age: 31,
      Hair_Color:'blue'
    },
    {
      First_Name: 'Other',
      Last_Name: 'Person',
      Age: 18,
      Hair_Color:'blond'
    }
  ]

  return (
    <div className="App">

      {
        userObject.map((user, index)=>{
          return (
            <User 
            key = {index}
            First_Name = {user.First_Name} 
            Last_Name = {user.Last_Name}
            Age = {user.Age}
            Hair_Color = {user.Hair_Color}
            />
            
          )
        })
      }
      
    </div>
  );
}

export default App;
