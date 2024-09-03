import React from "react";
import Card from "../Card";

export default function Body() {
    const data = [
        {
            url: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
            name: "Name 1",
            desc: "Desc 1"
        },
        {
            url: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
            name: "Name 2",
            desc: "Desc 2"
        },
        {
            url: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
            name: "Name 3",
            desc: "Desc 3"
        }
    ];

    return (
        <div className="flex flex-col mx-5">
            <div className="flex flex-row justify-center">
                <div className="m-5 w-2/5">
                    <h2 className="text-3xl font-semibold">Body title</h2>
                    <p className="text-xl">
                        Paragraph
                    </p>
                </div>
                <div className="m-5 ml-32 w-2/5">
                    <h2 className="text-3xl font-semibold">Options title</h2>
                    <li>Opt 1</li>
                    <li>Opt 2</li>
                    <li>Opt 3</li>
                    <li>Opt 4</li>
                    <li>Opt 5</li>
                </div>
            </div>
            <div className="flex flex-row">
                <Card data = {data}/>
            </div>
        </div>
    );
}