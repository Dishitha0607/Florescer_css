import { Plus, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailsTab from "../components/DetailsTab";
import { useRef } from "react";
import LineItemsTab from "../components/LineItemTab";

function CreatePurchaseRequisition() {
  const [requisitions, setRequisitions] = useState([]);
  const year = new Date().getFullYear();
  const nextNumber = requisitions.length + 1;
  const requisitionsNumber = `PR-${year}-${String(nextNumber).padStart(3, "0")}`;
  const today = new Date().toISOString().split("T")[0];
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    description: "",
    purpose: "",
    costCenter: "",
    poClass: "",
    billTo: "",
    subInventory: "",
  });
  const isFormValid =
    formData.purpose.trim() != "" && formData.description.trim() != "";
  const [showDetailsSection, setShowDetailsSection] = useState(false);
  const [activeTab, setActiveTab] = useState("details");
  const [lineItems, setLineItems] = useState([]);
  const [isLineItemModalOpen, setIsLineItemModalOpen] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const detailsSectionRef = useRef(null);
  const { id } = useParams();

  // Loading exisiting data
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/requisitions/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setFormData({
            description: data.description || "",
            purpose: data.purpose || "",
            reqNo: data.reqNo || "", // keep it
            costCenter: data.costCenter || "",
            poClass: data.poClass || "",
            billTo: data.billTo || "",
            subInventory: data.subInventory || "",
          });

          setLineItems(data.lineItems || []);

          setShowDetailsSection(true);

          setIsUpdated(true);
        });
    }
  }, [id]);

  async function handleUpdate() {
    const requisitionData = {
      reqNo: formData.reqNo || requisitionsNumber,
      trxType: "Purchase Requisition",
      date: today,
      status: "New",

      purpose: formData.purpose,
      description: formData.description,
      costCenter: formData.costCenter,
      poClass: formData.poClass,
      billTo: formData.billTo,
      subInventory: formData.subInventory,

      items: lineItems.length,
      lineItems,
    };

    try {
      const url = id
        ? `http://localhost:3001/requisitions/${id}`
        : "http://localhost:3001/requisitions";

      const method = id ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(id ? { ...requisitionData, id } : requisitionData),
      });

      await response.json();

      alert(id ? "Updated Successfully!" : "Created Successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {/* Modal - opening +New to a new page */}
      <div className="min-h-screen bg-background text-foreground p-6">
        {/* Modal-card */}
        <div className="glass-strong w-full border border-border rounded-3xl shadow-2xl animate-fade-in">
          {/* HEADER */}
          <div
            className="sticky top-0 z-20
          flex items-center justify-between
          border-b border-border
          bg-surface/80
          px-8 py-5
          backdrop-blur-xl"
          >
            <div>
              <h2 className="text-2xl font-bold font-serif">
                {id ? "Edit Purchase Requisition" : "New Purchase Requisition"}
              </h2>
            </div>

            <div className="flex item-center gap-4">
              {isUpdated && (
                <button
                  onClick={() => navigate("/workflow")}
                  className="rounded-xl bg-secondary px-6 py-3 text-sm font-medium transition hover:bg-primary"
                >
                  Forward
                </button>
              )}

              <button
                onClick={handleUpdate}
                className="rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white transition hover: opacity-90"
              >
                Update
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-8">
            {/* Form Grid */}
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* Trx Type */}
              <div>
                <label className="mb-2 block text-muted-foreground">
                  Trx Type
                </label>
                <input
                  type="text"
                  value="Purchase Requisition"
                  readOnly
                  className="w-full rounded-xl border border-border px-4 py-3 bg-sencodary outline-none transistion focus:border-primary"
                />
              </div>
              {/* Requisition No */}
              <div>
                <label className="mb-2 block text-muted-foreground">
                  Requsition No.
                </label>
                <input
                  type="text"
                  value={
                    id
                      ? `PR-2026-${String(id).padStart(3, "0")}`
                      : requisitionsNumber
                  }
                  readOnly
                  className="w-full rounded-xl border border-border px-4 py-3 bg-sencodary outline-none transistion focus:border-primary"
                />
              </div>
              {/* Requisition Date */}
              <div>
                <label className="mb-2 block text-muted-foreground">
                  Requsition Date
                </label>
                <input
                  type="text"
                  value={today}
                  readOnly
                  className="w-full rounded-xl border border-border px-4 py-3 bg-sencodary outline-none transistion focus:border-primary"
                />
              </div>
              {/* Description */}
              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm text-muted-foreground">
                  Requisition Description
                </label>

                <input
                  type="text"
                  placeholder="Enter description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="
                          w-full rounded-xl
                          border border-border
                          bg-secondary
                          px-4 py-3
                          outline-none
                          transition
                          focus:border-primary
                        "
                />
              </div>

              {/* Purchase Purpose */}
              <div className="lg:cols-span-3">
                <label className="mb-2 block text-sm text-muted-foreground">
                  Purchase Purpose
                </label>
                <select
                  value={formData.purpose}
                  onChange={(e) =>
                    setFormData({ ...formData, purpose: e.target.value })
                  }
                  className="w-full rounded-xl border border-border bg-secondary px-4 py-3 outline-none transition focus:border-primary"
                >
                  <option value="">Select an Option</option>
                  <option value="For Sales">For Sales</option>
                  <option value="For Consumption">For Consumption</option>
                  <option value="For Production">For Production</option>
                  <option value="For Maintenance">For Maintenance</option>
                </select>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 flex justify-end gap-4 border-t border-border pt-6">
              <button
                onClick={() => navigate("/")}
                className="rounded-xl bg-primary px-6 py-3 transition hover:bg-white/50"
              >
                Cancle
              </button>
              <button
                disabled={!isFormValid}
                onClick={() => {
                  setShowDetailsSection(true);

                  setTimeout(() => {
                    detailsSectionRef.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }, 100);
                }}
                className={`rounded-xl bg-primary px-6 py-3 transition hover:opacity-90 font-medium ${isFormValid ? "bg-primary hover:opacity-90" : "cursor-not-allowed bg-muted text-muted-foreground"}`}
              >
                Next
              </button>
            </div>

            {/* Details section */}
            {showDetailsSection && (
              <div
                ref={detailsSectionRef}
                className="mt-10 border-t border-border pt-8"
              >
                {/* Tabs */}
                <div className="flex gap-3 border-bborder-border pb-4">
                  {/* Details Tab */}
                  <button
                    onClick={() => setActiveTab("details")}
                    className={` rounded-t-xl px-5 py-3 text-sm font-medium transition ${activeTab === "details" ? "bg-primary text-white" : "bg-secondary text-muted-foreground"}`}
                  >
                    Details
                  </button>

                  <button
                    onClick={() => setActiveTab("lineItems")}
                    className={` rounded-t-xl px-5 py-3 text-sm font-medium transition 
                      ${activeTab === "lineItems" ? "bg-primary text-white" : "bg-secondary text-muted-foreground"}`}
                  >
                    Line Items
                  </button>
                </div>

                {/* Tab Content */}
                {activeTab === "details" && (
                  <DetailsTab formData={formData} setFormData={setFormData} />
                )}
                {activeTab === "lineItems" && (
                  <LineItemsTab
                    lineItems={lineItems}
                    setLineItems={setLineItems}
                    isLineItemModalOpen={isLineItemModalOpen}
                    setIsLineItemModalOpen={setIsLineItemModalOpen}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePurchaseRequisition;
