import './App.css';
import {Characters} from "./componets/CharactersContainer/Characters";
import {Simpsons} from "./componets/SimpsonContainer/Simpsons";

function App() {
  return (
    <div className="App">
        <div><h2>1 lesson React Maidaniuk O.V.</h2></div>

        <div>
            <Simpsons/>
           {/*<Characters/>*/}
        </div>
    </div>
  );
}

export default App;
