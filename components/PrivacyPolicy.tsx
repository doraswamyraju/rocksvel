import React, { useEffect } from 'react';

export const PrivacyPolicy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-24 bg-white min-h-screen text-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-black mb-8 text-gray-900 tracking-tight uppercase">Privacy Policy</h1>
                <div className="space-y-6 text-lg leading-relaxed font-light">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    <p>At RocksVel Private Limited, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website rocksvel.com or use our services.</p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
                    <p>We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the website, or otherwise contacting us. This includes names, phone numbers, email addresses, and inquiry details.</p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
                    <p>We use the information we collect or receive to communicate with you regarding your inquiries, to provide our training and consulting services, and for internal business purposes such as improving our website.</p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Data Security</h2>
                    <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.</p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Contact Us</h2>
                    <p>If you have questions or comments about this policy, you may email us at rocksvelprivatelimited@gmail.com or by post to:</p>
                    <p className="font-bold text-gray-900">
                        RocksVel Private Limited<br />
                        3rd Floor, Dwarawati31 Pipeline,<br />
                        Subhodaya Colony, Kukatpally,<br />
                        Hyderabad 500072
                    </p>
                </div>
            </div>
        </div>
    );
};
