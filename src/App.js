
import './App.css';
import APPBar from "./components/AppBar"
import LeftBar from "./components/LeftBar";


function App() {
  return (
    <div>

<Grid container>

<Grid sm={2} >  <LeftBar/></Grid>

<Grid sm={8}></Grid>

<Grid sm={2}></Grid>

</Grid>


    <APPBar/>
   <LeftBar/>
    </div>
  );
}

export default App;
