function tableCreate(num) {
  let table = document.createElement("table");
  for (let i = 1; i <= num; i++) {
    let row = document.createElement("tr");
    for (let j = 1; j <= num; j++) {
      let column = document.createElement("td");
      column.innerText = i * j;
      row.append(column);
    }
    table.append(row);
  }
  return table;
}
document.body.append(tableCreate(10));
