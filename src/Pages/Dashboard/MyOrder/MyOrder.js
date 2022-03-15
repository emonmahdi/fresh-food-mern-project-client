import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import Navigation from "../../../Components/Home/Navigation/Navigation";
import useAuth from "../../../Components/hooks/useAuth";

const MyOrder = () => {
  const { user, isLoading } = useAuth();
  // console.log(user);
  const [orders, setOrders] = useState([]);
  const [cancel, setCancel] = useState('');
  // console.log(orders);
  const emai = user?.email;
  // console.log(emai);
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${emai}`)
      .then((res) => res?.json())
      .then((data) => setOrders(data));
  }, [emai]);

  // Delete order

  const handleDeleteOrder = (id) => {
    const confirm = window.confirm("Are You sure! Your order is Deleted");
    if(confirm){
      axios.delete(`http://localhost:5000/order/delete/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Order has been Cancelled Successfully",
          showConfirmButton: false,
          timer: 2000,
        }); 
        const remainOrder = orders.filter(order => order?._id !== id);
        setOrders(remainOrder) 
      }
    })  
    .then(data => setCancel(data));
    }
    
  };

  return (
    <div> 
      <h2 className="text-center my-3 fw-bold text-danger p-5">
        My Orders Items:{orders.length}
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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
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

export default MyOrder;
