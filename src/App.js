// import Navbar from './Components/Navbar'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils111" HomeTxt="Home111" AboutTxt="About111" />
      <div className="container my-3">
        <TextForm heading="Type Your Text Here" />
      </div>

    </>

  );
}
export default App;
