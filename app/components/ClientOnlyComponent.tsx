import React, { useState, useEffect } from "react";

const ClientOnlyComponent = ({ children }: { children: any }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This code runs only in the browser
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Render nothing on the server (during SSR pass)
    return null;
  }

  // Render the actual component content in the browser
  return (
    <>
      {children}
    </>
  );
};

export default ClientOnlyComponent;
