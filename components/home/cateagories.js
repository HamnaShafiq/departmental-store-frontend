import { useContext } from "react"
import Link from "next/link";
import { ProductCategoryContext } from '@/components/contexts/ProductCategoryContext';

export default function Categories() {

    const { categories } = useContext(ProductCategoryContext);

    return (
        <>
            <div className="container-fluid pt-5">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span
                    className="bg-secondary pr-3">Categories</span></h2>
                <div className="row px-xl-5 pb-3">
                    {categories.map((cat) => {
                        return (
                            (
                                cat.products.length > 0 &&
                                <div key={cat._id} className="col-lg-3 col-md-4 col-sm-6 pb-1">

                                    <Link className="text-decoration-none" href={`/category/${cat.slug}`}>
                                        <div className="cat-item d-flex align-items-center mb-4">
                                           
                                            <div className="flex-fill p-3">
                                                <h6>{cat.name}</h6>
                                                <small className="text-body">{cat.products.length} Products</small>
                                            </div>
                                        </div>
                                    </Link>

                                </div>
                            )
                        )
                    })}
                </div>
            </div>
        </>
    )
}