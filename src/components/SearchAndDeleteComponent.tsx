import React, { useEffect, useState } from "react";
import axios from "axios";
import ErrorComponent from "./ErrorComponent";
import TableComponent from "./TableComponent";
import InputComponent from "./InputComponent";

export const SearchAndDeleteComponent: React.FC = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [isNodata, setIsNodata] = useState(false);

  /*Fetch All*/
  const fetchAllData = () => {
    axios
      .get("https://fakerestapi.azurewebsites.net/api/Authors")
      .then(result => {
        setData(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    /*Fetch By ID*/
    const fetchByIdData = () => {
      const a = [] as any
      axios
        .get(`https://fakerestapi.azurewebsites.net/api/Authors/${id}`)
        .then(result => {
          console.log();
          a.push(result.data);
          console.log(a);
          setData(a);
        })
        .catch(err => {
          setIsNodata(true);
          console.log("invalid data");
        });
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

  document.addEventListener("click", function (event) {
    const id = (event.target as HTMLInputElement).id;
    if ((event.target as HTMLInputElement).className === 'delete-table') {
      console.log(id)
      /*Delete By ID*/
      axios
        .delete(`https://fakerestapi.azurewebsites.net/api/Authors/${id}`)
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });
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
