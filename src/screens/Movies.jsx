import React from "react";
import { movies } from "./moviesList";
import image from "../default.png";
import "./Style.css";

const Movies = (props) => {
  return (
    <div>
      {props.data.map((item, index) => {
        // console.log(item.moviemainphotos.length);
        return (
          <div
            className="movieContainer"
            style={{
              marginBottom: "4vh",
              backgroundColor: "#103269",
              borderRadius: 6,
              paddingTop: 8,
              paddingBottom: 8,
              paddingLeft: 15,
              paddingRight: 15,
            }}
          >
            <img
              src={
                item.moviemainphotos.length === 0
                  ? image
                  : item.moviemainphotos[0]
              }
              style={{
                borderRadius: 6,
                width: "20%",
                height: "20%",
              }}
            />
            <div style={{ marginLeft: "4vw" }}>
              <div style={{ color: "white", marginTop: ".5vh" }}>
                <p>{item.imdbmovieid}</p>
              </div>
              <div
                style={{ color: "white", marginTop: ".5vh", fontSize: "2em" }}
              >
                <p> {item.movietitle}</p>
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
                {item.moviegenres.map((it, idx) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        marginRight: "1vw",
                        border: "2px solid black",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "4vh",
                        padding: "4px",
                        borderRadius: 6,
                        borderColor: "white",
                      }}
                    >
                      <p style={{ color: "white" }}>{it}</p>
                    </div>
                  );
                })}
              </div>

              <div>
                <p style={{ color: "green", width: "25vw" }}>
                  Available in language
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  maxWidth: "65%",

                  // overflowX: "auto",
                  // msOverflowStyle:"none"
                  //   -ms-overflow-style: none;
                }}
              >
                {item.movielanguages.map((it, idx) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        marginRight: "1vw",
                        border: "2px solid black",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "4vh",
                        padding: "4px",
                        borderRadius: 6,
                        marginTop: 10,
                        borderColor: "white",
                      }}
                    >
                      <p style={{ color: "white" }}>{it}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
