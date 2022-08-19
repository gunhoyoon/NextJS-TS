import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import ItemList from "../src/components/ItemList/ItemList";
import { DosmeticItems } from "../src/model/dosmeticProduct";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [list, setList] = useState<DosmeticItems>([]);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    axios.get(API_URL).then((res) => setList(res.data));
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <ItemList list={list} />
    </div>
  );
};

export default Home;
