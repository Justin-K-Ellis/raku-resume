import Form from "./Form";

const Main = () => {
  return (
    <div className="outer-container shadow">
      <main>
        <h2>Your Info</h2>
        <p>Tell us about yourself and we'll craft the resume.</p>
        <Form />
      </main>
    </div>
  );
};

export default Main;
