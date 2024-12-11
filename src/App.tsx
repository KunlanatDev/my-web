import { ConfigProvider } from 'antd';
import darkTheme from './theme/themeConfig';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './routes/MainRouter';

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider theme={darkTheme}>
        <MainRouter />
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
