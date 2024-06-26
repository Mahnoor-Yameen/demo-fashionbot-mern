//REACT BOOTSTRAP
import Navbar from "react-bootstrap/Navbar";
import { Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GiClothespin } from "react-icons/gi";
// import SearchbarNav from "../../CommonFeatures/components/SearchbarNav";
import { AppRoute } from './../../App';



function Navigationbar() {
  





  return (
    <>
      <Navbar expand="lg" className="border-bottom sticky-top k-navbar">
        <div className=" container mx-5 py-1 rounded-pill k-nav-div" >
 


          {/* LOGO */}
          <Link
            to="/"
            className=" text-decoration-none d-flex align-items-end mx-4 "
          >
            <GiClothespin size={35} color="black"/>
          
            <span className=" text-black mx-2 " >Preloved Threads</span>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* SEARCH BAR */}
           {/* <SearchbarNav/> */}

           <Form className="d-flex align-items-center  mx-auto  k-nav-form">
              <FormControl
                type="search"
                placeholder="Enter category here.."
                className="   py-2 rounded-pill focus:outline-none focus:border-red-300"
                // aria-label="Search"
                // value={searchQuery}
                // onChange={(event) => {
                //   setSearchQuery(event.target.value);
                // }}
              />
              <Button
                variant=""
                className="rounded-full text-wh font-bold hover:border-spacing-x-64 hover:bg-slate-600 hover:text-white focus:border-red-300"
                // onClick={handleSearch}
              >
                Search
              </Button>
            </Form>


            {/* OTHER LINKS */}
            <Nav className="ml-auto d-flex align-items-center">
              <Link
                to="/login"
                className="nav-link  text-bold font-2xl "
              >
                Login
              </Link>
              <Link
                to="/register"
                className="nav-link  "
              >
                Register
              </Link>
              <Link
                to="/login"
                className="nav-link  "
              >
                Post an Ad
              </Link>
              <Link to="/Chatbot" className="nav-link font-bold font-size-2xl hover:text-gray-700  cursor-pointer">
                Chatbot
              </Link>
              {/* <Link to="/chat" className="nav-link text-white hover:text-gray-300">
          Chat here
        </Link> */}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default Navigationbar;
