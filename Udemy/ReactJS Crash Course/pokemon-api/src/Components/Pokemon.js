import React, { useState, useEffect } from "react";
import axios from "axios";

const Pokemon = () => {
    const [num, setNum] = useState(1);
    const [name, setName] = useState('');
    const [firstMove, setFirstMove] = useState('');

    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(res.data.name);

            if (res.data.moves.length > 0) {
                setFirstMove(res.data.moves[0].move.name);
            } else {
                setFirstMove('No moves');
            }
        }

        getData();
    }, [num]);

    return (
        <>
            <h1>
                You chose <span style={{ color: 'red' }}>{num}</span>
            </h1>
            <h1>
                My name is <span style={{ color: 'red' }}>{name}</span>
            </h1>
            <h1>
                My first move is <span style={{ color: 'red' }}>{firstMove}</span>
            </h1>

            <select name='' id='' value={num} onChange={(event) => {
                setNum(event.target.value);
            }}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </>
    );
};

export default Pokemon;
