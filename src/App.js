import logo from './logo.svg';
import './App.css';

import EmployeeContextProvider from './contexts/employeeContext';
import TechnicalContextProvider from './contexts/technicalContext';

function App() {
  return (
    <EmployeeContextProvider>
      <TechnicalContextProvider>

      </TechnicalContextProvider>
    </EmployeeContextProvider>
  );
}

export default App;
