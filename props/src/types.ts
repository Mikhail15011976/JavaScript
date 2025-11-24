export interface StarsProps {
  count?: number;
}

export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  likes: number;
  rating: number;
  price: string;
  detailsUrl: string;
}