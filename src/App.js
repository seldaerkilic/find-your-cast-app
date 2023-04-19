import './Sass/App.scss';
import LeftPanel from './components/LeftPanel';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <header className='wrapper'>
      <h1>FIND YOUR CAST</h1>
      </header>
      <LeftPanel />

      <Main />

    <footer className='wrapper'>
        <p>Copyright Selda Erkilic ~ Created at <a href="https://junocollege.com/">Juno College</a></p>
    </footer>

    </div>
  );
}

export default App;
