// pages/index.tsx
import CardCarousel from '../../components/organisms/EmblaCarouselWithCards';

const CardCarousels = () => {
  const cards = [
    {
      id: 1,
      title: 'Card',
      description: 'This is the first card',
      imageUrl: '/team/team.png',
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'This is the second card',
      imageUrl: 'https://via.placeholder.com/300x200',
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'This is the third card',
      imageUrl: 'https://via.placeholder.com/300x200',
    },
    {
      id: 4,
      title: 'Card 4',
      description: 'This is the third card',
      imageUrl: 'https://via.placeholder.com/300x200',
    },
    {
      id: 5,
      title: 'Card 5',
      description: 'This is the third card',
      imageUrl: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8">
      
      <CardCarousel cards={cards} />
    </div>
  );
};

export default CardCarousels;
