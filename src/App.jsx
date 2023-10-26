import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';
import LeftSide from './Components/LeftSide/LeftSide';
import CenterSide from './Components/CenterSide/CenterSide';
import RightSide from './Components/RightSide/RightSide';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LeftSide />
      <CenterSide />
      <RightSide />
      <Footer />
    </div>
  );
}

export default App;
