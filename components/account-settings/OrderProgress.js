import React from "react";

const OrderProgress = props => {
  let { pending, shipped, delivered, returned } = props.state;

  let activePending;
  let activeShipped;
  let activeDelivered;
  let activeReturned;

  if (pending) activePending = "active";
  if (shipped) activeShipped = "active";
  if (delivered) activeDelivered = "active";
  if (returned) activeReturned = "active";

  return (
    <div className='container1'>
      <ul className='progressbar'>
        <li className={activePending}>
          <i className='fa fa-hourglass-end' aria-hidden='true'></i>
        </li>
        <li className={activeShipped}>
          <i className='fa fa-truck' aria-hidden='true'></i>
        </li>
        <li className={activeDelivered}>
          <i className='fa fa-home' aria-hidden='true'></i>
        </li>
        <li className={activeReturned}>
          <i className='fa fa-undo' aria-hidden='true'></i>
        </li>
      </ul>
    </div>
  );
};

export default OrderProgress;
