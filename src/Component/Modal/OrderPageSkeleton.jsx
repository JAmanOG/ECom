import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function OrderPageSkeleton() {
    return (
        <div className="max-w-7xl mx-auto">
            {/* Page Title */}
            <div className="mb-12">
                <Skeleton height={40} width={200} />
                <Skeleton height={20} width={300} style={{ marginTop: '8px' }} />
            </div>

            {/* Sorting Dropdown */}
            <div className="mb-6 flex justify-end">
                <Skeleton height={40} width={160} />
            </div>

            {/* Recent Orders Section */}
            <div className="bg-white shadow rounded-lg">
                {[...Array(2)].map((_, index) => (
                    <div key={index} className="p-6 border-b border-gray-200 order-item transition duration-200 ease-in-out hover:shadow-lg">
                        <Skeleton height={28} width={250} />

                        <div className="flex justify-between items-center mb-6">
                            <div className="grid grid-cols-3 gap-x-8 text-gray-600">
                                <div>
                                    <Skeleton height={20} width={120} />
                                    <Skeleton height={20} width={200} />
                                </div>
                                <div>
                                    <Skeleton height={20} width={120} />
                                    <Skeleton height={20} width={200} />
                                </div>
                                <div>
                                    <Skeleton height={20} width={120} />
                                    <Skeleton height={20} width={100} />
                                </div>
                            </div>
                            <div className="flex space-x-6">
                                <Skeleton height={20} width={100} />
                                <Skeleton height={20} width={120} />
                            </div>
                        </div>

                        {/* Items in Order */}
                        <Skeleton height={24} width={150} />
                        <ul className="space-y-8 mt-4">
                            {[...Array(1)].map((_, itemIndex) => (
                                <li key={itemIndex} className="flex items-start space-x-6">
                                    <Skeleton height={96} width={96} />

                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <Skeleton height={20} width={200} />
                                                <Skeleton height={20} width={100} />
                                            </div>
                                        </div>
                                        <Skeleton height={20} width={300} style={{ marginTop: '8px' }} />
                                    </div>

                                    <div className="flex flex-col justify-between items-end space-y-4">
                                        <Skeleton height={20} width={150} />
                                        <div className="space-x-4">
                                            <Skeleton height={20} width={100} />
                                            <Skeleton height={20} width={100} />
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OrderPageSkeleton;

export const SkeletonLoader = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 60"
        width="400"
        height="60"
        fill="#E0E0E0"
    >
        <rect x="0" y="0" width="400" height="60" rx="8" ry="8" fill="#E0E0E0" />
        <rect x="10" y="10" width="100" height="20" rx="4" ry="4" fill="#C0C0C0">
            <animate
                attributeName="x"
                from="-150"
                to="100%"
                dur="1.5s"
                repeatCount="indefinite"
            />
        </rect>
        <rect x="10" y="40" width="300" height="20" rx="4" ry="4" fill="#C0C0C0">
            <animate
                attributeName="x"
                from="-150"
                to="100%"
                dur="1.5s"
                repeatCount="indefinite"
                begin="0.5s"
            />
        </rect>
    </svg>
);



