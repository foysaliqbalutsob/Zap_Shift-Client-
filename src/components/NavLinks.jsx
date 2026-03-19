import React from "react";

const NavLinks = ({ children }) => {
  return (
    <>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        const baseClass = child.props.className ?? "";
        const key = child.key ?? index;

        const clonedLink = React.cloneElement(child, {
          className: ({ isActive }) =>
            `${baseClass} px-4 py-2 transition-all duration-300 font-medium ${
              isActive
                ? "bg-[#CAEB66] text-[#0a3a3a] rounded-full shadow-sm"
                : "hover:bg-[#CAEB66]/20 hover:rounded-full text-gray-600 dark:text-gray-300"
            }`,
        });

        return <li key={key}>{clonedLink}</li>;
      })}
    </>
  );
};

export default NavLinks;
