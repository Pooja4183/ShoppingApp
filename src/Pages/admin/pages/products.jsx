import AdminLayout from "../components/AdminLayout";
import ProductForm from "../forms/ProductForm";

const Products = () => {
  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">
          Create Product
        </h2>

        <ProductForm />
      </div>
    </AdminLayout>
  );
};

export default Products;