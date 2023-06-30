import React from "react";
import "./style.css";

export default function BreadCrumps({
  pageLink,
  pageName,
}: {
  pageLink: string;
  pageName: string;
}) {
  return (
    <div className="breadCrumps">
      <a href="/">{`Home > `}</a>
      <a href={pageLink}>{pageName}</a>
    </div>
  );
}
