import React from 'react';
import { createRoot } from 'react-dom/client';
import TagManager from '@sooro-io/react-gtm-module';
import { App } from './App';
import 'phantom-library/styles';
import './styles/core/index.module.scss';

const tagManagerArgs = {
    gtmId: 'GTM-MRT6X4TR;'
};

TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
