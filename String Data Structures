document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
let k = 0;
let out = '';
let gre;
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  let rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const [...first] = row.toLowerCase().trim().split('_');
    for (const data of first) {
      if (k === 0) {
        out = out + data;
        k++;
      } else {
        out = out + data.replace(data[0], data[0].toUpperCase());
      }
    }
    k = 0;

    console.log(out);
    out = '';
  }
});
