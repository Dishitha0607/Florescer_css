import { X } from "lucide-react";
import { useState } from "react";

function LineItemModal({ setIsLineItemModalOpen, lineItems, setLineItems }) {
  const [itemData, setItemData] = useState({
    lineNo: lineItems.length + 1,
    itemCode: "",
    description: "",
    qty: "",
    unitCost: "",
  });

  const total = Number(itemData.qty || 0) * Number(itemData.unitCost || 0);

  function handleAddItem() {
    const newItem = {
      ...itemData,
      total,
    };

    setLineItems([...lineItems, newItem]);

    setIsLineItemModalOpen(false);
  }

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/60
        backdrop-blur-sm
        p-6
      "
    >
      {/* Modal */}
      <div
        className="
          glass-strong
          w-full max-w-4xl
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
          <h2 className="text-2xl font-bold">Purchase Requisition Line</h2>

          <button
            onClick={() => setIsLineItemModalOpen(false)}
            className="
              rounded-xl p-2
              text-red-400
              transition
              hover:bg-white/10
            "
          >
            <X />
          </button>
        </div>

        {/* Body */}
        <div className="p-8">
          <div
            className="
              grid gap-6
              sm:grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {/* Line No */}
            <div>
              <label className="mb-2 block text-sm text-muted-foreground">
                Line No
              </label>

              <input
                type="text"
                value={itemData.lineNo}
                readOnly
                className="
                  w-full rounded-xl
                  border border-border
                  bg-secondary
                  px-4 py-3
                "
              />
            </div>

            {/* Item Code */}
            <div>
              <label className="mb-2 block text-sm text-muted-foreground">
                Item Code
              </label>

              <input
                type="text"
                value={itemData.itemCode}
                onChange={(e) =>
                  setItemData({
                    ...itemData,
                    itemCode: e.target.value,
                  })
                }
                className="
                  w-full rounded-xl
                  border border-border
                  bg-secondary
                  px-4 py-3
                  outline-none
                "
              />
            </div>

            {/* Qty */}
            <div>
              <label className="mb-2 block text-sm text-muted-foreground">
                Qty
              </label>

              <input
                type="number"
                value={itemData.qty}
                onChange={(e) =>
                  setItemData({
                    ...itemData,
                    qty: e.target.value,
                  })
                }
                className="
                  w-full rounded-xl
                  border border-border
                  bg-secondary
                  px-4 py-3
                  outline-none
                "
              />
            </div>

            {/* Unit Cost */}
            <div>
              <label className="mb-2 block text-sm text-muted-foreground">
                Unit Cost
              </label>

              <input
                type="number"
                value={itemData.unitCost}
                onChange={(e) =>
                  setItemData({
                    ...itemData,
                    unitCost: e.target.value,
                  })
                }
                className="
                  w-full rounded-xl
                  border border-border
                  bg-secondary
                  px-4 py-3
                  outline-none
                "
              />
            </div>

            {/* Description */}
            <div className="lg:col-span-2">
              <label className="mb-2 block text-sm text-muted-foreground">
                Description
              </label>

              <input
                type="text"
                value={itemData.description}
                onChange={(e) =>
                  setItemData({
                    ...itemData,
                    description: e.target.value,
                  })
                }
                className="
                  w-full rounded-xl
                  border border-border
                  bg-secondary
                  px-4 py-3
                  outline-none
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
            <button
              onClick={() => setIsLineItemModalOpen(false)}
              className="
                rounded-xl
                bg-secondary
                px-6 py-3
              "
            >
              Close
            </button>

            <button
              onClick={handleAddItem}
              className="
                rounded-xl
                bg-primary
                px-6 py-3
                text-white
              "
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LineItemModal;
