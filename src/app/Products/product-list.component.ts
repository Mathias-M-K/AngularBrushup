import {Component, OnDestroy, OnInit} from "@angular/core";
import {IProduct} from "./product";
import {ProductService} from "./product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy{

  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMsg : string = "";
  productListSubscription! : Subscription;

  private _listFilter: string = '';
  get listFilter(): string{
    return this._listFilter;
  }

  set listFilter(value:string){
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts : IProduct[] = [];
  products: IProduct[] = [];

  constructor(private productService : ProductService) {
  }

  toggleImage() : void {
    this.showImage = !this.showImage;
  }

  private performFilter(filterBy: string) {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product : IProduct) =>
      product.productName.toLowerCase().includes(filterBy));
  }

  ngOnInit(): void {
    this.listFilter = '';

    console.log("Calling product service!");
    this.productListSubscription = this.productService.getProducts().subscribe({
      next : products => {
        console.log("Products active.");
        this.products = products;
        this.filteredProducts = this.products;
      },
      error : err => this.errorMsg = err
    });
    //this.filteredProducts = this.products;
  }

  ngOnDestroy() {
    this.productListSubscription.unsubscribe();
  }


  onRatingEvent(message: string) : void {
    this.pageTitle ='Product List: ' + message;
  }
}
