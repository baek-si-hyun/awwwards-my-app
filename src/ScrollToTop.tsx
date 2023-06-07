import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    const sendData = async () => {
      const data = { pathname: pathname };
      try {
        const response = await fetch(
          "https://port-0-awwwards-ec2-server-7xwyjq992lliithryh.sel4.cloudtype.app/api/visited",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        if (response.ok) {
          console.log("ok");
        } else {
          console.log("failed");
        }
      } catch (error) {
        console.error(error);
      }
    };
    sendData();
  }, [pathname]);

  return null;
}

export default ScrollToTop;
