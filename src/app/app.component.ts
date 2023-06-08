import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imagegalary-in-angular';
  selectedImage:string='';
  imagesList = [
      { url: '../assets/img_nature.jpg'},
      { url: '../assets/img_snow.jpg'},
      { url: '../assets/img_mountains.jpg'},
      { url: '../assets/img_lights.jpg'}
  ]
  constructor(){
    this.selectedImage ='../assets/img_nature.jpg';
  }
  loadSelectedImage(value:any)
  {    
    this.selectedImage = value;
  }
  handleImageFocus(value:string) {
    this.selectedImage = value;
  }
}
