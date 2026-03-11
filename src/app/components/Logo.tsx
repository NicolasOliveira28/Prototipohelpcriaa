import logoImage from "figma:asset/2d96ee6a341184f5c2c8adcd61e0fca0785e4486.png";

export function Logo({ size = 80 }: { size?: number }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <img
        src={logoImage}
        alt="Help CRIAA Logo"
        width={size * 2.5}
        height={size * 2.5}
        className="object-contain"
      />
    </div>
  );
}