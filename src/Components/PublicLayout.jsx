import React, { useEffect } from "react";

const PublicLayout = ({ children }) => {
  useEffect(() => {
    addClassToBody(["background", "no-footer"]);
  }, []);

  return (
    <div className="h-100">
      <div className="fixed-background" />
      <main>{children}</main>
    </div>
  );
};

export default PublicLayout;
