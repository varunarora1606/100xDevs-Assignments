import React, { useState } from "react";
import AdopterData from "./AdopterData";

const PetAdoptionForm = () => {
  const [tablePage, setTablePage] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState({
    petName: "",
    petType: "Dog",
    breed: "",
    yourName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    // console.log(e);
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    const {petName, petType, breed, yourName, email, phone} = value
    const formData = {petName, petType, breed, yourName, email, phone}
    setData(prev => [...prev, formData]);
    console.log("hello")
    setTablePage(true);
    console.log(value);
    console.log(data);
  };

  return (
    <div
      style={{
        padding: '3vh',
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        height: "90%",
        margin: "0",
      }}
    >
      {!tablePage ? (
        <div
          style={{
            backgroundColor: "#D0A585c4",
            width: "43%",
            // marginTop: "1vw"
          }}
        >
          <div
            style={{
              padding: "4vh",
              paddingTop: "1vh",
              textAlign: "left",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            <div style={{ marginTop: "10px", marginBottom: "5px" }}>
              Pet Name
            </div>
            <input
              type="text"
              name="petName"
              placeholder="Pet Name"
              onChange={handleChange}
            />
            <div style={{ marginTop: "10px", marginBottom: "5px" }}>
              Pet Type
            </div>
            <select name="petType" id="petType" onChange={handleChange}>
              <option value="Dog">Dog</option>
              <option value="Rabbit">Rabbit</option>
              <option value="Cat">Cat</option>
              <option value="Parrot">Parrot</option>
            </select>
            <div style={{ marginTop: "10px", marginBottom: "5px" }}>Breed</div>
            <input
              type="text"
              placeholder="Breed"
              onChange={handleChange}
              name="breed"
            />
            <div style={{ marginTop: "10px", marginBottom: "5px" }}>
              Your Name
            </div>
            <input
              type="text"
              placeholder="Your Name"
              onChange={handleChange}
              name="yourName"
            />
            <div style={{ marginTop: "10px", marginBottom: "5px" }}>Email</div>
            <input
              type="text"
              placeholder="Email"
              onChange={handleChange}
              name="email"
            />
            <div style={{ marginTop: "10px", marginBottom: "5px" }}>Phone</div>
            <input
              type="text"
              placeholder="Phone"
              onChange={handleChange}
              name="phone"
            />
            <button
              onClick={handleSubmit}
              style={{ marginTop: "4vh", cursor: "pointer" }}
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <AdopterData data={data} setTablePage={setTablePage}/>
      )}
    </div>
  );
};

export default PetAdoptionForm;
