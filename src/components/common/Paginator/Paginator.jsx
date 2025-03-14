import React, { useState } from "react";
import cl from "./Paginator.module.css";

function Paginator({
    totalCount,
    usersCount,
    currentPage,
    portionSize,
    setPage,
}) {
    let pageCount = Math.ceil(totalCount / usersCount);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let portionsCount = Math.ceil(pageCount / portionSize);
    let [curPortion, setCurPortion] = useState(2);
    let leftRangeBorder = (curPortion - 1) * portionSize + 1;
    let rightRangeBorder = curPortion * portionSize;

    pages = pages
        .filter(p => p >= leftRangeBorder && p <= rightRangeBorder)
        .map(page => (
            <button
                className={page === currentPage ? cl.selected : ""}
                onClick={() => setPage(page, usersCount)}
            >
                {page}
            </button>
        ));

    return (
        <div className={cl.pagination}>
            {curPortion > 1 ? (
                <button onClick={() => setCurPortion(curPortion - 1)}>
                    Prev
                </button>
            ) : (
                ""
            )}
            {pages}
            {portionsCount > curPortion ? (
                <button onClick={() => setCurPortion(curPortion + 1)}>
                    Next
                </button>
            ) : (
                ""
            )}
        </div>
    );
}

export default Paginator;
