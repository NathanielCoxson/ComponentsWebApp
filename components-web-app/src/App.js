import './App.css';
import Navbar from './Components/Navbar/Navbar';
import DesignPanel from './Components/DesignPanel/DesignPanel';

function App() {
  return (
    <div className="box-border bg-slate-800 h-screen">
      <Navbar></Navbar>
      <DesignPanel>
        <h1 className="text-white text-3xl w-full">SVG Gradient Background</h1>
      </DesignPanel>
    </div>
  );
}

export default App;
