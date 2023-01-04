import './style.css'

export const Display = () => {
    return (
        <div>
            <div className="theme">Calc</div>
            <input className="display" disabled type="number" id="output" value="0"></input>
        </div>
    );
}