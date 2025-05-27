
import { IoBookSharp } from "react-icons/io5";
import Books from './Books';

function Learning() {
    return (
        <>
            <div className="p-5">
                <h2 className='text-2xl'><IoBookSharp className='inline-block' /> My Learing </h2>
                <h2 className='text-xl mt-2'> All Books </h2>
                <Books />
            </div>

        </>
    )
}

export default Learning
