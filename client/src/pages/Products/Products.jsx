import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";

import "./Products.scss";

const Products = () => {
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("");
  const catId = parseInt(useParams().id);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  // console.log(catId);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  console.log(sort);

  // console.log(selectedSubCats);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h3>Product Categories</h3>
          {error
            ? "Something went wrong"
            : loading
            ? "List are loading"
            : data.map((item) => (
                <div className="inputItem" key={item.id}>
                  <input
                    type="checkbox"
                    id={item.id}
                    value={item.id}
                    onChange={handleChange}
                  />
                  <label htmlFor={item.id}>{item?.attributes?.title}</label>
                </div>
              ))}
        </div>
        <div className="filterItem">
          <h3>Filter by price</h3>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h3>Sort by</h3>

          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={() => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={() => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src="https://images.pexels.com/photos/5418930/pexels-photo-5418930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="catImg"
        />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sortting={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  );
};

export default Products;
