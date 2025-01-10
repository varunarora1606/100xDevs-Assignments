import React, { useEffect, useState } from "react";

const RandomUser = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const getUserData = async () => {
    let json = []
    for (let i = 0; i < 5; i++) {  
      const data = await fetch(`https://randomuser.me/api?page=${page}`);
      json = [...json, await data.json()];
    }
    return json
  };

  useEffect(() => {
    const fn = async () => {
      setIsLoading(true);
      const data = await getUserData();
      setUserData([...userData, ...data]);
      setIsLoading(false);
    };
    fn();
    console.log("hi", userData);
  }, [page]);

  const handleClick = () => {
    setPage((prev) => prev + 5);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
          flexWrap: "wrap",
          padding: "5vw",
          paddingTop: "0",
        }}
      >
        <h1>
          <b>Random Users</b>
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {userData.map((user, index) => {
            return (
              <div
                key={index}
                style={{
                  margin: "1vw",
                  width: "auto",
                  border: "1px solid gray",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  // minWidth: "20vw",
                  paddingTop: "1.5vh",
                  paddingBottom: "1.5vh",
                  borderRadius: "1vw",
                }}
              >
                <div
                  style={{
                    borderRadius: "100%",
                    overflow: "hidden",
                    width: "10vh",
                    height: "10vh",
                    backgroundImage: `url(${user.results[0].picture.medium})`,
                  }}
                ></div>
                <h3 style={{ padding: "1.5vw 0.5vw", margin: "0" }}>
                  <b>
                    {user.results[0].name.title} {user.results[0].name.first}{" "}
                    {user.results[0].name.last}
                  </b>
                </h3>
              </div>
            );
          })}
        </div>
        <div style={{ margin: "2vw" }}>
          {isLoading ? (
            <button style={{ padding: "5px 15px"}}>Loading...</button>
          ) : (
            <button style={{ padding: "5px 15px" }} onClick={handleClick}>
              Load More Users
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default RandomUser;
