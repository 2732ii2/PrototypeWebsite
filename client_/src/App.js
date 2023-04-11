import logo from './logo.svg';
import './App.css';
import Firstpage from './Component/Pages/Firstpage';
import store from './Component/Redux/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Firstpage />
      </div>
    </Provider>
  );
}

export default App;
