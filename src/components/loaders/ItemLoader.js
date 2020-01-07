import React, { Suspense } from "react";
import {SpinnerItem} from '../Spinner';

const PortfolioItem = React.lazy(() => import("../portfolio/PortfolioItem"));

const ItemLoader = ({ work }) => (
  <>
    <Suspense fallback={<SpinnerItem />}>
      <PortfolioItem work={work} />
    </Suspense>
  </>
);

export default ItemLoader;
