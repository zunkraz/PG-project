import React, {useEffect} from "react";
import SchedulerCancel from "./SchedulerCancel";
import SchedulerRecurrent from "./SchedulerRecurrent";

export default function SchedulerCont ({userId}){
    
    useEffect(() => {
        window.scrollTo(0, 0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className="padd-lg bg-color-light border-color-dark-a20 border-radius-sm box-shadow-xs normalize">
            <SchedulerRecurrent userId={userId}/>
            <SchedulerCancel userId={userId}/>
        </div>
    )
}