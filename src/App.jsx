import './App.css';
import { Routes, Route } from 'react-router-dom';

import EmployeeContextProvider from './contexts/employeeContext';
import TechnicalContextProvider from './contexts/technicalContext';
import ComponentsContextProvider from './contexts/componentsContext';
import LayoutContextProvider from './contexts/LayoutContext';
import RecordContextProvider from './contexts/recordlogContext';

import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/dashboard/Dashboard';
import LogPage from './pages/log/logPage';
import Employees from './pages/employee/employees';
import EmployeeDetails from './pages/employee/employeeDetails';

function App() {
   return (
      <LayoutContextProvider>
         <ComponentsContextProvider>
            <TechnicalContextProvider>
               <EmployeeContextProvider>
                  <RecordContextProvider>
                     <Routes>
                        <Route path="/" element={<Layout />}>
                           <Route path="dashboard" element={<Dashboard />} />
                           <Route path="log" element={<LogPage />} />
                           <Route path="employee">
                              <Route index element={<Employees />} />
                              <Route path=":employeeId" element={<EmployeeDetails />} />
                           </Route>
                        </Route>
                     </Routes>
                  </RecordContextProvider>
               </EmployeeContextProvider>
            </TechnicalContextProvider>
         </ComponentsContextProvider>
      </LayoutContextProvider>
   );
}

export default App;
