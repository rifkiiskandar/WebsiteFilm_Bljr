import './App.css';
import NavBar from './components/Navbar';
import Intro from './components/Intro';
import './style/landingPage.css'
import Trending from './components/Trending';
import Superhero from './components/Superhero';

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
        <NavBar />
        <Intro />
        {/* end of section */}
      </div>

      {/* trending section */}
      <div className="trending">
        <Trending />
        {/* end of trending */}
      </div>

      {/* superhero section */}
      <div className="superhero">
        <Superhero />
      </div>
      {/* end of superhero */}
    </div>
  );
}

export default App;
