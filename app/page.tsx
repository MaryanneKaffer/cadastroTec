"use client"

import { InputProps, Values } from '@/config/inputs'
import { Input } from '@heroui/input'
import { useEffect, useState } from 'react'
import { Button } from '@heroui/button';
import { MdOutlineDone } from "react-icons/md";

function App() {
  const [loading, setLoading] = useState("")
  const [isDesktop, setIsDesktop] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading("load");

    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());

      const response = await fetch("/api/sheets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro na requisição");
      }

      setLoading("success");

    } catch (error) {
      console.error(error);
      setLoading("error");
      alert("Erro, tente novamente.");
    }
  }

  useEffect(() => {
    setIsDesktop(window.innerWidth > 800)
  }, [])

  const Inputs = ({ p, v, required }: InputProps) => (
    <Input size={isDesktop ? 'lg' : "md"} placeholder={p} name={v} required={required} errorMessage="Campo Obrigatório"
      classNames={{ helperWrapper: "absolute md:top-6 top-5 right-2 text-xs p-0 m-0 h-0", inputWrapper: "bg-default/60 data-[focus=true]:bg-default/50 data-[hover=true]:bg-default/80 rounded-[5px]" }} />
  )

  return (
    <section className='flex h-[100dvh] w-[100dvw] items-center justify-center bg-default/80 '>
      <div className={`bg-white transition-all rounded-sm ${!loading ? "xl:w-[35dvw] md:w-[70dvw] w-[90dvw] md:p-4 p-3" : "md:p-20 p-10"}`}>
        {loading === "load" ? (
          <div className='flex flex-col gap-1 items-center justify-center h-full'>
            <Button isLoading className='bg-transparent' size="lg" />
            <p className='md:text-2xl text-xl'>Finalizando Cadastro</p>
            <p className='text-gray-500 md:text-base text-sm'>Não feche esta página</p>
          </div>
        ) :
          loading === "success" ? (
            <div className='flex flex-col gap-1 items-center justify-center h-full'>
              <MdOutlineDone className='text-green-600' size={isDesktop ? 70 : 50} />
              <p className='text-green-600 md:text-2xl text-xl'>Cadastro concluído</p>
              <p className='text-gray-500 md:text-base text-sm'>Você já pode fechar esta página</p>
            </div>
          )
            :
            (<div className='flex flex-col gap-3'>
              <img draggable="false" src="/logo.png" className='w-[60%] mx-auto' />
              <h1 className="text-center md:text-xl md:my-2 text-gray-600">Cadastro do Cliente</h1>
              <form onSubmit={handleSubmit} className="flex flex-col md:gap-5 gap-3">
                <div className='grid md:grid-cols-2 md:gap-2.5 gap-1'>
                  {Values.map((v) => (
                    <Inputs key={v.value} p={v.name} v={v.value} required={v.required} />
                  ))}
                </div>

                <Button type="submit" color='primary' size={!isDesktop ? "sm" : undefined} className='md:text-md rounded-[5px] w-[200px] mx-auto'>Cadastrar</Button>
              </form>
            </div>)}
      </div>
    </section>
  );
}

export default App