import React, { Suspense } from "react";

const PortfolioItem = React.lazy(() => import("../PortfolioItem"));

const ItemLoader = ({ work }) => (
  <>
    <Suspense fallback={<div className="loader">Loading...</div>}>
      <PortfolioItem work={work} />
    </Suspense>
  </>
);

export default ItemLoader;
