import React from 'react';
import { Typography, Button, theme } from 'antd';
import { GithubOutlined, RocketOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import styles from './Apps.module.scss';

const { Title } = Typography;
const { useToken } = theme;

function Apps() {
  const { token } = useToken();

  const apps = [
    {
      title: "Netflix Clone",
      description: "Streaming platform with recommendation engine",
      image: "/apps/netflix-clone.png",
      stack: ["React", "Firebase", "TMDB API"],
      liveUrl: "https://netflix-clone.demo",
      sourceUrl: "https://github.com/netflix-clone",
    },
    {
      title: "Spotify Dashboard",
      description: "Music analytics and playlist management",
      image: "/apps/spotify-dash.png",
      stack: ["Next.js", "Spotify API", "Chart.js"],
      liveUrl: "https://spotify-dash.demo",
      sourceUrl: "https://github.com/spotify-dash",
    }
  ];

  return (
    <div className={styles.root} style={{ background: token.colorBgContainer }}>
      <motion.div 
        className={styles.hero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Title style={{ color: token.colorPrimary }}>Featured Applications</Title>
      </motion.div>

      <div className={styles.appShowcase}>
        {apps.map((app, index) => (
          <motion.div 
            key={index}
            className={styles.appCard}
            style={{ 
              background: token.colorBgElevated,
              boxShadow: token.boxShadow
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className={styles.appPreview}>
              <img src={app.image} alt={app.title} />
              <div className={styles.appActions}>
                <Button 
                  type="primary"
                  icon={<RocketOutlined />}
                  href={app.liveUrl}
                  target="_blank"
                >
                  Live Demo
                </Button>
                <Button 
                  icon={<GithubOutlined />}
                  href={app.sourceUrl}
                  target="_blank"
                >
                  Source
                </Button>
              </div>
            </div>

            <div className={styles.appDetails}>
              <h3 style={{ color: token.colorTextHeading }}>{app.title}</h3>
              <p style={{ color: token.colorTextSecondary }}>{app.description}</p>
              <div className={styles.techStack}>
                {app.stack.map((tech, i) => (
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

export default Apps;
