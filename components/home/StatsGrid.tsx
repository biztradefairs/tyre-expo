interface StatItem {
  number: string;
  label: string;
}

interface StatsGridProps {
  stats: StatItem[];
}

export default function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="bg-[#f5f0e8] py-8 sm:py-10 lg:py-12">
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`
              flex flex-col items-center justify-center text-center
              py-4 px-3 sm:px-4
              ${index !== stats.length - 1 ? 'border-r border-[#e0d9d0]' : ''}
            `}
          >
            <span className="font-bebas text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold text-[#F08400] leading-none tracking-wide">
              {stat.number}
            </span>
            <span className="mt-2 sm:mt-3 text-[10px] sm:text-[11px] md:text-xs font-bold text-black uppercase tracking-[1.5px] leading-tight">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}