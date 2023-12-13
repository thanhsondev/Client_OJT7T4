import './App.css';
import { Routes, Route } from 'react-router-dom';

import EmployeeContextProvider from './contexts/employeeContext';
import ProjectContextProvider from './contexts/projectContext';
import TechnicalContextProvider from './contexts/technicalContext';
import RoleContextProvider from './contexts/roleContext';
import ComponentsContextProvider from './contexts/componentsContext';
import LayoutContextProvider from './contexts/LayoutContext';

import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/dashboard/Dashboard';
import Employees from './pages/employee/employees';
import EmployeeDetails from './pages/employee/employeeDetails';
import Projects from './pages/project/projects';
import ProjectDetails from './pages/project/projectDetails';
import AddProject from './pages/project/addProject';

function App() {
   return (
      <LayoutContextProvider>
         <ProjectContextProvider>
            <EmployeeContextProvider>
               <TechnicalContextProvider>
                  <RoleContextProvider>
                     <ComponentsContextProvider>
                        <Routes>
                           <Route path="/" element={<Layout />}>
                              <Route path="dashboard" element={<Dashboard />} />
                              <Route path="employee">
                                 <Route index element={<Employees />} />
                                 <Route path=":employeeId" element={<EmployeeDetails />} />
                              </Route>
                              <Route path="project">
                                 <Route index element={<Projects />} />
                                 <Route path=":projectId" element={<ProjectDetails />} />
                                 <Route path="add" element={<AddProject />} />
                              </Route>
                           </Route>
                        </Routes>
                     </ComponentsContextProvider>
                  </RoleContextProvider>
               </TechnicalContextProvider>
            </EmployeeContextProvider>
         </ProjectContextProvider>
      </LayoutContextProvider>
   );
}

export default App;
