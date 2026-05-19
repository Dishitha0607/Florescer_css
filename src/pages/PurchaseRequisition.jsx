import { Plus, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Dummy Values
const requisitions = [
  {
    id: 1,
    reqNo: "PR-2026-001",
    trxType: "Office Supplies",
    date: "15-May-2026",
    status: "New",
    purpose: "Printer and stationery purchase",
    items: 4,
  },

  {
    id: 2,
    reqNo: "PR-2026-002",
    trxType: "IT Equipment",
    date: "14-May-2026",
    status: "Forwarded",
    purpose: "New laptops for developers",
    items: 7,
  },

  {
    id: 3,
    reqNo: "PR-2026-003",
    trxType: "Maintenance",
    date: "12-May-2026",
    status: "Approved",
    purpose: "Air conditioner servicing",
    items: 2,
  },
];

function PurchaseRequisition({ darkMode, setDarkMode }) {
  const year = new Date().getFullYear();
  const nextNumber = requisitions.length + 1;
  const requisitionsNumber = `PR-${year}-${String(nextNumber).padStart(3, "0")}`;
  const today = new Date().toISOString().split("T")[0];
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
                  <td className="px-6 py-4 font-medium">{req.reqNo}</td>

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
