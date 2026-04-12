// import React, { useState } from "react";
// import "./Signup.css";

// const Signup = () => {
//   const [form, setform] = useState({
//     name: "",
//     email: "",
//     password: "",
//     age: "",
//     phone: "",
//     dob: "",
//     address: "",
//     country: "",
//     gender: "",
//     experience: 0,
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(">>>>>> Submit Hua Form Data:", form);
//     localStorage.setItem("Signup", JSON.stringify(form));

//     setform({
//       name: "",
//       email: "",
//       password: "",
//       age: "",
//       phone: "",
//       dob: "",
//       address: "",
//       country: "",
//       gender: "",
//       experience: 0,
//     });

//     alert("Your Form Submitted 🔥");
//   };

//   return (
//     <>
//       <div className="video-background">
//         <video autoPlay loop muted playsInline>
//           <source src="/bg-video.mp4" type="video/mp4" />
//         </video>
//       </div>

//       <div className="form-wrapper">
//         <div className="form-container">
//           <div className="form-header">
//             <h2>Create Account</h2>
//             <p>Join us today! Fill in your details below.</p>
//           </div>

//           <form onSubmit={handleSubmit} className="signup-form">
//             <div className="form-group full-width">
//               <label>Full Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter Your Name..."
//                 value={form.name}
//                 onChange={(e) =>
//                   setform({ ...form, name: e.target.value })
//                 }
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label>Email Address</label>
//               <input
//                 type="email"
//                 placeholder="abc@example.com"
//                 value={form.email}
//                 onChange={(e) =>
//                   setform({ ...form, email: e.target.value })
//                 }
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label>Password</label>
//               <input
//                 type="password"
//                 placeholder="••••••••"
//                 value={form.password}
//                 onChange={(e) =>
//                   setform({ ...form, password: e.target.value })
//                 }
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label>Age</label>
//               <input
//                 type="number"
//                 placeholder="Enter your age..."
//                 value={form.age}
//                 onChange={(e) =>
//                   setform({ ...form, age: e.target.value })
//                 }
//               />
//             </div>

//             <div className="form-group">
//               <label>Phone Number</label>
//               <input
//                 type="tel"
//                 placeholder="+91 99999 99999"
//                 value={form.phone}
//                 onChange={(e) =>
//                   setform({ ...form, phone: e.target.value })
//                 }
//               />
//             </div>

//             <div className="form-group">
//               <label>Date of Birth</label>
//               <input
//                 type="date"
//                 value={form.dob}
//                 onChange={(e) =>
//                   setform({ ...form, dob: e.target.value })
//                 }
//               />
//             </div>

//             <div className="form-group">
//               <label>Country</label>
//               <select
//                 value={form.country}
//                 onChange={(e) =>
//                   setform({ ...form, country: e.target.value })
//                 }
//               >
//                 <option value="" disabled>
//                   Select your country
//                 </option>
//                 <option value="India">India</option>
//                 <option value="USA">USA</option>
//                 <option value="UK">UK</option>
//                 <option value="Canada">Canada</option>
//               </select>
//             </div>

//             <div className="form-group radio-group">
//               <label>Gender</label>
//               <div className="radio-options">
//                 <label>
//                   <input
//                     type="radio"
//                     value="Male"
//                     checked={form.gender === "Male"}
//                     onChange={(e) =>
//                       setform({ ...form, gender: e.target.value })
//                     }
//                   />
//                   Male
//                 </label>

//                 <label>
//                   <input
//                     type="radio"
//                     value="Female"
//                     checked={form.gender === "Female"}
//                     onChange={(e) =>
//                       setform({ ...form, gender: e.target.value })
//                     }
//                   />
//                   Female
//                 </label>
//               </div>
//             </div>

//             <div className="form-group slider-group">
//               <label>
//                 Experience:
//                 <span className="slider-value">
//                   {form.experience} Years
//                 </span>
//               </label>

//               <input
//                 type="range"
//                 min="0"
//                 max="15"
//                 value={form.experience}
//                 onChange={(e) =>
//                   setform({ ...form, experience: e.target.value })
//                 }
//               />
//             </div>

//             <div className="form-group full-width">
//               <label>Address</label>
//               <textarea
//                 placeholder="Your complete address..."
//                 value={form.address}
//                 onChange={(e) =>
//                   setform({ ...form, address: e.target.value })
//                 }
//               />
//             </div>

//             <button type="submit" className="submit-btn full-width">
//               Sign Up
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signup;

//------------------------------------------------------------------------------

// import React, { useState } from "react";
// import "./Signup.css";

// const Signup = () => {
//   const [form, setform] = useState({
//     name: "",
//     email: "",
//     password: "",
//     age: "",
//     phone: "",
//     dob: "",
//     address: "",
//     country: "",
//     gender: "",
//     experience: 0,
//   });

//   const [error, setError] = useState([]);

//   // 🔴 Error style
//   const errorStyle = {
//     color: "#ff4d4f",
//     fontSize: "11px",
//     marginTop: "4px",
//     fontWeight: "500",
//   };

//   // 🔴 Get error
//   const getError = (field) => error.find((err) => err.includes(field));

//   // 🔴 Border style
//   const getInputStyle = (field) => ({
//     border: getError(field) ? "2px solid #ff4d4f" : "",
//   });

//   // 🚀 Submit
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let errorsArray = [];

//     if (form.name === "") errorsArray.push("name is required");
//     if (form.email === "") errorsArray.push("email is required");
//     if (form.password === "") errorsArray.push("password is required");
//     if (form.age === "") errorsArray.push("age is required");
//     if (form.phone === "") errorsArray.push("phone is required");
//     if (form.dob === "") errorsArray.push("dob is required");
//     if (form.address === "") errorsArray.push("address is required");
//     if (form.country === "") errorsArray.push("country is required");
//     if (form.gender === "") errorsArray.push("gender is required");

//     setError(errorsArray);

//     // ❌ agar error hai → bas return (NO alert)
//     if (errorsArray.length > 0) {
//       return;
//     }

//     // ✅ success case
//     console.log(">>>>>> Submit Hua Form Data:", form);
//     localStorage.setItem("Signup", JSON.stringify(form));

//     alert("Form Submitted Successfully 🔥");

//     setform({
//       name: "",
//       email: "",
//       password: "",
//       age: "",
//       phone: "",
//       dob: "",
//       address: "",
//       country: "",
//       gender: "",
//       experience: 0,
//     });
//   };
//   return (
//     <>
//       {/* 🎥 VIDEO */}
//       <div className="video-background">
//         <video autoPlay loop muted playsInline>
//           <source src="/bg-video.mp4" type="video/mp4" />
//         </video>
//       </div>

//       <div className="form-wrapper">
//         <div className="form-container">
//           <div className="form-header">
//             <h2>Create Account</h2>
//             <p>Join us today! Fill in your details below.</p>
//           </div>

//           <form onSubmit={handleSubmit} className="signup-form">
//             {/* NAME */}
//             <div className="form-group full-width">
//               <label>Full Name</label>
//               <input
//                 value={form.name}
//                 onChange={(e) => setform({ ...form, name: e.target.value })}
//                 style={getInputStyle("name")}
//               />
//               {getError("name") && <p style={errorStyle}>{getError("name")}</p>}
//             </div>

//             {/* EMAIL */}
//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 value={form.email}
//                 onChange={(e) => setform({ ...form, email: e.target.value })}
//                 style={getInputStyle("email")}
//               />
//               {getError("email") && (
//                 <p style={errorStyle}>{getError("email")}</p>
//               )}
//             </div>

//             {/* PASSWORD */}
//             <div className="form-group">
//               <label>Password</label>
//               <input
//                 type="password"
//                 value={form.password}
//                 onChange={(e) => setform({ ...form, password: e.target.value })}
//                 style={getInputStyle("password")}
//               />
//               {getError("password") && (
//                 <p style={errorStyle}>{getError("password")}</p>
//               )}
//             </div>

//             {/* AGE */}
//             <div className="form-group">
//               <label>Age</label>
//               <input
//                 type="number"
//                 value={form.age}
//                 onChange={(e) => setform({ ...form, age: e.target.value })}
//                 style={getInputStyle("age")}
//               />
//               {getError("age") && <p style={errorStyle}>{getError("age")}</p>}
//             </div>

//             {/* PHONE */}
//             <div className="form-group">
//               <label>Phone</label>
//               <input
//                 value={form.phone}
//                 onChange={(e) => setform({ ...form, phone: e.target.value })}
//                 style={getInputStyle("phone")}
//               />
//               {getError("phone") && (
//                 <p style={errorStyle}>{getError("phone")}</p>
//               )}
//             </div>

//             {/* DOB */}
//             <div className="form-group">
//               <label>Date of Birth</label>
//               <input
//                 type="date"
//                 value={form.dob}
//                 onChange={(e) => setform({ ...form, dob: e.target.value })}
//                 style={getInputStyle("dob")}
//               />
//               {getError("dob") && <p style={errorStyle}>{getError("dob")}</p>}
//             </div>

//             {/* COUNTRY */}
//             <div className="form-group">
//               <label>Country</label>
//               <select
//                 value={form.country}
//                 onChange={(e) => setform({ ...form, country: e.target.value })}
//                 style={getInputStyle("country")}
//               >
//                 <option value="">Select country</option>
//                 <option value="India">India</option>
//                 <option value="USA">USA</option>
//               </select>
//               {getError("country") && (
//                 <p style={errorStyle}>{getError("country")}</p>
//               )}
//             </div>

//             {/* GENDER */}
//             <div className="form-group">
//               <label>Gender</label>
//               <div className="radio-options">
//                 <label>
//                   <input
//                     type="radio"
//                     value="Male"
//                     checked={form.gender === "Male"}
//                     onChange={(e) =>
//                       setform({ ...form, gender: e.target.value })
//                     }
//                   />
//                   Male
//                 </label>

//                 <label>
//                   <input
//                     type="radio"
//                     value="Female"
//                     checked={form.gender === "Female"}
//                     onChange={(e) =>
//                       setform({ ...form, gender: e.target.value })
//                     }
//                   />
//                   Female
//                 </label>
//               </div>
//               {getError("gender") && (
//                 <p style={errorStyle}>{getError("gender")}</p>
//               )}
//             </div>

//             {/* EXPERIENCE */}
//             <div className="form-group">
//               <label>Experience: {form.experience} Years</label>
//               <input
//                 type="range"
//                 min="0"
//                 max="15"
//                 value={form.experience}
//                 onChange={(e) =>
//                   setform({ ...form, experience: e.target.value })
//                 }
//               />
//             </div>

//             {/* ADDRESS */}
//             <div className="form-group full-width">
//               <label>Address</label>
//               <textarea
//                 value={form.address}
//                 onChange={(e) => setform({ ...form, address: e.target.value })}
//                 style={getInputStyle("address")}
//               />
//               {getError("address") && (
//                 <p style={errorStyle}>{getError("address")}</p>
//               )}
//             </div>

//             <button type="submit" className="submit-btn full-width">
//               Sign Up
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signup;
//-----------------------------------------------------------------------------
import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const datas = {
    india: {
      states: {
        Maharashtra: ["Mumbai", "Pune", "Nagpur"],
        Karnataka: ["Bengaluru", "Mysuru", "Mangalore"],
        TamilNadu: ["Chennai", "Coimbatore", "Madurai"],
        Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
        Rajasthan: ["Jaipur", "Udaipur", "Jodhpur"],
        WestBengal: ["Kolkata", "Siliguri", "Durgapur"],
        Punjab: ["Chandigarh", "Amritsar", "Ludhiana"],
        Haryana: ["Gurugram", "Faridabad", "Panipat"],
        Telangana: ["Hyderabad", "Warangal", "Nizamabad"],
        UttarPradesh: ["Lucknow", "Kanpur", "Agra"],
        Bihar: ["Patna", "Gaya", "Bhagalpur"],
        Odisha: ["Bhubaneswar", "Cuttack", "Rourkela"],
      },
    },
    usa: {
      states: {
        California: ["Los Angeles", "San Francisco", "San Diego"],
        NewYork: ["New York City", "Buffalo", "Rochester"],
      },
    },
    germany: {
      states: {
        Bavaria: ["Munich", "Nuremberg", "Augsburg"],
        Berlin: ["Berlin", "Potsdam", "Cottbus"],
      },
    },
  };

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phone: "",
    dob: "",
    address: "",
    country: "",
    state: "",
    city: "",
    gender: "",
    experience: 0,
  });

  const [error, setError] = useState({});

  const errorStyle = {
    color: "#ff4d4f",
    fontSize: "11px",
    marginTop: "4px",
    fontWeight: "500",
  };

  const getInputStyle = (field) => ({
    border: error[field] ? "2px solid #ff4d4f" : "",
  });

  // 🚀 Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    let errorsObj = {};

    if (!form.name) errorsObj.name = "Name is required";
    if (!form.email) errorsObj.email = "Email is required";
    if (!form.password) errorsObj.password = "Password is required";
    if (!form.age) errorsObj.age = "Age is required";
    if (!form.phone) errorsObj.phone = "Phone is required";
    if (!form.dob) errorsObj.dob = "DOB is required";
    if (!form.address) errorsObj.address = "Address is required";
    if (!form.country) errorsObj.country = "Country is required";
    if (!form.state) errorsObj.state = "State is required";
    if (!form.city) errorsObj.city = "City is required";
    if (!form.gender) errorsObj.gender = "Gender is required";

    setError(errorsObj);

    if (Object.keys(errorsObj).length > 0) return;

    console.log("Form Data:", form);
    localStorage.setItem("Signup", JSON.stringify(form));

    alert("Form Submitted Successfully 🔥");

    setform({
      name: "",
      email: "",
      password: "",
      age: "",
      phone: "",
      dob: "",
      address: "",
      country: "",
      state: "",
      city: "",
      gender: "",
      experience: 0,
    });

    setCountry("");
    setState("");
    setCity("");
    setError({});
  };

  return (
    <>
      {/* 🎥 VIDEO */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="form-wrapper">
        <div className="form-container">
          <div className="form-header">
            <h2>Create Account</h2>
            <p>Join us today! Fill in your details below.</p>
          </div>

          <form onSubmit={handleSubmit} className="signup-form">

            {/* NAME */}
            <div className="form-group full-width">
              <label>Full Name</label>
              <input
                value={form.name}
                onChange={(e) =>
                  setform({ ...form, name: e.target.value })
                }
                style={getInputStyle("name")}
              />
              {error.name && <p style={errorStyle}>{error.name}</p>}
            </div>

            {/* EMAIL */}
            <div className="form-group">
              <label>Email</label>
              <input
                value={form.email}
                onChange={(e) =>
                  setform({ ...form, email: e.target.value })
                }
                style={getInputStyle("email")}
              />
              {error.email && <p style={errorStyle}>{error.email}</p>}
            </div>

            {/* PASSWORD */}
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={form.password}
                onChange={(e) =>
                  setform({ ...form, password: e.target.value })
                }
                style={getInputStyle("password")}
              />
              {error.password && <p style={errorStyle}>{error.password}</p>}
            </div>

            {/* AGE */}
            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                value={form.age}
                onChange={(e) =>
                  setform({ ...form, age: e.target.value })
                }
                style={getInputStyle("age")}
              />
              {error.age && <p style={errorStyle}>{error.age}</p>}
            </div>

            {/* PHONE */}
            <div className="form-group">
              <label>Phone</label>
              <input
                value={form.phone}
                onChange={(e) =>
                  setform({ ...form, phone: e.target.value })
                }
                style={getInputStyle("phone")}
              />
              {error.phone && <p style={errorStyle}>{error.phone}</p>}
            </div>

            {/* DOB */}
            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                value={form.dob}
                onChange={(e) =>
                  setform({ ...form, dob: e.target.value })
                }
                style={getInputStyle("dob")}
              />
              {error.dob && <p style={errorStyle}>{error.dob}</p>}
            </div>

            {/* COUNTRY */}
            <div className="form-group">
              <label>Country</label>
              <select
                value={country}
                style={getInputStyle("country")}
                onChange={(e) => {
                  setCountry(e.target.value);
                  setState("");
                  setCity("");
                  setform({
                    ...form,
                    country: e.target.value,
                    state: "",
                    city: "",
                  });
                }}
              >
                <option value="">Select Country</option>
                {Object.keys(datas).map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              {error.country && <p style={errorStyle}>{error.country}</p>}
            </div>

            {/* STATE */}
            <div className="form-group">
              <label>State</label>
              <select
                value={state}
                style={getInputStyle("state")}
                onChange={(e) => {
                  setState(e.target.value);
                  setCity("");
                  setform({
                    ...form,
                    state: e.target.value,
                    city: "",
                  });
                }}
              >
                <option value="">Select State</option>
                {country &&
                  Object.keys(datas[country].states).map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
              </select>
              {error.state && <p style={errorStyle}>{error.state}</p>}
            </div>

            {/* CITY */}
            <div className="form-group">
              <label>City</label>
              <select
                value={city}
                style={getInputStyle("city")}
                onChange={(e) => {
                  setCity(e.target.value);
                  setform({ ...form, city: e.target.value });
                }}
              >
                <option value="">Select City</option>
                {country &&
                  state &&
                  datas[country].states[state].map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
              </select>
              {error.city && <p style={errorStyle}>{error.city}</p>}
            </div>

            {/* GENDER */}
            <div className="form-group">
              <label>Gender</label>
              <div className="radio-options">
                <label>
                  <input
                    type="radio"
                    value="Male"
                    checked={form.gender === "Male"}
                    onChange={(e) =>
                      setform({ ...form, gender: e.target.value })
                    }
                  />
                  Male
                </label>

                <label>
                  <input
                    type="radio"
                    value="Female"
                    checked={form.gender === "Female"}
                    onChange={(e) =>
                      setform({ ...form, gender: e.target.value })
                    }
                  />
                  Female
                </label>
              </div>
              {error.gender && <p style={errorStyle}>{error.gender}</p>}
            </div>

            {/* EXPERIENCE */}
            <div className="form-group">
              <label>Experience: {form.experience} Years</label>
              <input
                type="range"
                min="0"
                max="15"
                value={form.experience}
                onChange={(e) =>
                  setform({ ...form, experience: e.target.value })
                }
              />
            </div>

            {/* ADDRESS */}
            <div className="form-group full-width">
              <label>Address</label>
              <textarea
                value={form.address}
                onChange={(e) =>
                  setform({ ...form, address: e.target.value })
                }
                style={getInputStyle("address")}
              />
              {error.address && <p style={errorStyle}>{error.address}</p>}
            </div>

            <button type="submit" className="submit-btn full-width">
              Sign Up
            </button>

          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;