// Ejected component to inject GitHub link

import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import IconClose from '@theme/Icon/Close';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarLogo from '@theme/Navbar/Logo';

function CloseButton() {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <button
      type="button"
      className="clean-btn navbar-sidebar__close"
      onClick={() => mobileSidebar.toggle()}
    >
      <IconClose color="var(--ifm-color-emphasis-600)" />
    </button>
  );
}

export default function NavbarMobileSidebarHeader() {
  return (
    <div className="navbar-sidebar__brand">
      <NavbarLogo />
      <a
        href="https://github.com/erde-lang/erde"
        target="_blank"
        rel="noopener noreferrer"
        className="margin-right--md github-logo"
      />
      <NavbarColorModeToggle className="margin-right--md" />
      <CloseButton />
    </div>
  );
}
