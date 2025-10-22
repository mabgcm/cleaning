'use client'
import { HashLoader } from "react-spinners";

const Spinner = ({ loading, loadingText }) => {
    return (
        <div className='spinner'>
            <HashLoader
                color="blue"
                size={60}
                loading={loading}
            />
            <p>{loadingText}</p>
        </div>
    )
}


export default Spinner;