import React, { useState, useRef } from 'react';

const StudentDetail = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        birthDate: '',
        birthPlace: '',
        parentName: '',
        email: '',
        phone: '',
        address: ''
    });
    const [charCount, setCharCount] = useState(0);
    const [fileName, setFileName] = useState('');
    const fileInputRef = useRef(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleTextareaChange = (e) => {
        const { id, value } = e.target;
        if (value.length <= 2000) {
            setFormData({ ...formData, [id]: value });
            setCharCount(value.length);
        }
    };

    const handlePhotoUpload = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    const triggerFileSelect = () => {
        fileInputRef.current.click();
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen w-full bg-gray-50 p-6">
            <div className="w-full mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Header */}
                <div className="bg-blue-600 text-white px-8 py-6">
                    <h1 className="text-2xl font-bold">Student Registration Form</h1>
                    <p className="text-blue-100 mt-1">Please fill out all required fields</p>
                </div>

                {/* Form Content */}
                <div className="p-8">
                    {/* Photo and Name Section */}
                    <div className="flex flex-col lg:flex-row gap-8 mb-8">
                        {/* Photo Upload */}
                        <div className="lg:w-1/3">
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                Ảnh nền *
                            </label>
                            <div 
                                onClick={triggerFileSelect}
                                className="relative w-full h-64 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 cursor-pointer transition-colors duration-200 bg-gray-50 hover:bg-gray-100"
                            >
                                <input
                                    type="file"
                                    id="photo"
                                    accept="image/*"
                                    onChange={handlePhotoUpload}
                                    ref={fileInputRef}
                                    className="hidden"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                    {fileName ? (
                                        <div className="text-green-600">
                                            <svg className="w-12 h-12 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                            </svg>
                                            <p className="font-medium text-sm">{fileName}</p>
                                            <p className="text-xs text-gray-500 mt-1">Click to change</p>
                                        </div>
                                    ) : (
                                        <div className="text-gray-500">
                                            <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <p className="font-medium">Drag and drop or click to select</p>
                                            <p className="text-xs mt-1">JPG, PNG up to 5MB</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Personal Info */}
                        <div className="lg:w-2/3 space-y-6">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Họ và tên *
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder="Tên của bạn"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>

                            {/* Birth Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="birthDate" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Ngày sinh *
                                    </label>
                                    <input
                                        type="date"
                                        id="birthDate"
                                        value={formData.birthDate}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="birthPlace" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Quê quán *
                                    </label>
                                    <input
                                        type="text"
                                        id="birthPlace"
                                        placeholder="City, Country"
                                        value={formData.birthPlace}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>

                            {/* Parent Name */}
                            <div>
                                <label htmlFor="parentName" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Cha mẹ/Người giám hộ *
                                </label>
                                <input
                                    type="text"
                                    id="parentName"
                                    placeholder="Enter parent or guardian's name"
                                    value={formData.parentName}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                            Thông tin liên lạc
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="student@example.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Số điện thoại *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="your phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="mb-10">
                        <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                            Home Address *
                        </label>
                        <div className="relative">
                            <textarea
                                id="address"
                                placeholder="Enter complete home address including street, city, state, and postal code..."
                                value={formData.address}
                                onChange={handleTextareaChange}
                                rows="4"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                            />
                            <div className="absolute bottom-3 right-3 text-sm text-gray-500">
                                <span className={`${charCount > 1800 ? 'text-orange-500' : charCount > 1900 ? 'text-red-500' : ''}`}>
                                    {charCount}/2000
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-end pt-6 border-t border-gray-200">
                        <button
                            type="button"
                            className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                        >
                            Hủy bỏ
                        </button>
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
                        >
                            Lưu thông tin
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDetail;