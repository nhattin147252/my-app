import Image from "next/image";
import Link from "next/link";
import styles from "./product.module.css";

export default function Product(props) {
  const {product} = props ;
console.log("RRR", product);

return (
    <div className={styles.product}>
    <Link href={`/${product._id}`}>
    <div className={styles.mainProduct}>

          <div className={styles.hinh}>
           <Image
             src={`/${product.hinh}`}
             alt="Product 1"
             layout="responsive"
             width={110}
             height={110}
            />
            </div>
          <div className={styles.ten}>
            <h5>{product.ten}</h5>
          </div>
          <div className={styles.gia}>
            <strong className={styles.price}>
              {(
                product.gia -
                (product.gia * product.discount) / 100
             )?.toLocaleString("vi-VN")}
               đ
            </strong>
            <span className={styles.discount}>
              <label className={styles.oldPrice}>
                {product.gia.toLocaleString("vi-VN")}đ
              </label>
              <small className={styles.percent}>
                -{product.discount}%
              </small>
            </span>
          </div>
          <div className={styles.conlai}>
            <Image 
            src="/flash-sale.png" 
            alt="Product 1" 
            width={25} 
            height={30} />
            <span>còn {product.conlai}/{product.productTotal} suất</span>
          </div>

      </div>
      </Link>
    <div className={styles.buyButton}>
      <Link href="/giohang">Mua Ngay</Link>
    </div>
  </div>
)


}