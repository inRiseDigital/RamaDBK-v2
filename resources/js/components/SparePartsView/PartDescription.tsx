interface PartDescriptionProps {
  description: string;
}

export default function PartDescription({ description }: PartDescriptionProps) {
  return (
    <div className="mt-4 max-h-none overflow-visible text-justify text-[15px] leading-relaxed whitespace-pre-line text-white">
      {description}
    </div>
  );
}
