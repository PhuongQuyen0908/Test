import React from "react";
import "../../styles/Home.scss";

const HomePage = () => {
  return (
    <div className="landing-page">
      <section className="hero-section">
        <h1 className="fade-up">Chào mừng đến với hệ thống Quản lý học sinh</h1>
        <p className="fade-up delay-1">
          Quản lý thông tin học sinh, lớp học và điểm số một cách dễ dàng, nhanh
          chóng!
        </p>
        <button className="start-button fade-up delay-2">Bắt đầu ngay</button>
      </section>

      <section className="features-section">
        <div className="feature-card fade-up">
          <h3>Quản lý Học sinh</h3>
          <p>Thêm, sửa, xóa và tìm kiếm thông tin học sinh.</p>
        </div>

        <div className="feature-card fade-up delay-1">
          <h3>Quản lý Lớp học</h3>
          <p>Gán học sinh vào lớp, phân công giáo viên chủ nhiệm.</p>
        </div>

        <div className="feature-card fade-up delay-2">
          <h3>Thống kê & Báo cáo</h3>
          <p>Xem thống kê điểm, số lượng học sinh, báo cáo học tập.</p>
        </div>
      </section>

      <section className="footer-section">
        <p>© 2025 Hệ thống Quản lý học sinh. All rights reserved.</p>
      </section>
    </div>
  );
};

export default HomePage;
