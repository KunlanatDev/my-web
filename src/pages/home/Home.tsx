import React from 'react';
import { Row, Col, Typography, Avatar, theme, Button } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined, DownloadOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import styles from './Home.module.scss';

const { Title, Text } = Typography;
const { useToken } = theme;

function Home() {
  const { token } = useToken();

  return (
    <div className={styles.root}>
      <motion.section 
        className={styles.intro}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className={styles.introContent}>
          <motion.div 
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Text className={styles.greeting}>Hello, I'm</Text>
            <Title className={styles.name}>Kunlanat Pakine</Title>
            <Title level={2} className={styles.role}>Full Stack Developer</Title>
            
            <div className={styles.actions}>
              <Button type="primary" size="large" icon={<DownloadOutlined />}>
                Download CV
              </Button>
              <Button size="large">Contact Me</Button>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className={styles.profileImage}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Avatar size={300} src="/profile.jpg" />
        </motion.div>
      </motion.section>

      <motion.section 
        className={styles.skills}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Row gutter={[32, 32]} justify="center">
          <Col xs={24} md={8}>
            <div className={styles.skillCard}>
              <Title level={3}>Frontend</Title>
              <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className={styles.skillCard}>
              <Title level={3}>Backend</Title>
              <ul>
                <li>Node.js</li>
                <li>Python</li>
                <li>GraphQL</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className={styles.skillCard}>
              <Title level={3}>DevOps</Title>
              <ul>
                <li>Docker</li>
                <li>AWS</li>
                <li>CI/CD</li>
                <li>Kubernetes</li>
              </ul>
            </div>
          </Col>
        </Row>
      </motion.section>

      <motion.section 
        className={styles.connect}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className={styles.socialLinks}>
          <a href="https://github.com"><GithubOutlined /></a>
          <a href="https://linkedin.com"><LinkedinOutlined /></a>
          <a href="mailto:contact@example.com"><MailOutlined /></a>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;
