import { useState } from "react";
import profilesJSON from "../data/berlin.json";

function FaceBook() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [profiles, setProfiles] = useState(profilesJSON);

  const handleClick = (country) => {
    setSelectedCountry(country);
  };

  const handleSortName = () => {
    const sortedProfiles = profiles.toSorted((a, b) => {
      if (a.lastName < b.lastName) {
        return -1;
      }
      if (a.lastName > b.lastName) {
        return 1;
      }
      return 0;
    });
    setProfiles(sortedProfiles);
  };

  return (
    <div>
      <button onClick={() => handleClick("England")}>England</button>
      <button onClick={() => handleClick("USA")}>USA</button>
      <button onClick={() => handleClick("Malaysia")}>Malaysia</button>
      <button onClick={() => handleClick("Germany")}>Germany</button>
      <button onClick={() => handleClick("Sweden")}>Sweden</button>
      <button onClick={() => handleClick("Nigeria")}>Nigeria</button>
      <button onClick={() => handleClick("Italy")}>Italy</button>
      <button onClick={() => handleClick("Scotland")}>Scotland</button>
      <button onClick={() => handleClick("Kazakhstan")}>Kazakhstan</button>
      <button onClick={() => handleClick("Russia")}>Russia</button>
      <button onClick={() => handleClick("Catalonia")}>Catalonia</button>
      <button onClick={() => handleClick("France")}>France</button>
      <button onClick={() => handleClick("Israel")}>Israel</button>
      <button onClick={() => handleClick("Brazil")}>Brazil</button>
      <button onClick={() => handleClick("Taiwan")}>Taiwan</button>
      <button onClick={() => handleClick("Turkey")}>Turkey</button>
      <button onClick={() => handleClick("Norway")}>Norway</button>
      <br />
      <button onClick={() => handleSortName()}>Sorted A - Z</button>

      {profiles.map((eachProfile, index) => (
        <div
          key={index}
          className="profile"
          style={{
            background:
              eachProfile.country === selectedCountry ? "lightblue" : "white",
          }}
        >
          <img src={eachProfile.img} alt="profile picture" height="150 px" />
          <div className="profile-details">
            <p>
              <strong>First name:</strong> {eachProfile.firstName}
            </p>
            <p>
              <strong>Last name:</strong> {eachProfile.lastName}
            </p>
            <p>
              <strong>Country:</strong> {eachProfile.country}
            </p>
            <p>
              <strong>Type:</strong>{" "}
              {eachProfile.isStudent ? "Student" : "Teacher"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FaceBook;
