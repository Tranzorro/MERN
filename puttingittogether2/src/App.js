
import './App.css';
import PersonCard from './components/PersonCard';

function App() {

  return (
    <div className="App">
      <PersonCard firstName={"test"} lastName={"lastnametest"} age={3} hairColor={"blue"} />
      <PersonCard firstName={"test2"} lastName={"lastnametest2"} age={33} hairColor={"green"} />
      <PersonCard firstName={"test3"} lastName={"lastnametest3"} age={332} hairColor={"red"} />
    </div>
  );
}

export default App;
