import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import './firebase';

import { Provider } from 'react-redux';
import App from './App';
import store from './app/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
