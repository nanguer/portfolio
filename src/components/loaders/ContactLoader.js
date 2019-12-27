import React, { Suspense } from "react";

const ContactPage = React.lazy(() => import("../ContactPage"));

const ContactLoader = ({ navState }) => (
  <div>
    <Suspense fallback={<div className="loader">Loading...</div>}>
      <ContactPage navState={navState} />
    </Suspense>
  </div>
);

export default ContactLoader;
