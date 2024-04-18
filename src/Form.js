import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setdata] = useState({});

  useEffect(() => {
    if (params.Id > 0) {
      fetch(
        "https://62da4b519eedb699636a8908.mockapi.io/Faculty/" + params.Id,
        {
          method: "Get"
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setdata(res);
        });
    }
  }, []);

  return (
    <>
      <div align="center" style={{ backgroundColor: "pink" }}>
        <div
          style={{
            backgroundColor: "#dcedc2",
            border: "solid 0px black",
            borderRadius: "25px",
            width: "500px",
            align: "center"
          }}
        >
          <table class="table1">
            <br />
            <tr>
              <td>Enter Name</td>
              <td>:</td>
              <td>
                <input
                  type="text"
                  style={{ border: "solide 2px Black", borderRadius: "5px" }}
                  value={data.Name}
                  onChange={(e) => {
                    setdata({ ...data, Name: e.target.value });
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Number Of Page</td>
              <td>:</td>
              <td>
                <input
                  type="text"
                  style={{ border: "solide 2px Black", borderRadius: "5px" }}
                  value={data.Numberofpage}
                  onChange={(e) => {
                    setdata({ ...data, Numberofpage: e.target.value });
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Author</td>
              <td>:</td>
              <td>
                <input
                  type="text"
                  style={{ border: "solide 2px Black", borderRadius: "5px" }}
                  value={data.Author}
                  onChange={(e) => {
                    setdata({ ...data, Author: e.target.value });
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Price</td>
              <td>:</td>
              <td>
                <input
                  type="text"
                  style={{ border: "solide 2px Black", borderRadius: "5px" }}
                  value={data.Price}
                  onChange={(e) => {
                    setdata({ ...data, Price: e.target.value });
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Image</td>
              <td>:</td>
              <td>
                <input
                  type="text"
                  style={{ border: "solide 2px Black", borderRadius: "5px" }}
                  value={data.Image}
                  onChange={(e) => {
                    setdata({ ...data, Image: e.target.value });
                  }}
                />
              </td>
            </tr>
            <br />

            <tr colspan="3">
              <td></td>
              <td></td>
              <td align="center">
                <button
                  style={{
                    border: "light 1px black",
                    borderRadius: "10px",
                    color: "white",
                    backgroundColor: "green"
                  }}
                  onClick={() => {
                    if (params.Id > 0) {
                      fetch(
                        "https://62da4b519eedb699636a8908.mockapi.io/Faculty/" +
                          params.Id,
                        {
                          method: "PUT",
                          body: JSON.stringify(data),
                          headers: {
                            "Content-Type": "application/json"
                          }
                        }
                      ).then((res) => {
                        navigate("/Allbook");
                      });
                    } else {
                      fetch(
                        "https://62da4b519eedb699636a8908.mockapi.io/Faculty/",
                        {
                          method: "POST",
                          body: JSON.stringify(data),
                          headers: {
                            "Content-Type": "application/json"
                          }
                        }
                      ).then((res) => {
                        navigate("/Allbook");
                      });
                    }
                  }}
                >
                  {params.Id > 0 && "Submit"}
                  {!(params.Id > 0) && "Submit"}
                </button>
              </td>
            </tr>
            <br />
          </table>
        </div>
      </div>
    </>
  );
}

export default Form;
