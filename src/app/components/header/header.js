import Image from "next/image";
import styles from "./header.module.css";
import Link  from "next/link";


export function Header() {
    return (
<div className={styles.header}>
<nav className={styles.nav}>
  <ul>
    <li>
      <Link href="/"> Trang Chủ </Link>
      </li>
    <li>
    <Link href="/"> Về Chúng Tôi</Link>
    </li>
    <li>
    <Link href="/"> Liên Hệ </Link>
    </li>
    <li>
    <Link href="/"> Góp Ý</Link>
    </li>
  </ul>
</nav>
<div>
    <Image src="/meo123.png" alt="" width={80} height={80}/>
</div>
</div>

    );
}
