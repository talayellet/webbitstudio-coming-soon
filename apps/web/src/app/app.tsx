import { WebbitStudioHomePage } from '@webbitstudio/pages';

export function App() {
  return (
    <WebbitStudioHomePage
      web3formsAccessKey={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}
    />
  );
}

export default App;
