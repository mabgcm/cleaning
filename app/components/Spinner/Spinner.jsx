'use client'
import { HashLoader } from "react-spinners";

const Spinner = () => {
    return (
        <div className='spinner'>
            <HashLoader
                color="#075F33"
                size={100}
            />
        </div>
    )
}


export default Spinner;