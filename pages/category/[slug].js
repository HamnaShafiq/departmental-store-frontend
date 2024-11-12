import { useEffect, useState, useContext } from "react";
import { useRouter } from 'next/router';
import { useProduct } from '../../components/ProductCategoryContext';
import Breadcrumb from "@/components/shop/breadcrumb";
import Sidebar from "@/components/shop/sidebar";
import Products from "@/components/shop/product";

import { ProductCategoryContext } from '@/components/ProductCategoryContext';


export default function Product() {
    const { fetchCategoryBySlug } = useContext(ProductCategoryContext);
    const router = useRouter();
    const { slug } = router.query;
    const [categoryData, setCategoryData] = useState(null);

    useEffect(() => {
        if (slug) {
            const fetchData = async () => {
                const response = await fetchCategoryBySlug(slug);
                setCategoryData(response.data.data.products)
            };
            fetchData();
        }

    }, [fetchCategoryBySlug, slug]);

    return (
        <>
            <Breadcrumb />
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <Sidebar />
                    <Products categoryData={categoryData} />
                </div>
            </div>
        </>
    );
}
