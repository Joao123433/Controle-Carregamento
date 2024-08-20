import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NewShipmentmodal } from "@/components/NewShipmentModal";
import Modal from "react-modal"

Modal.setAppElement("#__next")

export default function Home() {
  const [newShipmentModalOpen, setNewShipmentModalOpen] = useState(false)

  const handleClickOpenModalShipment = () => {
    setNewShipmentModalOpen(true)
  }

  const handleClickCloseModalShipment = () => {
    setNewShipmentModalOpen(false)
  }

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
                <th scope="col" className="px-6 py-3">Product name</th>
                <th scope="col" className="px-6 py-3">Color</th>
                <th scope="col" className="px-6 py-3">Category</th>
                <th scope="col" className="px-6 py-3">Price</th>
                <th scope="col" className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">Apple MacBook Pro 17</th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">
                  <select className="text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 outline-none bg-transparent">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </td>
              </tr>
              <tr className="bg-zinc-700 border-b border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">Microsoft Surface Pro</th>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4">
                  <select className="text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 outline-none bg-transparent">
                    <option selected className="text-black">Choose a country</option>
                    <option className="text-black" value="US">United States</option>
                    <option className="text-black" value="CA">Canada</option>
                    <option className="text-black" value="FR">France</option>
                    <option className="text-black" value="DE">Germany</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">Magic Mouse 2</th>
                <td className="px-6 py-4">Black</td>
                <td className="px-6 py-4">Accessories</td>
                <td className="px-6 py-4">$99</td>
                <td className="px-6 py-4">
                  <select className="text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 outline-none bg-transparent">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </td>
              </tr>
              <tr className="bg-zinc-700 border-b border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">Google Pixel Phone</th>
                <td className="px-6 py-4">Gray</td>
                <td className="px-6 py-4">Phone</td>
                <td className="px-6 py-4">$799</td>
                <td className="px-6 py-4">
                  <select className="text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 outline-none bg-transparent">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">Apple Watch 5</th>
                <td className="px-6 py-4">Red</td>
                <td className="px-6 py-4">Wearables</td>
                <td className="px-6 py-4">$999</td>
                <td className="px-6 py-4">
                  <select className="text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 outline-none bg-transparent">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </td>
              </tr>
              <tr className="bg-zinc-700 border-b border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">Google Pixel Phone</th>
                <td className="px-6 py-4">Gray</td>
                <td className="px-6 py-4">Phone</td>
                <td className="px-6 py-4">$799</td>
                <td className="px-6 py-4">
                  <select className="text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 outline-none bg-transparent">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">Apple Watch 5</th>
                <td className="px-6 py-4">Red</td>
                <td className="px-6 py-4">Wearables</td>
                <td className="px-6 py-4">$999</td>
                <td className="px-6 py-4">
                  <select className="text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 outline-none bg-transparent">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </td>
              </tr>
              <tr className="bg-zinc-700 border-b border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">Google Pixel Phone</th>
                <td className="px-6 py-4">Gray</td>
                <td className="px-6 py-4">Phone</td>
                <td className="px-6 py-4">$799</td>
                <td className="px-6 py-4">
                  <select className="text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 outline-none bg-transparent">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">Apple Watch 5</th>
                <td className="px-6 py-4">Red</td>
                <td className="px-6 py-4">Wearables</td>
                <td className="px-6 py-4">$999</td>
                <td className="px-6 py-4">
                  <select className="text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 outline-none bg-transparent">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </td>
              </tr>
              <tr className="bg-zinc-700 border-b border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">Google Pixel Phone</th>
                <td className="px-6 py-4">Gray</td>
                <td className="px-6 py-4">Phone</td>
                <td className="px-6 py-4">$799</td>
                <td className="px-6 py-4">
                  <select className="text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 outline-none bg-transparent">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <NewShipmentmodal isOpen={newShipmentModalOpen} onRequestClose={handleClickCloseModalShipment} />
    </>
  )
}
