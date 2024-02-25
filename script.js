function createTable() {
	let row = prompt("Enter row: ") 	
	let col = prompt("Enter col: ")

	let table = document.getElementById("myTable");
	table.innerHTML = "";
	

	for (let i = 0; i < row; i++) {
		let row = table.insertRow(i);
		for (let j = 0; j < col; j++) {
			let cell = row.insertCell(j);	
			cell.textContent = "Row-" + i + " Column-" + j;
		}
	}
}
