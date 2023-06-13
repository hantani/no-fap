import React, { useEffect } from "react";

const MyBadge = ({ records }) => {
  const max = Math.max.apply(null, records);

  if (max >= 0 && max <= 3) {
    return (
      <div className="my-badge-container">
        <h2 className="list-title">나의 뱃지</h2>
        <p className="list-subtitle">내가 달성한 뱃지 수 : 1/8</p>
        <ul className="my-badge">
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile01.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>성스러운 신념</p>
              <p>0~3일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>악마의 시련</p>
              <p>4일~7일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>죽음의 골짜기</p>
              <p>8일~14일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>악마의 자위꾼</p>
              <p>15일~30일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>내 손을 묶어라</p>
              <p>31일~60일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>피터슨의 오른손</p>
              <p>61일~100일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>황혼의 군주</p>
              <p>101일~365일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>대현자</p>
              <p>365일+</p>
            </div>
          </li>
        </ul>
      </div>
    );
  } else if (max >= 4 && max <= 7) {
    return (
      <div className="my-badge-container">
        <h2 className="list-title">나의 뱃지</h2>
        <p className="list-subtitle">내가 달성한 뱃지 수 : 2/8</p>
        <ul className="my-badge">
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile01.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>성스러운 신념</p>
              <p>0~3일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile02.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>악마의 시련</p>
              <p>4일~7일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>죽음의 골짜기</p>
              <p>8일~14일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>악마의 자위꾼</p>
              <p>15일~30일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>내 손을 묶어라</p>
              <p>31일~60일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>피터슨의 오른손</p>
              <p>61일~100일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>황혼의 군주</p>
              <p>101일~365일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>대현자</p>
              <p>365일+</p>
            </div>
          </li>
        </ul>
      </div>
    );
  } else if (max >= 8 && max <= 14) {
    return (
      <div className="my-badge-container">
        <h2 className="list-title">나의 뱃지</h2>
        <p className="list-subtitle">내가 달성한 뱃지 수 : 3/8</p>
        <ul className="my-badge">
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile01.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>성스러운 신념</p>
              <p>0~3일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile02.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>악마의 시련</p>
              <p>4일~7일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile03.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>죽음의 골짜기</p>
              <p>8일~14일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>악마의 자위꾼</p>
              <p>15일~30일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>내 손을 묶어라</p>
              <p>31일~60일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>피터슨의 오른손</p>
              <p>61일~100일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>황혼의 군주</p>
              <p>101일~365일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>대현자</p>
              <p>365일+</p>
            </div>
          </li>
        </ul>
      </div>
    );
  } else if (max >= 15 && max <= 30) {
    return (
      <div className="my-badge-container">
        <h2 className="list-title">나의 뱃지</h2>
        <p className="list-subtitle">내가 달성한 뱃지 수 : 4/8</p>
        <ul className="my-badge">
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile01.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>성스러운 신념</p>
              <p>0~3일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile02.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>악마의 시련</p>
              <p>4일~7일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile03.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>죽음의 골짜기</p>
              <p>8일~14일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile04.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>악마의 자위꾼</p>
              <p>15일~30일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>내 손을 묶어라</p>
              <p>31일~60일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>피터슨의 오른손</p>
              <p>61일~100일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>황혼의 군주</p>
              <p>101일~365일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>대현자</p>
              <p>365일+</p>
            </div>
          </li>
        </ul>
      </div>
    );
  } else if (max >= 31 && max <= 60) {
    return (
      <div className="my-badge-container">
        <h2 className="list-title">나의 뱃지</h2>
        <p className="list-subtitle">내가 달성한 뱃지 수 : 5/8</p>
        <ul className="my-badge">
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile01.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>성스러운 신념</p>
              <p>0~3일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile02.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>악마의 시련</p>
              <p>4일~7일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile03.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>죽음의 골짜기</p>
              <p>8일~14일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile04.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>악마의 자위꾼</p>
              <p>15일~30일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile05.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>내 손을 묶어라</p>
              <p>31일~60일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>피터슨의 오른손</p>
              <p>61일~100일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>황혼의 군주</p>
              <p>101일~365일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>대현자</p>
              <p>365일+</p>
            </div>
          </li>
        </ul>
      </div>
    );
  } else if (max >= 61 && max <= 100) {
    return (
      <div className="my-badge-container">
        <h2 className="list-title">나의 뱃지</h2>
        <p className="list-subtitle">내가 달성한 뱃지 수 : 6/8</p>
        <ul className="my-badge">
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile01.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>성스러운 신념</p>
              <p>0~3일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile02.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>악마의 시련</p>
              <p>4일~7일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile03.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>죽음의 골짜기</p>
              <p>8일~14일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile04.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>악마의 자위꾼</p>
              <p>15일~30일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile05.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>내 손을 묶어라</p>
              <p>31일~60일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile06.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>피터슨의 오른손</p>
              <p>61일~100일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>황혼의 군주</p>
              <p>101일~365일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>대현자</p>
              <p>365일+</p>
            </div>
          </li>
        </ul>
      </div>
    );
  } else if (max >= 101 && max <= 365) {
    return (
      <div className="my-badge-container">
        <h2 className="list-title">나의 뱃지</h2>
        <p className="list-subtitle">내가 달성한 뱃지 수 : 7/8</p>
        <ul className="my-badge">
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile01.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>성스러운 신념</p>
              <p>0~3일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile02.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>악마의 시련</p>
              <p>4일~7일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile03.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>죽음의 골짜기</p>
              <p>8일~14일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile04.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>악마의 자위꾼</p>
              <p>15일~30일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile05.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>내 손을 묶어라</p>
              <p>31일~60일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile06.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>피터슨의 오른손</p>
              <p>61일~100일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile07.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>황혼의 군주</p>
              <p>101일~365일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/question.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>대현자</p>
              <p>365일+</p>
            </div>
          </li>
        </ul>
      </div>
    );
  } else if (max > 365) {
    return (
      <div className="my-badge-container">
        <h2 className="list-title">나의 뱃지</h2>
        <p className="list-subtitle">내가 달성한 뱃지 수 : 8/8</p>
        <ul className="my-badge">
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile01.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>성스러운 신념</p>
              <p>0~3일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile02.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>악마의 시련</p>
              <p>4일~7일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile03.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>죽음의 골짜기</p>
              <p>8일~14일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile04.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>악마의 자위꾼</p>
              <p>15일~30일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile05.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>내 손을 묶어라</p>
              <p>31일~60일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile06.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>피터슨의 오른손</p>
              <p>61일~100일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile07.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>황혼의 군주</p>
              <p>101일~365일</p>
            </div>
          </li>
          <li>
            <div className="img-container">
              <img src="public/assets/img/profile08.png" alt="profile image" />
            </div>
            <div className="text-container">
              <p>대현자</p>
              <p>365일+</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
};

export default MyBadge;
