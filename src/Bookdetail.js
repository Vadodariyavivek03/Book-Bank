import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles.css";

function Bookdetails() {
  let params = useParams();
  const navigate = useNavigate();

  const [bookdetail, setbookdetail] = useState({});

  useEffect(() => {
    fetch("https://62da4b519eedb699636a8908.mockapi.io/Faculty/" + params.Id, {
      method: "Get"
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setbookdetail(res);
      });
  }, []);

  return (
    <>
      <div align="center" style={{ margin: "20px auto" }}>
        <div class="col-lg-3 md-4 ">
          <div
            class="card"
            style={{
              border: "1",
              marginTop: "40px"
            }}
          >
            <img
              src={bookdetail.Image}
              class="card-img-top"
              alt="Girl in a jacket"
            />
            <div
              align="center"
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "25px",
                marginTop: "10px"
              }}
            >
              <h4>Tital</h4>
              {bookdetail.Name}
            </div>
            <hr class="u-divider-linear-gradient u-divider-linear-gradient--gray-light-v2 g-my-2" />
            <div
              class="div1"
              align="center"
              style={{ fontSize: "16px", marginTop: "10px" }}
            >
              <h4>Number Of Page</h4>
              {bookdetail.Numberofpage}
            </div>
            <hr class="u-divider-linear-gradient u-divider-linear-gradient--gray-light-v2 g-my-2" />
            <div
              class="div1"
              align="center"
              style={{
                fontSize: "20px",
                marginTop: "10px"
              }}
            >
              <h4>Author</h4>
              {bookdetail.Author}
            </div>
            <hr class="u-divider-linear-gradient u-divider-linear-gradient--gray-light-v2 g-my-2" />
            <div
              class="div1"
              align="center"
              style={{
                fontSize: "20px",
                marginTop: "10px"
              }}
            >
              <h4>Price</h4>
              {bookdetail.Price}
            </div>
            <div>
              <button
                class="btn btn-outline-secondary btn-lg"
                style={{ margin: " 2rem auto" }}
                onClick={() => navigate(-1)}
              >
                <i style={{ fontSize: "24px" }} class="fa">
                  &#11164;
                </i>
                &nbsp; Back
              </button>
              <br />
              <button
                class="btn btn-outline-primary btn-lg"
                style={{ margin: "2rem 2rem" }}
                onClick={() => {
                  navigate("/Allbook/Edit/" + params.Id);
                }}
              >
                <i class=""></i> Edit
              </button>

              <button
                class="btn btn-outline-danger btn-lg"
                style={{ margin: "3rem 2rem" }}
                onClick={() => {
                  fetch(
                    "https://62da4b519eedb699636a8908.mockapi.io/Faculty/" +
                      params.Id,
                    {
                      method: "DELETE"
                    }
                  ).then((res) => {
                    navigate("/Allbook");
                  });
                }}
              >
                <i class="fa fa-trash"></i> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookdetails;
