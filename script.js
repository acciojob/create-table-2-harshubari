function createTable() {
	let row = prompt("Input number of rows") 	
	let col = prompt("Input number of columns")

	let table = document.getElementById("myTable");
	

	for (let i = 0; i < row; i++) {
		let row = table.insertRow(i);
		for (let j = 0; j < col; j++) {
			let cell = row.insertCell(j);	
			cell.textContent = "Row-" + i + " Column-" + j;
		}
	}
}
