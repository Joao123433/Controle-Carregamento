import Modal from "react-modal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { api } from "@/services/api";

interface carregamentosType {
  id: number,
  expedicao: string, 
  createdat: string,
  updatedat: string
}

interface NewShipmentModal {
  isOpen: boolean
  onRequestClose: () => void
  setCarregamentos: Dispatch<SetStateAction<carregamentosType[]>>
}

export function NewShipmentmodal({ isOpen, onRequestClose, setCarregamentos }: NewShipmentModal) {
  const [selections, setSelections] = useState(['']);
  const [expedicao, setExpedicao] = useState("")

  // Estado para inputs do tipo V3
  const [ordemProducao, setOrdemProducao] = useState<string[]>([]);
  const [nomeCliente, setNomeCliente] = useState<string[]>([]);
  const [dataConclusao, setDataConclusao] = useState<string[]>([]);
  const [romaneio, setRomaneio] = useState<string[]>([]);
  const [relatorio, setRelatorio] = useState<string[]>([]);

  // Estado para inputs do tipo MERCO
  const [produto, setProduto] = useState<string[]>([]);

  const addChoiceSelections = () => {
    setSelections((prevState) => [...prevState, ''])

    setOrdemProducao((prevState) => [...prevState, '']);
    setNomeCliente((prevState) => [...prevState, '']);
    setDataConclusao((prevState) => [...prevState, '']);
    setRomaneio((prevState) => [...prevState, '']);
    setRelatorio((prevState) => [...prevState, '']);
    
    setProduto((prevState) => [...prevState, '']);
  }

  const removeSelection = (index: number) => {
    setSelections((prev) => prev.filter((_, i) => i !== index));
    
    setOrdemProducao((prevState) => prevState.filter((_, i) => i !== index));
    setNomeCliente((prevState) => prevState.filter((_, i) => i !== index));
    setDataConclusao((prevState) => prevState.filter((_, i) => i !== index));
    setRomaneio((prevState) => prevState.filter((_, i) => i !== index));
    setRelatorio((prevState) => prevState.filter((_, i) => i !== index));
    
    setProduto((prevState) => prevState.filter((_, i) => i !== index));
  }

  const handleSelectChange = (index: number, value: string) => {
    const newSelections = [...selections]
    newSelections[index] = value
    setSelections(newSelections)
  }

  const updateOrdemProducao = (index: number, value: string) => {
    const updatedValue = [...ordemProducao]
    updatedValue[index] = value
    setOrdemProducao(updatedValue)
  }

  const updateNomeCliente = (index: number, value: string) => {
    const updatedValue = [...nomeCliente]
    updatedValue[index] = value
    setNomeCliente(updatedValue)
  }

  const updateDataConclusao = (index: number, value: string) => {
    const updatedValue = [...dataConclusao]
    updatedValue[index] = value
    setDataConclusao(updatedValue)
  }

  const updateRomaneio = (index: number, value: string) => {
    const updatedValue = [...romaneio]
    updatedValue[index] = value
    setRomaneio(updatedValue)
  }

  const updateRelatorio = (index: number, value: string) => {
    const updatedValue = [...relatorio]
    updatedValue[index] = value
    setRelatorio(updatedValue)
  }

  const updateProduto = (index: number, value: string) => {
    const updatedValue = [...produto]
    updatedValue[index] = value
    setProduto(updatedValue)
  }

  const renderInputs = (selection: string, index: number) => {
    if (selection == '1') {
      return (
        <>
          <div className="flex flex-col gap-2">
            <label className="text-white text-xl" htmlFor="">Ordem de Produção</label>
            <input type="number" value={ordemProducao[index]} onChange={(e) => updateOrdemProducao(index, e.target.value)} className="text-lg py-1 px-2 rounded" required/>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white text-xl" htmlFor="">Nome do Cliente</label>
            <input type="text" value={nomeCliente[index]} onChange={(e) => updateNomeCliente(index, e.target.value)} className="text-lg py-1 px-2 rounded" required/>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white text-xl" htmlFor="">Data de Conclusão</label>
            <input type="date" value={dataConclusao[index]} onChange={(e) => updateDataConclusao(index, e.target.value)} className="text-lg py-1 px-2 rounded" required/>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white text-xl" htmlFor="">Romaneio</label>
            <select name="" id="" value={romaneio[index]} onChange={(e) => updateRomaneio(index, e.target.value)} className="text-lg py-2 px-2 rounded" required>
              <option value=""></option>
              <option value="1">SIM</option>
              <option value="2">NÃO</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white text-xl" htmlFor="">Relatório</label>
            <select name="" id="" value={relatorio[index]} onChange={(e) => updateRelatorio(index, e.target.value)} className="text-lg py-2 px-2 rounded" required>
              <option value=""></option>
              <option value="1">SIM</option>
              <option value="2">NÃO</option>
            </select>
          </div>
        </>
      );
    } else if (selection == '2') {
      return (
        <>
          <div className="flex flex-col gap-2">
            <label className="text-white text-xl" htmlFor="">Ordem de Produção</label>
            <input type="number" value={ordemProducao[index]} onChange={(e) => updateOrdemProducao(index, e.target.value)} className="text-lg py-1 px-2 rounded" required/>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white text-xl" htmlFor="">Produto</label>
            <input type="text" value={produto[index]} onChange={(e) => updateProduto(index, e.target.value)} className="text-lg py-1 px-2 rounded" required/>
          </div>
        </>
      );
    }
    return null;
  };

  const saveButton = async (ev: { preventDefault: () => void; }) => {
    ev.preventDefault()

    const response = await api.post("/carregamento", {
      expedicao,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    const carregamento = response.data[0]

    setCarregamentos((prevState) => [carregamento, ...prevState])
    
    const id = response.data[0].id

    for(let i = 0; i < selections.length; i++) {
      await api.post("/itens", {
        tipo_orcamento: Number(selections[i]),
        ordem_producao: Number(ordemProducao[i]),
        nome_cliente: nomeCliente[i] ?? "",
        produto: produto[i] ?? "",
        createdAt: new Date(),
        updatedAt: new Date(),
        id_carregamento: Number(id),
        romaneio: Number(romaneio[i]) ?? null,
        relatorio: Number(relatorio[i]) ?? null
      })
    }

    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" className="react-modal-close" onClick={onRequestClose}>
        <FontAwesomeIcon icon={faXmark} size="xl" color="white" />        
      </button>
      <form action="" onSubmit={saveButton} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-white text-xl" htmlFor="expedicao">Expedição</label>
          <input type="text" value={expedicao} onChange={(e) => setExpedicao(e.target.value)} id="expedicao" className="w-2/4 text-lg py-1 px-2 rounded" required/>
        </div>
        <hr />
        {selections.map((selection, index) => (
          <div className="grid grid-cols-3 gap-5 bg-gray-600 px-3 pt-3 pb-4 rounded" key={index}>
            <div className="flex flex-col gap-2">
              <label className="text-white text-xl" htmlFor="">Tipo Orçamento</label>
              <select value={selection} onChange={(e: ChangeEvent<HTMLSelectElement>) => handleSelectChange(index, e.target.value)} className="text-lg py-2 px-2 rounded" required>
                <option value=""></option>
                <option value="1">V3</option>
                <option value="2">MERCO</option>
              </select>
            </div>
            {renderInputs(selection, index)}
            {index != 0 && (
              <div className="col-span-full flex justify-end">
                <button type="button" className="bg-red-600 font-bold px-3 py-2 rounded w-1/4 hover:brightness-90" onClick={() => removeSelection(index)}>remover</button>
              </div>
            )}
          </div>
        ))}
        <button type="button" className="bg-white font-bold px-3 py-2 rounded w-2/4 m-auto hover:brightness-90" onClick={addChoiceSelections}>Adicionar +1 Item</button>
        <div className="flex flex-row justify-end gap-5">
          <button type="submit" className="bg-green-600 font-bold px-3 py-2 rounded w-1/4 hover:brightness-90">Salvar</button>
        </div>
      </form>
    </Modal>
  )
}