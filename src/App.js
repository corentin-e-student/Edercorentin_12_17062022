import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'


import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Layout from './components/Layout/Layout';



const queryClient = new QueryClient()

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <Layout>
                <Dashboard/>
            </Layout>
        </QueryClientProvider>
    );
}

export default App;
