import React from "react"
import SignatureCanvas from "react-signature-canvas"
const Signature = ({ sigCanvas, signatureMissing }) => {
  return (
    <div className="flex flex-col ">
      <div className="border rounded-md border-slate-500">
        <SignatureCanvas
          penColor="black"
          ref={sigCanvas}
          canvasProps={{ width: 500, height: 100, className: "sigCanvas" }}
        />
      </div>
      {signatureMissing && (
        <div className="p-2 bg-yellow-300">This field is required</div>
      )}
      <button
        className="mt-4 self-end w-24 border rounded bg-slate-200 py-1"
        onClick={() => sigCanvas.current.clear()}
      >
        Clear
      </button>
    </div>
  )
}

export default Signature
