import './Home.css';

// COMPONENTS
import Background from '../Background/Background';
import Card from '../Card/Card';

function Home() {
  return (
    <div className="homeWrapper">
      
        <Card />
        <Background />
      </div>
  );
}

export default Home;