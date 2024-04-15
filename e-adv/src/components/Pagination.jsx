import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = () => {
    const arrowLeftIcon = <FontAwesomeIcon icon={faArrowLeft} />;
    const arrowRightIcon = <FontAwesomeIcon icon={faArrowRight} />;

    let [num, setNum] = useState(1);
    let [cur, setCur] = useState(1);

    const pages = [{ page: num }, { page: num + 1 }, { page: num + 2 }, { page: num + 3 }];

    const increment = () => {
        cur === pages.length ? null : setCur(cur + 1);
    };
    const decrement = () => {
        cur === 1 ? null : setCur(cur - 1);
    };

    function Next() {
        setNum(++num);
    }

    function Back() {
        setNum(--num);
    }

    return (
        <div className="flex rounded justify-end p-2">
            <div className="border-2 rounded border-gray-700">
                <button onClick={() => decrement()} className="h-10 border-0 border-gray-700 w-12 hover:bg-cyan-950 hover:text-white">
                    {arrowLeftIcon}
                </button>

                {pages.map((pg, i) => (
                    <button
                        onClick={() => setCur(pg.page)}
                        className={`h-10 border-2 border-r-0 border-t-0 border-b-0 border-gray-700 w-12 ${
                            cur === pg.page && "bg-cyan-950 text-white"
                        }`}
                        key={i}
                    >
                        {pg.page}
                    </button>
                ))}
                <button
                    onClick={() => increment()}
                    className="h-10 border-2 border-r-0 border-t-0 border-b-0 border-gray-700 w-12 hover:bg-cyan-950 hover:text-white"
                >
                    {arrowRightIcon}
                </button>
            </div>
        </div>
    );
};

export default Pagination;
