import { FaRegCircleCheck } from "react-icons/fa6";

const page = () => {
    return (
        <div>
            <div className="conf-text1 text-center mx-4">
                <h4>You have secured your booking!</h4>
            </div>

            <div className="check-icon centered">
                <FaRegCircleCheck
                    color="green"
                    size='250px' />
            </div>

            <div className="conf-text2 text-center mx-4">

                <p className="fs-5">Thank you for selecting Neat Guys for your cleaning service. Our team will reach out to you shortly to coordinate the details before the scheduled service delivery.</p>
            </div>
        </div>
    )
}

export default page