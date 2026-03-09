export interface SparePart {
  id: number;
  stockNo: number;
  image: string | null;
  name: string;
  partNumber: string;
  description: string;
  category: string;
  subCategory: string;
  keywords: string;
  price: number;
}

export interface SparePartDetail {
  id: number;
  stockNo: number;
  name: string;
  partNumber: string;
  description: string;
  category: string;
  subCategory: string;
  keywords: string;
  price: number;
  image: string | null;
  images: string[];
  make?: string;
  model?: string;
  mileage?: string;
  fuel?: string;
  transmission?: string;
  engineCc?: string;
  year?: number;
  color?: string;
}

export interface SparePartCardProps {
  cards: SparePart[];
  onCarClick?: (id: number) => void;
  onPartClick?: (id: number) => void;
}
