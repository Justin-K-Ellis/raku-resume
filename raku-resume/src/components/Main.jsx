import { useState } from "react";

import Form from "./Form";
import Info from "./Info";

const Main = () => {
  const userDataTemplate = {
    firstName: "",
    lastName: "",
    usrEmail: "",
    phone: "",
    ed: "",
    instName: "",
    major: "",
    gradDate: "",
    certs: "",
    company: "",
    position: "",
    resp: "",
    workDates: "",
  };

  const [userInfo, setUserInfo] = useState(userDataTemplate);
  const [showInfo, setShowInfo] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setUserInfo((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  function handleSubmit(e) {
    // e.preventDefaut();  => Todo: figure out what the issue is with this
    // alert(showInfo);
    let nextInfo = !showInfo;
    setShowInfo(nextInfo);
    // alert(nextInfo);
  }

  return (
    <div className="outer-container shadow">
      <main>
        {showInfo ? (
          <Info
            userInfo={userInfo}
            showInfo={showInfo}
            setShowInfo={setShowInfo}
          />
        ) : (
          <>
            <h2>Your Info</h2>
            <p>Tell us about yourself and we'll craft the resume.</p>
            <Form
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              userInfo={userInfo}
            />
          </>
        )}
      </main>
    </div>
  );
};

export default Main;
