import { useState, useEffect } from "react";
import {
  fetchCategories,
  fetchBrands,
  fetchColors,
  createProduct,
} from "../../../api/admin.api";

const ProductForm = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    brand: "",
    color: "",
    images: [],
  });

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  // 🔥 Fetch dropdown data
  useEffect(() => {
    const loadData = async () => {
      try {
        const [catRes, brandRes, colorRes] = await Promise.all([
          fetchCategories(),
          fetchBrands(),
          fetchColors(),
        ]);
console.log("fetched category:",catRes.data);
        setCategories(catRes.data.data || catRes.data);
        setBrands(brandRes.data.data || brandRes.data);
        setColors(colorRes.data.data || colorRes.data);
         console.log("Categories:: ", categories)
      } catch (err) {
        console.error("Dropdown fetch error:", err);
      }
    };

    loadData();
  }, []);

  // 🔹 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Handle image upload + preview
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    setForm((prev) => ({ ...prev, images: files }));

    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
  };

  // 🔹 Submit form
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();

    // 👇 explicit mapping (simple & clear)
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("price", form.price);
    formData.append("category", form.category);
    formData.append("brand", form.brand);
    formData.append("color", form.color);

    // 👇 multiple images
    form.images.forEach((file) => {
      formData.append("images", file);
    });

    // 👇 DIRECT API CALL (no abstraction confusion)
    const res = await fetch("http://localhost:5000/api/products", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    console.log("SUCCESS:", data);
    alert("Product Created Successfully");

  } catch (err) {
    console.error("ERROR:", err);
    alert("Error creating product");
  }
};

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Title */}
      <input
        type="text"
        name="title"
        placeholder="Product Title"
        value={form.title}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      {/* Description */}
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      {/* Price */}
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      {/* Category Dropdown */}
      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.categoryName} 
          </option>
        ))}
      </select>

      {/* Brand Dropdown */}
      <select
        name="brand"
        value={form.brand}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option value="">Select Brand</option>
        {brands.map((b) => (
          <option key={b._id} value={b._id}>
            {b.brandName}
          </option>
        ))}
      </select>

      {/* Color Dropdown */}
      <select
        name="color"
        value={form.color}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option value="">Select Color</option>
        {colors.map((c) => (
          <option key={c._id} value={c._id}>
             {c.colorName}
          </option>
        ))}
      </select>

      {/* Image Upload */}
      <input
        type="file"
        multiple
        onChange={handleImageUpload}
        className="w-full"
      />

      {/* Image Preview */}
      <div className="flex gap-2 flex-wrap">
        {previewImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="preview"
            className="w-20 h-20 object-cover rounded border"
          />
        ))}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded hover:opacity-80"
      >
        Create Product
      </button>
    </form>
  );
};

export default ProductForm;