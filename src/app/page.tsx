'use client';

import { useState } from 'react';

export default function Home() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    numberOfGuests: ''
  });

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', numberOfGuests: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-orange-50 to-yellow-50 animate-gradient" />
        <div className="absolute inset-0 bg-[url('/sunflower-wallpaper.jpg')] opacity-10 animate-spin-slow" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 bg-[url('/img/sunflower-wallpaper.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="sunflower-card max-w-2xl w-full mx-auto p-8 transform transition-all duration-500 hover:scale-105 backdrop-blur-sm bg-white/80">
          {/* Header with Animation */}
          <div className="text-center mb-8">
            <h1 className="sunflower-title text-5xl md:text-6xl mb-4 animate-float">
              Thư mời sinh nhật Hướng Dương
            </h1>
            <div className="w-24 h-1 bg-[var(--sunflower-yellow)] mx-auto rounded-full animate-pulse" />
          </div>

          {/* Event Details with Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3 p-4 bg-white/50 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-transform">
              <svg className="w-8 h-8 text-[var(--sunflower-yellow)] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="font-semibold text-[var(--sunflower-brown)]">Ngày và giờ</p>
                <p className="text-sm">27/06/2025 • 19:00</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white/50 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-transform">
              <svg className="w-8 h-8 text-[var(--sunflower-yellow)] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="font-semibold text-[var(--sunflower-brown)]">Địa điểm</p>
                <p className="text-sm">Sinh nhật cháu báo sau hẹ hẹ</p>
              </div>
            </div>
          </div>

          <div className="text-center">
          {submitStatus === 'success' && (
                  <div className="text-green-500">
                    <p>Nhà cháu cảm ơn các bác sẽ tham dự. Hẹn gặp lại các bác tại sinh nhật cháu hẹ hẹ</p>
                    <img src='/img/anduongcuoi.jpg' alt='sunflower' className='w-full h-auto' />
                  </div>
                )}
                {submitStatus !== 'success' && (
                  <>
                              <button
              onClick={() => setIsFormVisible(!isFormVisible)}
              className="sunflower-button text-lg px-8 py-4 mb-6 animate-pulse"
            >
              {isFormVisible ? 'Ẩn thông tin' : 'Tham dự sinh nhật'}
            </button>

            <div className={`transition-all duration-500 overflow-hidden ${isFormVisible ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
    
              <form onSubmit={handleSubmit} className="space-y-4 bg-white/80 p-6 rounded-xl backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tên bạn"
                    className="w-full px-4 py-2 rounded-lg border-2 border-yellow-200 focus:border-[var(--sunflower-yellow)] outline-none transition-colors"
                  />
                  <input
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Số điện thoại"
                    className="w-full px-4 py-2 rounded-lg border-2 border-yellow-200 focus:border-[var(--sunflower-yellow)] outline-none transition-colors"
                  />
                </div>
                <select 
                  name="numberOfGuests"
                  value={formData.numberOfGuests}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border-2 border-yellow-200 focus:border-[var(--sunflower-yellow)] outline-none transition-colors"
                >
                  <option>Số lượng khách</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
                <button type="submit" className="sunflower-button w-full" disabled={isSubmitting} >
                {isSubmitting ? 'Đang gửi...' : 'Gửi thông tin'}
                </button>
                {submitStatus === 'error' && (
                  <p className="text-red-500">Đã xảy ra lỗi khi gửi thông tin. Vui lòng thử lại.</p>
                )}
              </form>
            </div></>
                )}

          </div>

          {/* Decorative Sunflower */}
          <div className="absolute -top-10 -right-10 w-20 h-20 opacity-20 animate-spin-slow">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0C50 0 60 30 80 30C100 30 100 50 100 50C100 50 80 70 80 70C60 70 50 100 50 100C50 100 40 70 20 70C0 70 0 50 0 50C0 50 20 30 20 30C40 30 50 0 50 0Z" fill="var(--sunflower-yellow)"/>
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}
