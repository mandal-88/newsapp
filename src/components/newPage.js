import React, { useState } from "react";
import axios from "axios";

function NewPage() {
  const [data, setData] = useState([]);
  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=0b5d1df1d4094c759f7f01000d7455cf"
      )
      .then((response) => {
        //console.log(response)
        setData(response.data.articles);
      });
  };

  return (
    <>
      <div className="container my-3">
        <button className="btn btn-primary" onClick={getNews}>
          {" "}
          Fetch News
        </button>
        <h1 className="text-center">Welcome in News </h1>
      </div>

      <div className="container">
        <div className="row my-5">
          {data.map((value) => {
            return (
              <div className="col-4">
                <div className="card" style={{ width: "20rem"}} >
                  <img  src={value.urlToImage} className="card-img-top" alt="..."  />
                  <div className="card-body">
                   
                    <h5 className="card-title" >{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <p className="card-text">{value.content}</p>
                    <h6>Source:{value.source.name}</h6>
                    <h6>Published at:{value.publishedAt}</h6>
                    <a href="..." className="btn btn-primary" >
                      More...
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      
    </>
  );
}
export default NewPage;
