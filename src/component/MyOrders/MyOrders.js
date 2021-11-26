import React, { useEffect, useState } from 'react';

const MyOrders = () => {
    const [service, setService] = useState({})

    /* useEffect( () => {
      fetch(`http://localhost:5000/orders`)
      .then(res => res.json())
      .then(data => {
          let myOrders = [];
        //   console.log(myOrders);
          for (const item of data) {
            myOrders.push(item.order)
          }
        setService(myOrders);
        
      })
  }, [setService]) */
//   console.log(service);
 /*  useEffect( () => {
    //   console.log(service);
    fetch('http://localhost:5000/packages/byKeys', {
        method:'POST',
        headers: {
            'content-type': 'application/json'
        },
        body:JSON.stringify(service)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    }, [service]) */
    return (
        <div>
            <h4 className="mt-5">My orders</h4>
           
        </div>
    );
};

export default MyOrders;