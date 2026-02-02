import React from 'react';
import {
  FaHeart,
  FaChartLine,
  FaExclamationCircle,
  FaCommentDots,
  FaAward,
  FaCheckCircle
} from 'react-icons/fa';
import './ParentDashboard.css';

/* ================= MOCK DATA ================= */

const student = {
  name: 'Nguyễn Văn An',
  className: '10A1',
  studentId: '10A1-001',
  role: 'Lớp trưởng',
  avatar: 'https://picsum.photos/seed/student1/200',
  attendanceRate: 98,
  status: 'Đang học tại lớp'
};

const attendanceToday = {
  status: 'Có mặt đúng giờ',
  time: '07:28',
  point: '+1đ'
};

const notifications = [
  {
    id: 1,
    type: 'warning',
    title: 'Bài kiểm tra sắp tới',
    content: 'Kiểm tra 1 tiết Toán - Thứ 6 tuần này. Vui lòng nhắc bé ôn tập.'
  },
  {
    id: 2,
    type: 'message',
    title: 'Tin nhắn từ GVCN',
    content: '"An hôm nay rất hăng hái phát biểu trong giờ Văn!"'
  }
];

const badges = ['Siêng năng', 'Lãnh đạo', 'Sáng tạo', 'Tốt bụng'];

/* ================= COMPONENT ================= */

const ParntDashboard = () => {
  return (
    <div className="portal">

      {/* Header */}
      <div className="profile-header">
        <div className="profile-bg" />
        <div className="profile-content">
          <img src={student.avatar} className="avatar" alt="Student" />

          <div className="profile-info">
            <h2>{student.name}</h2>
            <p>{student.className} • Mã HS: {student.studentId}</p>
            <div className="tags">
              <span className="tag">{student.role}</span>
              <span className="tag active">{student.status}</span>
            </div>
          </div>

          <div className="attendance-rate">
            <p>Tỉ lệ hiện diện</p>
            <strong>{student.attendanceRate}%</strong>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid-2">

        {/* Attendance */}
        <div className="card">
          <div className="card-header">
            <h3>Tình hình chuyên cần</h3>
            <FaCheckCircle className="icon success" />
          </div>

          <div className="attendance-item success">
            <div className="attendance-left">
              <FaCheckCircle />
              <div>
                <strong>{attendanceToday.status}</strong>
                <span>Hôm nay - {attendanceToday.time}</span>
              </div>
            </div>
            <span className="point">{attendanceToday.point}</span>
          </div>

          <div className="attendance-item disabled">
            <div className="attendance-left">
            <FaChartLine />
            <div>
              <strong>Check-out dự kiến</strong>
              <span>Chiều nay - 16:30</span>
            </div>
          </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="card">
          <div className="card-header">
            <h3>Cảnh báo & Nhắc nhở</h3>
            <FaExclamationCircle className="icon danger" />
          </div>

          {notifications.map(item => (
            <div
              key={item.id}
              className={`notify ${item.type}`}
            >
              {item.type === 'warning'
                ? <FaExclamationCircle />
                : <FaCommentDots />
              }
              <div>
                <strong>{item.title}</strong>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rewards */}
      <div className="card rewards">
        <h3>
          <FaAward fill="var(--mc)" />
          Thành tích nổi bật
        </h3>

        <div className="badge-grid">
          {badges.map(badge => (
            <div key={badge} className="badge">
              <FaHeart fill="currentColor" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ParntDashboard;
