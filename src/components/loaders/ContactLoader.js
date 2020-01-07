import React, { Suspense } from "react";
import {Spinner} from "../Spinner";

const ContactPage = React.lazy(() => import("../ContactPage"));

const ContactLoader = ({ navState }) => (
  <div>
    <Suspense fallback={<Spinner />}>
      <ContactPage navState={navState} />
    </Suspense>
  </div>
);

export default ContactLoader;
