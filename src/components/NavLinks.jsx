import React from 'react';

const NavLinks = ({ children }) => {
   
    return (
        <div className="flex flex-col lg:flex-row items-center gap-2">
            {React.Children.map(children, (child) => {
                
                return React.cloneElement(child, {
                    className: ({ isActive }) => 
                        `${child.props.className} px-4 py-2 transition-all duration-300 font-medium ${
                            isActive 
                            ? "bg-[#CAEB66] text-[#0a3a3a] rounded-full shadow-sm" 
                            : "hover:bg-[#CAEB66]/20 hover:rounded-full text-gray-600 dark:text-gray-300"
                        }`
                });
            })}
        </div>
    );
};

export default NavLinks;