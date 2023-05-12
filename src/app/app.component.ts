import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product-filtering';

  products: Product[] = [
    { id: 1, 
      product_name: 'Hockey Stick', 
      product_id: '10HO27', 
      description: "A curved or angled stick used in playing hockey", 
      category_name: 'Sports', 
      category_id: 'sports12', 
      in_stock: 'Yes', 
      quantity: 1,
      price: 2143 
    },
    { id: 2, 
      product_name: 'Wireless Speaker', 
      product_id: '10WS01', 
      description: "Loudspeakers that receive audio signals using radio frequency (RF) waves rather than over audio cables", 
      category_name: 'Electronics', 
      category_id: 'electronics13', 
      in_stock: 'Yes', 
      quantity: 1,
      price: 24242 
    },
    { id: 3, 
      product_name: 'Angular Books', 
      product_id: '10AN09', 
      description: "Angular is a data binding framework using an MVC (Model View Controller) pattern", 
      category_name: 'Books', 
      category_id: 'books15', 
      in_stock: 'Yes', 
      quantity: 1,
      price: 970 
    },
    { id: 4, 
      product_name: 'Crocs', 
      product_id: '10CS11', 
      description: "Manufactures and markets the Crocs brand of foam clogs", 
      category_name: 'Clothing & Shoes', 
      category_id: 'clothing18', 
      in_stock: 'Yes', 
      quantity: 1,
      price: 567
    },
    { id: 5, 
      product_name: 'Bath Accessories', 
      product_id: '10BA15', 
      description: "They cover objects such as shower baskets, soap dispensers, toilet roll holders and towel rails", 
      category_name: 'Beauty and personal Care Products', 
      category_id: 'beauty17', 
      in_stock: 'Yes', 
      quantity: 1,
      price: 214 
    },
    { id: 6, 
      product_name: 'Vessels', 
      product_id: '10VE20', 
      description: "A container (such as a cask, bottle, kettle, cup, or bowl) for holding something", 
      category_name: 'House and Kitchen Supplies', 
      category_id: 'house16', 
      in_stock: 'Yes', 
      quantity: 1,
      price: 356 
    },
    { id: 7, 
      product_name: 'Tennis Bat', 
      product_id: '10TE24', 
      description: "It has an oval frame with a taut interlaced network of strings", 
      category_name: 'Sports', 
      category_id: 'sports12', 
      in_stock: 'Yes', 
      quantity: 1,
      price: 443 
    },
    { id: 8, 
      product_name: 'Plugs', 
      product_id: '10PL08', 
      description: "Electric cord that has two or three metal pins that connect the cord to a source of electricity", 
      category_name: 'Electronics', 
      category_id: 'electronics13', 
      in_stock: 'Yes', 
      quantity: 1,
      price: 890 
    },
    { id: 9, 
      product_name: 'Foot and nail care', 
      product_id: '10FO16', 
      description: "To prevent infection, odors and an injury to tissue", 
      category_name: 'Beauty and personal Care Products', 
      category_id: 'beauty17', 
      in_stock: 'Yes', 
      quantity: 1,
      price: 533 
    },
    { id: 10, 
      product_name: 'React JS Books', 
      product_id: '10RE10', 
      description: "React is the only library that has been extensively used and documented to create large, complex web applications", 
      category_name: 'Books', 
      category_id: 'books15', 
      in_stock: 'Yes', 
      quantity: 1,
      price: 250 
    },
    { id: 11, 
      product_name: 'Monitor', 
      product_id: '10MO02', 
      description: "Electronic visual computer display that includes a screen, circuitry and the case in which that circuitry is enclosed", 
      category_name: 'Electronics', 
      category_id: 'electronics13', 
      in_stock: 'Yes', 
      quantity: 1,
      price: 432 
    },
    { id: 12, 
      product_name: 'Masala items', 
      product_id: '10MA23', 
      description: "Spices used in Indian cuisine, most often containing cardamom, coriander, mace together with pepper, nutmeg, fennel seeds, jeera", 
      category_name: 'House and Kitchen Supplies', 
      category_id: 'house16', 
      in_stock: 'Yes', 
      quantity: 1,
      price: 567 
    },
    { id: 13, 
      product_name: 'Shorts for men and women', 
      product_id: '10SH12', 
      description: "Pants that end above the knee or reach the knee", 
      category_name: 'Clothing & Shoes', 
      category_id: 'clothing18', 
      in_stock: 'Yes', 
      quantity: 1,
      price: 6547 
    },
    
    { id: 14, 
      product_name: 'socks', 
      product_id: '10SO14', 
      description: "Piece of clothing worn on the feet and often covering the ankle or some part of the calf", 
      category_name: 'Clothing & Shoes', 
      category_id: 'clothing18', 
      in_stock: 'Yes',
      quantity: 1, 
      price: 535 
    },
    { id: 15, 
      product_name: 'Volley ball', 
      product_id: '10VO21', 
      description: "A spherical or ovoid body used in a game or sports ball", 
      category_name: 'Sports', 
      category_id: 'sports12', 
      in_stock: 'Yes', 
      quantity: 1,
      price: 657 
    },
    { id: 16, 
      product_name: 'Hand cream', 
      product_id: '10HA17', 
      description: "A cream that you put on your hands to make them feel softer and smoother", 
      category_name: 'Beauty and personal Care Products', 
      category_id: 'beauty17', 
      in_stock: 'Yes', 
      quantity: 1,
      price: 456 
    },
    { id: 17, 
      product_name: 'Research books', 
      product_id: '10RE07', 
      description: "Scientific book which is systematically written, based on facts and the results of a research, and analysed critically, through rational arguments", 
      category_name: 'Books', 
      category_id: 'books15', 
      in_stock: 'Yes',
      quantity: 1, 
      price: 50 
    },
    { id: 18, 
      product_name: 'ceramic vessels', 
      product_id: '10CE22', 
      description: "Made from clay that has been shaped and then baked ... See more at ceramic.", 
      category_name: 'House and Kitchen Supplies', 
      category_id: 'house16', 
      in_stock: 'Yes',
      quantity: 1, 
      price: 875 
    },
    { id: 19, 
      product_name: 'T-shirts', 
      product_id: '10TS13', 
      description: "Style of fabric shirt named after the T shape of its body and sleeves", 
      category_name: 'Clothing & Shoes', 
      category_id: 'clothing18', 
      in_stock: 'Yes', 
      quantity: 1,
      price: 345 
    },
    
    { id: 20, 
      product_name: 'Mouse', 
      product_id: '10MO04', 
      description: "Small, movable device that lets you control a range of things on a computer", 
      category_name: 'Electronics', 
      category_id: 'electronics13', 
      in_stock: 'Yes', 
      quantity: 1,
      price: 5467 
    },
    { id: 21, 
      product_name: 'Hair dyer', 
      product_id: '10HA19', 
      description: "Electric heating coils and a fan that blows the air", 
      category_name: 'Beauty and personal Care Products', 
      category_id: 'beauty17', 
      in_stock: 'Yes', 
      quantity: 1,
      price: 324 
    },
    { id: 22, 
      product_name: 'School Guide', 
      product_id: '10SC06', 
      description: "One that leads or directs another on a course", 
      category_name: 'Books', 
      category_id: 'books15', 
      in_stock: 'Yes', 
      quantity: 1,
      price: 567 
    },
    { id: 23, 
      product_name: 'Television', 
      product_id: '10TE05', 
      description: "mass medium for advertising, entertainment, news, and sports", 
      category_name: 'Electronics', 
      category_id: 'electronics13', 
      in_stock: 'Yes', 
      quantity: 1,
      price: 5978 
    },
    { id: 24, 
      product_name: 'Oil', 
      product_id: '10OI25', 
      description: "Liquid fat used in frying, baking, and other types of cooking.", 
      category_name: 'House and Kitchen Supplies', 
      category_id: 'house16', 
      in_stock: 'Yes', 
      quantity: 1,
      price: 512 
    },
    { id: 25, 
      product_name: 'Scent', 
      product_id: '10SC18', 
      description: "Perfume scented the air", 
      category_name: 'Beauty and personal Care Products', 
      category_id: 'beauty17', 
      in_stock: 'Yes', 
      quantity: 1,
      price: 35 
    },
    
    { id: 26, 
      product_name: 'Pet Collars', 
      product_id: '10PE26', 
      description: "protection, entertainment, or as an act of compassion", 
      category_name: 'Pet Accessories', 
      category_id: 'pet14', 
      in_stock: 'Yes', 
      quantity: 1,
      price: 54 
    },
    
    { id: 27, 
      product_name: 'Roller skates', 
      product_id: '10RO28', 
      description: "The activity of moving along the ground using roller skates", 
      category_name: 'Sports', 
      category_id: 'sports12', 
      in_stock: 'Yes',
      quantity: 1, 
      price: 150 
    },
    { id: 28, 
      product_name: 'Laptop', 
      product_id: '10LA03', 
      description: "A laptop can be easily transported and used in temporary spaces such as on airplanes", 
      category_name: 'Electronics', 
      category_id: 'electronics13', 
      in_stock: 'Yes', 
      quantity: 1,
      price: 850 
    },
  ];

  categories: string[] = ['Electronics', 'Books', 'Clothing & Shoes','Beauty and personal Care Products','House and Kitchen Supplies','Pet Accessories','Sports'];

  selectedCategory = '';

  get filteredProducts() {
    return this.selectedCategory
      ? this.products.filter((product) => product.category_name === this.selectedCategory)
      : this.products;
  }
}
