import { useCallback, useEffect, useState } from "react"
import './styles.css'


export default function LoadMoreData() {

    const [loading, setLoading] = useState(true);

    const [products, setProducts] = useState([]);

    const [count, setCount] = useState(0);

    const [disableButton, setDisabledButton] = useState(false);



    async function fetchProducts() {
        try {
            setLoading(true)

            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20
                }`)

            const result = await response.json()

            if (result && result.products && result.products.length) {
                setProducts((prevData) => [...prevData, ...result.products]);
                // setLoading(false);
            }

            console.log(result);

        } catch (error) {
            console.log(error);
            // setLoading(false)
        } finally {
            setLoading(false); // Set loading state to false after fetching data
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [count])

    useEffect(() => {

        if (products && products.length === 100) {
            setDisabledButton(true)
        }
    }, [products])

    if (loading) {
        return <div>Loading Data ! Please wait</div>
    }

    return (
        <div className="load-more-container">
            <div className="product-container">
                {
                    products && products.length ? products.map((item) => (
                        <div
                            className="product"
                            key={item.id}>
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))
                        : 'No Products Found'
                }
            </div>
            <div className="button-container">
                <button disabled={disableButton}
                    onClick={() => setCount(count + 1)}
                >Load More Products</button>
            </div>
            <div className="limit-container">
                {disableButton ? <p>You have reached the limit of 100 products</p> : null}

            </div>

        </div>)
}