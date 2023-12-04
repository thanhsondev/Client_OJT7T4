import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import EmployeeContextProvider from './contexts/employeeContext';
import TechnicalContextProvider from './contexts/technicalContext';
import ComponentsContextProvider from './contexts/componentsContext';

import Employees from './pages/employee/employees';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#3F51B5',
          borderRadius: 2,
        },
      }}
    >
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
    </ConfigProvider>
  );
}

export default App;
