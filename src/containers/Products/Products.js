import React, { useEffect, useState } from 'react';

function Products(props) {
    const [product_data, setProduct_data] = useState([]);

    const getData = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json()
        // console.log(data);
        setProduct_data(data);
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            {
                product_data.map((v, i) => (
                    <div>
                        <img src={v.image} width="100px" height="100px" />
                        <h2>{v.title}</h2>
                        <h4>{v.price}</h4>
                    </div>

                ))
            }
        </div>
    );
}

export default Products;