import Link from "next/link"
import { Dropdown } from "flowbite-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
  return (
    <header className="flex flex-row justify-between w-full h-20 py-3 items-center gap-4">
      <Link href={"/"} className="flex flex-row items-center gap-2">
        <FontAwesomeIcon icon={faFile} size="lg" style={{color: "#ffffff",}} />
        <h1 className="text-slate-50 text-2xl device:text-xl">Carregamento</h1>
      </Link>
      <nav className="flex flex-row justify-between gap-8 text-white text-lg device:h-full device:flex-col device:justify-center device:gap-1 device:items-center device:text-base">
        <Dropdown label="Fora Cidade" inline className="p-4 bg-zinc-900 rounded-lg">
          <div className="flex flex-col gap-2">
            <Dropdown.Item href="/">Carregamentos</Dropdown.Item>
            <Dropdown.Item href="/teste">teste</Dropdown.Item>
            <div className="my-2 h-px bg-gray-100 dark:bg-gray-600"></div>
            <Dropdown.Item>Manual Usuário</Dropdown.Item>
          </div>
        </Dropdown>
        <Dropdown label="Dentro Cidade" inline className="p-4 bg-zinc-900 rounded-lg">
          <div className="flex flex-col gap-2">
            <Dropdown.Item href="/">Carregamentos</Dropdown.Item>
            <Dropdown.Item href="/teste">teste</Dropdown.Item>
            <div className="my-2 h-px bg-gray-100 dark:bg-gray-600"></div>
            <Dropdown.Item>Manual Usuário</Dropdown.Item>
          </div>
        </Dropdown>
      </nav>
    </header>
  )
}