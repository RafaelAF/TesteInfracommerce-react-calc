
import { Buttons } from "./Buttons/Buttons";
import { Display } from "./Display/Display";
import './calc.css'

export const Calc = () => {
    return (
        <div className="calculator">
            <Display />
            <Buttons />
        </div>
    );
}