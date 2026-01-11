type IconProps = {
  href: string;
  src: string;
  alt: string;
};

export function Icon({ href, src, alt }: IconProps) {
  return (
    <a href={href}>
      <img className="icon" src={src} alt={alt} />
    </a>
  );
}
