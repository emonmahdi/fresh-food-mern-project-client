import axios from 'axios';
import React, { useEffect, useState } from 'react'; 
import { Spinner, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import Navigation from '../../../Components/Home/Navigation/Navigation';
import useAuth from '../../../Components/hooks/useAuth';

const ManageOrder = () => {
    const {user, isLoading} = useAuth()
    const [allorder, setAllOrder] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/orders'
        fetch(url)
            .then(res => res.json())
            .then(data => setAllOrder(data))
    },[]);

    const handleDeleteOrder = (id) => {
        const confirm = window.confirm('Are You Sure Order id Deleted')
        if(confirm){ 
       
        axios.delete(`http://localhost:5000/order/delete/${id}`)
            .then(res => {
                if(res.data.deletedCount > 0){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Order has been Cancelled Successfully",
                        showConfirmButton: false,
                        timer: 2000,
                      }); 
                }
                const remainOrder = allorder.filter(order => order._id !== id)
                setAllOrder(remainOrder)
            }) 
        }
    }

    return (
        <div> 
      <h2 className="text-center my-3 fw-bold text-danger p-5">
        My Orders Items:{allorder.length}
      </h2>
      <div className="container mx-auto">
        <div className="row my-5">
          {!isLoading && (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Product Image</th>
                  <th>Product Name</th>
                  <th>Order By</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Manage</th>
                </tr>
              </thead>
              <tbody>
                {allorder.map((order) => (
                  <tr key={order?._id}>
                    <td>
                      <img
                        src={order?.getDetails?.image}
                        className="img-fluid"
                        height="80px"
                        width="80px"
                        alt=""
                      />
                    </td>
                    <td>{order?.getDetails?.name}</td>
                    <td>{order?.name}</td>
                    <td>{order?.quantity}</td> 
                    <td>{order?.getDetails?.price * order?.quantity}</td>
                    <td>Pending</td>
                    <td>
                      <button
                        onClick={() => handleDeleteOrder(order?._id)}
                        className="btn btn-danger"
                      >
                        Remove Order
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
           {isLoading &&
           <div className="text-center">
              <Spinner animation="border" role="status">
              <span className="visually-hidden  d-block">Loading...</span>
            </Spinner>
           </div> 
            }
        </div>
      </div>
    </div>
    );
};

export default ManageOrder;