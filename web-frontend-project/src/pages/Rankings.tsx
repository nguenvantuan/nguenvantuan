import React from 'react';
import './Rankings.css';

const Rankings: React.FC = () => {
  return (
    <div className="ranking-bg">
      <h1 className="ranking-title"> Xếp hạng các trường Đại học ở Hàn Quốc</h1>
      <p className="ranking-desc">
        Phần xếp hạng trên website cung cấp thông tin tổng hợp từ nhiều bảng xếp hạng uy tín cả quốc tế và nội địa, giúp người dùng có cái nhìn đa chiều về vị thế của từng trường.<br/>
        Xếp hạng chỉ mang tính tham khảo. Trường tốt nhất là trường phù hợp nhất với lực học, ngành học mong muốn và điều kiện tài chính của bản thân.
      </p>
      <p className="ranking-source-title"><b>Nguồn dữ liệu gồm:</b></p>
      <ul className="ranking-list">
        <li>
          <span className="ranking-link mouth">💬 1. Xếp hạng truyền miệng</span>
          <div className="ranking-detail">
            <div className="ranking-subtitle">Tiêu chí chính:</div>
            <ul>
              <li>Đánh giá phi chính thức từ sinh viên, cựu sinh viên, phụ huynh và xã hội Hàn Quốc.</li>
              <li>Ảnh hưởng bởi thương hiệu lâu đời của trường, tỉ lệ việc làm, các giải thưởng, thành tích thể thao, và hình ảnh trên truyền thông.</li>
              <li>Có thể khác biệt lớn so với số liệu thống kê chính thức.</li>
            </ul>
            <div className="ranking-subtitle">Phù hợp cho:</div>
            <ul>
              <li>Người muốn hiểu cách xã hội Hàn nhìn nhận về trường, điều này ảnh hưởng đến uy tín khi xin việc làm tại Hàn.</li>
            </ul>
            <div className="mouth-tiers">
              <div className="ranking-subtitle">Các nhóm (tier) truyền miệng phổ biến:</div>
              <ul>
                <li><b>Tier 1:</b> Seoul National University (Số 1 tuyệt đối), KAIST (Số 1 về KHCN)</li>
                <li><b>Tier 2:</b> Yonsei, Korea University, POSTECH</li>
                <li><b>Tier 3:</b> Sungkyunkwan, Hanyang, Sogang, UNIST, GIST, DGIST, KIST (UST)</li>
                <li><b>Tier 4:</b> Kyung Hee, Chung-Ang, Ewha, University of Seoul (Sirip), HUFS</li>
                <li><b>Tier 5:</b> Konkuk, Dongguk, Hongik</li>
                <li><b>Tier 6:</b> Các trường Đại học Quốc Gia & các trường ở Seoul</li>
              </ul>
              <b> !!! Học sinh ở Hàn cố vào các trường Tier 1 và 2 bằng mọi giá, bất kể ngành học</b>
              </div>
          </div>
        </li>
        <li>
          <a
            className="ranking-link qs"
            href="https://www.topuniversities.com/world-university-rankings?countries=kr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span role="img" aria-label="QS">🌐</span> 2. QS World University Rankings (Quacquarelli Symonds) – Quốc tế
          </a>
          <div className="ranking-detail">
            <div className="ranking-subtitle">Tiêu chí chính:</div>
            <ul>
              <li>Uy tín học thuật (Academic Reputation) – 30%</li>
              <li>Uy tín nhà tuyển dụng và Việc làm (Employability and Outcomes) – 20%</li>
              <li>Tỉ lệ giảng viên/sinh viên (Faculty Student Ratio) – 10%</li>
              <li>Trích dẫn/bài báo (Citations per Faculty) – 20%</li>
              <li>Tỉ lệ sinh viên quốc tế (International Student Ratio) – 5%</li>
            </ul>
            <div className="ranking-subtitle">Phù hợp cho:</div>
            <ul>
              <li>So sánh cả bậc đại học và sau đại học.</li>
              <li>Đặc biệt hữu ích nếu quan tâm đến uy tín toàn cầu và cộng điểm khi chuyển đổi Visa F-2-7.</li>
            </ul>
          </div>
        </li>
        <li>
          <a
            className="ranking-link the"
            href="https://www.timeshighereducation.com/world-university-rankings/latest/world-ranking#!/length/25/locations/KOR/sort_by/rank/sort_order/asc/cols/scores"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span role="img" aria-label="THE">🌍</span> 3. THE World University Rankings (Times Higher Education) – Quốc tế
          </a>
          <div className="ranking-detail">
            <div className="ranking-subtitle">Tiêu chí chính:</div>
            <ul>
              <li>Giảng dạy (Teaching) – 29.5%</li>
              <li>Môi trường nghiên cứu (Research) – 29%</li>
              <li>Chất lượng nghiên cứu (Citations) – 30%</li>
              <li>Tỉ lệ sinh viên quốc tế (International Students) – 2.5%</li>
              <li>Uy tín doanh nghiệp (Industry) – 4%</li>
            </ul>
            <div className="ranking-subtitle">Phù hợp cho:</div>
            <ul>
              <li>Đánh giá sau đại học và nghiên cứu.</li>
              <li>Tốt cho những ai quan tâm đến chất lượng nghiên cứu, hợp tác quốc tế, cộng điểm khi chuyển đổi Visa F-2-7.</li>
            </ul>
          </div>
        </li>
        <li>
          <a
            className="ranking-link shanghai"
            href="https://www.shanghairanking.com/rankings/arwu/2024"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span role="img" aria-label="Shanghai">📊</span> 4. Shanghai Ranking (ARWU) – Quốc tế
          </a>
          <div className="ranking-detail">
            <div className="ranking-subtitle">Tiêu chí chính:</div>
            <ul>
              <li>Số lượng cựu sinh viên và giảng viên đoạt Nobel/Fields Medal (Quality of Education & Faculty) – 30%</li>
              <li>Số lượng nhà nghiên cứu được trích dẫn cao (Highly Cited Researchers) – 20%</li>
              <li>Số bài báo đăng trên Nature/Science/SCIE/SSCI – 40%</li>
            </ul>
            <div className="ranking-subtitle">Phù hợp cho:</div>
            <ul>
              <li>Đánh giá thế mạnh nghiên cứu thuần túy ở bậc sau đại học.</li>
              <li>Không tập trung nhiều vào trải nghiệm sinh viên hay tỉ lệ việc làm.</li>
            </ul>
          </div>
        </li>
        <li>
          <a
            className="ranking-link joongang"
            href="https://en.namu.wiki/w/%EC%A4%91%EC%95%99%EC%9D%BC%EB%B3%B4%20%EB%8C%80%ED%95%99%ED%8F%89%EA%B0%80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span role="img" aria-label="JoongAng">🏆</span> 5. JoongAng Ilbo University Ranking – Nội địa Hàn Quốc (Không bao gồm các trường chuyên về Khoa học công nghệ)
          </a>
          <div className="ranking-detail">
            <b>Danh sách không bao gồm: KAIST, POSTECH, UNIST, GIST, DGIST, UST</b>
            <div className="ranking-subtitle">Tiêu chí chính:</div>
            <ul>
              <li>Chất lượng giảng dạy (điểm từ sinh viên, tỉ lệ tốt nghiệp).</li>
              <li>Hoạt động nghiên cứu (số bài báo, trích dẫn, dự án).</li>
              <li>Quốc tế hóa (sinh viên và giảng viên quốc tế).</li>
              <li>Việc làm sau tốt nghiệp.</li>
            </ul>
            <div className="ranking-subtitle">Phù hợp cho:</div>
            <ul>
              <li>So sánh các trường đại học Hàn Quốc ở bậc đại học.</li>
              <li>Hữu ích cho việc chọn trường khi học tại Hàn hoặc định cư tại đây.</li>
            </ul>
          </div>
        </li>
      </ul>
      <div className="ranking-table-container">
        <h2>Bảng tổng hợp thứ hạng các trường đại học Hàn Quốc</h2>
        <div className="ranking-table-scroll">
          <table className="ranking-table">
            <thead>
              <tr>
                <th>STT</th>
                <th>University Name</th>
                <th>QS Rank</th>
                <th>THE Rank</th>
                <th>Shanghai Rank</th>
                <th>JoongAng Rank</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Seoul National University</td>
                <td>38</td>
                <td>62</td>
                <td>86</td>
                <td>1</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Korea Advanced Institute of Science and Technology (KAIST)</td>
                <td>53</td>
                <td>82</td>
                <td>201-300</td>
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Yonsei University</td>
                <td>50</td>
                <td>102</td>
                <td>201-300</td>
                <td>2</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Korea University</td>
                <td>61</td>
                <td>189</td>
                <td>201-300</td>
                <td>4</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Pohang University of Science and Technology (POSTECH)</td>
                <td>102</td>
                <td>151</td>
                <td>301-400</td>
                <td></td>
              </tr>
              <tr>
                <td>6</td>
                <td>Sungkyunkwan University</td>
                <td>126</td>
                <td>102</td>
                <td>151-200</td>
                <td>3</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Hanyang University</td>
                <td>159</td>
                <td>251-300</td>
                <td>301-400</td>
                <td>5</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Ulsan National Institute of Science and Technology (UNIST)</td>
                <td>310</td>
                <td>201-250</td>
                <td>201-300</td>
                <td></td>
              </tr>
              <tr>
                <td>9</td>
                <td>Kyung Hee University</td>
                <td>331</td>
                <td>251-300</td>
                <td>401-500</td>
                <td>6</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Daegu Gyeongbuk Institute of Science and Technology (DGIST)</td>
                <td>370</td>
                <td>351-400</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>11</td>
                <td>Gwangju Institute of Science and Technology (GIST)</td>
                <td>385</td>
                <td>401-500</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>12</td>
                <td>Sejong University</td>
                <td>392</td>
                <td>201-250</td>
                <td>501-600</td>
                <td>17</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Pusan National University</td>
                <td>473</td>
                <td>501-600</td>
                <td>401-500</td>
                <td></td>
              </tr>
              <tr>
                <td>14</td>
                <td>Chung-Ang University</td>
                <td>479</td>
                <td>401-500</td>
                <td>701-800</td>
                <td>10</td>
              </tr>
              <tr>
                <td>15</td>
                <td>Ewha Womans University</td>
                <td>504</td>
                <td>601-800</td>
                <td>601-700</td>
                <td>7</td>
              </tr>
              <tr>
                <td>16</td>
                <td>Kyungpook National University</td>
                <td>519</td>
                <td>501-600</td>
                <td>401-500</td>
                <td>20</td>
              </tr>
              <tr>
                <td>17</td>
                <td>Sogang University</td>
                <td>558</td>
                <td>801-1000</td>
                <td></td>
                <td>8</td>
              </tr>
              <tr>
                <td>18</td>
                <td>Ajou University</td>
                <td>563</td>
                <td>501-600</td>
                <td>901-1000</td>
                <td>12</td>
              </tr>
              <tr>
                <td>19</td>
                <td>Dongguk University</td>
                <td>618</td>
                <td></td>
                <td>801-900</td>
                <td>9</td>
              </tr>
              <tr>
                <td>20</td>
                <td>Inha University</td>
                <td>643</td>
                <td>801-1000</td>
                <td>601-700</td>
                <td>14</td>
              </tr>
              <tr>
                <td>21</td>
                <td>Konkuk University</td>
                <td>654</td>
                <td>501-600</td>
                <td>601-700</td>
                <td>10</td>
              </tr>
              <tr>
                <td>22</td>
                <td>Hankuk University of Foreign Studies</td>
                <td>680</td>
                <td></td>
                <td></td>
                <td>18</td>
              </tr>
              <tr>
                <td>23</td>
                <td>Jeonbuk National University</td>
                <td>701-710</td>
                <td>801-1000</td>
                <td>701-800</td>
                <td></td>
              </tr>
              <tr>
                <td>24</td>
                <td>The Catholic University of Korea</td>
                <td>741-750</td>
                <td>601-800</td>
                <td>801-900</td>
                <td></td>
              </tr>
              <tr>
                <td>25</td>
                <td>University of Ulsan</td>
                <td>801-850</td>
                <td>501-600</td>
                <td>401-500</td>
                <td></td>
              </tr>
              <tr>
                <td>26</td>
                <td>University of Seoul</td>
                <td>851-900</td>
                <td>801-1000</td>
                <td></td>
                <td>14</td>
              </tr>
              <tr>
                <td>27</td>
                <td>Chungnam National University</td>
                <td>851-900</td>
                <td>1001-1200</td>
                <td>701-800</td>
                <td></td>
              </tr>
              <tr>
                <td>28</td>
                <td>Yeungnam University</td>
                <td>901-950</td>
                <td>601-800</td>
                <td>501-600</td>
                <td></td>
              </tr>
              <tr>
                <td>29</td>
                <td>Chonnam National University</td>
                <td>901-950</td>
                <td>801-1000</td>
                <td>501-600</td>
                <td></td>
              </tr>
              <tr>
                <td>30</td>
                <td>Gachon University</td>
                <td></td>
                <td>601-800</td>
                <td>801-900</td>
                <td></td>
              </tr>
              <tr>
                <td>31</td>
                <td>Sungshin Women's University</td>
                <td>1001-1200</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>32</td>
                <td>Soonchunhyang University</td>
                <td>1001-1200</td>
                <td>1201-1500</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>33</td>
                <td>Seoul National University of Science and Technology (SeoulTech)</td>
                <td>1001-1200</td>
                <td>1201-1500</td>
                <td></td>
                <td>20</td>
              </tr>
              <tr>
                <td>34</td>
                <td>Kookmin University</td>
                <td>1001-1200</td>
                <td>1201-1500</td>
                <td></td>
                <td>13</td>
              </tr>
              <tr>
                <td>35</td>
                <td>Chungbuk National University</td>
                <td>1001-1200</td>
                <td>1001-1200</td>
                <td>701-800</td>
                <td></td>
              </tr>
              <tr>
                <td>36</td>
                <td>Kangwon National University</td>
                <td>1001-1200</td>
                <td>1201-1500</td>
                <td>801-900</td>
                <td></td>
              </tr>
              <tr>
                <td>37</td>
                <td>Dankook University</td>
                <td>1001-1200</td>
                <td>1501+</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>38</td>
                <td>Hallym University</td>
                <td>1001-1200</td>
                <td>1201-1500</td>
                <td>901-1000</td>
                <td></td>
              </tr>
              <tr>
                <td>39</td>
                <td>Pukyong National University</td>
                <td>1201-1400</td>
                <td>1201-1500</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>40</td>
                <td>Jeju National University</td>
                <td>1201-1400</td>
                <td>1001-1200</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>41</td>
                <td>Sookmyung Women's University</td>
                <td>1201-1400</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>42</td>
                <td>Tongmyong University</td>
                <td>1401+</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>43</td>
                <td>Youngsan University</td>
                <td>1401+</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>45</td>
                <td>Soongsil University</td>
                <td>1401+</td>
                <td>1201-1500</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>48</td>
                <td>Gyeongsang National University</td>
                <td></td>
                <td>1201-1500</td>
                <td>901-1000</td>
                <td></td>
              </tr>
              <tr>
                <td>49</td>
                <td>Incheon National University</td>
                <td></td>
                <td>1201-1500</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>50</td>
                <td>Woosong University</td>
                <td></td>
                <td>1201-1500</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>51</td>
                <td>Chosun University</td>
                <td></td>
                <td>1201-1500</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>44</td>
                <td>Hongik University</td>
                <td>1401+</td>
                <td>1501+</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>52</td>
                <td>Hanseo University</td>
                <td></td>
                <td>Reporter</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Rankings;