import { MouseEventHandler } from 'react';

import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

import ThemeButton from '@/components/buttons/ThemeButton';
import NavigationButton from '@/components/navigation/NavigationButton';
import NavLink from '@/components/navigation/NavLink';
import useOnTop from '@/hooks/useOnTop';



interface NavBarProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  showMobileNavigation: boolean;
}

const NavBar: React.FC<NavBarProps> = ({
  showMobileNavigation,
  handleClick,
}) => {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const onTop = useOnTop();

  const isBlogPostRoute = router.pathname.includes('/blog/');

  return (
    <nav
      className={clsx(
        'header sticky backdrop-blur-md top-0 z-10 motion-safe:transition-shadow bg-blue-10',
        onTop && 'shadow',
      )}
    >
      <div className="container backdrop-blur-md mx-auto flex h-full max-w-4xl items-center justify-between px-4 sm:pl-2">
        <div className="sm:hidden backdrop-blur-md">
          <NavigationButton
            showMobileNavigation={showMobileNavigation}
            handleClick={handleClick}
          />
        </div>
        <div className="hidden h-full sm:block">
          <NavLink href="/" isHeader={true}>
            Главная
          </NavLink>
          <NavLink href="/about" isHeader={true}>
            О компании
          </NavLink>
          <NavLink href="/contacts" isHeader={true}>
            Контакты
          </NavLink>
          <NavLink href="/products" isHeader={true}>
            Продукция
          </NavLink>
          <NavLink href="/publications" isHeader={true}>
            Публикации 
          </NavLink>
          <NavLink href="/projects" isHeader={true}>
            Проекты
          </NavLink>
        </div>
        <ThemeButton
          handleClick={() =>
            setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
          }
        />
      </div>
    </nav>
  );
};

export default NavBar;
