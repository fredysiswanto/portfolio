const inputText = "ini cendol ibu budi, ini cendol bapak cendol budi";

function prosesText(input) {
  const result = [];
  const text = input.split(" ")
  text.forEach(val => {
    result[val] = (result[val] || 0) + 1
  });

  // [page1:[key:val],[key:val],
  // page2:[key:val],[key:val]]

  const data = [];

  for (const [key, val] of Object.entries(result)) {
    data.page1 = result

  }
  console.log(data.page1)
  return data
}




console.log(prosesText(inputText));












// let data = [];

// function textGen() {
//   result = [];
//   for (let i = 0; i < 20; i++) {
//     result.push(`text${i}`);
//   }
//   return result;
// }

// function spart() {
//   const textList = textGen();
//   result = {
//     page1: ["text1", "text2"]
//   }
//   result.page1.push("cendol")
//   return result;
// }
// console.log(spart())