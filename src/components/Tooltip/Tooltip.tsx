import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import React from 'react';
import Styles from './Tooltip.module.css';

type ToolTipProps = {
  id?: string;
  dataTestId?: string;
  contentStyle?: string;
  triggerStyle?: string;
  text: string | JSX.Element | JSX.Element[];
  trigger?: JSX.Element | JSX.Element[] | string;
  clickAble?: boolean;
  ariaLabel?: string;
  tooltipId?: string;
};

const Provider = TooltipPrimitive.Provider;
const Tooltipp = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const ToolTipContent = TooltipPrimitive.Content;

const Tooltip = (props: ToolTipProps) => {
  const {
    text,
    contentStyle,
    trigger,
    triggerStyle,
    dataTestId = 'xt-ui-kit-tooltip-component',
    clickAble,
    ariaLabel = 'tooltip',
    tooltipId = 'tooltip',
  } = props;
  const [open, setOpen] = React.useState(!clickAble);
  const prop = clickAble ? { open: open } : {};

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div data-testid={dataTestId}>
      <Provider>
        <Tooltipp {...prop}>
          <TooltipTrigger
            onClick={handleClick}
            id={tooltipId}
            aria-label={ariaLabel}
            className={`${Styles.trigger} ${triggerStyle}`}
          >
            {trigger}
          </TooltipTrigger>
          <ToolTipContent
            aria-describedby={tooltipId}
            className={`${Styles.content} ${contentStyle}`}
          >
            {text}
          </ToolTipContent>
        </Tooltipp>
      </Provider>
    </div>
  );
};

export default Tooltip;
