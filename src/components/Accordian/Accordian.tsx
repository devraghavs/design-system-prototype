import { useState, useEffect } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import Iconography from '../Iconography';
import { Icons } from '../Iconography/iconsEnum';
import { AcordianEnum } from './accordianEnum';
import Styles from './accordian.module.css';

interface IAcordiantProps {
  accordionItemStyle?: string;
  triggerStyle?: string;
  dataTestId?: string;
  collapsible?: boolean;
  defaultValue?: string | string[];
  type?: AcordianEnum.SINGLE | AcordianEnum.MULTIPLE;
  data?: IAcordianObjectProps[];
  handleToggleCallback?: () => void;
}

interface IAcordianObjectProps {
  value?: string;
  headerProps?: JSX.Element | JSX.Element[] | string;
  contentProps?: JSX.Element | JSX.Element[] | string;
  disabled?: boolean;
}

interface IActiveprop {
  [index: number]: boolean;
}

const Accordian = ({
  accordionItemStyle,
  triggerStyle,
  dataTestId = 'xt-ui-kit-accordian-component',
  defaultValue,
  type = AcordianEnum.SINGLE,
  collapsible = true,
  data = [],
  handleToggleCallback,
}: IAcordiantProps) => {
  const [isActive, setActive] = useState<IActiveprop>({});
  const handleToggle = (index: number) => {
    if (type === AcordianEnum.SINGLE) {
      if (isActive[index]) {
        setActive({});
      } else {
        setActive({
          [index]: true,
        });
      }
    }
    if (type === AcordianEnum.MULTIPLE) {
      if (isActive[index]) {
        const clonedIsActive = JSON.parse(JSON.stringify(isActive));
        delete clonedIsActive[index];
        setActive(clonedIsActive);
      } else {
        setActive((prev) => ({ ...prev, [index]: true }));
      }
    }

    if (handleToggleCallback) {
      handleToggleCallback();
    }
  };

  const accordionProps: any =
    type == AcordianEnum.SINGLE
      ? { type: type, defaultValue: defaultValue ?? '', collapsible: collapsible }
      : { type: type, defaultValue: [defaultValue].length > 0 ? defaultValue : [''] };

  useEffect(() => {
    const activeIndexs: IActiveprop = {};

    if (Array.isArray(defaultValue)) {
      defaultValue.forEach((item) => {
        data.forEach((x, i) => {
          if (x.value == item) {
            activeIndexs[i] = true;
          }
        });
      });
    } else {
      data.forEach((x, i) => {
        if (x.value == defaultValue) {
          activeIndexs[i] = true;
        }
      });
    }
    setActive(activeIndexs);
  }, [defaultValue]);

  if (defaultValue) {
    if (type === AcordianEnum.SINGLE && typeof defaultValue !== 'string') {
      return <div data-testid={dataTestId}>{AcordianEnum.SINGLE_TYPE_ERROR}</div>;
    }
    if (type === AcordianEnum.MULTIPLE && !Array.isArray(defaultValue)) {
      return <div data-testid={dataTestId}>{AcordianEnum.MULTIPLE_TYPE_ERROR}</div>;
    }
  }
  return (
    <div data-testid={dataTestId}>
      <Accordion.Root {...accordionProps}>
        {data.map((item, index) => (
          <Accordion.Item
            key={index}
            disabled={item.disabled ?? false}
            value={item.value ?? index.toString()}
            className={`${Styles.itemContainer} ${accordionItemStyle}`}
          >
            <Accordion.Trigger
              onClick={() => handleToggle(index)}
              className={`${Styles.togglebtn} ${triggerStyle}`}
            >
              <span className={Styles.triggertext}>{item.headerProps ?? ''}</span>
              <span className={Styles.arrow}>
                <Iconography
                  icon={isActive[index] ? Icons.remove : Icons.addplus}
                  color='white'
                  size='20'
                  className={Styles.accordianbutton}
                />
              </span>
            </Accordion.Trigger>
            <Accordion.Content className={Styles.content}>
              <hr />
              {item.contentProps ?? ''}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};

export default Accordian;
