import React from "react";

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

export default Topic;