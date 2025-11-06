import { useMemo } from "react";
import styled from "styled-components";
import type { SimpleIcon } from "simple-icons";
import {
  siAmazonec2,
  siAmazonroute53,
  siCloudflare,
  siCss3,
  siCssmodules,
  siDjango,
  siHtml5,
  siJavascript,
  siJquery,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siOracle,
  siPlanetscale,
  siPrisma,
  siReact,
  siReactquery,
  siRecoil,
  siRedux,
  siSpring,
  siStyledcomponents,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

interface ProjectToolIconProps {
  tool: string;
}

const ICON_SIZE = 35;

const iconMap: Record<string, SimpleIcon> = {
  html5: siHtml5,
  css3: siCss3,
  javascript: siJavascript,
  django: siDjango,
  mysql: siMysql,
  amazonec2: siAmazonec2,
  amazonroute53: siAmazonroute53,
  tailwindcss: siTailwindcss,
  typescript: siTypescript,
  react: siReact,
  reactquery: siReactquery,
  redux: siRedux,
  prisma: siPrisma,
  planetscale: siPlanetscale,
  nodedotjs: siNodedotjs,
  nextdotjs: siNextdotjs,
  cloudflare: siCloudflare,
  styledcomponents: siStyledcomponents,
  recoil: siRecoil,
  cssmodules: siCssmodules,
  jquery: siJquery,
  spring: siSpring,
  oracle: siOracle,
};

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${ICON_SIZE}px;
  height: ${ICON_SIZE}px;
  color: #fff;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
`;

const SvgContainer = styled.span`
  display: inline-flex;
  width: 100%;
  height: 100%;

  svg {
    width: 100%;
    height: 100%;
    color: inherit;
  }

  svg path {
    fill: currentColor;
  }
`;

const FallbackBadge = styled(IconWrapper)`
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

function ProjectToolIcon({ tool }: ProjectToolIconProps) {
  const icon = useMemo(() => {
    const normalized = tool.trim().toLowerCase();
    return iconMap[normalized] || null;
  }, [tool]);

  if (!icon) {
    return <FallbackBadge>{tool}</FallbackBadge>;
  }

  return (
    <IconWrapper aria-label={icon.title} title={icon.title}>
      <SvgContainer dangerouslySetInnerHTML={{ __html: icon.svg }} />
    </IconWrapper>
  );
}

export default ProjectToolIcon;
