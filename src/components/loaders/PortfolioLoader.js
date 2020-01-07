import React, { Suspense } from "react";
import {Spinner} from "../Spinner";

const PortfolioPage = React.lazy(() => import("../portfolio/PortfolioPage"));

const PortfolioLoader = ({ navState }) => (
  <div>
    <Suspense fallback={<Spinner />}>
      <PortfolioPage navState={navState} />
    </Suspense>
  </div>
);

export default PortfolioLoader;
