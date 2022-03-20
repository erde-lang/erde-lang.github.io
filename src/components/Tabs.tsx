import classNames from 'classnames';
import { MouseEventHandler, ReactNode, useEffect, useState } from 'react';
import styles from './Tabs.module.scss';

export interface Tab {
  id: string;
  label?: ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
}

export interface TabsProps {
  tabs: Tab[];
  className?: string;
  selectedTabId?: string;
  defaultSelectedTabId?: string;
  onChange?: (id: string) => void;
}

export const Tabs = (props: TabsProps) => {
  const [selectedTabId, setSelectedTabId] = useState(
    props.selectedTabId ??
      props.defaultSelectedTabId ??
      props.tabs[0]?.id ??
      '',
  );

  useEffect(() => {
    if (props.selectedTabId !== undefined) {
      setSelectedTabId(props.selectedTabId);
    }
  }, [props.selectedTabId]);

  useEffect(() => {
    if (selectedTabId) {
      props.onChange?.(selectedTabId);
    }
  }, [selectedTabId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ul className={classNames(styles.tabs, props.className)}>
      {props.tabs.map(tab => (
        <li
          key={tab.id}
          role="tab"
          aria-selected={tab.id === selectedTabId}
          children={tab.label ?? tab.id}
          onClick={event => {
            tab.onClick?.(event);
            props.onChange?.(tab.id);
            if (props.selectedTabId === undefined) {
              setSelectedTabId(tab.id);
            }
          }}
        />
      ))}
    </ul>
  );
};
