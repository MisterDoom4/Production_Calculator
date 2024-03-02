import React from "react";
import { useState } from "react";

function ItemsTable({ props }) {

  const handleDelete = async (id) => {
  
      fetch(`http://localhost:3000/api/deleteitem/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
          console.error('Erro ao excluir o item:', error);
        });

  
  };


  return (
    <div className="items-container flex justify-center p-5">
      <div className="item-table  bg-slate-50 text-black p-5 rounded-md">
        <table className="table-auto ">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Cost</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {props.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">
                  {item.quantity} {item.unity}
                </td>
                <td className="border px-4 py-2">R$ {item.cost}</td>
                <td className="border px-4 py-2">
                  <div className="flex flex-row">

                  <button >Editar</button>
                  <button onClick={() => handleDelete(item._id)}>Apagar</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ItemsTable;
