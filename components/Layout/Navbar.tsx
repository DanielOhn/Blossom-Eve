import Link from "next/link"

function Navbar() {
  return (
    <div className="m-auto p-4 h-2/6 w-full border border-red-500">
      <ul className="flex flex-row flex-nowrap justify-center">
        <li>
          <Link href="/">
            <a className="p-6">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <a>Products</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
