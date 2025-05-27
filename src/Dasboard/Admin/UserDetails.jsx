import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteUserData } from "../../Reducx/UserSlice";
import { toast, ToastContainer } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function UserDetails() {
    const { id } = useParams();
    const [visiblepasword, setVisiblePassword] = useState(false);
    const togglePasswordVisibility = () => {
        setVisiblePassword(!visiblepasword);
    }
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log("your user id is", id);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    // getuserdata
    const getUserData = async () => {
        try {
            let res = await axios.get(`http://localhost:3000/users/${id}`);
            let finalres = res.data;
            console.log("finalres", finalres);
            setLoading(false)
            setUser(finalres)
        } catch (error) {
            console.log("error get peroblem plz try aging leater", error);
        }
    }

    useEffect(() => {
        getUserData()
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!user) return <p>User not found</p>;

    // delete user
    const deleteUser = async (userId) => {
        alert(userId);
        let confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (confirmDelete) {
            toast.success("User deleted successfully");
            setTimeout(() => {
                navigate('/admin');
            }, 1000);
            dispatch(deleteUserData(userId));
        }
    }

    return (
        <>
            <ToastContainer />
            <div className="p-4 shadow-2xl bg-gray-950 text-white rounded-lg mt-5 relative">
                <MdOutlineDelete onClick={() => deleteUser(user.id)} className="text-xl cursor-pointer absolute right-5" />
                <h2 className="text-xl font-bold">Name : {user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Phone: {user.number}</p>
                <p className="flex items-center gap-5">Password : {" "} {visiblepasword ? user.password : "*****"} <span className="cursor-pointer" onClick={togglePasswordVisibility}>{visiblepasword ? <FaEye className="lineline-block" /> : <FaEyeSlash className="lineline-block" />
                }</span></p>
                <p>
                    Registration Date :{" "}
                    {new Date(user.registrationDate).toLocaleString("en-IN", {
                        dateStyle: "medium",
                        timeStyle: "short",
                    })}
                </p>

                <p>Role: {user.role || "N/A "}</p>
            </div>
        </>
    );
}

export default UserDetails;
