import React, { useState } from "react";
import AdopterData from "./AdopterData";
import { validation } from "../utils/validation";

const PetAdoptionForm = () => {
  const [tablePage, setTablePage] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState({
    petName: "",
    petType: "Dog",
    breed: "",
    adopterName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    petName: "",
    petType: "",
    breed: "",
    adopterName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    validation(e.target.name, e.target.value, errors);
    setErrors(errors)
  };

  const handleSubmit = (e) => {
    setData(prev => [...prev, value]);
    setTablePage(true);
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
            <div>
              <div style={{ marginTop: "10px", marginBottom: "5px" }}>
                Pet Name
              </div>
              <input
                type="text"
                name="petName"
                placeholder="Pet Name"
                onChange={handleChange}
              />
              <small>{errors.petName}</small>
            </div>
            <div>
              <div style={{ marginTop: "10px", marginBottom: "5px" }}>
                Pet Type
              </div>
              <select name="petType" id="petType" onChange={handleChange}>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
                <option value="Cat">Cat</option>
                <option value="Parrot">Parrot</option>
              </select>
            </div>
            <div>
              <div style={{ marginTop: "10px", marginBottom: "5px" }}>Breed</div>
              <input
                type="text"
                placeholder="Breed"
                onChange={handleChange}
                name="breed"
              />
              <small>{errors.breed}</small>
            </div>
            <div>
              <div style={{ marginTop: "10px", marginBottom: "5px" }}>
                Your Name
              </div>
              <input
                type="text"
                placeholder="Your Name"
                onChange={handleChange}
                name="adopterName"
              />
              <small>{errors.adopterName}</small>
            </div>
            <div>
              <div style={{ marginTop: "10px", marginBottom: "5px" }}>Email</div>
              <input
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name="email"
              />
              <small>{errors.email}</small>
            </div>
            <div>
              <div style={{ marginTop: "10px", marginBottom: "5px" }}>Phone</div>
              <input
                type="text"
                placeholder="Phone"
                onChange={handleChange}
                name="phone"
              />
              <small>{errors.phone}</small>
            </div>
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
