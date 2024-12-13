import { Layout, theme } from 'antd';
import styles from './FooterLayout.module.scss';

const { Footer } = Layout;

function FooterLayout() {
    const { token } = theme.useToken();

    return (
        <Footer className={styles.footer} style={{ backgroundColor: token.colorBgContainer }}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h3 style={{ color: token.colorText }}>Contact Us</h3>
                    <p style={{ color: token.colorTextSecondary }}>Email: contact@example.com</p>
                    <p style={{ color: token.colorTextSecondary }}>Phone: +1 234 567 890</p>
                    <p style={{ color: token.colorTextSecondary }}>Address: 123 Main Street, City, Country</p>
                </div>
                <div className={styles.footerSection}>
                    <h3 style={{ color: token.colorText }}>Quick Links</h3>
                    <p style={{ color: token.colorTextSecondary }}>About Us</p>
                    <p style={{ color: token.colorTextSecondary }}>Services</p>
                    <p style={{ color: token.colorTextSecondary }}>Privacy Policy</p>
                </div>
                <div className={styles.footerSection}>
                    <h3 style={{ color: token.colorText }}>Follow Us</h3>
                    <p style={{ color: token.colorTextSecondary }}>Twitter</p>
                    <p style={{ color: token.colorTextSecondary }}>LinkedIn</p>
                    <p style={{ color: token.colorTextSecondary }}>Facebook</p>
                </div>
            </div>
        </Footer>
    );
}

export default FooterLayout;
