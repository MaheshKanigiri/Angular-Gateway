import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ProductService ]
    });

    service = TestBed.inject(ProductService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
})

//   afterEach(() => {
//     httpTestingController.verify();
//   });

//   it('should return an array of Product objects', () => {
//     const mockProducts: Product[] = [
//       { id: 1, productName: 'Product 1', productDescription: 'Description 1', productCategory: 'Category 1', productPrice: 10.99 },
//       { id: 2, productName: 'Product 2', productDescription: 'Description 2', productCategory: 'Category 2', productPrice: 15.99 }
//     ];

//     service.getProducts().subscribe((products: Product[]) => {
//       expect(products.length).toBe(2);
//       expect(products).toEqual(mockProducts);
//     });

//     const req = httpTestingController.expectOne(`${service.baseUrl}/Product`);
//     expect(req.request.method).toBe('GET');
//     req.flush(mockProducts);
//   });

