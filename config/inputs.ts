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

export type InputProps = {
    p: string
    v: keyof FormType
    required?: boolean
}

export const Values: {
    name: string
    value: keyof FormType
    required?: boolean
}[] = [
        { name: "Razão Social", value: "nome", required: true },
        { name: "Número de Telefone", value: "fone", required: true },
        { name: "E-mail", value: "email" },
        { name: "Cnpj ou Cpf", value: "cpf", required: true },
        { name: "Cidade", value: "cidade" },
        { name: "Estado (sigla)", value: "estado" },
        { name: "Bairro", value: "bairro" },
        { name: "Inscrição Estadual", value: "ie" },
        { name: "Endereço", value: "endereco" },
        { name: "CEP", value: "cep" }
    ]

