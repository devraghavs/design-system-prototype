import Styles from './Link.module.css';
type linkElementProps = {
  href?: string;
  children?: string | JSX.Element | JSX.Element[];
  title?: string;
  target?: string;
  type?: string;
  rel?: string;
  hrefLang?: string;
  disable?: boolean;
  dataTestId?: string;
  className?: string;
};
const Link = (props: linkElementProps) => {
  const {
    href,
    children,
    title,
    target,
    type,
    rel,
    disable = false,
    hrefLang = 'en',
    className = '',
    dataTestId = 'xt-ui-kit-LinkElement-component',
  } = props;
  return (
    <>
      <a
        href={href}
        target={target}
        title={title}
        hrefLang={hrefLang}
        rel={rel}
        type={type}
        className={
          disable ? `${Styles.Anchortagdisable} ${className}` : `${Styles.Anchortag} ${className}`
        }
        data-testId={dataTestId}
      >
        {children}
      </a>
    </>
  );
};
export default Link;
