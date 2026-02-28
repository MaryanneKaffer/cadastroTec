import { FormType } from "@/app/page"

export const Values: {
    name: string
    value: keyof FormType
}[] = [
        { name: "Nome", value: "nome" },
        { name: "Número", value: "fone" },
        { name: "Email", value: "email" },
        { name: "CPF", value: "cpf" },
        { name: "Cidade", value: "cidade" },
        { name: "Estado (sigla)", value: "estado" },
        { name: "Bairro", value: "bairro" },
        { name: "IE", value: "ie" },
        { name: "Endereço", value: "endereco" },
        { name: "CEP", value: "cep" }
    ]