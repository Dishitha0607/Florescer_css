function DetailsTab({ formData, setFormData }) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 grid-cols-3">

      {/* PO Class */}
      <div>
        <label className="mb-2 block text-sm text-muted-foreground">
          PO Class
        </label>
        <select
          value={formData.poClass}
          onChange={(e) =>
            setFormData({ ...formData, poClass: e.target.value })
          }
          className="w-full rounded-xl border border-border bg-secondary px-4 py-3 outline-none"
        >
          <option value="">Select</option>
          <option value="standard">STANDARD</option>
          <option value="subcontract">SUBCONTRACT</option>
        </select>
      </div>

      {/* Cost Center */}
      <div>
        <label className="mb-2 block text-sm text-muted-foreground">
          Cost Center
        </label>
        <input
          type="text"
          value={formData.costCenter}
          onChange={(e) =>
            setFormData({ ...formData, costCenter: e.target.value })
          }
          className="w-full rounded-xl border border-border bg-secondary px-4 py-3 outline-none"
        />
      </div>

      {/* Bill To */}
      <div>
        <label className="mb-2 block text-sm text-muted-foreground">
          Bill To Location
        </label>
        <select
          value={formData.billTo}
          onChange={(e) =>
            setFormData({ ...formData, billTo: e.target.value })
          }
          className="w-full rounded-xl border border-border bg-secondary px-4 py-3 outline-none"
        >
          <option value="">Select</option>
          <option value="EUROCOT">EUROCOT</option>
          <option value="RND">RND</option>
        </select>
      </div>

      {/* Sub Inventory */}
      <div>
        <label className="mb-2 block text-sm text-muted-foreground">
          Sub Inventory
        </label>
        <select
          value={formData.subInventory}
          onChange={(e) =>
            setFormData({ ...formData, subInventory: e.target.value })
          }
          className="w-full rounded-xl border border-border bg-secondary px-4 py-3 outline-none"
        >
          <option value="">Select</option>
          <option value="RM">RM-Raw Materials</option>
          <option value="IM01">Intermediate Store</option>
        </select>
      </div>

    </div>
  );
}

export default DetailsTab;