import React, { Suspense } from "react";

const PortfolioItem = React.lazy(() => import("../PortfolioItem"));

const ItemLoader = ({ work }) => (
  <div>
    <Suspense fallback={<div className="loader">Loading...</div>}>
      <PortfolioItem work={work} />
    </Suspense>
  </div>
);

export default ItemLoader;
