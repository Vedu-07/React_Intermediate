import "./App.css";
import { useState } from "react";
function App() {
  // Creating State Variables For Storing Data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  // Setting The Data In State Variables
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  // For Saving The Entered Data
  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally printing the value of Form Data:");
    console.log(formData);
  }


  return (
    // Top Level Div
    <div className="flex flex-col items-center mt-2 w-100">

      <form onSubmit={submitHandler} className="border w-[720px] pt-2">
        {/* For First Name */}
        <div>
        <label htmlFor="firstName" className="ml-7">First name</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Vedant"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline-none border border-gray-300 rounded  focus:border-blue-500 w-[90%] ml-7 h-8"
        />
      {/* For Last Name */}
        <br />
        <label htmlFor="lastName" className="ml-7">Last name</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Swami"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline-none border border-gray-300 rounded  focus:border-blue-500 w-[90%] ml-7 h-8"
        />
      {/* For Email */}
        <br />
        <label htmlFor="email" className="ml-7">Email Address</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="ved@xyz.com"
          value={formData.email}
          onChange={changeHandler}
          className="outline-none border border-gray-300 rounded  focus:border-blue-500 w-[90%] ml-7 h-8"
        />
      {/* Country DropDown Menu */}
        <br />
        <label htmlFor="country" className="ml-7">Country</label>
        <br />
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline-none border border-gray-300 rounded  focus:border-blue-500 w-[90%] ml-7 h-8"
        >
          <option>India</option>
          <option>Japan</option>
          <option>Norway</option>
          <option>CapeTown</option>
        </select>
      {/* For Address */}
        <br />
        <label htmlFor="streetAddress" className="ml-7">Street Address</label>
        <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="SR-2/1"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline-none border border-gray-300 rounded  focus:border-blue-500 w-[90%] ml-7 h-8"
        />
      {/* City */}
        <br />
        <label htmlFor="city" className="ml-7">City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Pune"
          value={formData.city}
          onChange={changeHandler}
          className="outline-none border border-gray-300 rounded  focus:border-blue-500 w-[90%] ml-7 h-8"
        />
      {/* State  */}
        <br />
        <label htmlFor="state" className="ml-7">State / Province</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Maharashtra"
          value={formData.state}
          onChange={changeHandler}
          className="outline-none border border-gray-300 rounded  focus:border-blue-500 w-[90%] ml-7 h-8"
        />
      {/* For Postal Code */}
        <br />
        <label htmlFor="postalCode" className="ml-7">Postal Code</label>
        <br />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="400001"
          value={formData.postalCode}
          onChange={changeHandler}
          className="outline-none border border-gray-300 rounded  focus:border-blue-500 w-[90%] ml-7 h-8"
        />
        </div>
        <hr className="m-5"/>
      {/* Grouping Elements Using Feild Set And Legend */}
        <br />
        <br />
        <fieldset className="ml-7 mt-[-50px]">
          <legend>By Email</legend>

          <div className="flex">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>

          <div className="flex">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className="flex">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>
        <hr className="m-5"/>
      {/* Another Group For Notifications */}
        <br />
        <br />
        <fieldset className="ml-7 mt-[-50px]">
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          <input
            type="radio"
            id="pushEverything"
            name="pushNotifications"
            value="Everything"
            onChange={changeHandler}
          />

          <label htmlFor="pushEverything">Everything</label>

          <br />
          <input
            type="radio"
            id="pushEmail"
            name="pushNotifications"
            value="Same as email"
            onChange={changeHandler}
          />

          <label htmlFor="pushEmail">Same as email</label>

          <br />
          <input
            type="radio"
            id="pushNothing"
            name="pushNotifications"
            value="No Push Notifications"
            onChange={changeHandler}
          />

          <label htmlFor="pushNothing">No Push Notifications</label>
        </fieldset>
        <hr className="m-5"/>
        {/* Save Button */}
        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4 ml-7 m-5">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
