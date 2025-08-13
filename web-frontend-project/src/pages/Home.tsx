import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-bg">
      <div className="home-header">
        <span className="home-icon">🎓</span>
        <h1>
          Chào mừng đến với <span className="highlight">Tự Apply Học Bổng Du Học Hàn Quốc!</span>
        </h1>
      </div>
      <p className="home-mission">
        <b>Nơi cung cấp thông tin đầy đủ, chính xác và cập nhật nhất về du học Hàn Quốc cho học sinh, sinh viên Việt Nam.</b>
      </p>
      <ul className="home-list">
        <li>🎁 Tổng hợp học bổng mới nhất theo deadline</li>
        <li>🏫 Danh sách các trường đại học uy tín tại Hàn Quốc</li>
        <li>📚 Thông tin về các ngành học đa dạng</li>
        <li>🏆 Bảng xếp hạng các trường giúp bạn dễ dàng lựa chọn</li>
      </ul>
      <p className="home-ads">
        <b>Nếu thấy thông tin hữu ích, hãy ủng hộ Ad bằng cách nhấp vào quảng cáo.</b>
      </p>
      <p className="home-footer">
        Chúc các bạn may mắn!<br />
        <span style={{ color: "#1976d2" }}>
          Góp ý (Zalo): <b>0357 114 150</b>
        </span>
      </p>
    </div>
  );
};

export default Home;