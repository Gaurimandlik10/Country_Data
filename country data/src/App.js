import Navbar from "./components/Navbar";
import './App.css';
import { useState, useEffect } from "react";
function App() {
  const [data, setdata] = useState([]);
  console.log(data);
  useEffect(() => {

    const countrydata = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all")
      console.log(response);
      const jsondata = await response.json();
      console.log(jsondata);
      setdata(jsondata);
    }
    countrydata();
  }, [])
  return (
    <>
      <Navbar />
      <div className="row">
        {data.map((value) => {
          return (
            <>
              <div className="col-md-3 mt-5" style={{ width: "10 rem"}} >
                <div className="card" style={{ width: "150px", height: "75px", objectFit: "contain"}}>
                  <img src={value.flags.svg} className="card-img-top" alt="" />
                </div>
                <div className="card-body mt-5" >
                  <h4 className="card-title mt-5">Name:  {value.name.common}</h4>
                  <p className="card-text mt-3"><h6>Capital:  {value.capital}</h6>
                                               <h6> Population:  {value.population}</h6>
                                               <h6>Region:  {value.region}</h6>
                                               <h6>Continents:  {value.continents}</h6></p>
                  <a href="#" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
      }

export default App;
