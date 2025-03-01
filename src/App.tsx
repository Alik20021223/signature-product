import  { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";


const Contract = () => {

  const [isSigning, setIsSigning] = useState<boolean>(false);
  const [signature, setSignature] = useState<string | null>(null);
  const sigCanvas = useRef<SignatureCanvas | null>(null);

  const handleOpenSignature = () => {
    setIsSigning(true);
  };

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
    <div className="max-w-3xl text-black mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Contrato de trabalho internacional</h1>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">1. As partes do contrato:</h2>
        <p><strong>Empresa:</strong> ICO, com sede nos andares 30 e 31 da Torre Comercial na área empresarial Business Bay, Dubai, Emirados Árabes Unidos.</p>
        <p><strong>Empregado:</strong> Leonardo Kundunda Francisco Neto, residente em Cazenga, telefone: +244 948176578.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">2. Objeto do contrato:</h2>
        <p>O empregado é contratado para realizar tarefas relacionadas à troca de criptomoedas através das plataformas online da empresa.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">3. Base legal:</h2>
        <p>O contrato é regido pela legislação internacional, bem como pelas leis dos Emirados Árabes Unidos e de Angola.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">4. Processamento de dados pessoais:</h2>
        <p>O empregado concorda com o processamento de seus dados pessoais pela equipe de segurança interna da empresa.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">5. Salário:</h2>
        <ul className="list-disc ml-5">
          <li>O empregado recebe uma recompensa de 5% do valor total trocado.</li>
          <li>O pagamento é feito diariamente com base nas transações concluídas.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">6. Responsabilidade por roubo:</h2>
        <ul className="list-disc ml-5">
          <li>O empregado é responsável pelo roubo de fundos dos clientes.</li>
          <li>Em caso de roubo, deve compensar a empresa com 20 vezes o valor roubado.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">7. Obrigações do empregado:</h2>
        <ul className="list-disc ml-5">
          <li>Fornecer dados precisos e completos.</li>
          <li>Dedicar-se integralmente ao trabalho remoto.</li>
          <li>Garantir uma conexão de internet estável.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">8. Penalidades:</h2>
        <ul className="list-disc ml-5">
          <li>Multa de $500 por contato não autorizado com clientes.</li>
          <li>Multa de $30 por atraso no trabalho.</li>
          <li>Multa de $20 por atraso no processamento de pagamento.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">9. Deveres do empregado:</h2>
        <p>Receber fundos, comprar criptomoedas e transferi-las conforme instruído.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">10. Confidencialidade:</h2>
        <p>O empregado deve manter a confidencialidade das informações da empresa.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">11. Forma eletrônica do contrato:</h2>
        <p>O contrato pode ser assinado eletronicamente e tem validade jurídica.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">12. Duração do contrato:</h2>
        <p>Entra em vigor quando assinado e pode ser rescindido com aviso prévio de 30 dias.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">13. Resolução de disputas:</h2>
        <p>Disputas serão resolvidas por negociação ou arbitragem.</p>
      </section>

      <footer className="border-t pt-4 mt-4">
        <p className="text-center font-semibold">Assinaturas das partes:</p>
        <div className="flex justify-between mt-4">
          <div className="flex items-center space-x-4">
            <p><strong>Empresa (ICO)</strong></p>
            {signature && <img src={signature} alt="Firma" className="w-32 h-16" />}
            <button className="text-blue-500 underline" onClick={handleOpenSignature}>Assinar</button>
          </div>
          <p><strong>Empregado</strong></p>
        </div>
      </footer>

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

export default Contract;