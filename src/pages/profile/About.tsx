import { Card, Row, Col, Tag, Avatar } from 'antd';
import { motion } from 'framer-motion';
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import styles from './About.module.scss';

function About() {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className={styles.content}>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <div className={styles.header}>
              <Avatar size={128} src="your-photo-url.jpg" />
              <h1>Your Name</h1>
              <p className={styles.title}>Full Stack Developer</p>
              <div className={styles.social}>
                <GithubOutlined onClick={() => window.open('your-github-url')} />
                <LinkedinOutlined onClick={() => window.open('your-linkedin-url')} />
                <MailOutlined onClick={() => window.open('mailto:your@email.com')} />
              </div>
            </div>
          </Col>

          <Col span={24}>
            <section>
              <h2>Summary</h2>
              <p>Your professional summary goes here. Highlight your key strengths and career objectives.</p>
            </section>
          </Col>

          <Col span={24}>
            <section>
              <h2>Skills</h2>
              <div className={styles.skills}>
                {['React', 'TypeScript', 'Node.js', 'Docker', 'AWS'].map(skill => (
                  <Tag key={skill} color="blue">{skill}</Tag>
                ))}
              </div>
            </section>
          </Col>

          <Col span={24}>
            <section>
              <h2>Experience</h2>
              {[
                {
                  title: 'Senior Developer',
                  company: 'Company Name',
                  period: '2020 - Present',
                  description: 'Key responsibilities and achievements'
                },
                // Add more experiences
              ].map((exp, index) => (
                <Card key={index} className={styles.experience}>
                  <h3>{exp.title}</h3>
                  <p className={styles.period}>{exp.period}</p>
                  <p>{exp.company}</p>
                  <p>{exp.description}</p>
                </Card>
              ))}
            </section>
          </Col>
        </Row>
      </Card>
    </motion.div>
  );
}

export default About;
