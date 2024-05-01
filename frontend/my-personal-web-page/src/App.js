import './App.css';

import BackgroundVideo from "./components/background-video";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app">
      <BackgroundVideo/>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
