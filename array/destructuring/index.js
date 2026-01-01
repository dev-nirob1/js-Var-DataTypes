const salad = ["tomato", "corn", "cucumber", "carrot"];
// const tomato = salad[0]
// const corn = salad[1]
// const cucumber = salad[2]
// const carrot = salad[3]

// default value
const [tomato, corn, cucumber, carrot, chili = "bombai"] = salad;
// console.log(tomato, corn, cucumber, carrot);
// console.log(chili);

// skip a value
// const [tomato, , cucumber, carrot] = ['tomato', 'corn', 'cucumber', 'carrot']
// console.log(salad);

// nested array destructuring problem
// Destructuring ব্যবহার করে নিচের variable গুলো বের করো:
// orderId → "order-123"
// customerName → "Alex"
// country → "Bangladesh"
// price → 500
// discount → 20
// isConfirmed → true
// ⚠️ Rule
// Direct index access (data[0]) ব্যবহার করা যাবে না

// শুধু nested array destructuring ব্যবহার করতে হবে
// const data = [
//   "order-123",
//   ["Alex", "Bangladesh"],
//   [500, 20],
//   true
// ];

// const [orderId, [customerName, country], [price, discount], isConfirmed ] = data;

// Problem: Nested Array Destructuring (Level 2)

// তোমার কাছে নিচের array-টা আছে:
// const response = [
//   200,
//   ["OK", ["Dhaka", "Bangladesh"]],
//   [
//     ["product-1", 120],
//     ["product-2", 200]
//   ],
//   false
// ];
// 🎯 তোমার কাজ
// Only array destructuring ব্যবহার করে নিচের variable গুলো বের করো:
// statusCode → 200
// statusText → "OK"
// city → "Dhaka"
// country → "Bangladesh"
// firstProductName → "product-1"
// firstProductPrice → 120
// isCached → false
// ⚠️ Rules❌ response[0] টাইপ access করা যাবে না❌ Loop ব্যবহার করা যাবে না✅ শুধু nested array destructuring

// Rules
// ❌ response[0] টাইপ access করা যাবে না
// ❌ Loop ব্যবহার করা যাবে না
// ✅ শুধু nested array destructuring
// 💡 Hint (যদি দরকার হয়)
// Left side-এ nested pattern লিখতে হবে
// Unused parts skip করতে পারো
const response = [
  200,
  ["OK", ["Dhaka", "Bangladesh"]],
  [
    ["product-1", 120],
    ["product-2", 200],
  ],
  false,
];
const [
  statusCode,
  [statusText, [city, country]],
  [[firstProductName, firstProductPrice]],
  isCached,
] = response;
console.log(statusCode, statusText, city, country,firstProductName, firstProductPrice, isCached);