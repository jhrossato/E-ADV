import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/images/Logotipo.jpg";
import Button from "./Button";
import NotificacaoModal from "./NotificacaoModal";

const Navbar = () => {
    const [showNotificacao, setShowNotificacao] = useState(false);

    const showNotif = () => {
        setShowNotificacao(!showNotificacao);
    };

    return (
        <nav className="flex justify-between items-center w-5/6 mx-auto text-md">
            <div className="flex-initial w-1/6 p-2">
                <NavLink to="/consultar">
                    <img
                        src={Logo}
                        className="w-36 rounded-2xl border-solid border-2 border-[#afafaf] hover:border-cyan-950 transition-colors"
                        alt="..."
                    />
                </NavLink>
            </div>

            {/* flex w-5/6 mx-auto p-5 gap-20 justify-center bg-red-400 */}

            <div className="flex-initial w-4/6">
                <ul className="flex justify-center items-center gap-32">
                    <li>
                        <NavLink to="/cadastrar">
                            <div>
                                <h2 className="hover:text-gray-500 hover:underline underline-offset-8">Cadastrar</h2>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/consultar">
                            <div>
                                <h2 className="hover:text-gray-500 hover:underline underline-offset-8">Consultar</h2>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="flex justify-end items-center w-1/6 p-2">
                <div>
                    <button onClick={() => showNotif()}>
                        <i className="fa-regular fa-bell fa-lg mr-8 hover:cursor-pointer"></i>
                    </button>
                    <NotificacaoModal visible={showNotificacao} />
                </div>
                <Button name="Sair" />
            </div>
        </nav>
    );
};

export default Navbar;
