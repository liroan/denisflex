import React from 'react';
import * as queryString from "query-string";

function App() {
    console.log(window.location.search)
    const stringified = queryString.parse(window.location.search.substring(1));
    console.log(stringified)
    return (
        <div>

        </div>
    )
}

export default App;
