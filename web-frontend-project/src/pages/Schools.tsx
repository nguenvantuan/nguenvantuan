import React, { useState } from 'react';
import './Schools.css';
import schoolsData from '../data/university_info.json'; // Assuming you have a JSON file with school data

interface School {
    ten_truong: string;
    mo_ta: string;
    rank: number;
    hoc_phi: number;
}

const Schools: React.FC = () => {
    const [sortOption, setSortOption] = useState('');
    const schools: School[] = schoolsData;
    // const schools: School[] = [
    //     {
    //         ten_truong: 'Đại học Quốc gia Seoul',
    //         mo_ta: 'Trường đại học hàng đầu Hàn Quốc, nổi tiếng về nghiên cứu và giảng dạy.',
    //         rank: 1,
    //         hoc_phi: 5000
    //     },
    //     {
    //         ten_truong: 'Đại học Korea',
    //         mo_ta: 'Một trong ba trường đại học SKY danh tiếng tại Hàn Quốc.',
    //         rank: 3,
    //         hoc_phi: 4500
    //     },
    //     {
    //         ten_truong: 'Đại học Yonsei',
    //         mo_ta: 'Trường đại học lâu đời với môi trường học tập quốc tế.',
    //         rank: 2,
    //         hoc_phi: 6000
    //     }
    // ];

    const sortedSchools = [...schools].sort((a, b) => {
        if (sortOption === 'rank-asc') return a.rank - b.rank;
        if (sortOption === 'rank-desc') return b.rank - a.rank;
        if (sortOption === 'hoc_phi-asc') return a.hoc_phi - b.hoc_phi;
        if (sortOption === 'hoc_phi-desc') return b.hoc_phi - a.hoc_phi;
        return 0;
    });

    return (
        <div className="schools-bg">
            <h1 className="schools-title">Danh sách các trường đại học Hàn Quốc</h1>
            <p className="schools-desc">
                Chào mừng bạn đến với trang trường học. Tại đây bạn có thể tìm thông tin về các trường đại học nổi bật tại Hàn Quốc.
            </p>

            <div className="sort-container">
                <label htmlFor="sort" className="sort-label">Sắp xếp:</label>
                <select
                    id="sort"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="">-- Chọn tiêu chí --</option>
                    <option value="rank-asc">Rank: Cao → Thấp</option>
                    <option value="rank-desc">Rank: Thấp → Cao</option>
                    <option value="hoc_phi-asc">Học phí: Thấp → Cao</option>
                    <option value="hoc_phi-desc">Học phí: Cao → Thấp</option>
                </select>
            </div>

            <div className="schools-list">
                {sortedSchools.map((school, index) => (
                    <div key={index} className="school-card">
                        <h2>{school.ten_truong}</h2>
                        <p>{school.mo_ta}</p>
                        <p><strong>Rank:</strong> {school.rank}</p>
                        <p><strong>Học phí:</strong> {school.hoc_phi.toLocaleString()} USD</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Schools;
