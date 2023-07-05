import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "./Spinner";
import { ReactSortable } from "react-sortablejs";

export default function ProductForm({
    _id,
    title: existingTitle,
    desc: existingDesc,
    price: existingPrice,
    images: existingImages,
}) {
    const [title, setTitle] = useState(existingTitle || "");
    const [desc, setDesc] = useState(existingDesc || "");
    const [price, setPrice] = useState(existingPrice || "");
    const [images, setImages] = useState(existingImages || []);
    const [goToProducts, setGoToProducts] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { title, desc, price, images };

        if (_id) {
            //update
            await axios.put("/api/products", { ...data, _id });
        } else {
            //create
            await axios.post("/api/products", data);
        }
        setGoToProducts(true);
    };
    if (goToProducts) {
        return router.push("/products");
    }

    const uploadImages = async (e) => {
        const files = e.target?.files;
        if (files?.length > 0) {
            setIsUploading(true);
            const data = new FormData();
            for (const file of files) {
                data.append("file", file);
            }
            const res = await axios.post("/api/upload", data);
            setImages((oldImages) => {
                return [...oldImages, ...res.data.links];
            });
            setIsUploading(false);
        }
    };

    const updateImagesOrder = (images) => {
       setImages(images)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Product Name</label>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Photos</label>
                <div className="mb-2 flex flex-wrap gap-1">
                    <ReactSortable 
                    list={images} 
                    setList={updateImagesOrder}
                    className="flex flex-wrap gap-1"
                    >
                        {!!images?.length &&
                            images.map((link) => (
                                <div key={link} className="h-24">
                                    <img
                                        src={link}
                                        alt="pict"
                                        className="rounded-lg"
                                    />
                                </div>
                            ))}
                    </ReactSortable>
                    {isUploading && (
                        <div className="h-24 flex">
                            <Spinner />
                        </div>
                    )}
                    <label className="cursor-pointer w-24 h-24 text-center flex items-center justify-center text-sm gap-1 text-gray-500 rounded-lg bg-gray-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                            />
                        </svg>
                        <div>Upload</div>
                        <input
                            type="file"
                            className="hidden"
                            onChange={(e) => uploadImages(e)}
                        />
                    </label>
                    {!images?.length && <div>No photos in this Product</div>}
                </div>
                <label>Description</label>
                <textarea
                    placeholder="Description"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                ></textarea>
                <label>Price (in USD)</label>
                <input
                    type="text"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <button type="submit" className="btn-primary">
                    Save
                </button>
            </form>
        </div>
    );
}
