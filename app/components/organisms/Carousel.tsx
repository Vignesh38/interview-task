// pages/index.tsx
import CardCarousel from './EmblaCarouselWithCards';

const CardCarousels = () => {
  const cards = [
    {
      id: 1,
      title: 'Abhishek Gupta',
      description: '마케팅 .',
      year: '2y+',
      label1: '마케팅 콘텐츠 제작',
      label2: '인스타그램 관리',
      label3: '트위터 관리',
      label4: '블로그 글 작성',
      imageUrl: '/team/team.png',
    },
    {
      id: 2,
      title: 'Abhishek Gupta',
      description: '마케팅 .',
      year: '2y+',
      label1: '마케팅 콘텐츠 제작',
      label2: '인스타그램 관리',
      label3: '트위터 관리',
      label4: '블로그 글 작성',
      imageUrl: '/team/team.png',
    },
    {
      id: 3,
      title: 'Abhishek Gupta',
      description: '마케팅 .',
      year: '2y+',
      label1: '마케팅 콘텐츠 제작',
      label2: '인스타그램 관리',
      label3: '트위터 관리',
      label4: '블로그 글 작성',
      imageUrl: '/team/team.png',
    },
    {
      id: 4,
      title: 'Abhishek Gupta',
      description: '마케팅 .',
      year: '2y+',
      label1: '마케팅 콘텐츠 제작',
      label2: '인스타그램 관리',
      label3: '트위터 관리',
      label4: '블로그 글 작성',
      imageUrl: '/team/team.png',
    },
    
  ];

  return (
    <div className="max-w-6xl mx-auto py-8">
      
      <CardCarousel cards={cards} />
    </div>
  );
};

export default CardCarousels;
