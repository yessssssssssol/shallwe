import React, { useEffect } from 'react';

const KakaoShare = ({ movieData }) => {
  const { name, thumbnail_url, hashtag } = movieDate;
  useEffect(() => {
    createKakaoButton();
  }, []);
  const createKakaoButton = () => {
    const sharedUrl = `${window.location.href}`;
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }
      kakao.Link.createDefaultButton({
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: `${name}`,
          description: `${hashtag}`,
          imageUrl: `${thumbnail_url}`,
          link: {
            mobileWebUrl: sharedUrl,
            webUrl: sharedUrl,
          },
        },
        social: {
          likeCount: 620,
          commentCount: 55,
          sharedCount: 846,
        },
        buttons: [
          {
            title: '나랑 같이 영화 볼래? Shall We?',
            link: {
              mobileWebUrl: sharedUrl,
              webUrl: sharedUrl,
            },
          },
        ],
      });
    }
  };

  return (
    <div className="kakao-share-button">
      <button id="kakao-link-btn">
        <img src="/imgs/kakaolink.png" alt="kakao-share-icon" />
      </button>
    </div>
  );
};
export default KakaoShare;
