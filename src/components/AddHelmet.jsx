import Swal from 'sweetalert2'

const AddHelmet = () => {

    const handleAddHelmet = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const model = form.model.value;
        const supplier = form.supplier.value;
        const color = form.color.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        console.log(name, model, supplier, color, category, details, photo)
        const newHelmet = { name, model, supplier, color, category, details, photo }

        fetch('http://localhost:5000/helmet', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newHelmet)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: "New Helmet added successfully",
                        icon: 'success',
                        confirmButtonText: 'Cool--!'
                    })
                    form.reset();
                }

            })


    }
    return (
        <div className="w-[1320px] mx-auto bg-[#F4F3F0] mt-10 p-24 rounded-xl">
            <h1 className="text-center text-5xl text-sky-500 mb-4">Add New Helmet</h1>
            <form onSubmit={handleAddHelmet}>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Helmet Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Helmet Name" name="name" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Model</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Name" name="model" className="w-full input input-bordered" />
                        </label>
                    </div>
                </div>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Supplier" name="supplier" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Color</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Color Name" name="color" className="w-full input input-bordered" />
                        </label>
                    </div>
                </div>

                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Category" name="category" className="w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Helmet Details" name="details" className="w-full input input-bordered" />
                        </label>
                    </div>
                </div>

                <div className="md:flex">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Photo URL" name="photo" className="w-full input input-bordered" />
                        </label>
                    </div>
                </div>
                <input className="btn btn-block mt-8 bg-[#D2B48C]" type="submit" value="Add Helmet" />
            </form>
        </div>
    );
};

export default AddHelmet;