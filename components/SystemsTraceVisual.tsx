export default function SystemsTraceVisual() {
  return (
    <div className="systems-visual" role="img" aria-label="Illustrative payment failure trace: changed retry key produces two provider objects and violates the uniqueness invariant; the paired corrected case keeps one provider object">
      <div className="systems-visual-header"><span>TXPROOF / SYNTHETIC REFERENCE APP</span><span>CASE 03 · COMMIT THEN CLOSE</span></div>
      <div className="systems-trace">
        <div><small>01 / PROVIDER</small><strong>Payment committed</strong><span>Response lost before acknowledgement</span></div>
        <div><small>02 / CALLER</small><strong>Retry with changed key</strong><span>Same logical checkout, new provider identity</span></div>
        <div className="systems-trace-result"><small>03 / INVARIANT</small><strong>Provider objects: 2</strong><span>provider-object-unique / VIOLATED</span></div>
      </div>
      <div className="systems-control">PAIRED CORRECTED MODE <span>same key → one object → HELD</span></div>
      <p>ILLUSTRATIVE TRACE FROM AN EXECUTABLE REGRESSION · BOUNDED TEST CASE</p>
    </div>
  );
}
