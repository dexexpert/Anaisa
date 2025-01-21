import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import PendingComponent from "../../Components/ProgressComponents/PendingDeposit";
import ExchangingComponent from "../../Components/ProgressComponents/Exchanging";
import SendingComponent from "../../Components/ProgressComponents/Sending";
import SuccessComponent from "../../Components/ProgressComponents/Success";

// Define a Set of valid statuses
const validStatuses = new Set(["Pending", "Exchanging", "Sending", "Success"]);

const ProgressPage = () => {
  const { depositID } = useParams();
  const [currentStatus, setCurrentStatus] = useState("Pending");
  const location = useLocation(); // Get the entire location object, including query parameters

  // Parse the query string to extract 'status' or use 'awaiting deposit' if it's not present
  useEffect(() => {
    // Validate status before setting
    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get("status") || "Pending";
    if (validStatuses.has(status)) {
      setCurrentStatus(status); // Only set status if it's valid
    }
  }, [location.search, setCurrentStatus]);
  return (
    <div>
      {currentStatus === "Pending" && <PendingComponent depositID = {depositID}/>}
      {currentStatus === "Exchanging" && <ExchangingComponent depositID = {depositID} />}
      {currentStatus === "Sending" && <SendingComponent depositID = {depositID} />}
      {currentStatus === "Success" && <SuccessComponent depositID = {depositID} />}
      {/* You can now fetch or display information based on the depositID */}
    </div>
  );
};

export default ProgressPage;
