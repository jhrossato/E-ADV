import React from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

const handleRowClick = (id) => {
    <Navigate to="/detalhes/" />;
};

const Row = ({ record, onClick }) => {
    const keys = Object.keys(record);

    return (
        <tr key={record.id} onClick={onClick} role="row" className="hover:bg-cyan-950">
            {keys.map((key) => (
                <td className="p-3 text-sm text-center" key={key}>
                    <Link to={`/detalhes/${record.id}`} key={record.id}>
                        {record[key] == "Não iniciado" ? (
                            <span className="text-[#242424] font-bold p-1 bg-red-600 rounded-md">{record[key]}</span>
                        ) : record[key] == "Em andamento" ? (
                            <span className="text-[#242424] font-bold p-1 bg-yellow-400 rounded-md">{record[key]}</span>
                        ) : record[key] == "Em análise" ? (
                            <span className="text-[#242424] font-bold p-1 bg-yellow-400 rounded-md">{record[key]}</span>
                        ) : record[key] == "Finalizado" ? (
                            <span className="text-[#242424] font-bold p-1 bg-green-600 rounded-md">{record[key]}</span>
                        ) : (
                            <span className="">{record[key]}</span>
                        )}
                    </Link>
                </td>
            ))}
        </tr>
    );
};

const Tabela = ({ data }) => {
    const thKeys = Object.keys(data[0]);
    return (
        <div>
            <table className="w-full bg-[#242424]">
                <thead className="bg-gray-700 border-b-2 border-gray-200">
                    <tr>
                        {thKeys.map((th) => (
                            <th className="p-3 text-sm tracking-wide text-center" key={th}>
                                {th.toLocaleUpperCase()}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((record) => (
                        <Row record={record} key={record.id} />
                    ))}
                </tbody>
            </table>
            <Pagination />
        </div>
    );
};

export default Tabela;
