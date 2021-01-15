import Twitter from "../Icons/Twitter"
import Instagram from "../Icons/Instagram"
import Tiktok from "../Icons/Tiktok"

function Footer() {
  return (
    <footer className="m-auto w-full h-1/6 flex flex-nowrap flex-row justify-center border border-red-500">
      <Twitter className="p-4" />
      <Instagram className="p-4" />
      <Tiktok className="p-4" />
    </footer>
  )
}

export default Footer
