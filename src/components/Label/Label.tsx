import Styles from './Label.module.css';

type LabelProps = {
  id?: string;
  htmlFor?: string;
  value: string;
  required?: boolean;
  className?: string;
  dataTestId?: string;
};

const Label = (props: LabelProps) => {
  const {
    htmlFor = '',
    value,
    required = false,
    className = '',
    id = '',
    dataTestId = 'xt-ui-kit-label-component',
  } = props;
  return value ? (
    <div className={Styles.label}>
      <label
        data-testid={dataTestId}
        id={id}
        htmlFor={htmlFor}
        className={`${Styles.default} ${className} ${required ? Styles.required : ''}`}
      >
        {value}
      </label>
    </div>
  ) : null;
};

export default Label;
