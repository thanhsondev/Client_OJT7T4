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
import LoginPage from './pages/login/loginPage';
import Router from './Router/routes';




function App() {
   

   return (
      <AuthContextProvider>
         <Router/>
      </AuthContextProvider>
   );
}

export default App;
