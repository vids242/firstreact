import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Spinner } from 'reactstrap';


function Products(props) {
    const [product_data, setProduct_data] = useState([]);
    const [search_data, setSearch_data] = useState("");
    const [sort, setSort] = useState("");
    const [category, setCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [loading, setLoading] = useState(true);



    const getData = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json()
        // console.log(data);
        setProduct_data(data);

        let uniqCategory = [];

        data.map((v) => {
            if (!uniqCategory.includes(v.category)) {
                uniqCategory.push(v.category);
            }
        });
        setCategory(uniqCategory);
        setLoading(false);

        // console.log(category);

    }

    useEffect(() => {
        getData()
    }, [])


    // console.log(search_data);
    const hendalsearch = () => {
        let fdata = product_data.filter((v) => (
            v.title.toLowerCase().includes(search_data.toLowerCase())
        ))

        fdata.sort((a, b) => {
            if (sort === "lh") {
                return a.price - b.price
            } else if (sort === "hl") {
                return b.price - a.price
            } else if (sort === "az") {
                return a.title.localeCompare(b.title)
            } else if (sort === "za") {
                return b.title.localeCompare(a.title)
            }
        })

        // console.log(category);
        // console.log(selectedCategory);
        if (selectedCategory) {
            fdata = fdata.filter((v) => v.category === selectedCategory)
        }
        // console.log(fdata);

        return fdata
    }

    const final_data = hendalsearch()

    return (
        <div className="container">
            {
                loading ? (
                    <div className="text-center align-item mt-5">
                        <Spinner color="black" type="grow" style={{ width: "3rem", height: "3rem" }} />
                        <p>Loading...</p>
                    </div>
                ) : (
                    <div className="row">
                        <h2 className="text-center"> Product </h2>

                        <div className="mb-3">
                            <input
                                className='search'
                                type="text"
                                placeholder="Search..."
                                value={search_data}
                                onChange={(event) => setSearch_data(event.target.value)}
                            />
                            <select className='selectsort' name='sort' onChange={(event) => setSort(event.target.value)}>
                                <option value={""}>----Select Sort ----</option>
                                <option value={"lh"}>Price : Low to High </option>
                                <option value={"hl"}>Price : High to Low </option>
                                <option value={"az"}>Filter : A to Z </option>
                                <option value={"za"}>Filter : Z to A </option>

                            </select>
                        </div>
                        <div >
                            <Button onClick={() => setSelectedCategory("")}
                                color="success"
                                outline
                                style={{ color: selectedCategory === "" ? "white" : "#757575", background: selectedCategory === "" ? "green" : "none" }}

                            >all</Button>
                            {category.map((v) => (
                                <Button className='catogory'
                                    outline
                                    style={{ color: selectedCategory === v ? "white" : "#757575", background: selectedCategory === v ? "green" : "none" }}
                                    onClick={() => setSelectedCategory(v)}
                                >
                                    {v}
                                </Button>
                            ))}
                        </div>


                        {final_data.map((v) => (
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
                )
            }

        </div>
    );
}

export default Products;