import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import SweetAlert2 from "react-sweetalert2";

const Categories = ({ swal }) => {
    const [name, setName] = useState("");
    const [parentCategory, setParentCategory] = useState("");
    const [categories, setCategories] = useState([]);
    const [editedCategory, setEditedCategory] = useState(null);
    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = () => {
        axios.get("/api/categories").then((result) => {
            setCategories(result.data);
        });
    };

    const saveCategory = async (e) => {
        e.preventDefault();
        const data = { name, parentCategory };

        if (editedCategory) {
            data._id = editedCategory._id;
            await axios.put(`/api/categories`, data);
            setEditedCategory(null);
        } else {
            await axios.post("/api/categories", data);
        }
        setName("");
        setParentCategory("");
        fetchCategories();
    };

    const editCategory = (category) => {
        setEditedCategory(category);
        setName(category.name);
        setParentCategory(category.parent?._id);
    };

    const deleteCategory = (category) => {
        swal.fire({
            title: "Example",
            text: "Hello World",
            didOpen: () => {
                // run when swal is opened...
            },
            didClose: () => {
                // run when swal is closed...
            },
        })
            .then((result) => {
                // when confirmed and promise resolved...
            })
            .catch((error) => {
                // when promise rejected...
            });
    };
    return (
        <Layout>
            <h1>Categories</h1>
            <label>
                {editedCategory
                    ? `Edit Category ${editedCategory.name}`
                    : "Create new category"}
            </label>
            <form onSubmit={saveCategory} className="flex gap-1">
                <input
                    className="mb-0"
                    type="text"
                    placeholder={"Category name"}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <select
                    className="mb-0"
                    value={parentCategory}
                    onChange={(e) => setParentCategory(e.target.value)}
                >
                    <option value="">No parent category</option>
                    {categories.length > 0 &&
                        categories.map((category) => (
                            <option key={category._id} value={category._id}>
                                {category.name}
                            </option>
                        ))}
                </select>
                <button type="submit" className="btn-primary py-1">
                    Save
                </button>
            </form>
            <table className="basic mt-4">
                <thead>
                    <tr>
                        <td>Category name</td>
                        <td>Parent category</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {categories.length > 0 &&
                        categories.map((category, index) => (
                            <tr key={index}>
                                <td>{category.name}</td>
                                <td>{category?.parent?.name}</td>
                                <td>
                                    <button
                                        onClick={() => editCategory(category)}
                                        className="btn-primary mr-1"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteCategory(category)}
                                        className="btn-primary"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </Layout>
    );
};

const withSwal = ({ swal }, ref) => <Categories />;

export default withSwal;
