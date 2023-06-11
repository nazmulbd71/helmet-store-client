import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const HelmetCard = ({ helmet, setHelmets, helmets }) => {
    const { name, details, photo, _id } = helmet

    const handleDelete = _id => {
        console.log("delete this", _id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/helmet/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = helmets.filter(hel => hel._id !== _id);
                            setHelmets(remaining)
                        }
                    })
            }
        })

    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className="card-actions">
                        <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
                            <button className="btn btn-active">View</button>
                            <Link to={`/updatehelmet/${_id}`}><button className="btn mx-4">Edit</button></Link>
                            <button onClick={() => handleDelete(_id)} className="btn">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelmetCard;