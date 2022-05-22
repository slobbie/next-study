// 동적 라우팅 페이지
import { useRouter } from 'next/router';

const DetailPage = () => {
  // 라우팅 시킨 데이터를 추출하기 위한 hook
  const router = useRouter();
  const newsId = router.query.newsId;
  return (
    <div>
      <h2>Detail Page </h2>
    </div>
  );
};

export default DetailPage;
