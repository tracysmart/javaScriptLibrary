function func1(input){ //'input' refers to 'func2' from line 100
    return input(7);//'input(7)' is the same as 'return num + ':i am a number''
  }
  function func2(num){ //'func2' only runs because of 'func1'
    return num + ':i am a number';
  }
  
  console.log(func1(func2));