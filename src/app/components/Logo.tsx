export function Logo({ size = 80 }: { size?: number }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Escudo protetor */}
        <path
          d="M50 10 L85 25 L85 50 C85 70 70 85 50 90 C30 85 15 70 15 50 L15 25 Z"
          fill="#3B82F6"
          stroke="#1E40AF"
          strokeWidth="2"
        />
        
        {/* Coração no centro */}
        <path
          d="M50 40 C50 40 42 32 36 32 C30 32 28 36 28 40 C28 46 34 52 50 62 C66 52 72 46 72 40 C72 36 70 32 64 32 C58 32 50 40 50 40 Z"
          fill="#FFFFFF"
        />
        
        {/* Mãos protetoras */}
        <path
          d="M25 45 Q20 50 22 55 L28 53 Z"
          fill="#10B981"
          opacity="0.8"
        />
        <path
          d="M75 45 Q80 50 78 55 L72 53 Z"
          fill="#10B981"
          opacity="0.8"
        />
      </svg>
      
      <div className="text-center">
        <h1 className="text-2xl font-bold text-blue-600">Help CRIAA</h1>
        <p className="text-xs text-gray-600">Crianças e Adolescentes Amparados</p>
      </div>
    </div>
  );
}
