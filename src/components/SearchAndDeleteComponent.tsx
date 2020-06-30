import React, { useEffect, useState } from "react";
import axios from "axios";
import ErrorComponent from "./ErrorComponent";
import TableComponent from "./TableComponent";
import InputComponent from "./InputComponent";
import base_url from './bootApi'

export const SearchAndDeleteComponent: React.FC = () => {
  const [data, setData] = useState([]); // FetchAll Data
  const [id, setId] = useState("");    // FetchByID Data
  const [isNodata, setIsNodata] = useState(false); // Error


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

  useEffect(() => {
    /*Fetch By ID*/
    const fetchByIdData = async () => {
      const a = [] as any
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
  }, [id]);

  const settingId = () => {
    const Id = (document.getElementById("search") as HTMLInputElement).value;
    setId(Id);
    setIsNodata(false);
  };

  /*Delete By ID*/
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
