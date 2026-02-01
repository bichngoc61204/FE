import React, { useState, useMemo } from 'react';
import './Attendance.css';
import AttendanceList from '../components/AttendanceList/AttendanceList.jsx';
import StatCard from '../components/StatCard/StatCrad.jsx';

const Attendance = () => {
  const [filterStatus, setFilterStatus] = useState('ALL');

  const MOCK_STUDENT = {
    avatar: 'https://picsum.photos/seed/student1/200',
    name: 'Nguyễn Văn A',
    class: '10A1',
    studentId: 'HS001'
  };

  const attendanceRecords = useMemo(() => [
    {
      id: 1,
      date: '2024-05-06',
      status: 'PRESENT',
      checkInTime: '07:05',
      note: ''
    },
    {
      id: 2,
      date: '2024-05-07',
      status: 'LATE',
      checkInTime: '07:20',
      note: 'Kẹt xe'
    },
    {
      id: 3,
      date: '2024-05-08',
      status: 'ABSENT',
      checkInTime: null,
      note: 'Nghỉ ốm'
    },
    {
      id: 4,
      date: '2024-05-09',
      status: 'PRESENT',
      checkInTime: '07:00',
      note: ''
    },
    {
      id: 5,
      date: '2024-05-10',
      status: 'PRESENT',
      checkInTime: '07:03',
      note: ''
    }
  ], []);

  const stats = useMemo(() => {
    const totalDays = attendanceRecords.length;
    const presentDays = attendanceRecords.filter(record => record.status === 'PRESENT').length;
    const attendanceRate = Math.round((presentDays / totalDays) * 100);

    return {
      totalDays,
      attendanceRate
    };
  }, [attendanceRecords]);

  const filteredRecords = filterStatus === 'ALL'
    ? attendanceRecords
    : attendanceRecords.filter(record => record.status === filterStatus);

  const handleStatClick = (status) => {
    setFilterStatus(prevStatus => prevStatus === status ? 'ALL' : status);
  };

  const getColorClass = (status) => {
    switch (status) {
      case 'PRESENT':
        return 'green';
      case 'LATE':
        return 'yellow';
      case 'ABSENT':
        return 'red';
      default:
        return 'indigo';
    }
  };

  return (
    <div className="attendance">
      <section className="student-card">
        <div className="student-info">
          <div className="avatar-wrapper">
            <img
              src={MOCK_STUDENT.avatar}
              alt="Profile"
              className="student-avatar"
            />
            <div className="online-dot"></div>
          </div>

          <div className="student-text">
            <h2 className="student-name">{MOCK_STUDENT.name}</h2>
            <p className="student-class">{MOCK_STUDENT.class}</p>
            <p className="student-id">Mã số: {MOCK_STUDENT.studentId}</p>
          </div>
        </div>

        <div className="student-stats">
          <div className="stat-item">
            <p className="stat-label">Tỉ lệ chuyên cần</p>
            <div className="stat-value primary">
              {stats.attendanceRate}%
            </div>
          </div>

          <div className="stat-item">
            <p className="stat-label">Tháng 05/2024</p>
            <div className="stat-value">
              {stats.totalDays}
              <span className="stat-sub">ngày học</span>
            </div>
          </div>
        </div>
      </section>

      <h2>Điểm danh tháng 05/2024</h2>

      <div className="stat-grid">
        <StatCard
          label="Tổng ngày"
          value={stats.totalDays}
          colorClass="indigo"
          onClick={() => handleStatClick('ALL')}
          isSelected={filterStatus === 'ALL'}
        />
        <StatCard
          label="Có mặt"
          value={attendanceRecords.filter(record => record.status === 'PRESENT').length}
          colorClass={getColorClass('PRESENT')}
          onClick={() => handleStatClick('PRESENT')}
          isSelected={filterStatus === 'PRESENT'}
        />
        <StatCard
          label="Đi muộn"
          value={attendanceRecords.filter(record => record.status === 'LATE').length}
          colorClass={getColorClass('LATE')}
          onClick={() => handleStatClick('LATE')}
          isSelected={filterStatus === 'LATE'}
        />
        <StatCard
          label="Vắng mặt"
          value={attendanceRecords.filter(record => record.status === 'ABSENT').length}
          colorClass={getColorClass('ABSENT')}
          onClick={() => handleStatClick('ABSENT')}
          isSelected={filterStatus === 'ABSENT'}
        />
      </div>

      <AttendanceList records={filteredRecords} />
    </div>
  );
};

export default Attendance;
