import { useState } from "react";

function Workflow() {
  // Dummy data
  const [workflowData, setWorkflowData] = useState([
    {
      id: 1,
      fromUser: "JEBA",
      task: "PURCHASE REQUISITION",
      detail: "Purchase Requisition from JEBA",
      trxNo: "PR-2026-004",
      comments: "Purchase Requisition",
      date: "18-May-2026",
      status: "FORWARDED",

      purpose: "For Production",

      description: "Raw material purchase for production department",

      lineItems: [
        {
          lineNo: 1,
          itemCode: "ITM-001",
          itemDescription: "Cotton Fabric",
          qty: 20,
          unitCost: 100,
          total: 2000,
        },

        {
          lineNo: 2,
          itemCode: "ITM-002",
          itemDescription: "Buttons",
          qty: 50,
          unitCost: 10,
          total: 500,
        },
      ],
    },
    {
      id: 2,
      fromUser: "ARUN",
      task: "PURCHASE REQUISITION",
      detail: "Purchase Requisition from ARUN",
      trxNo: "PR-2026-005",
      comments: "Office chair purchase",
      date: "16-May-2026",
      status: "FORWARDED",

      purpose: "For Consumption",

      description: "Office chairs for admin department",

      lineItems: [
        {
          lineNo: 1,
          itemCode: "CHR-001",
          itemDescription: "Office Chair",
          qty: 10,
          unitCost: 4500,
          total: 45000,
        },

        {
          lineNo: 2,
          itemCode: "TBL-002",
          itemDescription: "Meeting Table",
          qty: 2,
          unitCost: 12000,
          total: 24000,
        },
      ],
    },

    {
      id: 3,
      fromUser: "KARTHIK",
      task: "PURCHASE ORDER",
      detail: "Purchase Order from KARTHIK",
      trxNo: "PO-2026-003",
      comments: "System upgrade purchase",
      date: "15-May-2026",
      status: "FORWARDED",

      purpose: "For Production",

      description: "Desktop systems for production team",

      lineItems: [
        {
          lineNo: 1,
          itemCode: "SYS-101",
          itemDescription: "Desktop Computer",
          qty: 5,
          unitCost: 55000,
          total: 275000,
        },

        {
          lineNo: 2,
          itemCode: "MON-202",
          itemDescription: "LED Monitor",
          qty: 5,
          unitCost: 9000,
          total: 45000,
        },
      ],
    },

    {
      id: 4,
      fromUser: "PRIYA",
      task: "PURCHASE REQUISITION",
      detail: "Purchase Requisition from PRIYA",
      trxNo: "PR-2026-006",
      comments: "Maintenance material request",
      date: "14-May-2026",
      status: "FORWARDED",

      purpose: "For Maintenance",

      description: "Electrical maintenance materials",

      lineItems: [
        {
          lineNo: 1,
          itemCode: "ELC-301",
          itemDescription: "Electrical Wire",
          qty: 100,
          unitCost: 120,
          total: 12000,
        },

        {
          lineNo: 2,
          itemCode: "SWT-401",
          itemDescription: "Switch Board",
          qty: 20,
          unitCost: 850,
          total: 17000,
        },
      ],
    },

    {
      id: 5,
      fromUser: "SURESH",
      task: "PURCHASE ORDER",
      detail: "Purchase Order from SURESH",
      trxNo: "PO-2026-004",
      comments: "Packaging material purchase",
      date: "13-May-2026",
      status: "FORWARDED",

      purpose: "For Sales",

      description: "Packaging boxes for shipment section",

      lineItems: [
        {
          lineNo: 1,
          itemCode: "BOX-001",
          itemDescription: "Carton Box",
          qty: 500,
          unitCost: 35,
          total: 17500,
        },

        {
          lineNo: 2,
          itemCode: "TPE-002",
          itemDescription: "Packing Tape",
          qty: 100,
          unitCost: 90,
          total: 9000,
        },
      ],
    },
  ]);

  const [selectedWorkflow, setSelectedWorkflow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground p-6 sm:p-4 md:p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-serif text-secondary-foreground">
          Work<span className="font-serif text-white">flows.</span>
        </h1>
      </div>

      {/* Table Card */}
      <div className="glass rounded-2xl  border border-border">
        {/* Table Header */}
        <div className="border-b border-border px-6 py-4">
          <h2 className="text-lg font-semibold">Workflow List </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary">
              <tr className="text-left text-sm text-muted-foreground">
                <th className="px-6 py-4">S.No</th>
                <th className="px-6 py-4">From User</th>
                <th className="px-6 py-4">Workflow task</th>
                <th className="px-6 py-4">Workflow Detail</th>
                <th className="px-6 py-4">Trx No</th>
                <th className="px-6 py-4">Comments</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {workflowData.map((item,index) => (
                <tr
                  key={item.id}
                  className={`border-t border-border hover:bg-secondary/40 transition text-sm ${index % 2 === 0 ? "bg-white/5" : "bg-black/5"} hover:bg-secondary/40`}
                >
                  <td className="px-6 py-4">{item.id}</td>
                  <td
                    className="px-6 py-4 hover:text-blue-300 hover:underline"
                    onClick={() => {
                      setSelectedWorkflow(item);
                      setIsModalOpen(true);
                    }}
                  >
                    {item.fromUser}
                  </td>
                  <td className="px-6 py-4">{item.task}</td>
                  <td className="px-6 py-4">{item.detail}</td>
                  <td className="px-6 py-4">{item.trxNo}</td>
                  <td className="px-6 py-4">{item.comments}</td>
                  <td className="px-6 py-4">{item.date}</td>
                  <td className="px-6 py-4">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Workflow Modal */}
      {isModalOpen && selectedWorkflow && (
        <div
          className="
      fixed inset-0 z-50
      flex items-center justify-center
      bg-black/60
      backdrop-blur-sm
      p-6
    "
        >
          {/* Modal Card */}
          <div
            className="
        glass-strong
        w-full max-w-5xl
        rounded-3xl
        border border-border
        shadow-2xl
        max-h-[90vh]
        overflow-y-auto
      "
          >
            {/* Header */}
            <div
              className="
          flex items-center justify-between
          border-b border-border
          px-8 py-5
        "
            >
              <h2 className="text-3xl font-bold font-serif">
                Workflow Details
              </h2>

              <button
                onClick={() => setIsModalOpen(false)}
                className="
            rounded-xl p-2
            text-red-400
            hover:bg-white/10
          "
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="p-8">
              {/* Grid */}
              <div
                className="
            grid gap-6
            sm:grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
          "
              >
                {/* Trx No */}
                <div>
                  <label className="mb-2 block text-sm text-muted-foreground">
                    Trx No
                  </label>

                  <input
                    type="text"
                    value={selectedWorkflow.trxNo}
                    readOnly
                    className="
                w-full rounded-xl
                border border-border
                bg-secondary
                px-4 py-3
              "
                  />
                </div>

                {/* Workflow Task */}
                <div>
                  <label className="mb-2 block text-sm text-muted-foreground">
                    Workflow Task
                  </label>

                  <input
                    type="text"
                    value={selectedWorkflow.task}
                    readOnly
                    className="
                w-full rounded-xl
                border border-border
                bg-secondary
                px-4 py-3
              "
                  />
                </div>

                {/* Status */}
                <div>
                  <label className="mb-2 block text-sm text-muted-foreground">
                    Status
                  </label>

                  <input
                    type="text"
                    value={selectedWorkflow.status}
                    readOnly
                    className="
                w-full rounded-xl
                border border-border
                bg-secondary
                px-4 py-3
              "
                  />
                </div>

                {/* Detail */}
                <div className="lg:col-span-3">
                  <label className="mb-2 block text-sm text-muted-foreground">
                    Workflow Detail
                  </label>

                  <input
                    value={selectedWorkflow.detail}
                    readOnly
                    rows={4}
                    className="
                w-full rounded-xl
                border border-border
                bg-secondary
                px-4 py-3
              "
                  />
                </div>
              </div>

              {/* Description */}
              <div className="mt-8">
                <label className="mb-2 block text-sm text-muted-foreground">
                  Description
                </label>

                <textarea
                  value={selectedWorkflow.description}
                  readOnly
                  rows={4}
                  className="
      w-full rounded-xl
      border border-border
      bg-secondary
      px-4 py-3
      resize-none
    "
                />
              </div>

              {/* Line Items */}
              <div className="mt-10">
                <h3 className="mb-4 text-xl font-semibold">Line Items</h3>

                <div className="overflow-x-auto rounded-2xl border border-border">
                  <table className="w-full">
                    <thead className="bg-secondary">
                      <tr className="text-left text-sm text-muted-foreground">
                        <th className="px-4 py-3">Line No</th>
                        <th className="px-4 py-3">Item Code</th>
                        <th className="px-4 py-3">Description</th>
                        <th className="px-4 py-3">Qty</th>
                        <th className="px-4 py-3">Unit Cost</th>
                        <th className="px-4 py-3">Total</th>
                      </tr>
                    </thead>

                    <tbody>
                      {selectedWorkflow.lineItems.map((item, index) => (
                        <tr key={index} className="border-t border-border">
                          <td className="px-4 py-3">{item.lineNo}</td>

                          <td className="px-4 py-3">{item.itemCode}</td>

                          <td className="px-4 py-3">{item.itemDescription}</td>

                          <td className="px-4 py-3">{item.qty}</td>

                          <td className="px-4 py-3">{item.unitCost}</td>

                          <td className="px-4 py-3">{item.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Footer */}
              <div
                className="
            mt-8 flex justify-end gap-4
            border-t border-border
            pt-6
          "
              >
                {/* Reject */}
                <button
                  onClick={() => {
                    const updateWorkflow = workflowData.map((item) => {
                      if (item.id === selectedWorkflow.id) {
                        return { ...item, status: "REJECTED" };
                      }
                      return item;
                    });
                    setWorkflowData(updateWorkflow);

                    setSelectedWorkflow({
                      ...selectedWorkflow,
                      status: "REJECTED",
                    });
                    alert("Workflow Approved");
                    setIsModalOpen(false);
                  }}
                  className="rounded-xl bg-red-400 px-8 py-4 text-white transition hover:opacity-90"
                >
                  Reject
                </button>

                {/* Approve */}
                <button
                  onClick={() => {
                    const updateWorkflow = workflowData.map((item) => {
                      if (item.id === selectedWorkflow.id) {
                        return { ...item, status: "APPROVED" };
                      }
                      return item;
                    });
                    setWorkflowData(updateWorkflow);

                    setSelectedWorkflow({
                      ...selectedWorkflow,
                      status: "APPROVED",
                    });
                    alert("Workflow Approved");
                    setIsModalOpen(false);
                  }}
                  className="rounded-xl bg-primary px-6 py-3 text-white transition hover:opacity-90"
                >
                  Approve
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Workflow;
