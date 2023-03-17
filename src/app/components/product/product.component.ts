import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router:Router) { }

  products: Product[] = [];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.productService.getProducts().subscribe((data) => {
      console.log(data);
      this.products = data;
    })

    // can use getProductById here itself and note that it has to pass Id when clicked that
    // happens only through routerLink="/product/{{product.id}} in the table edit button
    //and traverse with the data in other component each time.
    // const id=Number(this.route.snapshot.paramMap.get('id'))
    // this.productService.getProductById(id).subscribe((data)=>{
    //   console.log(data)
    // })}
  }

  onDelete(id:string){
    this.productService.deleteProduct(id).subscribe(
      (data)=>{
        alert("Sure Wanna Delete ?")
        this.router.navigateByUrl("/product")
        // console.log("Deleted Data is:",data)
        this.ngOnInit();   //for reloading!
      }
    )
  }
}


