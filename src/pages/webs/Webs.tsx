import React from 'react';
import { Typography, Button, theme } from 'antd';
import { GithubOutlined, RocketOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import styles from './Webs.module.scss';

const { Title } = Typography;
const { useToken } = theme;

function Webs() {
  const { token } = useToken();

  const websites = [
    {
      title: "E-Commerce Website",
      description: "Modern online shopping experience with cart functionality",
      image: "/webs/ecommerce.png",
      stack: ["Next.js", "Stripe", "Tailwind CSS"],
      liveUrl: "https://ecommerce.demo",
      sourceUrl: "https://github.com/ecommerce",
    },
    {
      title: "Portfolio Site",
      description: "Minimalist portfolio for creative professionals",
      image: "/webs/portfolio.png",
      stack: ["React", "GSAP", "Styled Components"],
      liveUrl: "https://portfolio.demo",
      sourceUrl: "https://github.com/portfolio",
    }
  ];

  return (
    <div className={styles.root} style={{ background: token.colorBgContainer }}>
      <motion.div 
        className={styles.hero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Title style={{ color: token.colorPrimary }}>Featured Websites</Title>
      </motion.div>

      <div className={styles.webShowcase}>
        {websites.map((web, index) => (
          <motion.div 
            key={index}
            className={styles.webCard}
            style={{ 
              background: token.colorBgElevated,
              boxShadow: token.boxShadow
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className={styles.webPreview}>
              <img src={web.image} alt={web.title} />
              <div className={styles.webActions}>
                <Button 
                  type="primary"
                  icon={<RocketOutlined />}
                  href={web.liveUrl}
                  target="_blank"
                >
                  Visit Site
                </Button>
                <Button 
                  icon={<GithubOutlined />}
                  href={web.sourceUrl}
                  target="_blank"
                >
                  Source
                </Button>
              </div>
            </div>

            <div className={styles.webDetails}>
              <h3 style={{ color: token.colorTextHeading }}>{web.title}</h3>
              <p style={{ color: token.colorTextSecondary }}>{web.description}</p>
              <div className={styles.techStack}>
                {web.stack.map((tech, i) => (
                  <span 
                    key={i} 
                    className={styles.techBadge}
                    style={{ 
                      background: token.colorPrimaryBg,
                      color: token.colorPrimary
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Webs;
