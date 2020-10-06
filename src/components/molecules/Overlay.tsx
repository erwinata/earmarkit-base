import React, { useRef } from "react";
import useClickOutside from "utils/useClickOutside";

interface Props {
  onClick: () => void;
}

const Overlay: React.FC<Props> = (props) => {
  const ref = useRef<any>();
  useClickOutside(ref, props.onClick);

  return (
    <div className="fixed h-screen w-screen bg-black bg-opacity-25">
      <div ref={ref} onClick={(e) => e.stopPropagation()}>
        {props.children}
      </div>
    </div>
  );
};

export default Overlay;
