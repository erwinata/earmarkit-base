import React from "react";

//ini komponen loading bisa kalian ganti dengan loading spinner
//lebih mudah pake library misalnya react spinner

const Loading: React.FC<any> = (props) => {
  return (
    <div className="flex justify-center">
      <div className="bg-level-1 text-center px-2 py-2 my-2 w-40">
        Loading...
      </div>
    </div>
  );
};

export default Loading;
