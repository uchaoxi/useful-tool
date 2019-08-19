function add(a, b) {
  console.log(typeof a)
  return a + b;
}
self.addEventListener('message', (e) => {

  let data = e.data;
  console.log(data)
  switch(data.method) {
    case 'add': self.postMessage(add(...data.params)); break;
  }
})