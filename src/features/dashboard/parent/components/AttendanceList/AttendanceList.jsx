import React from 'react';
import './AttendanceList.css';

/* Thay enum TS bằng object JS */
const AttendanceStatus = {
  PRESENT: 'PRESENT',
  ABSENT: 'ABSENT',
  LATE: 'LATE'
};

const AttendanceList = ({ records }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case AttendanceStatus.PRESENT:
        return 'status present';
      case AttendanceStatus.ABSENT:
        return 'status absent';
      case AttendanceStatus.LATE:
        return 'status late';
      default:
        return 'status other';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case AttendanceStatus.PRESENT:
        return 'Có mặt';
      case AttendanceStatus.ABSENT:
        return 'Vắng mặt';
      case AttendanceStatus.LATE:
        return 'Đi muộn';
      default:
        return 'Khác';
    }
  };

  return (
    <div className="attendance-card">
      <div className="table-wrapper">
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Ngày điểm danh</th>
              <th>Trạng thái</th>
              <th>Thời gian</th>
              <th>Ghi chú</th>
            </tr>
          </thead>

          <tbody>
            {records && records.length > 0 ? (
              records.map((record) => (
                <tr key={record.id}>
                  <td>
                    <div className="date-cell">
                      <span className="day">
                        {new Date(record.date).toLocaleDateString('vi-VN', {
                          weekday: 'long'
                        })}
                      </span>
                      <span className="date">
                        {new Date(record.date).toLocaleDateString('vi-VN')}
                      </span>
                    </div>
                  </td>

                  <td>
                    <span className={getStatusClass(record.status)}>
                      <span
                        className={`dot ${
                          record.status === AttendanceStatus.PRESENT
                            ? 'green'
                            : record.status === AttendanceStatus.LATE
                            ? 'yellow'
                            : 'red'
                        }`}
                      ></span>
                      {getStatusLabel(record.status)}
                    </span>
                  </td>

                  <td className="time">
                    {record.checkInTime || '--:--'}
                  </td>

                  <td className="note">
                    {record.note || '-'}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="empty">
                  Không có dữ liệu điểm danh trong giai đoạn này.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceList;
