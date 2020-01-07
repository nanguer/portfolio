import React, { Suspense } from "react";
import {Spinner} from '../Spinner';


const Landing = React.lazy(() => import("../Landing"));

const LandingLoader = ({ navState }) => (
  <div>
    <Suspense
      fallback={<Spinner />}
    >
      <Landing navState={navState} />
    </Suspense>
  </div>
);

export default LandingLoader;
