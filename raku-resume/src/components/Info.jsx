const Info = ({ userInfo, showInfo, setShowInfo }) => {
  const fullName = userInfo.firstName + " " + userInfo.lastName;

  return (
    <div className="generated-resume">
      <div className="result-general-info">
        <h1>{fullName}</h1>
        <p>{userInfo.usrEmail}</p>
        <p>{userInfo.phone}</p>
      </div>

      <div className="results-education">
        <h2>Education</h2>
        <p>
          {userInfo.instName}, {userInfo.ed} in {userInfo.major}
        </p>
        <p>Class of {userInfo.gradDate}</p>
        <h3>Certifications</h3>
        <p>{userInfo.certs}</p>
      </div>

      <div className="results-employment">
        <h2>Most Recent Employment</h2>
        <p>{userInfo.company}</p>
        <p>{userInfo.position}</p>
        <h3>Key Responsibilities</h3>
        <p>{userInfo.resp}</p>
        <p>{userInfo.workDates}</p>
      </div>

      <div className="btn-wrapper">
        <button onClick={() => setShowInfo(!showInfo)}>Edit</button>
      </div>
    </div>
  );
};

export default Info;
