import { Routes, Route } from "react-router-dom";
import EmployeeContextProvider from "../contexts/employeeContext";
import TechnicalContextProvider from "../contexts/technicalContext";
import ComponentsContextProvider from "../contexts/componentsContext";
import LayoutContextProvider from "../contexts/LayoutContext";
import { Layout } from "../components/layout/Layout";
import { Dashboard } from "../pages/dashboard/Dashboard";
import Employees from "../pages/employee/employees";
import EmployeeDetails from "../pages/employee/employeeDetails";
import LoginPage from "../pages/login/loginPage";
import PrivateRoute from "./PrivateRoute";

const Router = ()=>{
    return (
        <Routes>
            <Route path="login" element={<LoginPage />} />
         {/* <EmployeeContextProvider>
            <TechnicalContextProvider>
               <ComponentsContextProvider>
                  <LayoutContextProvider> */}
                    <Route>
                        <Route path="/" element={<PrivateRoute component={<Layout /> }/>}>
                           <Route path="dashboard" element={<Dashboard />} />
                           <Route path="employee">
                              <Route index element={<Employees />} />
                              <Route path=":employeeId" element={<EmployeeDetails />} />
                           </Route>
                        </Route>
                     </Route>
                  {/* </LayoutContextProvider>

               </ComponentsContextProvider>
            </TechnicalContextProvider>
         </EmployeeContextProvider> */}
        </Routes>
    )
}

export default Router;