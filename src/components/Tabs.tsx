import classNames from 'classnames';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import styles from './Tabs.module.scss';

export interface Tab {
  id: string;
  label?: string;
  className?: string;
  onClick?: MouseEventHandler;
}

export interface TabsProps {
  tabs: Tab[];
  className?: string;
  defaultSelected?: Tab;
  ariaControls?: string;
  onChange?: (newTab: Tab) => void;
}

export const Tabs = (props: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState<Tab | null>(
    props.defaultSelected ?? props.tabs[0]
  );

  useEffect(() => {
    if (selectedTab) {
      props.onChange?.(selectedTab);
    }
  }, [selectedTab]);

  return (
    <ul className={classNames(styles.tabs, props.className)}>
      {props.tabs.map(tab => (
        <li key={tab.id}>
          <button
            role="tab"
            aria-selected={tab.id === selectedTab?.id}
            aria-controls={props.ariaControls}
            children={tab.label ?? tab.id}
            onClick={event => {
              setSelectedTab(tab);
              tab.onClick?.(event);
            }}
          />
        </li>
      ))}
    </ul>
  );
};
