import './App.css';
import Hoc from './Hoc'


function App() {


  return (
    <div className="App">
      <div className="heading">
        <h2> HOC component for a button </h2>
      </div>

      <Hoc primary> CLick me </Hoc>
    </div>
  );
}

export default App;
