import React, { useEffect } from 'react';
import { Contact } from './Contact';

export const ContactPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20 bg-brand-900 min-h-screen">
            <Contact type="general" />
        </div>
    );
};
