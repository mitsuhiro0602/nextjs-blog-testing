import Layout from '../components/Layout';
import { StateProvider } from '../context/StateProvider';
import ContextA from '../components/ContextA';
import ContextB from '../components/ContextB';

const ContextPage: React.FC = () => {
  return (
    <Layout title="Context">
      <p className="mb-10 text-4xl">
        context page
      </p>
      <StateProvider>
        <ContextA />
        <ContextB />
      </StateProvider>
    </Layout>
  )
}
export default ContextPage