import React from "react";
import JobFormContainer from "./components/layout/JobFormContainer";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('images/image.webp')] bg-cover bg-center">
      <JobFormContainer />
    </div>
  );
};

export default App;
