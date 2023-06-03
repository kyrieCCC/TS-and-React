import React from "react";

const person = {
    name: 'wlc',
    age: 18,
    work: {
        1: 'front - end',
        2: 'back-end'
    }
}

const JsxTest = () => {
    return (
        <div style={{
            color: '#433434',
            fontSize: '18px',
        }}>
            this is my jsxCompnent and my name is {person.name}
        </div>
    )
}

export default JsxTest