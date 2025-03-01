import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

const ContractWithSignature: React.FC = () => {
  const [isSigning, setIsSigning] = useState<boolean>(false);
  const [signature, setSignature] = useState<string | null>(null);
  const sigCanvas = useRef<SignatureCanvas | null>(null);

  const handleOpenSignature = () => {
    setIsSigning(true);
  };

  console.log(signature);
  

  const handleSaveSignature = () => {
    if (sigCanvas.current) {
      setSignature(sigCanvas.current.toDataURL("image/png"));
      setIsSigning(false);
    }
  };

  const handleClearSignature = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Contract Agreement</h2>
        <p className="text-gray-700 mb-2">
          This is a sample contract text. It can be very long and in different languages. The user must read and agree before signing.
        </p>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel.
        </p>

        {signature && (
          <img src={signature} alt="Signature" className="w-64 h-32 border" />
        )}
      </div>
      
      <div className="mt-6 flex flex-col items-center">
        {signature ? (
          <img src={signature} alt="Signature" className="w-64 h-32 border border-gray-300" />
        ) : (
          <div className="w-64 h-16 flex items-center justify-center border-2 border-dashed border-gray-400 text-gray-500 cursor-pointer" onClick={handleOpenSignature}>
            Click here to sign
          </div>
        )}
      </div>

      {isSigning && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <SignatureCanvas
              ref={sigCanvas}
              penColor="black"
              canvasProps={{ width: 335, height: 200, className: "border border-gray-300" }}
            />
            <div className="mt-4 flex justify-between">
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg" onClick={handleClearSignature}>Clear</button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg" onClick={handleSaveSignature}>Save</button>
              <button className="px-4 py-2 bg-gray-500 text-white rounded-lg" onClick={() => setIsSigning(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContractWithSignature;
