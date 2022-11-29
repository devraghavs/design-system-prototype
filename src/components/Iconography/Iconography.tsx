import { Icons } from './iconsEnum';

type Iconprops = {
  icon: string;
  color?: string;
  size?: string;
  dataTestId?: string;
  className?: string;
};
const Iconography = (props: Iconprops) => {
  const {
    icon,
    color = 'black',
    size = '11',
    dataTestId = 'xt-ui-kit-iconography-component',
    className = '',
  } = props;
  switch (icon?.toUpperCase()) {
    case Icons.attachments:
      return (
        <svg
          width={size}
          height={size}
          data-testid={dataTestId}
          className={className}
          viewBox='0 0 16 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M14.8174 5.41679L14.4993 16.1387C14.4554 17.6204 13.7289 19.0211 12.4797 20.0328C9.87828 22.1393 5.76555 22.0173 3.29363 19.7602C2.10657 18.6763 1.46438 17.235 1.50834 15.7533L1.8359 4.71187C1.8652 3.72404 2.34954 2.79022 3.18236 2.11582C4.91661 0.711446 7.65843 0.792787 9.30638 2.2975C10.0978 3.02009 10.5259 3.98098 10.4966 4.9688L10.1785 15.6907C10.1638 16.1846 9.92167 16.6515 9.50526 16.9887C8.63813 17.6909 7.26722 17.6502 6.44325 16.8979C6.04756 16.5366 5.8335 16.0561 5.84815 15.5622L6.15676 5.15985'
            stroke={color}
          />
        </svg>
      );
    case Icons.addplus:
      return (
        <svg
          width={size}
          height={size}
          data-testid={dataTestId}
          className={className}
          viewBox='0 0 11 11'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M5.41669 0V10.8333M2.28882e-05 5.41667H10.8334' stroke={color} strokeWidth='2' />
        </svg>
      );

    case Icons.remove:
      return (
        <svg
          className={className}
          width={size}
          height={size}
          data-testid={dataTestId}
          viewBox='0 0 10 3'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M0 1.25H10' stroke={color} strokeWidth='2' />
        </svg>
      );

    case Icons.calender:
      return (
        <svg
          width={size}
          height={size}
          className={className}
          data-testid={dataTestId}
          viewBox='0 0 21 21'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M4.98388 0.000244141V6.8968M15.6076 0.000244141V6.8968M4.3199 10.3451H8.30379M16.2716 10.3451H12.2877M4.3199 14.483H8.30379M12.2877 14.483H16.2716M2.32796 3.44852H18.2635C18.9969 3.44852 19.5915 4.06606 19.5915 4.82783V18.6209C19.5915 19.3827 18.9969 20.0002 18.2635 20.0002H2.32796C1.59455 20.0002 1 19.3827 1 18.6209V4.82783C1 4.06606 1.59455 3.44852 2.32796 3.44852Z'
            stroke={color}
          />
        </svg>
      );

    case Icons.cicle:
      return (
        <svg
          width={size}
          height={size}
          className={className}
          data-testid={dataTestId}
          viewBox='0 0 21 21'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6.21429 6.21429L14.7857 14.7857M6.21429 14.7857L14.7857 6.21429M10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5Z'
            stroke={color}
          />
        </svg>
      );

    case Icons.cross:
      return (
        <svg
          width={size}
          height={size}
          className={className}
          data-testid={dataTestId}
          viewBox='0 0 17 17'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M1.5 1.5L15.3 15.3M1.5 15.3L15.3 1.5' stroke={color} strokeWidth='2' />
        </svg>
      );

    case Icons.downarrow:
      return (
        <svg
          width={size}
          height={size}
          className={className}
          data-testid={dataTestId}
          viewBox='0 0 30 17'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M28.6 1.7L14.8 15.5L1 1.7'
            strokeWidth='5'
            stroke={color}
            strokeLinecap='square'
          />
        </svg>
      );

    case Icons.download:
      return (
        <svg
          width={size}
          height={size}
          className={className}
          data-testid={dataTestId}
          viewBox='0 0 22 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M8.49641 11.9085L8.14286 11.555L7.43575 12.2621L7.7893 12.6156L8.49641 11.9085ZM11 15.1192L10.6464 15.4728L11 15.8263L11.3536 15.4728L11 15.1192ZM14.2107 12.6156L14.5642 12.2621L13.8571 11.555L13.5036 11.9085L14.2107 12.6156ZM1 10.8335H0.5H1ZM11 0.833496V0.333496V0.833496ZM11 20.8335V20.3335V20.8335ZM21 10.8335H20.5H21ZM7.7893 12.6156L10.6464 15.4728L11.3536 14.7657L8.49641 11.9085L7.7893 12.6156ZM11.3536 15.4728L14.2107 12.6156L13.5036 11.9085L10.6464 14.7657L11.3536 15.4728ZM11.5 15.1192V5.8335H10.5V15.1192H11.5ZM1.5 10.8335C1.5 5.58679 5.7533 1.3335 11 1.3335V0.333496C5.20101 0.333496 0.5 5.03451 0.5 10.8335H1.5ZM11 20.3335C5.75329 20.3335 1.5 16.0802 1.5 10.8335H0.5C0.5 16.6325 5.20101 21.3335 11 21.3335V20.3335ZM20.5 10.8335C20.5 16.0802 16.2467 20.3335 11 20.3335V21.3335C16.799 21.3335 21.5 16.6325 21.5 10.8335H20.5ZM21.5 10.8335C21.5 5.03451 16.799 0.333496 11 0.333496V1.3335C16.2467 1.3335 20.5 5.58679 20.5 10.8335H21.5Z'
            fill={color}
          />
        </svg>
      );

    case Icons.ellipse:
      return (
        <svg
          width={size}
          height={size}
          className={className}
          data-testid={dataTestId}
          viewBox='0 0 3 3'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='1.69088' cy='1.89119' r='1.0909' fill={color} />
        </svg>
      );

    case Icons.filter:
      return (
        <svg
          width={size}
          height={size}
          className={className}
          data-testid={dataTestId}
          viewBox='0 0 20 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 0.666748H19.62M3.924 7.20675H15.696M6.54 13.7467H13.08'
            strokeWidth='2'
            stroke={color}
          />
        </svg>
      );

    case Icons.history:
      return (
        <svg
          width={size}
          height={size}
          className={className}
          data-testid={dataTestId}
          viewBox='0 0 22 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11 10.8335H10.5C10.5 10.9661 10.5527 11.0933 10.6464 11.187L11 10.8335ZM11 20.3335C5.7533 20.3335 1.5 16.0802 1.5 10.8335H0.5C0.5 16.6325 5.20101 21.3335 11 21.3335V20.3335ZM20.5 10.8335C20.5 16.0802 16.2467 20.3335 11 20.3335V21.3335C16.799 21.3335 21.5 16.6325 21.5 10.8335H20.5ZM11 1.3335C16.2467 1.3335 20.5 5.58679 20.5 10.8335H21.5C21.5 5.03451 16.799 0.333496 11 0.333496V1.3335ZM11 0.333496C5.20101 0.333496 0.5 5.03451 0.5 10.8335H1.5C1.5 5.58679 5.7533 1.3335 11 1.3335V0.333496ZM10.5 4.40492V10.8335H11.5V4.40492H10.5ZM10.6464 11.187L14.9322 15.4728L15.6393 14.7657L11.3536 10.4799L10.6464 11.187Z'
            fill={color}
          />
        </svg>
      );

    case Icons.left:
      return (
        <svg
          width={size}
          height={size}
          className={className}
          data-testid={dataTestId}
          viewBox='0 0 11 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.09741 2.3333L1.66664 9.2333L9.09741 16.1333'
            stroke={color}
            strokeWidth='2'
            strokeLinecap='square'
          />
        </svg>
      );

    case Icons.play:
      return (
        <svg
          width={size}
          height={size}
          className={className}
          data-testid={dataTestId}
          viewBox='0 0 22 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.57143 7.97635L9.8195 7.54223C9.66475 7.4538 9.47462 7.45444 9.32047 7.5439C9.16631 7.63336 9.07143 7.79812 9.07143 7.97635H9.57143ZM9.57143 13.6906H9.07143C9.07143 13.8689 9.16631 14.0336 9.32047 14.1231C9.47462 14.2126 9.66475 14.2132 9.8195 14.1248L9.57143 13.6906ZM14.5714 10.8335L14.8195 11.2676C14.9753 11.1786 15.0714 11.0129 15.0714 10.8335C15.0714 10.6541 14.9753 10.4884 14.8195 10.3994L14.5714 10.8335ZM11 20.3335C5.7533 20.3335 1.5 16.0802 1.5 10.8335H0.5C0.5 16.6325 5.20101 21.3335 11 21.3335V20.3335ZM20.5 10.8335C20.5 16.0802 16.2467 20.3335 11 20.3335V21.3335C16.799 21.3335 21.5 16.6325 21.5 10.8335H20.5ZM11 1.3335C16.2467 1.3335 20.5 5.58679 20.5 10.8335H21.5C21.5 5.03451 16.799 0.333496 11 0.333496V1.3335ZM11 0.333496C5.20101 0.333496 0.5 5.03451 0.5 10.8335H1.5C1.5 5.58679 5.7533 1.3335 11 1.3335V0.333496ZM9.07143 7.97635V13.6906H10.0714V7.97635H9.07143ZM9.8195 14.1248L14.8195 11.2676L14.3234 10.3994L9.32336 13.2565L9.8195 14.1248ZM14.8195 10.3994L9.8195 7.54223L9.32336 8.41047L14.3234 11.2676L14.8195 10.3994Z'
            fill={color}
          />
        </svg>
      );

    case Icons.right:
      return (
        <svg
          width={size}
          height={size}
          className={className}
          data-testid={dataTestId}
          viewBox='0 0 11 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1.66675 16.1335L9.09752 9.2335L1.66675 2.3335'
            stroke={color}
            strokeWidth='2'
            strokeLinecap='square'
          />
        </svg>
      );

    case Icons.tickthick:
      return (
        <svg
          width={size}
          height={size}
          className={className}
          data-testid={dataTestId}
          viewBox='0 0 25 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M2 8.49412L9.30588 15.8L23.1059 2'
            stroke={color}
            strokeWidth='2'
            strokeLinecap='square'
          />
        </svg>
      );

    case Icons.tick:
      return (
        <svg
          width={size}
          height={size}
          className={className}
          data-testid={dataTestId}
          viewBox='0 0 22 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M1 7.15409L7.92308 14.0772L21 1.00024' stroke={color} strokeLinecap='square' />
        </svg>
      );

    case Icons.uparrow:
      return (
        <svg
          width={size}
          height={size}
          className={className}
          data-testid={dataTestId}
          viewBox='0 0 30 17'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M28.6 15.3002L14.8 1.50024L1 15.3002'
            strokeWidth='5'
            stroke={color}
            strokeLinecap='square'
          />
        </svg>
      );

    case Icons.user:
      return (
        <svg
          width={size}
          height={size}
          className={className}
          data-testid={dataTestId}
          viewBox='0 0 22 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5.28571 18.8574V18.1429C5.28571 15.776 7.20449 13.8574 9.57143 13.8574H12.4286C14.7955 13.8574 16.7143 15.776 16.7143 18.1429V18.8574M11 5.28596C9.42204 5.28596 8.14286 6.56515 8.14286 8.1431C8.14286 9.72106 9.42204 11.0002 11 11.0002C12.578 11.0002 13.8571 9.72106 13.8571 8.1431C13.8571 6.56515 12.578 5.28596 11 5.28596ZM11 21.0002C5.47715 21.0002 1 16.5231 1 11.0002C1 5.4774 5.47715 1.00024 11 1.00024C16.5228 1.00024 21 5.4774 21 11.0002C21 16.5231 16.5228 21.0002 11 21.0002Z'
            stroke={color}
            strokeLinecap='square'
          />
        </svg>
      );

    case Icons.vector:
      return (
        <svg
          width={size}
          height={size}
          className={className}
          data-testid={dataTestId}
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M19.2462 9.24621C18.8299 9.24621 18.4925 9.58363 18.4925 10C18.4925 14.6829 14.6829 18.4925 10 18.4925C5.31734 18.4925 1.50754 14.6829 1.50754 10C1.50754 5.31734 5.31734 1.50754 10 1.50754C10.4163 1.50754 10.7538 1.17012 10.7538 0.753789C10.7538 0.337422 10.4163 0 10 0C4.48594 0 0 4.48594 0 10C0 15.5138 4.48594 20 10 20C15.5138 20 20 15.5138 20 10C20 9.58367 19.6626 9.24621 19.2462 9.24621Z'
            fill={color}
          />
        </svg>
      );

    case Icons.vectorone:
      return (
        <svg
          width={size}
          height={size}
          className={className}
          data-testid={dataTestId}
          viewBox='0 0 5 3'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0.332275 1.87646L0.562872 0.722309L4.02523 1.41407L3.79463 2.56823L0.332275 1.87646Z'
            fill={color}
          />
        </svg>
      );

    case Icons.alert:
      return (
        <svg
          width={size}
          height={size}
          className={className}
          data-testid={dataTestId}
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M14.5307 11.5976L12.6202 2.84087C12.4886 2.23805 12.1515 1.69295 11.671 1.30589C11.1905 0.918948 10.586 0.705811 9.96904 0.705811H6.36409C5.07511 0.705811 3.95606 1.62322 3.70327 2.88718L1.96072 11.6C1.17115 11.8723 0.602173 12.6224 0.602173 13.5033V15.9999H15.8963V13.5033C15.8963 12.6197 15.3239 11.8679 14.5307 11.5976ZM4.85688 3.11789C5.00009 2.40193 5.63398 1.88228 6.36409 1.88228H9.96904C10.6863 1.88228 11.3179 2.39091 11.4708 3.09165L13.3032 11.4901H8.83747V10.0535C10.0693 9.78338 10.9943 8.6842 10.9943 7.37248C10.9943 5.85879 9.76292 4.62738 8.24923 4.62738C6.73558 4.62738 5.50413 5.85879 5.50413 7.37248C5.50413 8.6842 6.42915 9.78338 7.661 10.0535V11.4901H3.18245L4.85688 3.11789ZM8.24923 8.9411C7.38429 8.9411 6.6806 8.23742 6.6806 7.37248C6.6806 6.50754 7.38429 5.80385 8.24923 5.80385C9.11417 5.80385 9.81786 6.50754 9.81786 7.37248C9.81786 8.23742 9.11417 8.9411 8.24923 8.9411ZM14.7198 14.8235H1.77864V13.5033C1.77864 13.0419 2.15398 12.6666 2.61531 12.6666H13.8832C14.3445 12.6666 14.7198 13.0419 14.7198 13.5033V14.8235Z'
            fill={color}
          />
        </svg>
      );
    case Icons.more:
      return (
        <svg
          width={size}
          height={size}
          className={className}
          data-testid={dataTestId}
          viewBox='0 0 25 25'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='12.5' cy='12.5' r='12' stroke={color} />
          <circle cx='8.36363' cy='12.3636' r='1.36363' fill={color} />
          <circle cx='12.7272' cy='12.3636' r='1.36363' fill={color} />
          <circle cx='17.6366' cy='12.3636' r='1.36363' fill={color} />
        </svg>
      );
    case Icons.checkboxUnchecked:
      return (
        <svg
          width='14'
          height='14'
          viewBox='0 0 14 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect x='0.5' y='0.5' width='12' height='12' stroke='#B4B4B4' />
        </svg>
      );
    case Icons.checkboxChecked:
      return (
        <svg
          width='14'
          height='22'
          viewBox='0 0 14 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect x='1' y='4' width='12' height='12' fill={color} />
          <path d='M4.19995 10L6.59995 12L9.79995 8' stroke='white' />
        </svg>
      );
    case Icons.success:
      return (
        <svg
          width={size}
          height={size}
          className={className}
          data-testid={dataTestId}
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_170_64)'>
            <path
              d='M19.428 2.73409C19.1338 2.43936 18.6564 2.43885 18.3622 2.73284L9.31953 11.7517L6.05695 8.20819C5.77503 7.90217 5.29839 7.88233 4.99187 8.1642C4.68558 8.44612 4.66597 8.92299 4.94789 9.22928L8.74187 13.3496C8.88082 13.5006 9.07527 13.5883 9.28031 13.5926C9.28582 13.5928 9.29113 13.5928 9.2964 13.5928C9.49566 13.5928 9.68734 13.5137 9.82855 13.373L19.4266 3.80014C19.7215 3.5062 19.722 3.02881 19.428 2.73409Z'
              fill={color}
            />
            <path
              d='M19.2462 9.24621C18.8299 9.24621 18.4925 9.58363 18.4925 10C18.4925 14.6829 14.6829 18.4925 10 18.4925C5.31734 18.4925 1.50754 14.6829 1.50754 10C1.50754 5.31734 5.31734 1.50754 10 1.50754C10.4163 1.50754 10.7538 1.17012 10.7538 0.753789C10.7538 0.337422 10.4163 0 10 0C4.48594 0 0 4.48594 0 10C0 15.5138 4.48594 20 10 20C15.5138 20 20 15.5138 20 10C20 9.58367 19.6626 9.24621 19.2462 9.24621Z'
              fill={color}
            />
          </g>
          <defs>
            <clipPath id='clip0_170_64'>
              <rect width='20' height='20' fill='white' />
            </clipPath>
          </defs>
        </svg>
      );
    default:
      return <div data-testid={dataTestId}>No Icon</div>;
  }
};

export default Iconography;
