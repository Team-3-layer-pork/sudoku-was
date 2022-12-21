import React, { useEffect, useState } from "react";

import Header from "./Header";
import { Link, Outlet } from "react-router-dom";
import Test from "./Test";
import Test2 from "./Test2";

function Main() {
  return (
    <>
      <h3>안녕하세요. 메인페이지 입니다.</h3>
      <ul>
        <Link to={"test1"}>
          <li>Test1</li>
        </Link>
        <Link to={"/test2"}>
          <li>Test2</li>
        </Link>
      </ul>
    </>
  );
}

export default Main;
