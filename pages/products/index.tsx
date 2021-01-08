function Product({ products }) {
    // Render
    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>{product.name}</li>
            ))}
        </ul>
    )
}

export async function getStaticProps() {
    // Function gets called at build time
    // Calls external API endpoint to get posts

    const res = await fetch('https://blossomarts-api.herokuapp.com/products')
    const json = await res.json()
    const products = await json.data

    console.log(products)

    // By returning { props: { products }}
    // Product component will receive `products` as a prop during build time

    return {
        props: {
            products,
        },
    }
}

export default Product 