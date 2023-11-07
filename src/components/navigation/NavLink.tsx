import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface NavLinkProps extends LinkProps {
  children: string;
  isHeader?: boolean;
  isMobileNavigation?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  children,
  isMobileNavigation,
  isHeader,
  href,
  ...props
}) => {
  const router = useRouter();

  const isRouteActive =
    router.pathname.split('/')[1] === String(href).split('/')[1];

  return (
    <Link
      href={href}
      className={clsx(
        'motion-safe:transition-colors',
        isRouteActive
          ? 'font-semibold dark:text-blue-500'
          : 'font-medium text-gray-700 hover:text-gray-100 ',
        isMobileNavigation ? 'text-2xl' : 'text-base',
        !isMobileNavigation &&
          isHeader &&
          'rounded-lg p-2 hover:bg-gray-200 dark:hover:bg-blue-500',
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
