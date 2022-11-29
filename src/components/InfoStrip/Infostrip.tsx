import Styles from './Infostrip.module.css';

type InfoStripProps = {
  infostripcontent?: JSX.Element | JSX.Element[] | string;
  className?: string;
  dataTestId?: string;
};

const InfoStrip = (props: InfoStripProps) => {
  const { infostripcontent, dataTestId = 'xt-ui-kit-infostrip-component', className = '' } = props;
  return (
    <>
      <div
        className={`${Styles.inforstrips_parent_conatiner} ${Styles.className} ${className}`}
        data-testid={dataTestId}
      >
        <div className={Styles.infostrip_content}>{infostripcontent}</div>
      </div>
    </>
  );
};
export default InfoStrip;
