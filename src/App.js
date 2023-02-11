import './App.css';
import getPalette from './api/client';
import {ListPalette} from './components/Colors/colors'

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
      <ListPalette colors={[[244, 123, 123], [123, 54, 62], [123, 22, 222]]} />
    </div>
  );
}

export default App;
