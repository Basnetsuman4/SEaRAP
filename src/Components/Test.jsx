import React, { useState } from 'react'

function Test() {
    const [selectedDiv, setSelectedDiv] = useState(1)

    return (
        <div>
            <button onClick={() => setSelectedDiv(1)}>Show Div 1</button>
            <button onClick={() => setSelectedDiv(2)}> Show Div 2</button>
            <button onClick={() => setSelectedDiv(3)}> Show Div 3</button>
            {selectedDiv === 1 && (
                <>
                    <div>
                        <input type="text" placeholder="Enter amount"></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Description"></input>
                    </div>
                </>
            )}
            {selectedDiv === 2 && <div>This is div 2</div>}
            {selectedDiv === 3 && <div>This is div 3</div>}
        </div>
    )
}

export default Test
