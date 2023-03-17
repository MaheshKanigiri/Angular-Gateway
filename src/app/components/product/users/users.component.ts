import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router:Router) { }

  users: User[] = [];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.productService.getUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
    })
}
onDelete(id:string){
  this.productService.deleteUser(id).subscribe(
    (data)=>{
      alert("Sure Wanna Delete ?")
      this.router.navigateByUrl("/user")
      // console.log("Deleted Data is:",data)
      this.ngOnInit();   //for reloading!
    }
  )
}
}
