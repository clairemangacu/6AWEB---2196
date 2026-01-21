import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts() {
    return [
      { id: 'P-101', name: 'Logitech Mouse', desc: '6 Button Mechanical Mouse', price: 899 },
      { id: 'P-102', name: 'JBL BT Speaker', desc: 'Waterproof Radio 360 Surround', price: 1099 },
      { id: 'P-103', name: 'Mechanical Keyboard', desc: 'Hot-swappable RGB Backlit', price: 2395 },
      { id: 'P-104', name: 'Oculus Meta', desc: 'All-in-one Gaming Headset', price: 22450 }
    ];
  }
}
