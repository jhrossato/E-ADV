import React from "react";
import Form from "../../components/CadastrarForm";

const Detalhes = () => {
    return (
        <div className="mt-10 xl:w-3/6 lg:w-4/6 md:w-5/6 sm:w-6/6 shadow-2xl rounded-lg p-8 bg-[#292a2c] text-[#afafaf]">
            <p className="text-center text-2xl">Detalhes</p>
            <div className="mt-5">
                <Form detalhes={true} />
            </div>
        </div>
    );
};

export default Detalhes;
