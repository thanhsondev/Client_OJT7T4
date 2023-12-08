import { createContext, useState } from "react";

export const LayoutContext = createContext();

const LayoutContextProvider = ({ children }) => {
   const [layout, setLayout] = useState(false);

   const checkContextData = {
      layout,
      setLayout,
   };

   return (
      <LayoutContext.Provider value={checkContextData}>{children}</LayoutContext.Provider>
   );
};

export default LayoutContextProvider;
