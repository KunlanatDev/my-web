import React, { useState } from 'react';
import { Button, Switch, theme, Card } from 'antd';
import {
  MobileOutlined,
  TabletOutlined,
  DesktopOutlined,
  GlobalOutlined,
  AndroidOutlined,
  AppleOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import styles from './DeviceFrame.module.scss';

const { useToken } = theme;

const DeviceFrame: React.FC = () => {
  const { token } = useToken();
  const [deviceType, setDeviceType] = useState<string>('web');
  const [platform, setPlatform] = useState<'android' | 'ios'>('android');

  const handleDeviceChange = (value: string): void => {
    setDeviceType(value);
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className={styles.frame}>
        <div className={styles.content}>
          <div className={styles.controls}>
            <Button.Group className={styles.radioGroup}>
              {[
                { value: 'mobile', icon: <MobileOutlined /> },
                { value: 'tablet', icon: <TabletOutlined /> },
                { value: 'desktop', icon: <DesktopOutlined /> },
                { value: 'web', icon: <GlobalOutlined /> }
              ].map(({ value, icon }) => (
                <Button
                  key={value}
                  type={deviceType === value ? 'primary' : 'default'}
                  className={styles.iconButton}
                  onClick={() => handleDeviceChange(value)}
                  icon={icon}
                />
              ))}
            </Button.Group>
          </div>

          <div className={styles.deviceLabel}>
            {deviceType === 'mobile'
              ? `${platform.toUpperCase()} Mobile View`
              : `${deviceType.charAt(0).toUpperCase() + deviceType.slice(1)} View`
            }
          </div>
        </div>

        {deviceType === 'mobile' && (
          <div className={styles.footer}>
            <Switch
              className={styles.platformSwitch}
              checkedChildren={<AppleOutlined />}
              unCheckedChildren={<AndroidOutlined />}
              checked={platform === 'ios'}
              onChange={(checked) => setPlatform(checked ? 'ios' : 'android')}
            />
          </div>
        )}
      </Card>
    </motion.div>
  );
};

export default DeviceFrame;
