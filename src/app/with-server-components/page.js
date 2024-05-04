import Product from "./Product";

export default function ProductPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-5xl tracking-tighter text-center">awesome store</h1>
      <Product id={1} />
    </div>
  );
}
