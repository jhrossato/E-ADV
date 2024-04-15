import React from "react";
import Button from "./Button";

export default function AddForm({ tipo, onClickCancel }) {
    function handleSubmit(event) {
        event.preventDefault();
    }

    if (tipo == "excluir") {
        return (
            <div className="mt-4">
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-center mt-10 gap-2 w-96">
                        <Button name={"Sim"} />
                        <Button name={"Não"} onClick={onClickCancel} tipo={"cancelar"} />
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div className="mt-4">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 w-96">
                    <div className="col-span-2 grid grid-rows-1">
                        <input className="w-full bg-[#242424] p-1" name="cliente" type="text" placeholder="Nome" />
                    </div>
                </div>
                <div className="flex justify-center mt-10 gap-2">
                    <Button name={"Cadastrar"} />
                    <Button name={"Cancelar"} onClick={onClickCancel} tipo={"cancelar"} />
                </div>
            </form>
        </div>
    );
}
