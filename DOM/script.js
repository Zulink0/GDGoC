// document.getElementById('demo').innerHTML = 'Hai member gdgoc unhas';
// document.title = 'DOM Manipulation';
// const body = document.body;

// const h2 = document.createElement('h2'); // <h2></h2> //document.createElement('h2').innerHTML = 'ini H2'
// h2.innerHTML = '<marquee>ini H2</marquee>'; //<h2>ini H2</h2>

// const heading3 = (document.createElement('h3').innerText =
//   '<marquee>ini H2</marquee>');

// const h3 = (document.createElement('h3').textContent =
//   '<marquee>ini H2</marquee>');

// body.append(h2);
// body.append(h3);
// body.append(heading3);

// function abc() {}
// const blabla = () => {};

const btnTambah = document.getElementById('btnTambah');
const btnKurang = document.getElementById('btnKurang');
const btnReset = document.getElementById('btnReset');
const label = document.getElementById('label');

let count = 0;

const updateLabel = () => {
  label.textContent = count;
};

const tambahBtn = () => {
  
    count ++;

  updateLabel();
};
const tambahBtn10 = () => {
  
    count += 10;

  updateLabel();
};

const kurangBtn = () => {
  count--;
  updateLabel();
};

const resetBtn = () => {
  count = 0;
  updateLabel();
};

// btnTambah.addEventListener('click', function () {
//   count++; // countNew = countOld + 1
//   updateLabel();
// });

// btnReset.addEventListener('click', () => {
//   count = 0; // countNew = 0
//   updateLabel();
// });

// btnKurang.addEventListener('click', function () {
//   count--; // countNew = countOld - 1
//   updateLabel();
// });