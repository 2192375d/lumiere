type IconProps = {
  href: string;
  src: string;
  alt: string;
};

export function Icon({ href, src, alt }: IconProps) {
  return (
    <a href={href}>
      <img className="techImg" src={src} alt={alt} />
    </a>
  );
}
