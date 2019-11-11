function hello(names: readonly string[]) {
  names.push('!!!');
  console.log(`Hello, ${names}`);
}

hello(['typescript']);
