import { useEffect, useState } from "react"

const useProductsFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const ProductDataUrl = "/products.json"

    useEffect(() => {
        const fetchData = async () => {
            await fetch(ProductDataUrl)
                .then(res => res.json())
                .then(data => setData(data))
                .catch(error => {
                    setError(error.message)
                });
            setLoading(false)
        }
        fetchData()
    }, [ProductDataUrl]);
    console.log(data)
    return { data, loading, error }

}
export default useProductsFetch;