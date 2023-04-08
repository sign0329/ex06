import logo from './logo.svg';
import './App.css';
import RouterPage from './componets/RouterPage';
import any from '/Users/sangminkim/VRAR/reate/ex06/ex06/src/imges/any.png'

function App() {
    return (
        <div className="App">
            <img src={any} width="100%"/>
            <RouterPage/>
        </div>
    );
}

export default App;
