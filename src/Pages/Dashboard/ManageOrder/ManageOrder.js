import axios from 'axios';
import React, { useEffect, useState } from 'react'; 
import { DropdownButton, Spinner, Table, Dropdown } from 'react-bootstrap';
import Swal from 'sweetalert2';
import Navigation from '../../../Components/Home/Navigation/Navigation';
import useAuth from '../../../Components/hooks/useAuth';

const ManageOrder = () => {
    const {user, isLoading} = useAuth()
    const [allorder, setAllOrder] = useState([]);
    const [update, setUpdate] = useState(''); 
    useEffect(() => {
        const url = 'https://limitless-shore-74822.herokuapp.com/orders'
        fetch(url)
            .then(res => res.json())
            .then(data => setAllOrder(data))
    },[update]);

    const handlePending = (id, text) => {
      axios.put(`https://limitless-shore-74822.herokuapp.com/order/status/${id}`, {status: text})
        .then(res => {
          if (res.data.acknowledged) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: `Order has been ${text}`,
              showConfirmButton: false,
              timer: 2000,
            });
            setUpdate(res.data);
          }
        });
    }

    const handleDeleteOrder = (id) => {
        const confirm = window.confirm('Are You Sure Order id Deleted')
        if(confirm){ 
       
        axios.delete(`https://limitless-shore-74822.herokuapp.com/order/delete/${id}`)
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
                    <td>{order?.getDetails?.name}{order.status}</td>
                    <td>{order?.name}</td>
                    <td>{order?.quantity}</td> 
                    <td>{order?.getDetails?.price * order?.quantity}</td>
                    {order.status === 'Pending' ? (
                       <td>
                       <span
                         style={{
                           color: "rgb(172, 9, 3)",
                           margin: "0px",
                           padding: "5px 8px",
                           borderRadius: "3px",
                         }}
                       >
                         {order.status}
                       </span>
                     </td>
                    ): (
                      <td>
                      <span
                        style={{
                          color: "white",
                          backgroundColor: "rgb(2, 155, 66)",
                          margin: "0px",
                          padding: "5px 8px",
                          borderRadius: "3px",
                        }}
                      >
                        {order.status}
                      </span>
                    </td>
                    )} 
                    {/* <td>
                      <button
                        onClick={() => handleDeleteOrder(order?._id)}
                        className="btn btn-danger"
                      >
                        Remove Order
                      </button>
                    </td> */}
                    <td>
                      <DropdownButton
                        size="sm"
                        variant="secondary"
                        title="Manage Order"
                      >
                        <Dropdown.Item href="#/action-1">
                          <button className='btn btn-success w-100'
                            onClick={() => handlePending(order._id, "Approved")}
                          >
                            Approved Order
                          </button>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          <button className='btn btn-warning w-100'
                            onClick={() => handlePending(order._id, "Shipping")}
                          >
                            Shipping
                          </button>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          <button className='btn btn-danger w-100'
                            onClick={() => handleDeleteOrder(order?._id)}
                          >
                            Reject Order
                          </button>
                        </Dropdown.Item>
                      </DropdownButton>
                      <br />
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