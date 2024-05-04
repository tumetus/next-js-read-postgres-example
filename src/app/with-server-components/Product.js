import { sql } from "@vercel/postgres";

const getProduct = async (id) => {
  const product = await sql`select * from products where id = ${id}`;

  return product.rows.length > 0 ? product.rows[0] : null;
};

export default async function Product(props) {
  const data = await getProduct(props.id);
  return (
    <section className="w-100 py-6 md:py-12 lg:py-16">
      <div className="container grid items-start gap-8 lg:grid-cols-1 px-4 md:px-6">
        <img
          alt="Product Image"
          className="aspect-[1/1] object-cover object-center rounded-lg"
          height="500"
          src={data.image}
          width="500"
        />
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter">{data.name}</h1>
          <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            {data.price} EUR
          </p>
          <p className="text-base text-zinc-500 dark:text-zinc-400">
            {data.description}
          </p>
          <button className="w-full h-12 rounded-md bg-zinc-900 text-zinc-50 shadow-sm dark:bg-zinc-50 dark:text-zinc-900">
            Add to Cart
          </button>
          <p className="text-xs text-zinc-400">{data.additional_info}</p>
        </div>
      </div>
    </section>
  );
}
