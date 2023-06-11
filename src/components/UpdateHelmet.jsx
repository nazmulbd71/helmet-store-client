import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateHelmet = () => {
    const helmets = useLoaderData();
    const { name, model, supplier, color, category, details, photo, _id } = helmets

    const handleUpdateHelmet = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const model = form.model.value;
        const supplier = form.supplier.value;
        const color = form.color.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateHelmet = { name, model, supplier, color, category, details, photo }
        console.log(updateHelmet)

        fetch(`http://localhost:5000/helmet/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateHelmet)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: "New Helmet Updated successfully",
                        icon: 'success',
                        confirmButtonText: 'Cool--!'
                    })

                }
            })
    }


    return (
        <div className="w-[1320px] mx-auto bg-[#F4F3F0] mt-10 p-24 rounded-xl">
            <h1 className="text-center text-5xl text-sky-500 mb-4">Update this helmet {name}</h1>
            <form onSubmit={handleUpdateHelmet}>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Helmet Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={name} name="name" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Model</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={model} name="model" className="w-full input input-bordered" />
                        </label>
                    </div>
                </div>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={supplier} name="supplier" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Color</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={color} name="color" className="w-full input input-bordered" />
                        </label>
                    </div>
                </div>

                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={category} name="category" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={details} name="details" className="w-full input input-bordered" />
                        </label>
                    </div>
                </div>

                <div className="md:flex">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={photo} name="photo" className="w-full input input-bordered" />
                        </label>
                    </div>
                </div>
                <input className="btn btn-block mt-8 bg-[#D2B48C]" type="submit" value="Update Helmet" />
            </form>
        </div>
    );
};

export default UpdateHelmet;