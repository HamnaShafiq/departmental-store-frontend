import { useEffect, useState } from "react"
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Categories() {

    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/category/`);
            setCategories(response.data.data);
        } catch (error) {
            console.log("Error in fetching categories", error);
        }
    };

    useEffect(() => {
        fetchCategories()

    }, [])

    return (
        <>
            <div className="container-fluid pt-5">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span
                    className="bg-secondary pr-3">Categories</span></h2>
                <div className="row px-xl-5 pb-3">
                    {categories.map((cat) => {
                        return (
                            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                                {cat.products.length > 0 &&
                                    <a className="text-decoration-none" href="">
                                        <div className="cat-item d-flex align-items-center mb-4">
                                            <div className="overflow-hidden" style={{ width: '100px', height: '100px' }}>
                                                <img className="img-fluid" src="/img/cat-1.jpg" alt="s" />
                                            </div>
                                            <div className="flex-fill pl-3">
                                                <h6>{cat.name}</h6>
                                                <small className="text-body">{cat.products.length} Products</small>
                                            </div>
                                        </div>
                                    </a>
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}