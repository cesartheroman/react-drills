import React, { useState, useEffect } from 'react';

export const Details = (props) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    let isMounted = true;

    fetch(
      `https://practiceapi.devmountain.com/products/${props.match.params.id}`
    )
      .then((res) => res.json())
      .then((item) => {
        if (isMounted) setItem(item);
      })
      .catch((err) => console.error(err));

    return () => (isMounted = false);
  }, []);

  return (
    <div>
      <h1>{item.title}</h1>
      <img width="200" src={item.image} />
      <h1>Price ${item.price}.00</h1>
    </div>
  );
};
