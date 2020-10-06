import React from "react";

const NotFound: React.FC<any> = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center py-20">
        <h1 className="text-3xl font-bold">404</h1>
        <h2 className="text-xl font-semibold">Not Found</h2>
      </div>
    </div>
  );
};

export default NotFound;
