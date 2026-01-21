import Footer from "../Components/Footer";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { productSchema } from "../Components/ProductSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { uploadProductRequest } from "../Redux/uploadProduct/productUploadActions";

const AdminProductForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(productSchema) });

  const onSubmit = (data) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === "images") return;
      formData.append(key, value);
    });

    if (data.images && data.images.length > 0) {
      for (const file of data.images) {
        formData.append("images", file);
      }
    }

    dispatch(uploadProductRequest(formData));
    reset();
  };

  return (
    <>
      <div className="max-w-4xl mx-auto mt-10">
        <div className="bg-white shadow-lg rounded-xl border p-8">
          <h3 className="text-2xl font-bold mb-6 border-b pb-3 text-gray-800">
            Add New Product
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Title */}
            <div>
              <label className="block mb-1 font-medium">Title</label>
              <input
                type="text"
                {...register("title")}
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
              />
              <p className="text-red-500 text-sm">{errors.title?.message}</p>
            </div>

            {/* Price */}
            <div>
              <label className="block mb-1 font-medium">Price</label>
              <input
                type="number"
                {...register("price")}
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
              />
              <p className="text-red-500 text-sm">{errors.price?.message}</p>
            </div>

            {/* Description (full width) */}
            <div className="md:col-span-2">
              <label className="block mb-1 font-medium">Description</label>
              <textarea
                {...register("description")}
                rows="3"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
              />
              <p className="text-red-500 text-sm">{errors.description?.message}</p>
            </div>

            {/* Brand */}
            <div>
              <label className="block mb-1 font-medium">Brand</label>
              <select
                {...register("brand")}
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
              >
                <option value="">Select brand</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Nike">Nike</option>
                <option value="Adidas">Adidas</option>
              </select>
              <p className="text-red-500 text-sm">{errors.brand?.message}</p>
            </div>

            {/* Category */}
            <div>
              <label className="block mb-1 font-medium">Category</label>
              <select
                {...register("category")}
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
              >
                <option value="">Select category</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Sports">Sports</option>
                <option value="Home">Home</option>
              </select>
              <p className="text-red-500 text-sm">{errors.category?.message}</p>
            </div>

            {/* Color */}
            <div>
              <label className="block mb-1 font-medium">Color</label>
              <select
                {...register("color")}
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
              >
                <option value="">Select color</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Blue">Blue</option>
                <option value="Red">Red</option>
              </select>
              <p className="text-red-500 text-sm">{errors.color?.message}</p>
            </div>

            {/* Images (full width) */}
            <div className="md:col-span-2">
              <label className="block mb-1 font-medium">Images</label>
              <input
                type="file"
                {...register("images")}
                multiple
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
              />
              <p className="text-red-500 text-sm">{errors.images?.message}</p>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Upload Product
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AdminProductForm;
