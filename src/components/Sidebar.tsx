import { CONTACT_EMAIL } from "../data/portfolio";

interface NavItem {
  id: string;
  num: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "about", num: "01", label: "About" },
  { id: "experience", num: "02", label: "Experience" },
  { id: "projects", num: "03", label: "Projects" },
];

interface SidebarProps {
  activeId: string;
}

const Sidebar = ({ activeId }: SidebarProps) => {
  return (
    <header className="sidebar">
      <div>
        <img
          className="sidebar__logo"
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="남다현 로고"
          width={40}
          height={40}
        />
        <p className="sidebar__name">남다현</p>
        <p className="sidebar__role">웹퍼블리셔</p>
        <nav aria-label="섹션 이동">
          <ul className="sidebar__nav-list">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={
                      isActive ? "sidebar__nav-link sidebar__nav-link--active" : "sidebar__nav-link"
                    }
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span className="sidebar__nav-num">{item.num}</span>
                    <span className="sidebar__nav-underline" aria-hidden="true" />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <a className="sidebar__email" href={`mailto:${CONTACT_EMAIL}`}>
        {CONTACT_EMAIL}
      </a>
    </header>
  );
};

export default Sidebar;
