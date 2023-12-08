import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Layout } from "./components/layout/Layout";
import { Employees } from "./pages/employees/Employees";
import { EmployeeProfile } from "./pages/employeeProfile/EmployeeProfile";
import "./App.css";

import LayoutContextProvider from "./context/LayoutContext";

function App() {
   return (
      <LayoutContextProvider>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route path="dashboard" element={<Dashboard />} />
               <Route path="employee">
                  <Route index element={<Employees />} />
                  <Route path=":employeeId" element={<EmployeeProfile />} />
               </Route>
            </Route>
         </Routes>
      </LayoutContextProvider>
   );
}

export default App;
