const input_text = "Lorem ipsum ipsum ipsum dolor, sit amet consectetur adipisicing elit. Eum accusantium ipsa neque molestiae consequuntur sit accusamus deserunt, obcaecati dicta unde.";

function Proses(input) {
  let result = {};
  const data = [];
  input.split(' ').map(val => {
    if (!data.hasOwnProperty(val)) {
      data[val] = 1
    } else {
      data[val] = data[val] + 1
    }
  })
  return data;
}

function page() {
  const result = {};
  const data_text = Proses(input_text);
  let i = 0;
  return result
}




console.log(page())