import React from "react";
import { Link } from "react-router-dom";

function SettingsSidebar() {
  return (
    <ul className='settings-sidebar'>
      <li>
        <i className='fa fa-user' aria-hidden='true'></i>
        <Link to='/settings'>Account Settings</Link>
      </li>
      <li>
        <i className='fa fa-folder' aria-hidden='true'></i>
        <Link to='/my_orders'>My Orders</Link>
      </li>
      <li>
        <i className='fa fa-address-book-o' aria-hidden='true' />
        <Link to='/my_addresses'>Shipping Addresses</Link>
      </li>
      <li>
        <i className='fa fa-heart' aria-hidden='true' />
        <Link to='/wish_list'>Wish List</Link>
      </li>
    </ul>
  );
}

export default SettingsSidebar;
