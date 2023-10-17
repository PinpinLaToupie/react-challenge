
import './App.css'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CardList from './components/CardList';
import data from './data/data.json'; 

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <CardList data={data} />
      <Footer />
    </div>
  );

}

export default App;
