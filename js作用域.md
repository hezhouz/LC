### 作用域
作用域是指程序源代码中定义变量的区域。
作用域规定了人格查找变量，也就是确定当前执行代码变量的访问权限
javaScript 采用词法作用域（lexical scoping）也就是静态作用域

### 静态作用域与动态作用域
因为 js 采用的是词法作用域， 函数的作用域在函数定义的时候已经确定了。
而词法作用域相对的就是动态作用域， 函数的作用域在函数调用的时候才决定的。
举个例子；
```js
var value = 1;

function foo() {
    console.log(value);
}

function bar() {
    var value = 2;
    foo();
}

bar();

// 结果是 ???    1
```
执行foo函数，先从foo函数内部查找是否有局部变量 value， 如果没有， 就根据书写的位置，查找上面一层的代码，也就是 value 等于 1， 所以结果会打印 1 

### 思考题
```js
  var scope = "global scope";
  function checkscope(){
      var scope = "local scope";
      function f(){
          return scope;
      }
      return f();
  }
  checkscope(); // local scope
```

```js
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()(); // local scope
```

**函数的作用域基于函数创建的位置**

