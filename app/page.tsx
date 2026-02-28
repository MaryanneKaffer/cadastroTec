"use client"

import { Values } from '@/config/inputs'
import { Input } from '@heroui/input'
import { useState } from 'react'
import { Button } from '@heroui/button';
import { MdOutlineDone } from "react-icons/md";

export type FormType = {
  nome: string,
  fone: string,
  email: string,
  cpf: string,
  cidade: string,
  estado: string,
  bairro: string,
  ie: string,
  endereco: string,
  cep: string
}

type InputProps = {
  p: string
  v: keyof FormType
}

function App() {
  const [loading, setLoading] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setLoading("load")
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    await fetch("/api/sheets", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setLoading("success")
  }

  const Inputs = ({ p, v }: InputProps) => (
    <Input radius='sm' size='lg' placeholder={p} name={v} />
  )

  return (
    <section className='flex h-[100dvh] w-[100dvw] items-center justify-center'>
      <div className={`bg-default/80 transition-all rounded-sm ${!loading ? "w-[30dvw] p-4" : "p-20"}`}>
        {loading === "load" ? (
          <div className='flex flex-col gap-1 items-center justify-center h-full'>
            <Button isLoading className='bg-transparent' size="lg" />
            <p className='text-2xl'>Finalizando Cadastro</p>
            <p className='text-gray-500'>Não feche esta página</p>
          </div>
        ) :
          loading === "success" ? (
            <div className='flex flex-col gap-1 items-center justify-center h-full'>
              <MdOutlineDone className='text-green-600' size={70} />
              <p className='text-green-600 text-2xl'>Cadastro concluído</p>
              <p className='text-gray-500'>Você já pode fechar esta página</p>
            </div>
          )
            :
            (<div>
              <h1 className="text-center text-xl my-2">Cadastro do Cliente</h1>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className='grid grid-cols-2 gap-2'>
                  {Values.map((v, i) => (
                    <Inputs key={v.value} p={v.name} v={v.value} />
                  ))}
                </div>

                <Button radius='sm' type="submit" color='primary'>Enviar</Button>
              </form>
            </div>)}
      </div>
    </section>
  );
}

export default App