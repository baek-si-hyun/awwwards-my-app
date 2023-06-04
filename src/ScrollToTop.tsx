import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  console.log(pathname);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    const sendData = async () => {
      const data = { pathname: pathname };
      try {
        const response = await fetch("http://localhost:5000/api/visited", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        console.log(response.ok);
      } catch (error) {
        console.error(error);
      }
    };
    sendData();
  }, [pathname]);

  return null;
}

export default ScrollToTop;
