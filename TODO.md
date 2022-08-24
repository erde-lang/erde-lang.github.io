- tutorial
- playground

- internal implementation notes?
  - cannot retain line numbers for compiled code
    - local { x = myexpr() } =
        myreallylongfunctioncall()
    - Error can happen at default assignment in destructure or assignment expr
    - Cannot keep destructure on same line, since it needs to happen after
      assignment and need to also retain line number of `myreallylongfunctioncall`!
