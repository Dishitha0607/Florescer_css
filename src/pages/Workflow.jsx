import { useState } from "react";

function Workflow() {
  // Dummy data
  const workflowData = [
    {
      id: 1,
      fromUser: "JEBA",
      task: "PURCHASE REQUISITION",
      detail: "Purchase Requisition from JEBA",
      trxNo: "PR-2026-004",
      comments: "Purchase Requisition",
      date: "18-May-2026",
      status: "FORWARDED",
    },

    {
      id: 2,
      fromUser: "JEBA",
      task: "PURCHASE ORDER",
      detail: "Purchase Order from JEBA",
      trxNo: "PO-2026-002",
      comments: "Purchase Order",
      date: "17-May-2026",
      status: "WAITING",
    },
  ];

  const [selectedWorkflow, setSelectedWorkflow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
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
        <div className="overeflow-x-auto">
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
              {workflowData.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-border hover:bg-secondary/40 transition text-sm"
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

                  <textarea
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
                    alert("Workflow Rejected");
                    setIsModalOpen(false);
                  }}
                  className="
              rounded-xl
              bg-red-500
              px-6 py-3
              text-white
              transition
              hover:opacity-90
            "
                >
                  Reject
                </button>

                {/* Approve */}
                <button
                  onClick={() => {
                    alert("Workflow Approved");
                    setIsModalOpen(false);
                  }}
                  className="
              rounded-xl
              bg-primary
              px-6 py-3
              text-white
              transition
              hover:opacity-90
            "
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
