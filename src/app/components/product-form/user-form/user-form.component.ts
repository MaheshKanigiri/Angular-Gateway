import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  constructor(private productService: ProductService,
    private readonly route: ActivatedRoute,
    private readonly router: Router) { }
  user: User = {
    userId: '',
    userName: '',
    password: '',
    email: '',
    city: ''
  }
  isNew = true
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    const userId = this.route.snapshot.paramMap.get('id')
    if (userId) {
      this.isNew = false
      this.productService.getUserById(userId).subscribe((data) => {
        // console.log(data)
        this.user = data;
        // console.log(this.product)
      })
    }
  }
  submitForm() {
    if (this.isNew) {
      this.productService.addUser(this.user).subscribe(() => {
        this.router.navigateByUrl("/user")
        this.ngOnInit();

      });
    } else {
      this.productService.updateUser(this.user.userId, this.user).subscribe(() => {
        this.router.navigateByUrl("/user")
        this.ngOnInit();
      });
    }
  }

}
