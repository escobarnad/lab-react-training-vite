import { useState } from "react";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = { email, password, nationality };
  };

  function greetings() {
    if (nationality === "de") {
      return `Hallo`;
    } else if (nationality === "en") {
      return `Hello`;
    } else if (nationality === "es") {
      return `Hola`;
    } else if (nationality === "fr") {
      return `Bonjour`;
    }
  }

  return (
    <div>
      <form className="form-outline w-50" onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label className="sr-only">Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group mb-2">
          <label className="sr-only">Password:</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <label className="sr-only">Nationality:</label>
        <select
          className="form-select"
          id="dropdown"
          name="dropdown"
          value={nationality}
          onChange={(event) => setNationality(event.target.value)}
          required
        >
          <option defaultValue></option>
          <option value="en">England</option>
          <option value="de">Germany</option>
          <option value="fr">France</option>
        </select>
        <button className="btn btn-primary mb-2" type="submit">
          Register
        </button>
      </form>
      <p>{greetings()}</p>
      <p>Your email is {email}</p>
    </div>
  );
}

export default SignupPage;
