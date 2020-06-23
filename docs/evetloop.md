## 事件环理解

### 名词解释

`task`：宏任务，包括：点击事件，setTimeout，Run script，
`microtask`：微任务，包括：promise，MutationObserver(cb).observer(tag, options)
`JS stack`：JS 执行栈，函数执行时往主执行栈中添加一个执行上下文，该执行上下文结束后，就会退出执行栈，释放内存。

### 执行顺序 - 浏览器

[Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)

- **思考**：下面这段代码，点击 `div.inner` 会怎么执行？

  ```html
  <div class="outer">
    <div class="inner"></div>
  </div>
  ```

  ```js
  var outer = document.querySelector('.outer');
  var inner = document.querySelector('.inner');

  new MutationObserver(function () {
    console.log('mutate');
  }).observe(outer, {
    attributes: true,
  });

  function onClick() {
    console.log('click');

    setTimeout(function () {
      console.log('timeout');
    }, 0);

    Promise.resolve().then(function () {
      console.log('promise');
    });

    outer.setAttribute('data-random', Math.random());
  }

  inner.addEventListener('click', onClick);
  outer.addEventListener('click', onClick);
  ```
  
  如图：
  <div style='width: 60px; background: #eaeaea; padding: 20px; color: #333;'>
    <div style='background: #a9a9a9; padding: 20px;'></div>
  </div>

  结果：
  ```js
  click
  promise
  mutate
  click
  promise
  mutate
  timeout
  timeout
  ```

  过程解析：
  - **宏任务队列**: Dispatch click -> setTimeout callback -> setTimeout callback
  - **执行栈**: onClick -> **onClick 出栈** -> Promise callback (出栈)-> Mutation callback (出栈)-> onClick (出栈) -> Promise callback (出栈)-> Mutation callback (出栈，结束！)
  - **打印日志**: click -> promise -> mutate -> click -> promise -> mutate -> timeout -> timeout
  - **微任务队列**：Promise then -> Mutation observers -> Promise then -> Mutation observers

  > 重要提示：**执行栈**中第一次 onClick 出栈后，代表当前执行栈为空，在进入下一个执行上下文前，会依次执行当前微任务队列中所有任务（每调取下一个宏任务前，都会清空微任务）。

  > 微任务清空：依次把微任务队列中的任务放到执行栈（主栈）中执行，再出栈。

  > 提示：Dispatch click 事件冒泡到 div.outer，继续进入 onClick 执行上下文

- **思考**：同样的代码，替代点击，程序调用 `inner.click()` 会怎么执行？

  结果：
  ```js
  click
  click
  promise
  mutate
  promise
  timeout
  timeout
  ```

  > 重要提示：程序中调用 `inner.click()`，会在 `JS stack` 中推入一个 `script` 执行上下文（栈顶）。导致第一个 `onClick` 执行上下文执行出栈后，执行主栈并不为空，执行栈处于 `mid-execution`，不能清空微任务。
  此时，推入第二个 `onClick` 执行上下文。

  > 提示：注意第一个 mutationObserver 未执行处于 pending 状态时，不会再次触发，因此值打印一个 mutate