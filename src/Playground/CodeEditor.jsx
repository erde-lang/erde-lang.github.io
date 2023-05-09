import CodeBlock from '@theme/CodeBlock';
import classNames from 'classnames';
import { useState } from 'react';
import ReactSimpleCodeEditor from 'react-simple-code-editor';
import styles from './CodeEditor.module.scss';

export const EXAMPLES_CONFIG = [
  {
    label: 'Blank',
    value: '',
  },
  {
    label: 'Fibonacci',
    value: `function fibonacci(n = 0) {
  if n == 0 {
    return 0
  } else {
    local a, b = 0, 1

    for i = 2, n {
      a, b = b, a + b
    }

    return b
  }
}

print(fibonacci(9))`,
  },
  {
    label: 'FizzBuzz',
    value: `for i = 1, 100 {
  if i % 15 == 0 {
    print('FizzBuzz')
  } elseif i % 3 == 0 {
    print('Fizz')
  } elseif i % 5 == 0 {
    print('Buzz')
  } else {
    print(i)
  }
}`,
  },
  {
    label: 'Assignment Operators',
    value: `local a = 1
print(a)

a += 1
print(a)

a *= 5
print(a)`,
  },
  {
    label: 'Parameter Defaults',
    value: `function greet(message = 'hello world') {
  print(message)
}

greet()
greet('goodbye world')`,
  },
  {
    label: 'Named Varargs',
    value: `function sum(...summands) {
  local total = 0

  for i, summand in ipairs(summands) {
    total += summand
  }

  return total
}

print(sum(1, 2, 3, 4))`,
  },
  {
    label: 'Continue',
    value: `function print_odds(limit) {
  for i = 1, limit {
    if i % 2 == 0 {
      continue
    }

    print(i)
  }
}

print_odds(10)`,
  },
  {
    label: 'String Interpolation',
    value: `local msg = 'world'

print('hello {msg}')
print("hello {msg}")
print([[hello {msg}]])

-- escaped brace
print("hello \\{msg}")`,
  },
  {
    label: 'Destructuring',
    value: `local my_table = {
  my_value = 5,
  'child1',
  'child2',
}

-- map destructure
local { my_value } = my_table
print(my_value)

-- array destructure
local [ first_child, second_child ] = my_table
print(first_child)
print(second_child)`,
  },
  {
    label: 'Arrow Functions',
    value: `local mypairs = t -> (next, t, nil)

for key, value in mypairs({ 'a', 'b', 'c' }) {
  print(key, value)
}`,
  },
];

const Examples = props => (
  <ul
    className={classNames(styles.examples, props.className)}
    children={EXAMPLES_CONFIG.map(example => (
      <li
        key={example.label}
        className={styles.option}
        value={example.value}
        children={example.label}
        onClick={() => void props.onChange(example.value)}
      />
    ))}
  />
);

const Editor = props => (
  <div className={classNames(styles.editor, props.className)}>
    <ReactSimpleCodeEditor
      className={styles.reactSimpleCodeEditor}
      value={props.value}
      onValueChange={props.onChange}
      highlight={code => (
        <CodeBlock
          className={styles.codeBlock}
          language={props.language}
          children={code}
        />
      )}
    />
  </div>
);

export default props => {
  const [open, setOpen] = useState(false);

  return (
    <div className={classNames(styles.codeEditor, props.className)}>
      <div className={styles.loadExample} onClick={() => void setOpen(!open)}>
        Load Example
        <span
          className={classNames(styles.arrow, open && styles.open)}
          children="➜"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.scroll}>
          <Editor
            className={styles.fill}
            language={props.language}
            value={props.value}
            onChange={props.onChange}
          />
        </div>
        <div className={classNames(styles.scroll, !open && styles.hidden)}>
          <Examples
            className={styles.fill}
            value={props.value}
            onChange={newValue => {
              setOpen(false);
              props.onChange(newValue);
            }}
          />
        </div>
      </div>
    </div>
  );
};
