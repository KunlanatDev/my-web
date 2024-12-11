
import { Layout } from 'antd';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HeaderLayout from '../layouts/HeaderLayout';
import Home from '../pages/home/Home';
import styles from './MainRouter.module.scss';
import About from '../pages/about/About';

const routeElements = [
    {
        path: "/",
        element: <Navigate to="/home" replace />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/apps",
        element: <div>AppList</div>
    },
    {
        path: "/web",
        element: <div>WebList</div>
    }
];

const { Content } = Layout;

const MainRouter: React.FC = () => {
    return (
        <Layout>
            <HeaderLayout />
            <Layout className={styles.contentWrapper} >
                <Content className={styles.content}>
                    <Routes>
                        {routeElements.map((route) => (
                            <Route key={route.path} path={route.path} element={route.element} />
                        ))}
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainRouter;
