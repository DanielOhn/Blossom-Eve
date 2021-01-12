import Link from "next/link"
import Image from 'next/image'

function Navbar() {
  return (
    <div className="m-auto p-4 h-auto w-full border border-red-500">
      <div className="flex flex-row flex-nowrap justify-center">
        <Image className="p-16 m-auto" src="/logo.png" alt="Blossom By Eve Logo" width={180} height={180} />
      </div>
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
