interface SectionHeaderProps {
  topText?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  topText,
  title,
  description,
  align = 'left',
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center' : 'text-left'}`}>

      {/* TOP TEXT */}
      {topText && (
        <p className="text-[#F08400] font-sans text-[14px] uppercase tracking-[1.5px]">
          {topText}
        </p>
      )}

      {/* TITLE */}
      <h2 className="font-bebas font-bold  text-[52px] md:text-[70px] uppercase tracking-[1.5px] text-[#1a1a1a] leading-[1.05] mt-3">
        {title}
      </h2>

      {/* DESCRIPTION */}
      {description && (
        <p
          className={`text-gray-600 mt-6 text-lg leading-relaxed ${
            isCenter ? 'mx-auto max-w-[700px]' : 'max-w-[700px]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}