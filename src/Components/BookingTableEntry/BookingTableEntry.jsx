import React, { useState, useEffect } from "react";
import "./appBookingTableEntry.css";

export default function BookingTableEntry() {
  //#endregion

  return (
    <tr className="Booking_Table_Row_Container">
      <td className="main_contenttablelist_entry">Ramada-Paradise</td>
      <td className="main_contenttablelist_entry">Shop</td>
      <td className="main_contenttablelist_entry">2nd Floor</td>
      <td className="main_contenttablelist_entry">908 Sq/Ft</td>
      <td className="main_contenttablelist_entry">30,000/sqft</td>
      <td className="main_contenttablelist_entry">Yes</td>
    </tr>
  );
}
