/** Custom hook to find the status of user if online or offline */
import { useState, useEffect } from "react";
const useStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));
  }, []);

  return isOnline;
};

export default useStatus;