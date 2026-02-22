import { FC } from "react";

type LogoProps = React.SVGProps<SVGSVGElement>;

export const Logo: FC<LogoProps> = (props) => {
  return (
    <>
      <svg preserveAspectRatio="none" {...props}><use href="#svg1297551431_2585"></use></svg>
    </>
  );
};