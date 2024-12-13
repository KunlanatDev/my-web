import { Layout } from 'antd';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HeaderLayout from '../layouts/HeaderLayout';
import { routeElements } from '../utils/RouteElement';
import styles from './MainRouter.module.scss';
import FooterLayout from '../layouts/FooterLayout';

const { Content, Footer } = Layout;

const MainRouter: React.FC = () => {
    return (
        <Layout>
            <HeaderLayout />
            <Layout className={styles.contentWrapper}>
                <Content className={styles.content}>
                    <Routes>
                        {routeElements.map((route) => (
                            <Route key={route.path} path={route.path} element={route.element} />
                        ))}
                    </Routes>
                </Content>
                <FooterLayout />
            </Layout>
        </Layout>
    );
};

export default MainRouter;
