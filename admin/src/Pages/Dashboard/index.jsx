import React from "react";
import DashboardBoxes from "../../Components/DasboardBoxes";

const Dashboard =()=>{
    return(
        <>
        <div className="w-full p-5 border border-[rgba(0,0,0,0.1)] flex items-center gp-8 mb-5 justify-between rounded-md">
            <div className="info">
                <h1 className="text-[35px] font-bold leading-10 mb-3">Good Morning,<br />Cameron</h1>
                <p>Here's Whats happening on your store today. See the statistics at once.</p>
            </div>

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5vHj-vSbynrZTu_jmsQC2Tuyb3E-UYOTNRA&s" className="w-[300px]" />
        </div>
        <DashboardBoxes/>
        </>
    )
}

export default Dashboard;
