import React from 'react';
import { Typography, Card, Row, Col, Button, Space, theme } from 'antd';
import { TeamOutlined, TrophyOutlined, BulbOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import styles from './About.module.scss';

const { Title, Paragraph } = Typography;
const { useToken } = theme;

function About() {
  const { token } = useToken();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };

  return (
    <motion.div 
      className={styles.container}
      style={{ background: token.colorBgContainer }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className={styles.header}
        variants={containerVariants}
      >
        <Title level={1} style={{ color: token.colorTextHeading }}>About Us</Title>
      </motion.div>

      <Row gutter={[24, 24]} className={styles.features}>
        {[
          {
            icon: <TeamOutlined />,
            title: 'Our Team',
            description: 'A diverse group of passionate individuals working together to create amazing solutions'
          },
          {
            icon: <TrophyOutlined />,
            title: 'Mission',
            description: 'Delivering excellence through innovative technology and exceptional user experiences'
          },
          {
            icon: <BulbOutlined />,
            title: 'Vision',
            description: 'Leading the way in technological advancement and digital transformation'
          }
        ].map((item, index) => (
          <Col xs={24} md={8} key={item.title}>
            <motion.div
              custom={index}
              variants={cardVariants}
            >
              <Card 
                className={styles.featureCard} 
                style={{ background: token.colorBgElevated }}
                actions={[
                  <Button type="link">
                    Learn More <ArrowRightOutlined />
                  </Button>
                ]}
              >
                <div className={styles.icon} style={{ color: token.colorPrimary }}>
                  {item.icon}
                </div>
                <Title level={3} style={{ color: token.colorTextHeading }}>{item.title}</Title>
                <Paragraph style={{ color: token.colorText }}>
                  {item.description}
                </Paragraph>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}

export default About;
