import React from "react";
import Tabela from "../../components/Tabela";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Consultar = () => {
    const magnifyingGlassIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
    const data = [
        {
            id: 1,
            nome: "Joao Henrique Rossato Filho",
            telefone: "123456789",
            processo: "Inventário",
            etapa: "Em andamento",
            tipo: "Projudi",
            audiencia: "18/08/2023",
        },
        {
            id: 2,
            nome: "Cezar",
            telefone: "123456789",
            processo: "Usucapião",
            etapa: "Finalizado",
            tipo: "Eproc",
            audiencia: "20/09/2023",
        },
        {
            id: 3,
            nome: "Paulo",
            telefone: "123456789",
            processo: "Aposentadoria",
            etapa: "Não iniciado",
            tipo: "INSS",
            audiencia: "02/09/2023",
        },
    ];

    return (
        <div className="mt-10 w-10/12 shadow-2xl rounded-lg p-8 bg-[#292a2c] text-[#afafaf]">
            <div className="grid grid-rows-1 grid-cols-1">
                <div className="col-span-1">
                    <p className="text-center text-2xl">Consultar</p>
                    <div className="grid grid-rows-1 grid-cols-10">
                        <div className="col-end-11 col-span-3 grid grid-rows-1 grid-cols-10">
                            <div className="col-span-1 my-auto">{magnifyingGlassIcon}</div>
                            <input className="col-span-9 w-full bg-[#242424] p-1" name="cliente" type="text" placeholder="Pesquisar" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <Tabela data={data} />
            </div>
        </div>
    );
};

export default Consultar;
