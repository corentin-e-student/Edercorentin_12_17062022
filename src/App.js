import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Test from "./Test";

import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';

const queryClient = new QueryClient()

function App() {

  return (
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <div className='app_background_position'>
          <Dashboard/>
          {/* <Test/> */}
        </div>
      </QueryClientProvider>
  );
}

export default App;
