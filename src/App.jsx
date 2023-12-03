import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Layout } from "./components/layout/Layout";
import { Employees } from "./pages/employees/Employees";
import { EmployeeProfile } from "./pages/employeeProfile/EmployeeProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="employee">
          <Route index element={<Employees />} />
          <Route path=":employeeId" element={<EmployeeProfile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
