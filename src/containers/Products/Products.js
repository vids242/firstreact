import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function Products(props) {
    const [product_data, setProduct_data] = useState([]);
    const [search_data, setSearch_data] = useState("");

    const getData = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json()
        // console.log(data);
        setProduct_data(data);
    }

    useEffect(() => {
        getData()
    }, [])

    const hendalSearch = (event) => {
        console.log(event);
        setSearch_data(event.target.value);
        //  console.log(search_data);
    };
    // console.log(search_data);

    const Filter_data = product_data.filter((v) =>
        v.title.includes(search_data)
    );

    // console.log(Filter_data.title);
    return (
        <div className="container">
            <div className="row">
                <h2 className="text-center"> Product </h2>
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search_data}
                        onChange={hendalSearch}
                    />
                </div>
                {product_data.map((v) => (
                    <div className="col-md-4 gy-4">
                        <Card
                            style={{
                                width: "18rem",
                            }}
                        >
                            <img alt="Sample" src={v.image} height={"200px"} />
                            <CardBody>
                                <CardTitle tag="h5">{v.title.length > 20 ? v.title.substring(0, 20) + "..." : v.title}</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6" >
                                   $ {v.price}
                                </CardSubtitle>
                                <CardText>{v.description.length > 50 ? v.description.substring(0, 50) + "..." : v.description}</CardText>
                                <Button color="success" outline>
                                    Add To Cart
                                </Button>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;