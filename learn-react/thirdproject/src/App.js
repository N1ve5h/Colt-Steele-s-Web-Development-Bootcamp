import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card
        car="0"
        color="hsl(31, 77%, 52%)"
        title="SEDANS"
        info="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
  or on your next road trip."
      />
      <Card
        car="1"
        color="hsl(184, 100%, 22%)"
        title="SUVS"
        info="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
  and off-road adventures."
      />
      <Card
        car="2"
        color="hsl(179, 100%, 13%)"
        title="LUXURY"
        info="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
  rental and arrive in style."
      />
    </div>
  );
}

export default App;
