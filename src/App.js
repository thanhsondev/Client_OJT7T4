import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import EmployeeContextProvider from './contexts/employeeContext';
import TechnicalContextProvider from './contexts/technicalContext';
import ComponentsContextProvider from './contexts/componentsContext';
import AddEmployee from './pages/employee/addEmployee';
import ButtonCommon from './components/ButtonCommon';

function App() {
  return (
    <EmployeeContextProvider>
      <TechnicalContextProvider>
        <ComponentsContextProvider>
        <div>
          Sidebar
          <br/>

        </div>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/employee/create" element={<AddEmployee />} />
            </Routes>
          </BrowserRouter>
        </div>
        </ComponentsContextProvider>
      </TechnicalContextProvider>
    </EmployeeContextProvider>
  );
}

export default App;
