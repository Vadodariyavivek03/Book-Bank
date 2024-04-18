import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-sm navbar-light text-light">
        <div class="container-fluid ">
          <img
            src="https://i.pinimg.com/236x/18/18/88/18188820e5da19a3908aeb18af5246b5--design-logos-book-logo-design.jpg"
            alt="asdf"
            height="150"
            width="150"
            class="rounded-circle"
          />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link
                  class="fs-3 text-decoration-none"
                  style={{ color: "Black" }}
                  aria-current="page"
                  to="./"
                >
                  Home
                </Link>
              </li>
              &nbsp; &nbsp;
              <li class="nav-item">
                <Link
                  class="fs-3 text-decoration-none"
                  style={{ color: "Black" }}
                  aria-current="page"
                  to="./Allbook"
                >
                  Books
                </Link>
              </li>
              &nbsp; &nbsp;
              <li class="nav-item">
                <Link
                  class="fs-3 text-decoration-none"
                  style={{ color: "Black" }}
                  aria-current="page"
                  to="./Allbook/Add"
                >
                  Add Book
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
