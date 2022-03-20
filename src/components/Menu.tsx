import classNames from 'classnames';
import { MouseEventHandler, ReactNode, useEffect, useState } from 'react';
import styles from './Menu.module.scss';

export interface MenuItem {
  id: string;
  label?: ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
}

export interface MenuProps {
  items: MenuItem[];
  className?: string;
  selectedItemId?: string;
  defaultSelectedItemId?: string;
  onChange?: (id: string) => void;
}

export const Menu = (props: MenuProps) => {
  const [selectedItemId, setSelectedItemId] = useState(
    props.selectedItemId ??
      props.defaultSelectedItemId ??
      props.items[0]?.id ??
      '',
  );

  useEffect(() => {
    if (props.selectedItemId !== undefined) {
      setSelectedItemId(props.selectedItemId);
    }
  }, [props.selectedItemId]);

  useEffect(() => {
    if (selectedItemId) {
      props.onChange?.(selectedItemId);
    }
  }, [selectedItemId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <menu className={classNames(styles.menu, props.className)}>
      {props.items.map(item => (
        <li
          key={item.id}
          aria-selected={item.id === selectedItemId}
          children={item.label ?? item.id}
          onClick={event => {
            item.onClick?.(event);
            props.onChange?.(item.id);
            if (props.selectedItemId === undefined) {
              setSelectedItemId(item.id);
            }
          }}
        />
      ))}
    </menu>
  );
};
