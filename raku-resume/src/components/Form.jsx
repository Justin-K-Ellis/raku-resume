const Form = () => {
  return (
    <form>
      <section className="general-info info-section">
        <h3>General Info</h3>
        <div className="form-section">
          <label htmlFor="first-name">First name</label>
          <input type="text" id="first-name" name="first-name" />
        </div>
        <div className="form-section">
          <label htmlFor="last-name">Last name</label>
          <input type="text" id="last-name" name="last-name" />
        </div>
        <div className="form-section">
          <label htmlFor="usr-email">Email</label>
          <input type="email" id="usr-email" name="usr-email" />
        </div>
        <div className="form-section">
          <label htmlFor="phone">Phone number</label>
          <input type="text" id="phone" name="phone" />
        </div>
      </section>

      <section className="eduction info-section">
        <h3>Education</h3>
        <div className="form-section">
          <label htmlFor="ed">High level of education</label>
          <input list="edu-types" id="ed" name="ed" />
          <datalist id="edu-types">
            <option value="PhD" />
            <option value="MA" />
            <option value="BA, BS" />
            <option value="Highschool, GED" />
          </datalist>
        </div>
        <div className="form-section">
          <label htmlFor="inst-name">Name of institution</label>
          <input type="text" id="inst-name" name="inst-name" />
        </div>
        <div className="form-section">
          <label htmlFor="grad-date">Graduation date</label>
          <input type="date" id="grad-date" name="grad-date" />
        </div>
        <div className="form-section">
          <label htmlFor="certs">Certifications</label>
          <textarea name="certs" id="certs" cols="30" rows="5"></textarea>
        </div>
      </section>

      <section className="recent-work info-section">
        <h3>Most Recent Employment</h3>
        <div className="form-section">
          <label htmlFor="company">Company</label>
          <input type="text" id="company" name="company" />
        </div>
        <div className="form-section">
          <label htmlFor="position">Position</label>
          <input type="text" id="position" name="position" />
        </div>
        <div className="form-section">
          <label htmlFor="resp">Key responsibilities</label>
          <input type="text" id="resp" name="resp" />
        </div>
        <div className="form-section">
          <label htmlFor="work-dates">Dates</label>
          <textarea
            name="work-dates"
            id="work-dates"
            cols="30"
            rows="5"
          ></textarea>
        </div>
      </section>
      <div className="btn-wrapper">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
