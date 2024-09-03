import React from "react";

export default function Card(props) {
    let data = props.data;

    return (
        <>
            {data.map((item, index) => (
                <div key={index} className="flex flex-row m-5 mb-32">
                    <div className="mx-5 w-1/5">
                        <img 
                            src={item.url} 
                            style={{ width: "100px" }}
                        />
                    </div>
                    <div className="m-5 w-2/5">
                        <h2 className="text-2xl font-semibold">{item.name}</h2>
                        <p className="text-md">{item.desc}</p>
                        <p className="text-sm text-center">Descr. </p>
                    </div>
                </div>
            ))}
        </>
    );
}