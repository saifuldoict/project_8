import axios from 'axios';
import { useState, useEffect } from 'react';
const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios('../data.json')
            .then(response => {setProducts(response.data)})
            .catch(err => {setError(err)})
            .finally(() => setLoading(false));
    }, []);

    return { products, loading, error };
}
export default useProducts;