import Image from "next/image";
import styles from "./footer.module.css";



export function Footer() {
    return (
   
     <div className={styles.item3}>
        <footer className={styles.footer}>
         <section className={styles.footerSection}>
           <div>
             <h5>Tổng Đài Hỗ Trợ</h5>
             <ul>
               <li>Gọi mua: 1900 232 461 (8:00 - 21:30)</li>
               <li>Khiếu nại: 1800.1063 (8:00 - 21:30)</li>
               <li>Gọi mua: 1900 232 461 (8:00 - 21:30)</li>
             </ul>
           </div>
           <div>
             <h5>Về Công Ty</h5>
             <ul>
               <li>Giới thiệu công ty (MWG.vn)</li>
               <li>Tuyển dụng</li>
               <li>Gửi góp ý, khiếu nại</li>
               <li>Tìm siêu thị (2961 shop)</li>
             </ul>
           </div>
           <div>
             <h5>Thông Tin Khác</h5>
             <ul>
               <li>Tích điểm Quà tặng</li>
               <li>Lịch sử mua hàng</li>
               <li>Đăng ký bán hàng CTV chiết khấu cao</li>
               <li>Tìm hiểu về mua trả chậm</li>
               <li>Xem thêm v</li>
             </ul>
           </div>
           <div>Website Cùng Tập Đoàn</div>
         </section>
         <div className={styles.copyright}>
         © 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH & ĐT TP.HCM cấp ngày 02/01/2007. GPMXH: 21/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 11/01/2021.
 Địa chỉ: 128 Trần Quang Khải, P.Tân Định, Q.1, TP.Hồ Chí Minh. Địa chỉ liên hệ và gửi chứng từ: Lô T2-1.2, Đường D1, Đ. D1, P.Tân Phú, TP.Thủ Đức, TP.Hồ Chí Minh. Điện thoại: 028 38125960. Email: cskh@thegioididong.com. Chịu trách nhiệm nội dung: Huỳnh Văn Tốt. Email: hotrotmdt@thegioididong.com. Xem chính sách sử dụng
         </div>
        </footer>
         </div>

    );
}