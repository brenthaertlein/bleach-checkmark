import {Checkbox} from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox"

function App() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                height: "100%",
                alignItems: "center",
            }}
        >
            <Checkbox
                color={"danger"}
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                        <path
                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                    </svg>
                }
                style={{
                    fontSize: 40,
                }}
            >
                Did you get the Bleach in Silent Hill 3?
            </Checkbox>
        </div>
    );
}

export default App;
