import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import Footer from './components/Footer';
import Header from './components/Header';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes />
            <Footer />
            <GlobalStyle />
        </Router>
    );
};

export default App;
