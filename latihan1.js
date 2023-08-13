const tombolProses = document.getElementById('submit');
tombolProses.addEventListener('click', function(e){
	calculate()
	e.preventDefault()
})

const pembelian = [];

function calculate() {
	const objectPembelian = makeObject(getBarang(),getHarga(),getJumlah())
	pembelian.push(objectPembelian)
	
	calculateTotal(pembelian);
}

function calculateTotal(pembelianArray) {
	let totalHarga = 0;

	for (const pembelianItem of pembelianArray) {
			totalHarga += pembelianItem.harga;
	}
	
	const total = document.getElementById('total');
	total.textContent = `Total : ${totalHarga}`;
}


function getBarang() {
	const barang = document.getElementById('namaBarang').value;
	return barang;
}

function getHarga() {
	const harga = document.getElementById('harga').value;
	const stringHarga = parseInt(harga);
	return stringHarga;
}

function getJumlah() {
	const jumlah = document.getElementById('jumlah').value;
	const stringJumlah = parseInt(jumlah);
	return stringJumlah;
}



function makeObject(barang, harga, jumlah) {
	return {
		barang, 
		harga,
		jumlah 
	}
}

