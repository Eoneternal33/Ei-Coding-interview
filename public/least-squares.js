
document.addEventListener('DOMContentLoaded', init, false);

function init() {

  const btnUpdateGraph = document.querySelector('.btn-update-graph');
  const tablePairs = document.querySelector('.table-pairs');
  const showCost = document.querySelector('.cost');

  const inputX = document.querySelector('.input-x');
  const inputY = document.querySelector('.input-y');
  const inputZ = document.querySelector('.input-z');
  const inputB = document.querySelector('.input-b');


  btnUpdateGraph.addEventListener('click', () => {
    const x = parseFloat(inputX.value);
    const y = parseFloat(inputY.value);
    const z = parseFloat(inputZ.value);
    const b = parseFloat(inputB.value);

    updateTable(x, y, z, b);

    costEstimate(x, y, z, b);

    clearInputs();
  });

  function costEstimate(x, y, z, b) {
    const tr = document.createElement('tr');
    const est = x + y + z + b

   showCost.innerHTML = `Estimated Cost is $${est}`;

 if ( inputB.value > 0) {
      showCost.innerHTML = `Estimated Cost is $${est + 200}`;
    }
    console.log(est)
  }

  function updateTable(x, y, z, b) {
    const tr = document.createElement('tr');
    const tdX = document.createElement('td');
    const tdY = document.createElement('td');
    const tdZ = document.createElement('td');
    const tdB = document.createElement('td');

    tdX.innerHTML = x;
    tdY.innerHTML = y;
    tdZ.innerHTML = z;
    tdB.innerHTML = b;

    tr.appendChild(tdX);
    tr.appendChild(tdY);
    tr.appendChild(tdZ);
    tr.appendChild(tdB);

    tablePairs.querySelector('tbody').appendChild(tr);
  }

  function clearInputs() {
    inputX.value = '';
    inputY.value = '';
    inputZ.value = '';
    inputB.value = '';
  }
}
