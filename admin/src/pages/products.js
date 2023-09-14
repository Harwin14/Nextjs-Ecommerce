import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <Layout>
      <Link className="btn-primary" href={"/products/new"}>
        Add New Product
      </Link>
      <table className="basic mt-2">
        <thead>
          <tr>
            <td>Product name</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>
                <Link
                  className="btn-edit"
                  href={`/products/edit/${product._id}`}
                >
                  <i class="bx bxs-edit"></i>
                  Edit
                </Link>
                <Link
                  className="btn-red"
                  href={`/products/delete/${product._id}`}
                >
                  <i class="bx bxs-trash"></i>
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}
