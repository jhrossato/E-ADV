import React from "react";
// import AddFom from "./AddForm";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function NotificacaoModal({ visible, onClose }) {
    if (!visible) return null;

    // const xIcon = <FontAwesomeIcon icon={faXmark} />;

    const data = [
        {
            id: 1,
            nome: "Joao Henrique Rossato Filho",
            processo: "Inventário",
            audiencia: "18/08/2023",
        },
        {
            id: 2,
            nome: "Cezar Ronaldo",
            processo: "Usucapião",
            audiencia: "20/09/2023",
        },
        {
            id: 3,
            nome: "Paulo",
            processo: "Aposentadoria",
            audiencia: "02/09/2023",
        },
    ];

    return (
        <div className="fixed mt-2">
            <div className="bg-[#292a2c] p-2 border-2 border-gray-500 rounded">
                <div className="grid justify-between grid-cols-1 text-center">
                    <div className="col-span-1">
                        <h3>Próximas audiências</h3>
                    </div>
                    <div className="p-2">
                        {data.map((record) => (
                            <div className="col-span-1 mt-1 bg-slate-700 rounded" key={record.id}>
                                <div className="grid p-1">
                                    <p>{record.nome}</p>
                                    <p>{record.processo}</p>
                                    <p>{record.audiencia}</p>
                                </div>
                            </div>
                        ))}
                        {/* <div className="col-span-1">Novo</div>
                        <div className="col-span-1">Novo</div>
                        <div className="col-span-1">Novo</div>
                        <div className="col-span-1">Novo</div>
                        <div className="col-span-1">Novo</div> */}
                    </div>
                </div>
                {/* <AddFom tipo={tipo} onClickCancel={onClose} /> */}
            </div>
        </div>
    );
}
