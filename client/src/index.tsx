import 'index.scss';

import { createRoot } from 'react-dom/client';

import App from '@/app/index';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

root.render(<App />);
