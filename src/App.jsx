import { Route, Routes, BrowserRouter } from "react-router-dom";
import PurchaseRequisition from "./pages/PurchaseRequisition";
import CreatePurchaseRequisition from "./pages/CreatePurchaseRequisition";
import Workflow from "./pages/Workflow";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PurchaseRequisition />} />
          <Route
            path="/purchase-requisition/new"
            element={<CreatePurchaseRequisition />}
          />
          <Route path="/workflow" element={<Workflow />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
