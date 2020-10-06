import { useEffect } from "react";

const useClickOutside = (ref: any, handler?: (...agrs: any) => any) => {
  useEffect(() => {
    const listener = (e: any) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }

      handler && handler(e);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useClickOutside;
