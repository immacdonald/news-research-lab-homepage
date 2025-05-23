import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';
import { config } from '@config';

const measurementID = 'G-HP48JN1DVH';

const useAnalytics = (): void => {
    const location = useLocation();

    useEffect(() => {
        if (config.mode == 'production') {
            ReactGA.initialize(measurementID);
        }
    }, []);

    useEffect(() => {
        const path = location.pathname + location.search;

        if (config.mode == 'production') {
            ReactGA.send({ hitType: 'pageview', page: path });
        } else {
            console.log(path);
        }
    }, [location.pathname, location.search]);
};

export { useAnalytics };
