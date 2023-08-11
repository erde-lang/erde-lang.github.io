// Ejected component to:
// - inject Erde version
// - inject GitHub link
import Link from '@docusaurus/Link';
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
      <Link href="/changelog">
        <div
          className="erde-version navbar__item margin-right--md"
          children="1.0.0-1"
        />
      </Link>
      <a
        href="https://github.com/erde-lang/erde"
        target="_blank"
        rel="noopener noreferrer"
        className="github-logo margin-right--md"
      />
      <NavbarColorModeToggle className="margin-right--md" />
      <CloseButton />
    </div>
  );
}
