import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
	{
		name: "Focaccia",
		ingredients: "Bread with italian olive oil and rosemary",
		price: 6,
		photoName: "pizzas/focaccia.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Margherita",
		ingredients: "Tomato and mozarella",
		price: 10,
		photoName: "pizzas/margherita.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Spinaci",
		ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
		price: 12,
		photoName: "pizzas/spinaci.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Funghi",
		ingredients: "Tomato, mozarella, mushrooms, and onion",
		price: 12,
		photoName: "pizzas/funghi.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Salamino",
		ingredients: "Tomato, mozarella, and pepperoni",
		price: 15,
		photoName: "pizzas/salamino.jpg",
		soldOut: true,
	},
	{
		name: "Pizza Prosciutto",
		ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
		price: 18,
		photoName: "pizzas/prosciutto.jpg",
		soldOut: false,
	},
];

function App() {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Header() {
	// const style = {
	// 	color: "red",
	// 	fontSize: "48px",
	// 	textTransform: "uppercase",
	// };

	return (
		<header className="header">
			<h1>Fast React Pizza Co.</h1>;
		</header>
	);
}

function Menu() {
	const pizzas = pizzaData;
	const numPizzas = pizzas.length;

	return (
		<main className="menu">
			<h2>Our Menu</h2>

			{numPizzas > 0 && (
				<ul className="pizzas">
					{pizzas.map((pizza) => (
						<Pizza pizzaObj={pizza} key={pizza.name} />
					))}
				</ul>
			)}

			{/* <Pizza
				name="Pizza Fungi"
				ingredients="Tomato, mashroom and mozarella"
				photoName="pizzas/funghi.jpg"
				price={15}
			/> */}
		</main>
	);
}

function Pizza(props) {
	return (
		<li className="pizza">
			<img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
			<div>
				<h3>{props.pizzaObj.name}</h3>
				<p>{props.pizzaObj.ingredients}</p>
				<span>{props.pizzaObj.price}</span>
			</div>
		</li>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openHour = 12;
	const closeHour = 20;
	const isOpen = hour >= openHour && hour <= closeHour;

	return (
		<footer className="footer">
			{isOpen && (
				<div className="order">
					<p>
						We're open until {closeHour}:00. Come visit us or order
						online.
					</p>
					<button className="btn">Order</button>
				</div>
			)}
		</footer>
	);
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
