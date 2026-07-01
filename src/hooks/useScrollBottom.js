import { useEffect, useState } from "react";

function useScrollBottom() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const isBottom =
        scrollTop + windowHeight >= documentHeight - 5; // 5px tolerance

      setHide(isBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return hide;
}

export default useScrollBottom;