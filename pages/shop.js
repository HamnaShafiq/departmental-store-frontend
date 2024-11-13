
import Breadcrumb from "@/components/shop/breadcrumb";
import Sidebar from "@/components/shop/sidebar";
import Products from "@/components/shop/product";

const Shop = () => {
    return (
        <>
           
            <Breadcrumb/>
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <Sidebar/>
                    <Products/>     
                </div>   
            </div>
        </>
    );
}

export default Shop;