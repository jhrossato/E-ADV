import React from "react";

const Button = ({ name, onClick, tipo }) => {
    if (tipo == "excluir" || tipo == "cancelar") {
        return (
            <button
                onClick={onClick}
                className="w-auto p-4 text-[#afafaf] border-solid border-2 border-[#451818] hover:bg-[#451818] hover:text-white transition-colors py-1 rounded-lg"
            >
                {name}
            </button>
        );
    }

    return (
        <button
            onClick={onClick}
            className="w-auto p-4 text-[#afafaf] border-solid border-2 border-[#183645] hover:bg-[#183645] hover:text-white transition-colors py-1 rounded-lg"
        >
            {name}
        </button>
    );
};

export default Button;
