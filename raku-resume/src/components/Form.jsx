const Form = ({ handleSubmit, handleChange, userInfo }) => {
  return (
    <form onSubmit={handleSubmit}>
      {/* <p>Full name: {userInfo.firstName + " " + userInfo.lastName}</p> */}
      <section className="general-info info-section">
        <h3>General Info</h3>
        <div className="form-section">
          <label htmlFor="first-name">First name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={userInfo.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-section">
          <label htmlFor="last-name">Last name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={userInfo.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-section">
          <label htmlFor="usr-email">Email</label>
          <input
            type="email"
            id="usrEmail"
            name="usrEmail"
            value={userInfo.usrEmail}
            onChange={handleChange}
          />
        </div>
        <div className="form-section">
          <label htmlFor="phone">Phone number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={userInfo.phone}
            onChange={handleChange}
          />
        </div>
      </section>

      <section className="eduction info-section">
        <h3>Education</h3>
        <div className="form-section">
          <label htmlFor="ed">High level of education</label>
          <input
            list="edu-types"
            id="ed"
            name="ed"
            value={userInfo.ed}
            onChange={handleChange}
          />
          <datalist id="edu-types">
            <option value="PhD" />
            <option value="MA" />
            <option value="BA" />
            <option value="BS" />
            <option value="Highschool, GED" />
          </datalist>
        </div>
        <div className="form-section">
          <label htmlFor="instName">Name of institution</label>
          <input
            type="text"
            id="instName"
            name="instName"
            value={userInfo.instName}
            onChange={handleChange}
          />
        </div>
        <div className="form-section">
          <label htmlFor="major">Major/Specialization</label>
          <input
            type="text"
            id="major"
            name="major"
            value={userInfo.major}
            onChange={handleChange}
          />
        </div>
        <div className="form-section">
          <label htmlFor="gradDate">Year of graduation</label>
          <input
            type="number"
            id="gradDate"
            name="gradDate"
            value={userInfo.gradDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-section">
          <label htmlFor="certs">Certifications</label>
          <textarea
            name="certs"
            id="certs"
            cols="30"
            rows="5"
            value={userInfo.certs}
            onChange={handleChange}
          ></textarea>
        </div>
      </section>

      <section className="recent-work info-section">
        <h3>Most Recent Employment</h3>
        <div className="form-section">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={userInfo.company}
            onChange={handleChange}
          />
        </div>
        <div className="form-section">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            name="position"
            onChange={handleChange}
          />
        </div>
        <div className="form-section">
          <label htmlFor="resp">Key responsibilities</label>
          <textarea
            // type="text"
            id="resp"
            name="resp"
            cols="30"
            rows="5"
            value={userInfo.resp}
            onChange={handleChange}
          />
        </div>
        <div className="form-section">
          <label htmlFor="work-dates">Dates</label>
          <input
            name="workDates"
            id="workDates"
            value={userInfo.workDates}
            onChange={handleChange}
          ></input>
        </div>
      </section>
      <div className="btn-wrapper">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
