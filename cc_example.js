// Task 5 
let orders = [
    { id: 101, customer: "Alice", total:300},
    {id:102, customer: "Bob", total: 450},
    {id: 103, customer: "Charlie", total: 200}
];

function findOrder(orders, orderId) {
    return orders.find(order => order.id === orderId);
}

console.log(findOrder(orders, 102));

// Task 6 

let inventory = {
    items: [],
    addItem(name, quantity) {
        this.items.push({name, quantity});
    }
    removeLastestItem(){
        this.items.pop();
    },
    removeFirstItem(){
        this.items.shift();
    },

};

inventory.addItem("Monitor", 5);
inventory.addItem("Keyboard",10);
inventory.addItem("Mouse",3);
console.log(JSON.stringify(inventory.items));
inventory.removeLastestItem();
console.log(JSON.stringify(inventory.items));
inventory.removeFirstItem();
console.log(JSON.stringify(inventory.items));

// Task 7 

let employees = [
    {name: "Alice", position: "Developer", salary: 70000},
    {name: "Bob", position: "Designer", salary: 60000},
    {name: "Charlie", position: "Manager", salary: 90000}
];

function findEmployee(employees, name) {
    return employees.find(employee => employee.name === name);
}

console.log(findEmployee(employees, 'Bob'));



