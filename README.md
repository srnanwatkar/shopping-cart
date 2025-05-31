# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Teach Stack used

Technology used within this application

1. REact + Typescript (using Vite)
2. Material UI for CSS and Components
3. Atom (jotai) for state management.

# Instruction to run project

1. Checkout to the main branch
2. Run `npm i` in the folder
3. Run `npm run dev` to run the project locally

This is the mock data used in this repo to load application in Local
```json
{
"items": [
	{

		"itemCode": "Apple_Shopping_Cart",
		"itemName": "Apple",
		"offerCode": null,
		"offerLabel": "",
		"price": 35
	},
	{
		"itemCode": "Banana_Shopping_Cart",
		"itemName": "Banana",
		"offerCode": null,
		"offerLabel": "",
		"price": 20
	},
	{
		"itemCode": "Melons_Shopping_Cart",
		"itemName": "Melons",
		"offerCode": "BUY_1_GET_1",
		"offerLabel": "Buy 1 get 1 free",
		"price": 50
	},
	{
		"itemCode": "Limes_Shopping_Cart",
		"itemName": "Limes",
		"offerCode": "BUY_3_FOR_2",
		"offerLabel": "3 for price of 2",
		"price": 15
	}
]}
```


