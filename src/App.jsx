import './App.css';
import { Routes, Route } from 'react-router-dom';

import AuthContextProvider from './contexts/authContext';
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
      <AuthContextProvider>
         <LayoutContextProvider>
            <EmployeeContextProvider>
               <TechnicalContextProvider>
                  <ComponentsContextProvider>
                     <Routes>
                        <Route path="/" element={<Layout />}>
                           <Route path="dashboard" element={<Dashboard />} />
                           <Route path="employee">
                              <Route index element={<Employees />} />
                              <Route path=":employeeId" element={<EmployeeDetails />} />
                           </Route>
                        </Route>
                     </Routes>
                  </ComponentsContextProvider>
               </TechnicalContextProvider>
            </EmployeeContextProvider>
         </LayoutContextProvider>
      </AuthContextProvider>
   );
}

export default App;
