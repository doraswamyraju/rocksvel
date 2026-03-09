import React, { useEffect } from 'react';

export const RefundPolicy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-24 bg-white min-h-screen text-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-black mb-8 text-gray-900 tracking-tight uppercase">Refund Policy</h1>
                <div className="space-y-6 text-lg leading-relaxed font-light">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    <p>Thank you for choosing RocksVel Private Limited for your training and consulting needs.</p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. General Policy</h2>
                    <p>We strive to ensure the highest quality of our corporate and individual training programs. Since our programs involve significant advanced preparation and resource allocation, our refund policy is designed to be fair to both our clients and our organization.</p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Course Cancellations by Participant</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>More than 7 days before course start:</strong> 100% refund of the course fee, minus any payment processing charges.</li>
                        <li><strong>Within 7 days of course start:</strong> No refunds will be issued. However, the participant may transfer their registration to a future batch or another individual with prior written notice.</li>
                        <li><strong>After course commencement:</strong> No refunds or transfers are permitted once a training program has commenced.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Cancellations by RocksVel</h2>
                    <p>RocksVel Private Limited reserves the right to cancel or reschedule a training program due to unforeseen circumstances or insufficient enrollment. In such cases, participants will receive a full 100% refund of any fees paid.</p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Requesting a Refund</h2>
                    <p>To request a refund, please email your request along with your enrollment details and payment receipt to rocksvelprivatelimited@gmail.com. Approved refunds will be processed within 7-10 business days back to the original method of payment.</p>
                </div>
            </div>
        </div>
    );
};
