import './App.css';

import AuthContextProvider from './contexts/authContext';
import Router from './Router/routes';

function App() {
   return (
      <AuthContextProvider>
         <Router/>
      </AuthContextProvider>
   );
}

export default App;
