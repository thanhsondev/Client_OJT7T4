import './App.css';
import { Routes, Route } from 'react-router-dom';

import EmployeeContextProvider from './contexts/employeeContext';
import TechnicalContextProvider from './contexts/technicalContext';
import ComponentsContextProvider from './contexts/componentsContext';
import LayoutContextProvider from './contexts/LayoutContext';

import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/dashboard/Dashboard';
import Employees from './pages/employee/employees';
import EmployeeDetails from './pages/employee/employeeDetails';

function App() {
   return (
      <LayoutContextProvider>
         <ComponentsContextProvider>
            <TechnicalContextProvider>
               <EmployeeContextProvider>
                  <Routes>
                     <Route path="/" element={<Layout />}>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="employee">
                           <Route index element={<Employees />} />
                           <Route path=":employeeId" element={<EmployeeDetails />} />
                        </Route>
                     </Route>
                  </Routes>
               </EmployeeContextProvider>
            </TechnicalContextProvider>
         </ComponentsContextProvider>
      </LayoutContextProvider>
   );
}

export default App;
