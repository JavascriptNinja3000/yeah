import Link from "next/link";
import Image from "next/image";

import Menu from "../public/images/header/menu.png";
import Account from "../public/images/header/account.png";
import Bell from "../public/images/header/bell.png";
import wiZe from "../public/images/header/wiZe.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-2 border">
      <div>
        <Link href="/">
          <Image src={wiZe} alt="wiZe" />
        </Link>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <Image src={Bell} alt="Bell Notification" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image src={Account} alt="Account" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image src={Menu} alt="Menu" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
