import React, { useEffect } from 'react';

export const TermsOfService: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-24 bg-white min-h-screen text-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-black mb-8 text-gray-900 tracking-tight uppercase">Terms of Service</h1>
                <div className="space-y-6 text-lg leading-relaxed font-light">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    <p>Please read these Terms of Service carefully before using the rocksvel.com website and our training services operated by RocksVel Private Limited.</p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p>By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.</p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Services Provided</h2>
                    <p>RocksVel Private Limited provides corporate training, consulting, and educational courses. The content provided is for informational and educational purposes.</p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Intellectual Property</h2>
                    <p>The Service and its original content, features, and functionality are and will remain the exclusive property of RocksVel Private Limited and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of RocksVel Private Limited.</p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Limitation of Liability</h2>
                    <p>In no event shall RocksVel Private Limited, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Contact Us</h2>
                    <p>If you have any questions about these Terms, please contact us at rocksvelprivatelimited@gmail.com.</p>
                </div>
            </div>
        </div>
    );
};
