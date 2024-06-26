import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { AppRoute } from '../../App';

// react svg lagany k liye yeh mungwaya
import { ReactSVG } from 'react-svg';


function CategoryLine() {
  //                                          GETTING ALL CATEGORIES
  const [Category, setCatgeory] = useState([])

  useEffect(() => {
    axios.get(`${AppRoute}api/get-all-categories`)
      .then((getAllCategories) => setCatgeory(getAllCategories.data.Categories))
      .catch((error) => console.log(error))
  }, [])

  
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 500
    });
  
  },[])

  return (
    <>

      {/* new arrival heading */}

      <section className="products" >
        <div className="container-fluid my-5" 
          >
          <div>
            <h2 className="text-center col-sm-12 glowing-text" >
              Categories
            </h2>
            <hr className="w-25 m-auto" />
          </div>
        </div>
      </section>

      {/* new arrival cards  */}

      <div id='arrival' className=' container '>
        <div className="  row many-row" >
          {Category.map((value, index) =>
            <div className='col my-3 full-cat-card' key={index} data-aos="fade-up">
              <Link to={`/get-ad-by-AdCategory/${value.CategoryName}`} className='text-decoration-none'>
                <div className="responsive-card">
                  <div className=" responsive-imgbox ">
                    {/* svg lagegi idher */}
                    {value.CategorySVG && (
                      <ReactSVG
                        src={`data:image/svg+xml;utf8,${encodeURIComponent(value.CategorySVG)}`}
                        className="svg-container SvgShadow py-3 "
                      />
                    )}
                  </div>
                  <div className="responsive-content">
                    <h2 className='text-dark'>{value.CategoryName}</h2>
                  </div>
                </div>
              </Link>
            </div>
          )
          }
        </div>

      </div>






    </>

  );
}

export default CategoryLine