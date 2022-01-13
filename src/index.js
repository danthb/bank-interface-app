import ReactDOM from 'react-dom';
import App from './App'
import './index.css';
import Background from './images/bank_profile.jpg';

ReactDOM.render(
    <App style={ {backgroundImage: `url(${Background})`}}/>
  ,
    document.getElementById('root')
  );



