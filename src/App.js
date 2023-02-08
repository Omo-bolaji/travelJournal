import Header from "./components/Header";
import Card from "./components/Card";
import data from "./Data.js";
import './App.css';

function App() {
  const cards = data.map(item => {
    return(
      <Card 
      key={item.id}
      item={item}
      
      />
    )
  })
  return (
  <>
  <Header />
  {cards}
  </>
  );
}

export default App;
