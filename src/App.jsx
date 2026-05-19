import { Route, Routes, BrowserRouter } from "react-router-dom";
import PurchaseRequisition from "./pages/PurchaseRequisition";
import CreatePurchaseRequisition from "./pages/CreatePurchaseRequisition";
import Workflow from "./pages/Workflow";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen bg-background text-foreground">
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <PurchaseRequisition
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                  />
                }
              />
              <Route
                path="/purchase-requisition/new"
                element={<CreatePurchaseRequisition />}
              />
              <Route path="/workflow" element={<Workflow />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
