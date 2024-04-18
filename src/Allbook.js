import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Allbook() {
  const [books, setbooks] = useState([]);
  useEffect(() => {
    fetch("https://62da4b519eedb699636a8908.mockapi.io/Faculty")
      .then((resource) => {
        return resource.json();
      })
      .then((resource) => {
        setbooks(resource);
      });
  }, []);

  const abc = books.map((fact) => {
    return (
      <>
        <div
          class="card col-md-3 text-center"
          style={{
            paddingTop: "8px",
            paddingLeft: "8px",
            margin: "15px 5px",
            width: "20%"
          }}
        >
          <img class="card-img-top" src={fact.Image} alt="Card image cap" />
          <div class="card-body justify-content-center">
            <h4 class="card-title">Id:{fact.Id}</h4>
            <h4 class="card-title">Tital:{fact.Name}</h4>
            <Link to={"../Bookdetail/" + fact.Id}>
              <h6>View Details</h6>
            </Link>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <br />
      <h1 class="text-center">Books</h1>
      <div
        class="row"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap"
        }}
      >
        {abc}
      </div>
    </>
  );
}

export default Allbook;
