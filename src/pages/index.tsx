import { faCheck, faClock, faClockRotateLeft, faPenToSquare, faTruckFast, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NewShipmentmodal } from "@/components/NewShipmentModal";
import { Dropdown } from "flowbite-react"
import Modal from "react-modal"
import { api } from "@/services/api";
import { EditShipmentModal } from "@/components/EditShipmentModal";

interface carregamentosType {
  id: number,
  expedicao: string, 
  createdat: string,
  updatedat: string
}

Modal.setAppElement("#__next")

export default function Home() {
  const [carregamentos, setCarregamentos] = useState<carregamentosType[]>([])
  const [newShipmentModalOpen, setNewShipmentModalOpen] = useState(false) // Modal New
  
  const [editShipmentModalOpen, setEditShipmentModalOpen] = useState(false) // Modal Edit
  const [elementEdit, setElementEdit] = useState(0) // id elemento que ira ser editado

  // VARIAVEIS
  let count = 0;
  const dataServidor = new Date();
  const tresHoraPassado = 3 * 60 * 60 * 1000;
  const dataReal = new Date(dataServidor.getTime() - tresHoraPassado);

  // NEW MODAL
  const handleClickOpenNewModalShipment = () => {
    setNewShipmentModalOpen(true)
  }

  const handleClickCloseNewModalShipment = () => {
    setNewShipmentModalOpen(false)
  }

  // EDIT MODAL
  const handleClickOpenEditModalShipment = (id: number) => {
    setElementEdit(id)
    setEditShipmentModalOpen(true)
  }

  const handleClickCloseEditModalShipment = () => {
    setElementEdit(0)
    setEditShipmentModalOpen(false)
  }

  useEffect(() => {
    api.get("carregamento").then(res => setCarregamentos(res.data))
  }, []) 

  return (
    <>
      <section className="flex gap-4">
        <button 
          className="px-5 py-2 bg-green-600 text-white rounded-md hover:brightness-90 device:px-3 device:py-1"
          onClick={handleClickOpenNewModalShipment}
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
            <span>{carregamentos.length}</span>
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
                      <Dropdown label="" style={{width: "100%", display: "flex", flexDirection: "row-reverse", border: "1px solid black"}} target="w-full" className="py-1 bg-zinc-900 rounded-lg">
                          <Dropdown.Item className="text-white flex gap-2 min-w-40" onClick={() => handleClickOpenEditModalShipment(id)}><FontAwesomeIcon icon={faPenToSquare} size="lg"/>Editar</Dropdown.Item>
                          <Dropdown.Item className="text-white flex gap-2 min-w-40"><FontAwesomeIcon icon={faXmark} size="xl"/>Excluir</Dropdown.Item>
                          <Dropdown.Item className="text-white flex gap-2 min-w-40"><FontAwesomeIcon icon={faCheck} size="lg"/>Finalizar</Dropdown.Item>
                          <Dropdown.Item className="text-white flex gap-2 min-w-40"><FontAwesomeIcon icon={faClock} size="lg"/>Horaríos</Dropdown.Item>
                          <Dropdown.Item className="text-white flex gap-2 min-w-40"><FontAwesomeIcon icon={faClockRotateLeft} size="lg"/>Histórico</Dropdown.Item>
                      </Dropdown>
                    </td>
                  </tr>
                )})}
            </tbody>
          </table>
        </div>
      </section>
      <NewShipmentmodal isOpen={newShipmentModalOpen} onRequestClose={handleClickCloseNewModalShipment} setCarregamentos={setCarregamentos} />
      <EditShipmentModal isOpen={editShipmentModalOpen} onRequestClose={handleClickCloseEditModalShipment} setCarregamentos={setCarregamentos} id={elementEdit} />
    </>
  )
}
