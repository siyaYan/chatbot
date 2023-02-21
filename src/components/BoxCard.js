import { useState } from "react";
export const BoxCard = ({ result, children, others }) => {

    const [state, setState] = useState(true);
    return (
    <div className={state ? "" : "hidden"}>
        <div className={`box_${result}`}>
            {children}
            <button onClick={() => setState(!state)}>
                hide-{others}
            </button>
        </div>
    </div>   
        
    )
}
