'use client';

/**
 * INTAKE FORM — guided "search-before-create" simplified to one form that
 * creates the customer, device, and job order in one audited step
 * (create_intake action).
 */

export function IntakeForm({
  onAct,
}: {
  onAct: (action: string, payload: Record<string, unknown>) => void;
}) {
  return (
    <section className="card">
      <h2>New Intake — Register Customer, Device &amp; Job Order</h2>
      <p className="sub">
        One guided form creates the customer record, the device record, and the job order in a
        single audited step.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const f = new FormData(e.currentTarget);
          onAct('create_intake', Object.fromEntries(f.entries()));
          e.currentTarget.reset();
        }}
      >
        <div className="grid-2">
          <div>
            <label className="field"><span>Customer name *</span><input name="customerName" required /></label>
            <label className="field"><span>Phone *</span><input name="customerPhone" placeholder="+63 9xx xxx xxxx" required /></label>
            <label className="field"><span>Email</span><input name="customerEmail" type="email" /></label>
            <label className="field"><span>Address</span><input name="customerAddress" /></label>
          </div>
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 0.6rem' }}>
              <label className="field"><span>Device type *</span>
                <select name="deviceType" defaultValue="Laptop">
                  {['Laptop', 'Desktop', 'Phone', 'Tablet', 'Printer', 'Other'].map((t) => <option key={t}>{t}</option>)}
                </select>
              </label>
              <label className="field"><span>Priority</span>
                <select name="priority" defaultValue="normal">
                  <option value="low">Low</option><option value="normal">Normal</option><option value="high">High</option>
                </select>
              </label>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 0.6rem' }}>
              <label className="field"><span>Brand *</span><input name="deviceBrand" required /></label>
              <label className="field"><span>Model *</span><input name="deviceModel" required /></label>
            </div>
            <label className="field"><span>Serial no.</span><input name="deviceSerial" /></label>
            <label className="field"><span>Reported problem *</span><textarea name="problem" required /></label>
            <label className="field"><span>Intake notes (accessories, condition, consent)</span><textarea name="intakeNotes" /></label>
          </div>
        </div>
        <button type="submit">Create job order</button>
      </form>
    </section>
  );
}
