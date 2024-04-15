import React from "react";
import Button from "./Button";
import Modal from "./Modal";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CadastrarForm = ({ detalhes, cadastrar }) => {
    const [showModal, setShowModal] = useState(false);
    const [tipo, setTipo] = useState("");
    const handleOnClose = () => setShowModal(false);

    const plusIcon = <FontAwesomeIcon icon={faPlus} />;
    const trashIcon = <FontAwesomeIcon icon={faTrash} />;

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="col-span-2 grid grid-rows-1">
                        <input className="w-full bg-[#242424] p-1" name="cliente" type="text" placeholder="Cliente" />
                    </div>

                    <div className="grid grid-rows-1">
                        <input className="w-full bg-[#242424] p-1" name="telefone" type="text" placeholder="Telefone" />
                    </div>

                    <div className="grid grid-rows-1 grid-cols-6 gap-2">
                        <select className="col-span-4 w-full bg-[#242424] p-1" name="processo" id="processo">
                            <option value="0">Processo</option>
                            <option value="1">Inventário</option>
                            <option value="2">Usucapião</option>
                            <option value="3">Loas</option>
                            <option value="4">Aposentadoria</option>
                        </select>
                        <div className="col-span-1">
                            <Button
                                name={plusIcon}
                                onClick={() => {
                                    setShowModal(true), setTipo("processo");
                                }}
                            />
                        </div>
                        <div className="col-span-1">
                            <Button
                                name={trashIcon}
                                onClick={() => {
                                    setShowModal(true), setTipo("excluir");
                                }}
                                tipo={"excluir"}
                            />
                        </div>
                    </div>

                    <div className="grid grid-rows-1">
                        <select className="w-full bg-[#242424] p-1" name="etapa" id="etapa">
                            <option value="0">Etapa</option>
                            <option value="1">Não iniciado</option>
                            <option value="2">Em andamento</option>
                            <option value="3">Em análise</option>
                            <option value="4">Finalizado</option>
                        </select>
                    </div>

                    <div className="grid grid-rows-1 grid-cols-6 gap-2">
                        <select className="col-span-4 w-full bg-[#242424] p-1" name="tipo" id="tipo">
                            <option value="0">Tipo</option>
                            <option value="1">Eproc</option>
                            <option value="2">Projudi</option>
                            <option value="3">INSS</option>
                        </select>
                        <div className="col-span-1">
                            <Button
                                name={plusIcon}
                                onClick={() => {
                                    setShowModal(true), setTipo("tipo");
                                }}
                            />
                        </div>
                        <div className="col-span-1">
                            <Button
                                name={trashIcon}
                                onClick={() => {
                                    setShowModal(true), setTipo("excluir");
                                }}
                                tipo={"excluir"}
                            />
                        </div>
                    </div>

                    <div className="grid grid-rows-1">
                        <label className="w-full" htmlFor="audiencia">
                            Data de audiência:
                        </label>
                        <input className="w-full bg-[#242424] p-1" name="audiencia" type="date" />
                    </div>

                    <div className="grid grid-rows-1">
                        <label className="w-full" htmlFor="valor">
                            Valor:
                        </label>
                        <div className="flex items-center">
                            <label className="text-center align-middle pr-1">R$</label>
                            <input className="w-full bg-[#242424] p-1" name="valor" type="number" />
                        </div>
                    </div>
                </div>
                {detalhes ? (
                    <div>
                        <div className="flex justify-center mt-10 gap-2">
                            <Button name={"Atualizar"} />
                            <Button name={"Excluir"} tipo={"excluir"} />
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center mt-10">
                        <Button name={"Cadastrar"} />
                    </div>
                )}
            </form>
            <Modal visible={showModal} onClose={handleOnClose} tipo={tipo} />
        </div>
    );
};

export default CadastrarForm;
