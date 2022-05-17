import classNames from 'classnames';
import { ReactNode, useState } from 'react';
import styles from './Menu.module.scss';

export interface MenuItem {
  id: string;
  label: ReactNode;
}

export interface MenuProps<T extends MenuItem> {
  items: T[];
  className?: string;
  value?: T;
  defaultValue?: T;
  onChange?: (newItem: T) => void;
}

export const Menu = <T extends MenuItem>(props: MenuProps<T>) => {
  const [internalValue, setInternalValue] = useState(
    props.defaultValue ?? props.items[0],
  );
  const value = props.value ?? internalValue;

  return (
    <menu className={classNames(styles.menu, props.className)}>
      {props.items.map(item => (
        <li
          key={item.id}
          aria-selected={item.id === value.id}
          children={item.label}
          onClick={() => {
            setInternalValue(item);
            props.onChange?.(item);
          }}
        />
      ))}
    </menu>
  );
};
