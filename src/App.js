import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import EmployeeContextProvider from './contexts/employeeContext';
import TechnicalContextProvider from './contexts/technicalContext';
import AddEmployee from './pages/employee/addEmployee';
import RadioCommon from './components/RadioCommon';

function App() {
  return (
    <EmployeeContextProvider>
      <TechnicalContextProvider>
        <div>
          Sidebar
          <br/>
          
         <RadioCommon/>
        </div>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/employee/create" element={<AddEmployee />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TechnicalContextProvider>
    </EmployeeContextProvider>
  );
}

export default App;
