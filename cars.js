const cars = [
    {
        id: 1,
        name: 'BMW',
        model: 'Serie 3',
        color: 'Azul',
        year: 2020,
        price: 350000,
    },
    {
        id: 2,
        name: 'Ford',
        model: 'Mustang',
        color: 'Rojo',
        year: 2001,
        price: 250000,
    },
    {
        id: 3,
        name: 'Nissan',
        model: 'March',
        color: 'Gris',
        year: 2015,
        price: 100000,
    },
];

let idEditingCar = -1

function printCars() {
    const tbody = document.getElementById('t-body');
    tbody.innerHTML = ''
    cars.forEach ((car) => {
          tbody.innerHTML += '<tr><td>' + car.name + '</td><td>' + car.model + '</td><td>' + car.color +'</td><td>' + car.year + '</td><td>' + car.price + '</td><td><button class="btn btn-warning" onclick="eneableEdition('+ car.id +')">Editar</button>' + '</td><td><button class="btn btn-danger" onclick="deleteCar('+ car.id +')">Eliminar</button></td></tr>'
    })
}

function addCar () {
    const tablebody = document.getElementById('t-body')
    const name = document.getElementById('name').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;
    const newCar = { id: cars.length + 1, name:name, model: model, color: color, year: year, price: price};
    cars.push(newCar); 
    printCars();
}

function eneableEdition(identificador) {
    const editingCar = cars.find((car) => car.id === identificador)
    const inputName = document.getElementById('name');
    const inputModel = document.getElementById('model');
    const inputColor = document.getElementById('color');
    const inputYear = document.getElementById('year');
    const inputPrice = document.getElementById('price');

    inputName.value = editingCar.name;
    inputModel.value = editingCar.model;
    inputColor.value = editingCar.color;
    inputYear.value = editingCar.year;
    inputPrice.value = editingCar.price;

    idEditingCar = editingCar.id;
}

function updateCar() {
    const newName = document.getElementById('name').value;
    const newModel = document.getElementById('model').value;
    const newColor = document.getElementById('color').value;
    const newYear = document.getElementById('year').value;
    const newPrice = document.getElementById('price').value;

    if(idEditingCar === -1) {
        return;
    }
    
    const idEditingCar = car.find((car) => car.id === idEditingCar)
    editingCar.name = newName;
    editingCar.model = newModel;
    editingCar.color = newColor;
    editingCar.year = newYear;
    editingCar.price = newPrice;

    document.getElementById('name'.value="")

    printCars();
}

function deleteCar(id) {
    alert('¿Eliminamos el carro' + id + '?')
    const position = cars.findIndex((car) => car.id === id);
    console.log(position)
    cars.splice(position, 1);
    printCars();
}

printCars();



