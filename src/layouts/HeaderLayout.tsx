import {
    GlobalOutlined,
    HomeOutlined,
    InfoCircleOutlined,
    AppstoreOutlined,
} from '@ant-design/icons';
import { Button, Layout } from 'antd';
import React, { useState } from 'react';
import PKPLogoIcon from '../components/icons/pkp-logo';
import styles from './HeaderLayout.module.scss';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

function HeaderLayout() {

    const navigate = useNavigate();
    const [language, setLanguage] = useState<'en' | 'th'>('en');
    const [activeMenu, setActiveMenu] = useState('home');

    const handleMenuClick = (menu: string) => {
        setActiveMenu(menu);
        navigate(`/${menu}`);
    };

    return (
        <Header className={styles.header}>
            <div className={styles.logo}>
                <PKPLogoIcon />
            </div>
            <div className={styles.menuSection}>
                <nav className={styles.modernNav}>
                    <div className={styles.menuWrapper}>
                        <Button
                            type="text"
                            icon={<HomeOutlined />}
                            className={`${styles.menuItem} ${activeMenu === 'home' ? styles.active : ''}`}
                            onClick={() => handleMenuClick('home')}
                        >
                            Home
                        </Button>
                        <div className={`${styles.indicator} ${activeMenu === 'home' ? styles.show : ''}`} />
                    </div>
                    <div className={styles.menuWrapper}>
                        <Button
                            type="text"
                            icon={<InfoCircleOutlined />}
                            className={`${styles.menuItem} ${activeMenu === 'about' ? styles.active : ''}`}
                            onClick={() => handleMenuClick('about')}
                        >
                            About
                        </Button>
                        <div className={`${styles.indicator} ${activeMenu === 'about' ? styles.show : ''}`} />
                    </div>
                    <div className={styles.menuWrapper}>
                        <Button
                            type="text"
                            icon={<AppstoreOutlined />}
                            className={`${styles.menuItem} ${activeMenu === 'apps' ? styles.active : ''}`}
                            onClick={() => handleMenuClick('apps')}
                        >
                            App List
                        </Button>
                        <div className={`${styles.indicator} ${activeMenu === 'apps' ? styles.show : ''}`} />
                    </div>
                    <div className={styles.menuWrapper}>
                        <Button
                            type="text"
                            icon={<GlobalOutlined />}
                            className={`${styles.menuItem} ${activeMenu === 'web' ? styles.active : ''}`}
                            onClick={() => handleMenuClick('web')}
                        >
                            Web List
                        </Button>
                        <div className={`${styles.indicator} ${activeMenu === 'web' ? styles.show : ''}`} />
                    </div>
                </nav>
            </div>

            <div className={styles.userSection}>
                <Button
                    type="text"
                    icon={<GlobalOutlined />}
                    className={styles.langButton}
                    onClick={() => setLanguage(lang => lang === 'en' ? 'th' : 'en')}
                >
                    {language === 'en' ? 'English' : 'ภาษาไทย'}
                </Button>
            </div>
        </Header>
    );
}

export default HeaderLayout;