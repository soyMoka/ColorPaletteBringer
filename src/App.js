import './App.css';
import getPalette from './api/client';

const newPalette=()=>{
  if(getPalette()){
    console.log('fffffffffffffffff')
    ;}
  return getPalette; 
}

function App() {
  newPalette()
  return (
    <div className="App">
      <p>hola</p>
    </div>
  );
}

export default App;
