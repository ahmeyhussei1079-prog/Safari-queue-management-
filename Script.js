
let queue = [];
let completedCustomers = [];
let nextQueueNumber = 1;

// Join the queue
function joinQueue() {
    const nameInput = document.getElementById("customerName");
    const customerName = nameInput.value.trim();

    if (customerName === "") {
        alert("Please enter your name!");
        return;
    }

    const customer = {
        name: customerName,
        number: nextQueueNumber++
    };

    queue.push(customer);

    nameInput.value = "";

    updateDashboard();

    alert("Welcome! Your queue number is " + customer.number);
}

// Display waiting customers
function displayQueue() {
    const queueList = document.getElementById("queueList");

    if (!queueList) return;

    queueList.innerHTML = "";

    queue.forEach(customer => {
        const item = document.createElement("li");

        item.textContent =
            "Queue #" + customer.number + " - " + customer.name;

        queueList.appendChild(item);
    });
}

// Call the next customer
function callNextCustomer() {
    if (queue.length === 0) {
        alert("No customers are waiting!");
        return;
    }

    const customer = queue.shift();

    completedCustomers.push(customer);

    const currentCustomer =
        document.getElementById("currentCustomer");

    if (currentCustomer) {
        currentCustomer.textContent =
            "Now Serving: #" + customer.number +
            " - " + customer.name;
    }

    updateDashboard();
}

// Update dashboard statistics
function updateDashboard() {
    const waitingCount = document.getElementById("waitingCount");
    const servedCount = document.getElementById("servedCount");

    if (waitingCount) {
        waitingCount.textContent = queue.length;
    }

    if (servedCount) {
        servedCount.textContent = completedCustomers.length;
    }

    displayQueue();
}

// Initialize dashboard
document.addEventListener("DOMContentLoaded", function () {
    updateDashboard();
});
      
