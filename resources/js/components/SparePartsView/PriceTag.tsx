interface PriceTagProps {
  price: number;
}

export default function PriceTag({ price }: PriceTagProps) {
  return (
    <div className="mt-3 inline-block rounded-full bg-black px-6 py-2 text-2xl font-bold text-white shadow-lg self-start">
      {price > 0 ? `¥${price.toLocaleString()}` : 'Contact for price'}
    </div>
  );
}
