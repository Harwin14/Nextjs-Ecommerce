import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeleteProductPage() {
    const [productInfo, setProductInfo] = useState([]);
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        if (!id) {
            return;
        } else {
            axios.get(`/api/products?id=${id}`).then((response) => {
                setProductInfo(response.data);
            });
        }
    }, [id]);
    const goBack = () => {
        router.push("/products");
    };
    const deleteProduct = async () => {
        await axios.delete(`/api/products?id=${id}`);
        goBack();
    };
    return (
        <Layout>
            <h1 className="text-center">
                Do you really want to delete &nbsp;"{productInfo.title}" ?
            </h1>
            <div className="flex gap-2 justify-center">
                <button onClick={deleteProduct} className="btn-red">
                    Yes
                </button>
                <button className="btn-default" onClick={goBack}>
                    No
                </button>
            </div>
        </Layout>
    );
}
