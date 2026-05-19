import { Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import requisitionsData from "../data/requisitions.json";

function PurchaseRequisition({ darkMode, setDarkMode }) {
  const [requisitions, setRequisitions] = useState(requisitionsData);
  useEffect(() => {
    fetch("http://localhost:3001/requisitions")
      .then((res) => res.json())
      .then((data) => setRequisitions(data));
  }, []);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      {/* Top Header Row */}
      <div className="mb-6 flex items-center justify-between">
        {/* Left */}
        <div>
          <h1 className="text-5xl font-bold font-serif">
            Purchase{" "}
            <span className="font-serif italic text-secondary-foreground glow-text">
              Requisition
            </span>
            <span className="font-serif text-secondary-foreground glow-text">
              .
            </span>
          </h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Manage and create purchase requisitions
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
      rounded-xl
      bg-primary
      px-5 py-3
      text-white
      transition
      hover:opacity-90
    "
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          <button
            onClick={() => navigate("/purchase-requisition/new")}
            className="flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium bg-secondary-foreground text-white shadow-lg transition-all duration-300 hover:opacity-90 "
          >
            <Plus size={18} />
            New Purchase Requisition
          </button>
        </div>
      </div>

      {/* Table Card */}
      <div
        className="
            glass
            rounded-2xl
            border border-border
            overflow-hidden
          "
      >
        {/* Table Header */}
        <div className="border-b border-border px-6 py-4">
          <h2 className="text-lg font-semibold">Requisition List</h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead className="bg-secondary">
              <tr className="text-left text-sm text-muted-foreground">
                <th className="px-6 py-4">Req No</th>
                <th className="px-6 py-4">Trx Type</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Purpose</th>
                <th className="px-6 py-4">Total Items</th>
              </tr>
            </thead>

            <tbody>
              {requisitions.map((req) => (
                <tr
                  key={req.id}
                  className="
          border-t border-border
          transition-all duration-200
          hover:bg-white/5
        "
                >
                  <td className="px-6 py-4 font-medium">
                    <button
                      onClick={() =>
                        navigate(`/purchase-requisition/edit/${req.id}`)
                      }
                      className="hover:text-blue-400 hover:underline"
                    >
                      {req.reqNo}
                    </button>
                  </td>

                  <td className="px-6 py-4">{req.trxType}</td>

                  <td className="px-6 py-4">{req.date}</td>

                  <td className="px-6 py-4">
                    <span
                      className={`
              rounded-full px-4 py-2 text-sm font-medium

              ${
                req.status === "Approved"
                  ? "bg-green-500/80 text-green-100"
                  : req.status === "Forwarded"
                    ? "bg-blue-500/80 text-blue-100"
                    : "px-8 bg-yellow-500/80 text-yellow-100"
              }
            `}
                    >
                      {req.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">{req.purpose}</td>

                  <td className="px-6 py-4">{req.items}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PurchaseRequisition;
