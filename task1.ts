import * as readlineSync from 'readline-sync';

// Product class definition
class Product {
    name: string;
    amount: number;
    price: number;
    category: string;

    constructor(name: string, price: number, category: string, amount: number) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.amount = amount;
    }
}

// Global variable to store the total
let total: number;

// Array of products
const products: Product[] = [
    new Product("Apple", 15, "fruits", 1),
    new Product("Banana", 10, "fruits", 1),
    new Product("Potato", 25, "vegetables", 1),
    new Product("Tomato", 40, "vegetables", 1),
    new Product("Meat", 300, "groceries", 1),
    new Product("Eggs", 20, "groceries", 1),
    // Add more products as needed
];

// Initial welcome messages
console.log("-------------------------------------------------------------------------------");
console.log("\t\t\tWelcome to DizzyVerse");
console.log("-------------------------------------------------------------------------------");

// Set a timeout to clear the console and display the main menu after 2 seconds
setTimeout(() => {
    console.clear();
    console.log("\n\n❤️ ❤️ ❤️  Main Menu ❤️ ❤️ ❤️");
    console.log("1. Fruits");
    console.log("2. Vegetables");
    console.log("3. Groceries");
    buying();
}, 2000);

// Buying function to handle product selection
function buying() {
    do {
        // Prompt user to enter the serial number of the product
        var userInput = readlineSync.question('Enter the serial number of the product: ');
    } while (userInput != 1 && userInput != 2 && userInput != 3);

    console.clear();

    // Handle different scenarios based on user input
    if (userInput == 1) {
        // Display available fruits
        const fruits: Product[] = products.filter(product => product.category === "fruits");
        console.log("\nAvailable fruits are:")
        fruits.map((fruit, index) => {
            console.log(`${index + 1}. ${fruit.name}(Rs${fruit.price})`);
        });

        // Prompt user to enter the serial number and amount of the selected fruit
        var fruit_name = readlineSync.question('Enter the serial number of the product: ');
        var fruit_amount = readlineSync.question('Enter the amount of the product: ');

        // Calculate total based on the selected fruit
        total = fruits[fruit_name - 1].price * fruit_amount;
    } else if (userInput == 2) {
        // Display available vegetables
        const vegies: Product[] = products.filter(product => product.category === "vegetables");
        console.log("\nAvailable vegetables are:")
        vegies.map((vegie, index) => {
            console.log(`${index + 1}. ${vegie.name}(Rs${vegie.price})`);
        });

        // Prompt user to enter the serial number and amount of the selected vegetable
        var veg_name = readlineSync.question('Enter the serial number of the product: ');
        var veg_amount = readlineSync.question('Enter the amount of the product: ');

        // Calculate total based on the selected vegetable
        total = vegies[veg_name - 1].price * veg_amount;
    } else if (userInput == 3) {
        // Display available groceries
        const groceries: Product[] = products.filter(product => product.category === "groceries");
        console.log("\nAvailable groceries are:")
        groceries.map((groc, index) => {
            console.log(`${index + 1}. ${groc.name}(Rs${groc.price})`);
        });

        // Prompt user to enter the serial number and amount of the selected grocery
        var groc_name = readlineSync.question('Enter the serial number of the product: ');
        var groc_amount = readlineSync.question('Enter the amount of the product: ');

        // Calculate total based on the selected grocery
        total = groceries[groc_name - 1].price * groc_amount;
    }

    // Proceed to discount calculation
    discount(total);
}

// Function to calculate discount
function discount(total: number) {
    var discount_limit: number = 150;

    console.clear()
    console.log("Your total bill is " + total + "\nLet us check for discounts.....................")

    // Set a timeout to simulate discount calculation
    setTimeout(() => {
        console.log(".....................................");

        // Apply discount if the total is greater than or equal to the discount limit
        if (total >= discount_limit) {
            total = total - 50;
        }

        console.clear()
        console.log("Bill after discount is " + total)

        // Proceed to checkout
        checkout();
    }, 2000);
}

// Function to handle the checkout process
function checkout() {
    let paymentMethod: string;

    while (!paymentMethod) {
        console.log("\n=== Payment Options ===");

        let isValidChoice = false;

        while (!isValidChoice) {
            // Display payment options
            console.log("1. Credit Card");
            console.log("2. Debit Card");
            console.log("3. Cash");

            // Prompt user to choose a payment method
            const paymentChoice = readlineSync.questionInt('Choose a payment method (1-3): ');

            switch (paymentChoice) {
                case 1:
                    paymentMethod = "Credit Card";
                    isValidChoice = true;
                    break;
                case 2:
                    paymentMethod = "Debit Card";
                    isValidChoice = true;
                    break;
                case 3:
                    paymentMethod = "Cash";
                    isValidChoice = true;
                    break;
                default:
                    console.log("Invalid choice. Please try again.");
            }
        }
    }

    // Display confirmation message
    console.log(`\nThank you for shopping with us!`);
    console.log(`Payment successful via ${paymentMethod}.`);
}
