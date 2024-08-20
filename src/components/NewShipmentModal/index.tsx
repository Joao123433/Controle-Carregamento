import Modal from "react-modal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, useState } from "react";

interface NewShipmentModal {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewShipmentmodal({ isOpen, onRequestClose }: NewShipmentModal) {
  const [selections, setSelections] = useState(['']);

  const addChoiceSelections = () => {
    setSelections((prevState) => [...prevState, ''])
  }

  const removeSelection = (index: number) => {
    const filterSelection = selections.filter((selection, i) => i !== index)
    setSelections(filterSelection)
  }

  const handleSelectChange = (index: number, value: string) => {
    const newSelections = [...selections]
    newSelections[index] = value
    setSelections(newSelections)
  }

  const renderInputs = (selection: string, index: number) => {
    if (selection == '1') {
      return (
        <>
          <div className="flex flex-col gap-2">
            <label className="text-white text-xl" htmlFor="">Ordem de Produção</label>
            <input type="number" className="text-lg py-1 px-2 rounded"/>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white text-xl" htmlFor="">Nome do Cliente</label>
            <input type="text" className="text-lg py-1 px-2 rounded"/>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white text-xl" htmlFor="">Data de Conclusão</label>
            <input type="date" className="text-lg py-1 px-2 rounded"/>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white text-xl" htmlFor="">Romaneio</label>
            <select name="" id="" className="text-lg py-2 px-2 rounded" required>
              <option value=""></option>
              <option value="1">SIM</option>
              <option value="2">NÃO</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white text-xl" htmlFor="">Relatório</label>
            <select name="" id="" className="text-lg py-2 px-2 rounded" required>
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
            <input type="number" className="text-lg py-1 px-2 rounded"/>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white text-xl" htmlFor="">Produto</label>
            <input type="text" className="text-lg py-1 px-2 rounded"/>
          </div>
        </>
      );
    }
    return null;
  };

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
      <form action="" className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-white text-xl" htmlFor="expedicao">Expedição</label>
          <input type="text" id="expedicao" className="w-2/4 text-lg py-1 px-2 rounded" />
        </div>
        <hr />
        {selections.map((selection, index) => (
          <div className="grid grid-cols-3 gap-5 bg-gray-600 px-3 pt-3 pb-4 rounded" key={index}>
            <div className="flex flex-col gap-2">
              <label className="text-white text-xl" htmlFor="">Tipo Orçamento</label>
              <select value={selection} onChange={(e: ChangeEvent<HTMLSelectElement>) => handleSelectChange(index, e.target.value)} className="text-lg py-2 px-2 rounded" required>
                <option value="0"></option>
                <option value="1">V3</option>
                <option value="2">MERCO</option>
              </select>
            </div>
            {renderInputs(selection, index)}
            {index != 0 && (
              <div className="col-span-full flex justify-end">
                <button className="bg-red-600 font-bold px-3 py-2 rounded w-1/4 hover:brightness-90" onClick={() => removeSelection(index)}>remover</button>
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