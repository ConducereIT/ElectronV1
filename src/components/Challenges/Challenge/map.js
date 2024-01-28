import React from "react";

export const DomainList = ({ domains }) => {
  return domains.map(({ id, domain }) => {
    return <h6>{domain}</h6>;
  });
};
