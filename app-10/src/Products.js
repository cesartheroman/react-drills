import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Products = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetch(`https://practiceapi.devmountain.com/products/`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) setProductList(data);
      })
      .catch((err) => console.error(err));

    return () => (isMounted = false);
  }, [productList]);

  const products = productList.map((item, idx) => {
    return (
      <Link key={idx} to={`/details/${item.id}`}>
        <img width="200" src={item.image}></img>
      </Link>
    );
  });

  return (
    <div>
      <h1>Products</h1>
      {products}
    </div>
  );
};
