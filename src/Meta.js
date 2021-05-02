import React from "react";
import MetaTags from "react-meta-tags";

const Meta = () => {
  return (
    <MetaTags>
      <meta property="og:title" content="Nahuel Gimenez | Web Developer" />
      <meta property="og:image" content="../assets/me-bg.jpg" />
      <meta
        property="og:description"
        content="Personal Website and Portfolio"
      />
      <meta property="og:url" content="//nahueldev.me" />
    </MetaTags>
  );
};

export default Meta;
