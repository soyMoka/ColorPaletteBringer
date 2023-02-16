import './App.css';
import getPalette from './api/client';
import {ListPalette} from './components/Colors/colors'
import { CenteredButton } from "./components/CenterButton/CenterButton.jsx";
import { Footer } from './components/Footer/Footer';
import store from './redux/store'

import {getPaletteSim} from './api/client'
import { useSelector } from 'react-redux';


// Obtener State
// store.getState()
// Actualizar State
// store.dispatch(action)
// 
async function buttonColorBringer() {
  await newPalette()
  console.log(store.getState())  
}

const newPalette = async ()=>{
  const response = await getPaletteSim()
  console.log('newPalette');
  console.log('larespuestaa la llamada es', response);
  if(response){
    store.dispatch({type:'colors/setPalette', payload: response}); 
    
    
    console.log('este es el nuevo estado del store',store.getState()); 
  }
  
}

const selectColors = (state) => state.colors

function App() {
  
  const paleta_de_colores = useSelector(selectColors) 


  console.log('el store es',store.getState().colors.colorPalette
  );
  return (
    <div className="App">
      <section>
      <div><p>{paleta_de_colores.colorPalette}</p></div>
        
        <CenteredButton 
          buttonName={'Bring me a new palette'}
          buttonAction={buttonColorBringer}
        />
        
        <ListPalette colors={store.getState().colors.colorPalette} />
      </section>
      <Footer />
    </div>
  );
}
export default App;
