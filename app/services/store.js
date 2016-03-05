import Ember from 'ember';
import LineItem from 'woodland/models/line-item';
import Order from 'woodland/models/order';
import Product from 'woodland/models/product';

const products = [
	Product.create({title: 'Tent', price: 10, description: 'This is a great tent', imageUrl: 'tent.jpg'}),
	Product.create({title: 'Sleeping Bag', price: 5, description: 'This is a very warm sleeping bag', imageUrl: 'sleepingbag.jpg'}),
	Product.create({title: 'Flashlight', price: 2, description: 'This is a very bright flashlight', imageUrl: 'flashlight.jpg'}),
	Product.create({title: 'First Aid Kit', price: 3, description: 'Everything you need if you get attacked by a Tomster', imageUrl: 'firstaidkit.jpg'})
];

const orders = [
	Order.create({id: '1234', name: 'Jim',
		items: [
		LineItem.create({product: products[0], quantity: 1}),
		LineItem.create({product: products[1], quantity: 1}),
		LineItem.create({product: products[2], quantity: 0}),
		LineItem.create({product: products[3], quantity: 0})
		]
	}),
	Order.create({id: '1235', name: 'Kevin',
		items: [
		LineItem.create({product: products[0], quantity: 0}),
		LineItem.create({product: products[1], quantity: 1}),
		LineItem.create({product: products[2], quantity: 1}),
		LineItem.create({product: products[3], quantity: 0})
		]
	})

];


export default Ember.Service.extend({
	getOrderById(id){
		return orders.findBy('id', id);
	},
	getOrders() {
		return orders;
	},
	getProducts() {
		return products;
	}
});
