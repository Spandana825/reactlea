// import { useEffect, useState } from "react";

// const useOnlineStatus =()=>{
//     const [onlinestatus,setonlinestatus]=useState(true)
//      useEffect(()=>{
//     window.addEventListener("offline",()=>{
//        setonlinestatus(false)
//     });
//     window.addEventListener("online",()=>{
//         setonlinestatus(true);
//     });
//      },[])
//     return onlinestatus;
// }
// export default useOnlineStatus;
/////////////
import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => {
            console.log("Online");
            setOnlineStatus(true);
        };

        const handleOffline = () => {
            console.log("Offline");
            setOnlineStatus(false);
        };

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        // Cleanup
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    return onlineStatus;
};

export default useOnlineStatus;
