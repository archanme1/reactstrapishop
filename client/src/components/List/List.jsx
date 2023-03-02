import React from "react";
import Card from "../../components/Card/Card";
import useFetch from "../../hooks/useFetch";
import "./List.scss";

const List = ({ catId, maxPrice, subCats, sortting }) => {
  // const data = [
  //   {
  //     id: 1,
  //     title: "somethuing",
  //     img: "https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     img2: "https://images.pexels.com/photos/1105058/pexels-photo-1105058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12,
  //   },

  //   {
  //     id: 2,
  //     title: "another",
  //     isNew: true,
  //     img: "https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     img2: "https://images.pexels.com/photos/1549974/pexels-photo-1549974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     oldPrice: 69,
  //     price: 42,
  //   },
  //   {
  //     id: 3,
  //     title: "don't know",
  //     img: "https://images.pexels.com/photos/1619801/pexels-photo-1619801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     img2: "https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     oldPrice: 29,
  //     price: 21,
  //   },
  //   {
  //     id: 4,
  //     title: "last cart",
  //     img: "https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     img2: "https://images.pexels.com/photos/1374509/pexels-photo-1374509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     oldPrice: 11,
  //     price: 15,
  //   },
  // ];

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:asc`
  );

  // console.log(sortting);

  return (
    <div className="list">
      {error
        ? "something went wrong brother"
        : loading
        ? "Prodicts are loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
