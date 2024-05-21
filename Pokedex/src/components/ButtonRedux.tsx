import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useAppDispatch } from "../app/hooks";
import { increment, decrement, incrementByAmount, decrementByAmount, reset } from "../features/counter/counterSlice";

const ButtonRedux = () => {
    const dispatch = useAppDispatch();

    return (
        <>
        <TouchableOpacity
            onPress={() => dispatch(increment())}
            style={{
                backgroundColor: 'black',
                padding: 10,
                borderRadius: 5,
                margin: 10,
            }}
        >
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Increment by 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => dispatch(decrement())}
            style={{
                backgroundColor: '#4E56AF',
                padding: 10,
                borderRadius: 5,
                margin: 10,
            }}
        >
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Decrement by 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => dispatch(incrementByAmount(10))}
            style={{
                backgroundColor: '#8E56AF',
                padding: 10,
                borderRadius: 5,
                margin: 10,
            }}
        >
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Increment by 10</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => dispatch(decrementByAmount(5))}
            style={{
                backgroundColor: '#8E262F',
                padding: 10,
                borderRadius: 5,
                margin: 10,
            }}
        >
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Decrement by 5</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => dispatch(reset())}
            style={{
                backgroundColor: '#0A4F31',
                padding: 10,
                borderRadius: 5,
                margin: 10,
            }}
        >
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Reset to 0</Text>
        </TouchableOpacity>
        </>
    );
};

export default ButtonRedux;