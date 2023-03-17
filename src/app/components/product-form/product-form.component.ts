import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  constructor(private productService: ProductService,
    private readonly route: ActivatedRoute,
    private readonly router: Router) { }

  // for Update | AddNew
  product: Product = {
    productId: '',
    productName: '',
    productDescription: '',
    productQuantity: 0
  };


  isNew = true


  ngOnInit(): void {
    //always take getById in another component from main component its better
    const id = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.isNew = false
      this.productService.getProductById(id).subscribe((data) => {
        console.log(data)
        this.product = data;
        // console.log(this.product)
      })
    }


  }

  submitForm() {
    if (this.isNew) {
      this.productService.addProduct(this.product).subscribe(() => {
        this.router.navigateByUrl("/product")
        this.ngOnInit();

      });
    } else {
      this.productService.updateProduct(this.product.productId, this.product).subscribe(() => {
        this.router.navigateByUrl("/product")
        this.ngOnInit();
      });
    }
  }


}
