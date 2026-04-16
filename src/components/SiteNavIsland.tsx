"use client";

import { TopBar, Nav, VisdomBrand } from '@virtuslab/visdom-ui';

interface SiteNavIslandProps {
  base: string;
}

const navLinks = (base: string) => [
  { label: 'Home', href: `${base}` },
  { label: 'Capabilities', href: `${base}#capabilities` },
  { label: 'Visibility', href: `${base}#visibility` },
  { label: 'TraceVault', href: `${base}#tracevault` },
  { label: 'FAQ', href: `${base}#faq` },
];

export function SiteNavIsland({ base }: SiteNavIslandProps) {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <TopBar />
        <Nav
          brand={<VisdomBrand product="Governance" href={base} />}
          links={navLinks(base)}
          cta={{ label: 'TraceVault on GitHub', href: 'https://github.com/VirtusLab/tracevault' }}
          className="relative top-auto left-auto right-auto"
        />
      </div>
      <div style={{ height: '96px' }} />
    </>
  );
}
