import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../../Components/hooks/useAuth";
import Swal from "sweetalert2";

const AddProducts = () => {
    const {user} = useAuth()
  // React hook form
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    axios.post("https://limitless-shore-74822.herokuapp.com/products", data).then((res) => {
      
    if(res.data.insertedId){
        // alert('Added Food Successfully');
        Swal.fire(
          'Good job!',
          'Added Food Successfully',
          'success'
        )
        reset();
    }
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row my-5">
            <h2>Add Foods Item</h2>
          <div className="col-md-6 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="p-3">
              <input
                type="text"
                {...register("name")} 
                className="form-control mb-2"
                placeholder='Name'
              />
               <textarea
                style={{ height: 160 }}
                type="text"
                {...register("description")}
                placeholder="Description"
                className="form-control mb-2"
              /> 
              <input
                type="number"
                {...register("price")}
                placeholder="Price"
                className="form-control mb-2"
              />
              <input
                type="text"
                {...register("image")}
                placeholder="Img link"
                className="form-control mb-2"
              />
             
              <input type="submit" value='ADD PRODUCT' className="btn btn-warning " />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
