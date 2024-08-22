import React from 'react';
import { IoMdHome } from "react-icons/io";
import { GiPapers } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

function Sidebar() {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0
                        flex flex-col bg-gray-900 text-white shadow-lg">
            <SideBarIcon icon={<IoMdHome size="30"/>} />
            <SideBarIcon icon={<GiPapers size="23"/>} />
            <SideBarIcon icon={<FaUser size="23"/>} />
            <SideBarIcon icon={<SiMinutemailer size="23"/>} />
        </div>
    );
};

const SideBarIcon = ({icon}) => (
    <div className="sidebar-icon group">
        {icon}
    </div>
);



export default Sidebar;
