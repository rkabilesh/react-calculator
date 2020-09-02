import React from 'react'
export default function ButtonLayout({clickHandler}) {

    const operators = ["÷","+","-","x","="];
    const row1 = ["AC","+/-","%","÷"];
    const row2 = ["7","8","9","x"];
    const row3 = ["4","5","6","-"];
    const row4 = ["1","2","3","+"];
    const row5 = ["0",".","="];

    function button(data) {
        return <button id={operators.includes(data) ? "orange" : (data==="0" ? "zero" : null)}
                       key={data} value={data} onClick={e => clickHandler(e.target.value)}>{data}</button>
    }

    return (
        <div className='allButtons'>
            <div className="row1">{row1.map(button)}</div>
            <div>{row2.map(button)}</div>
            <div>{row3.map(button)}</div>
            <div>{row4.map(button)}</div>
            <div>{row5.map(button)}</div>
        </div>
    )
}
