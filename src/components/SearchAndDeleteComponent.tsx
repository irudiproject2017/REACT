import React, { useEffect, useState } from "react";
import axios from "axios";
import ErrorComponent from "./ErrorComponent";
import TableComponent from "./TableComponent";
import InputComponent from "./InputComponent";
import base_url from './bootApi';

export const SearchAndDeleteComponent = () => {
  const [data, setData] = useState([]); // FetchAll Data with localstate
  const [id, setId] = useState("");    // FetchByID Data with localstate
  const [isNodata, setIsNodata] = useState(false); // Error with localstate


  //Axios is a promise-based HTTP client that works both in the browser and in a node. js environment. 
  //It basically provides a single API for dealing with XMLHttpRequest s and node's http interface.
  /*Fetch All*/
  const fetchAllData = async () => {
    try {
      const res = await axios.get(`${base_url}`)
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  // useEffect runs after every render cause performance issue so adding dependency array
  useEffect(() => {
    /*Fetch By ID*/
    const fetchByIdData = async () => {
      let a = [] as any
      try {
        const res = await axios.get(`${base_url}/${id}`);
        a.push(res.data);
        setData(a);
      } catch (err) {
        setIsNodata(true);
        console.log("invalid data");
      }
    };
    if (id) fetchByIdData();
    else {
      fetchAllData();
    }
  }, [id]); // Empty array dep means initial render  

  const settingId = () => {
    const Id = (document.getElementById("search") as HTMLInputElement).value;
    setId(Id);
    setIsNodata(false);
  };

  const deleteById = async (id: string) => {
    try {
      const res = await axios.delete(`${base_url}/${id}`);
      console.log(res);

    } catch (err) {
      console.log(err);
    }
  };

  document.addEventListener("click", function (event) {
    const id = (event.target as HTMLInputElement).id;
    if ((event.target as HTMLInputElement).className === 'delete-table') {
      console.log(id)
      /*Delete By ID*/
      deleteById(id)
    }

    event.stopImmediatePropagation();
  });
  return (
    <React.Fragment>
      <section className="main">
        <InputComponent settingId={settingId} />
        <div className="table-search">
          {!isNodata ? (
            <TableComponent data={data} />
          ) : (
              <ErrorComponent />
            )}
        </div>
      </section>
    </React.Fragment>
  );
};
