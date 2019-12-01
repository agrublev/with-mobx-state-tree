import React from "react";
import SampleComponent from "../components/SampleComponent";
import Link from "next/link";

export default ({ linkTo }) => {
  return (
    <div>
      asd
      <Link href={"/"}>
        <a>Navigate</a>
      </Link>
    </div>
  );
};
