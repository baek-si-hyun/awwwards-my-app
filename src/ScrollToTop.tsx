import  { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  console.log(pathname);


  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    const sendDataToBackend = async () => {
      const data = { pathname: pathname };
      try {
        const response = await fetch("http://localhost:5000/api/visited", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
    
        if (response.ok) {
          console.log("Data sent successfully!");
        } else {
          console.error("Failed to send data.");
        }
      } catch (error) {
        console.error(error);
      }
    };
    sendDataToBackend();
  }, [pathname]);

  return null;
}

export default ScrollToTop;