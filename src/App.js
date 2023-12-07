import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import EmployeeContextProvider from './contexts/employeeContext';
import TechnicalContextProvider from './contexts/technicalContext';
import ComponentsContextProvider from './contexts/componentsContext';

import Employees from './pages/employee/employees';

function App() {
  return (
      <EmployeeContextProvider>
        <TechnicalContextProvider>
          <ComponentsContextProvider>
            <div>
              Sidebar 
            </div>
            <div>
              <BrowserRouter>
                <Routes>
                  <Route path="/employee" element={<Employees />} />
                </Routes>
              </BrowserRouter>
            </div>
          </ComponentsContextProvider>
        </TechnicalContextProvider>
      </EmployeeContextProvider>
  );
}

export default App;
