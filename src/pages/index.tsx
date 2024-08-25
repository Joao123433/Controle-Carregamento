import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NewShipmentmodal } from "@/components/NewShipmentModal";
import Modal from "react-modal"
import { api } from "@/services/api";

interface carregamentosType {
  id: number,
  expedicao: string, 
  createdat: string,
  updatedat: string
}

Modal.setAppElement("#__next")

export default function Home() {
  const [newShipmentModalOpen, setNewShipmentModalOpen] = useState(false)
  const [carregamentos, setCarregamentos] = useState<carregamentosType[]>([])
  let count = 0;

  const handleClickOpenModalShipment = () => {
    setNewShipmentModalOpen(true)
  }

  const handleClickCloseModalShipment = () => {
    setNewShipmentModalOpen(false)
  }

  useEffect(() => {
    api.get("carregamento").then(res => setCarregamentos(res.data))
  }, []) 

  return (
    <>
      <section className="flex gap-4">
        <button 
          className="px-5 py-2 bg-green-600 text-white rounded-md hover:brightness-90 device:px-3 device:py-1"
          onClick={handleClickOpenModalShipment}
        >
          Novo
        </button>
        <button className="px-5 py-2 bg-zinc-600 text-white rounded-md hover:brightness-90 device:px-3 device:py-1">Imprimir</button>
        <button className="px-5 py-2 bg-cyan-600 text-white rounded-md hover:brightness-90 device:px-3 device:py-1">Pesquisar</button>
      </section>
      <section className="py-5 h-90 border-2 border-gray-500 flex flex-col items-center gap-4">
        <h1 className="text-2xl text-white text-center">
          Carregamentos {new Intl.DateTimeFormat("pt-br").format(new Date())}
        </h1>
        <div className="w-99 bg-zinc-900 text-white p-3 flex gap-4">
          <div className="bg-cyan-600 w-fit p-3 rounded">
            <FontAwesomeIcon icon={faTruckFast} size="2xl"/>
          </div>
          <div className="flex flex-col justify-evenly">
            <p>Total de Carregamentos</p>
            <span>5</span>
          </div>
        </div>
        <div className="overflow-y-scroll w-99 h-2/3">
          <table className="w-99 text-sm text-left rtl:text-right text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-zinc-900 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-center">Identificador</th>
                <th scope="col" className="px-6 py-3 text-center">Data Carregamento</th>
                <th scope="col" className="px-6 py-3 text-center">Expedição</th>
                <th scope="col" className="px-6 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {carregamentos.map(({id, expedicao, createdat}) => {
                const styling = count % 2 == 0
                count++

                return (
                  <tr className={styling ? "bg-zinc-700 border-b border-gray-700" : ""} key={id}>
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white text-center">{id}</th>
                    <td className="px-6 py-4 text-center">{new Intl.DateTimeFormat("pt-br").format(new Date(createdat))}</td>
                    <td className="px-6 py-4 text-center">{expedicao}</td>
                    <td className="px-6 py-4 text-center">
                      <select className="text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 outline-none bg-transparent">
                        <option defaultValue={0} className="text-black">Choose a country</option>
                        <option className="text-black" value="US">United States</option>
                        <option className="text-black" value="CA">Canada</option>
                        <option className="text-black" value="FR">France</option>
                        <option className="text-black" value="DE">Germany</option>
                      </select>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
      <NewShipmentmodal isOpen={newShipmentModalOpen} onRequestClose={handleClickCloseModalShipment} setCarregamentos={setCarregamentos} />
    </>
  )
}
