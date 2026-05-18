import { Plus } from "lucide-react";
import LineItemModal from "./LineItemModal";

function LineItemsTab({
  lineItems,
  setLineItems,
  isLineItemModalOpen,
  setIsLineItemModalOpen,
}) {
  return (
    <div className="mt-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">Line Items</h3>

          <p className="mt-1 text-sm text-muted-foreground">
            Add requisition items
          </p>
        </div>

        {/* Add Button */}
        <button
          onClick={() => setIsLineItemModalOpen(true)}
          className="
            flex items-center gap-2
            rounded-xl
            bg-primary
            px-5 py-3
            text-sm font-medium text-white
            transition
            hover:opacity-90
          "
        >
          <Plus size={18} />

          Add Line Item
        </button>
      </div>

      {/* Table */}
      <div
        className="
          mt-6 overflow-hidden
          rounded-2xl
          border border-border
        "
      >
        <table className="w-full">
          {/* Head */}
          <thead className="bg-secondary">
            <tr className="text-left text-sm text-muted-foreground">
              <th className="px-6 py-4">Line No</th>

              <th className="px-6 py-4">Item Code</th>

              <th className="px-6 py-4">Description</th>

              <th className="px-6 py-4">Qty</th>

              <th className="px-6 py-4">Unit Cost</th>

              <th className="px-6 py-4">Total</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {lineItems.length === 0 ? (
              <tr className="border-t border-border">
                <td
                  colSpan={6}
                  className="
                    px-6 py-16
                    text-center text-muted-foreground
                  "
                >
                  No line items added.
                </td>
              </tr>
            ) : (
              lineItems.map((item, index) => (
                <tr
                  key={index}
                  className="
                    border-t border-border
                    hover:bg-secondary/40
                    transition
                  "
                >
                  <td className="px-6 py-4">
                    {item.lineNo}
                  </td>

                  <td className="px-6 py-4">
                    {item.itemCode}
                  </td>

                  <td className="px-6 py-4">
                    {item.description}
                  </td>

                  <td className="px-6 py-4">
                    {item.qty}
                  </td>

                  <td className="px-6 py-4">
                    ₹ {item.unitCost}
                  </td>

                  <td className="px-6 py-4 font-medium text-primary">
                    ₹ {item.total}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isLineItemModalOpen && (
        <LineItemModal
          setIsLineItemModalOpen={
            setIsLineItemModalOpen
          }
          lineItems={lineItems}
          setLineItems={setLineItems}
        />
      )}
    </div>
  );
}

export default LineItemsTab;