import { useState } from "react";
import {
  ArrowRight,
  Check,
  Database,
  FileCheck2,
  Folder,
  LockKeyhole,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
export function ProjectVisual({ kind }: { kind: string }) {
  const [step, setStep] = useState(0);
  if (kind === "ledgerflow")
    return (
      <div className="project-visual ledger-visual">
        <div className="visual-caption">
          <span className="live-dot" /> CONSISTENCY BY DESIGN{" "}
          <span>01 / LEDGERFLOW</span>
        </div>
        <div className="transfer-diagram" aria-hidden="true">
          <div className="diagram-end">
            <div className="diagram-icon">
              <Database />
            </div>
            <span>ACCOUNT A</span>
          </div>
          <div className="diagram-connector">
            <i />
          </div>
          <div
            className={`transaction-core ${step === 1 ? "is-duplicate" : ""}`}
          >
            <ShieldCheck size={30} />
            <span>{step === 0 ? "TRANSACTION" : "ALREADY PROCESSED"}</span>
            <strong>{step === 0 ? "Commit once." : "No duplicate."}</strong>
          </div>
          <div className="diagram-connector">
            <i />
          </div>
          <div className="diagram-end">
            <div className="diagram-icon">
              <Database />
            </div>
            <span>ACCOUNT B</span>
          </div>
        </div>
        <div className="visual-controls">
          <span aria-live="polite">
            {step === 0
              ? "One operation. Consistent records."
              : "Same request. Same operation."}
          </span>
          <button onClick={() => setStep(step === 0 ? 1 : 0)}>
            <RefreshCw size={14} />
            {step === 0 ? "Explore a retry" : "Reset illustration"}
          </button>
        </div>
        <span className="illustration-note">
          Concept illustration · not a live transaction
        </span>
      </div>
    );
  return (
    <div className="project-visual tenancy-visual">
      <div className="visual-caption">
        <span className="live-dot" /> A CLEARER RECORD{" "}
        <span>02 / TENANCYTRACE</span>
      </div>
      <div className="record-diagram" aria-hidden="true">
        <div className="record-main">
          <Folder size={26} />
          <span>TENANCY RECORD</span>
          <div>
            <i />
            <i />
            <i />
          </div>
          <span className="record-protected">
            <LockKeyhole size={12} /> Role-based access
          </span>
        </div>
        <div className="record-history">
          <div>
            <span>
              <FileCheck2 size={17} />
            </span>
            Supporting evidence
            <Check size={14} />
          </div>
          <div>
            <span>
              <RefreshCw size={17} />
            </span>
            Record history
            <Check size={14} />
          </div>
          <div>
            <span>
              <ShieldCheck size={17} />
            </span>
            Audit trail
            <Check size={14} />
          </div>
        </div>
      </div>
      <div className="visual-controls">
        <span>Records with context. Changes with a trail.</span>
        <ArrowRight size={18} />
      </div>
      <span className="illustration-note">
        Concept illustration · no real tenancy data
      </span>
    </div>
  );
}
