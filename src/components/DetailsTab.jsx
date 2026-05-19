function DetailsTab() {
  return (
    <>
      <div className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 grid-cols-3">
        <div>
          <label className="mb-2 block text-sm text-muted-foreground">
            PO Class
          </label>
          <select className="w-full rounded-xl border border-border bg-secondary px-4 py-3 outline-none">
            <option value="standard">STANDARD</option>
            <option value="subcontract">SUBCONTRACT</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-muted-foreground">
            Cost Center
          </label>
          <input
            type="text"
            className="w-full rounded-xl border border-border bg-secondary px-4 py-3 outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-muted-foreground">
            Bill To Location
          </label>
          <select className="w-full rounded-xl border border-border bg-secondary px-4 py-3 outline-none">
            <option value="EUROCOT">EUROCOT</option>
            <option value="RND">RND</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-muted-foreground">
            Sub Inventory
          </label>
          <select className="w-full rounded-xl border border-border bg-secondary px-4 py-3 outline-none">
            <option value="RM">RM-Raw Materials</option>
            <option value="IM01">Intermediate Store</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default DetailsTab;
