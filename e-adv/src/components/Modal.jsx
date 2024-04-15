import React from "react";
import AddFom from "./AddForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Modal({ visible, onClose, tipo }) {
    if (!visible) return null;

    const xIcon = <FontAwesomeIcon icon={faXmark} />;

    if (tipo == "excluir") {
        return (
            <div className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex justify-center items-center">
                <div className="bg-[#292a2c] p-4 rounded">
                    <div className="grid justify-between grid-cols-5">
                        <div className="col-span-4">Tem certeza que deseja exlcuir ?</div>
                        <div className="col-span-1 text-right">
                            <button onClick={onClose}>{xIcon}</button>
                        </div>
                    </div>
                    <AddFom tipo={tipo} onClickCancel={onClose} />
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex justify-center items-center">
            <div className="bg-[#292a2c] p-4 rounded">
                <div className="grid justify-between grid-cols-5">
                    <div className="col-span-4">Novo {tipo}</div>
                    <div className="col-span-1 text-right">
                        <button onClick={onClose}>{xIcon}</button>
                    </div>
                </div>
                <AddFom tipo={tipo} onClickCancel={onClose} />
            </div>
        </div>
    );
}
