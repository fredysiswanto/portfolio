const input_text = "Lorem ipsum ipsum ipsum dolor, sit amet consectetur adipisicing elit. Eum accusantium ipsa neque molestiae consequuntur sit accusamus deserunt, obcaecati dicta unde.";

function Proses(input) {
  let result = {};
  const data = {};
  input.split(' ').map(val => {
    if (!data.hasOwnProperty(val)) {
      data[val] = 1
    } else {
      data[val] = data[val] + 1
    }
  })

  result = Object.entries(data).sort(([, a], [, b]) => b - a);
  return result;
}


function page(input) {
  const result = input;
  return result;
}



console.log(Proses(input_text))