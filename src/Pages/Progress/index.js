import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import service from '../../features/service';
import PendingComponent from "../../Components/ProgressComponents/PendingDeposit";
import ExchangingComponent from "../../Components/ProgressComponents/Exchanging";
import SendingComponent from "../../Components/ProgressComponents/Sending";
import FinishComponent from "../../Components/ProgressComponents/Finish";

// Define a Set of valid statuses
const validStatuses = new Set(["waiting", "exchanging", "sending", "finished"]);

const ProgressPage = () => {
  const { depositID } = useParams();
  const [currentStatus, setCurrentStatus] = useState("waiting");
  const [transactionStatus, setTransactionStatus] = useState();
  const [intervalID, setIntervalID] = useState(null);

  
  useEffect(() => {
    if(depositID){
      service.getTransactionStatusWithAxios(depositID).then((result) => {
      if(!result.error)
        setTransactionStatus(result);
        setCurrentStatus(result.status)
      }).catch(err => console.log(err))
    }
    const intervalid = setInterval(() => {
      if(depositID){
        service.getTransactionStatusWithAxios(depositID).then((result) => {
        if(!result.error)
          setTransactionStatus(result);
          setCurrentStatus(result.status)
        }).catch(err => console.log(err))
      }
    }, 20000); // Runs every 20 second
    setIntervalID(intervalid);
    return () => clearInterval(intervalid); // Cleanup on unmount
  }, []);

  useEffect(() => {
    if(currentStatus === "finished") {
      clearInterval(intervalID);
    }
  }, [currentStatus, intervalID])

  return (
    <div>
      {currentStatus === "waiting" && <PendingComponent depositID = {depositID} transactionStatus={transactionStatus} />}
      {currentStatus === "exchanging" && <ExchangingComponent depositID = {depositID} transactionStatus={transactionStatus} />}
      {currentStatus === "sending" && <SendingComponent depositID = {depositID} transactionStatus={transactionStatus}/>}
      {currentStatus === "finished" && <FinishComponent depositID = {depositID} transactionStatus={transactionStatus}/>} 
     {/* You can now fetch or display information based on the depositID */}
    </div>
  );
};

export default ProgressPage;
