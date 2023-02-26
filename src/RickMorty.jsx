import React, { useState, useEffect } from "react";
import useFetch from "react-fetch-hook";
import Card from "./Card";

import "./style.css";

export default function Rick() {
  //1: Зробити карточку персонажа компонентом <Cart {...item} />

  //2: Реалізувати пошук по інпуту

  const { isLoading, data, error } = useFetch(
    "https://rickandmortyapi.com/api/character?page=2"
  );

  if (error) {
    console.log(error);
  }

  const [out, setOut] = useState();
  const [select, setSelect] = useState([]);

  useEffect(() => {
    let newOption = [];
    data?.results.forEach((item) => newOption.push(item.species));

    let newOptionTwo = new Set(newOption);
    setSelect([...newOptionTwo]);

    setOut(data?.results);
  }, [data?.results]);

  function sortRik(event) {
    let newRick = [];
    if (event.target.value === "all") {
      data?.results.map((item) => newRick.push(item));
    } else {
      data?.results.map(
        (item) => item.species === event.target.value && newRick.push(item)
      );
    }

    setOut(newRick);
  }

  function searchSort(event) {
    let newRick = [];
    data?.results.map(
      (item) =>
        item.name.toLowerCase().includes(event.target.value) &&
        newRick.push(item)
    );

    setOut(newRick);
  }

  return isLoading ? (
    <h2>...isLoading</h2>
  ) : (
    <>
      <section className="rick">
        <h2 className="rick__title">Rick and Morty</h2>
        <div className="rick__search-container">
          <select onChange={sortRik}>
            <option value="all">All</option>
            {select.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
          <input type="text" placeholder="search..." onChange={searchSort} />
        </div>

        <div className="rick__container">
          {out?.map((item) => (
            <Card item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
