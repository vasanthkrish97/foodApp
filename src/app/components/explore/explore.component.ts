import { Component } from '@angular/core';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent {
  currentRate: any;
  currentRating = 4;

  images = [  
    { img: "../../../assets/explore/slider/American.png" },  
    { img: "../../../assets/explore/slider/American.png" },  
    { img: "../../../assets/explore/slider/American.png" },  
    { img: "../../../assets/explore/slider/American.png" },  
    { img: "../../../assets/explore/slider/American.png" },  
    { img: "../../../assets/explore/slider/American.png" },  
    { img: "../../../assets/explore/slider/American.png" },  
    { img: "../../../assets/explore/slider/American.png" },  
    { img: "../../../assets/explore/slider/American.png" },  
  ];  

  slideConfig = {  
    "slidesToShow": 6,  
    "slidesToScroll": 2,  
    "dots": true,  
    "infinite": true  
  }; 

  imgCollection: Array<object> = [
    {
      image: '../../../assets/explore/slider/American.png',
      thumbImage: '../../../assets/explore/slider/American.png',
      title: 'Image 3',
      alt: 'Image 1',
     
    }, {
      image: '../../../assets/explore/slider/American.png',
      thumbImage: '../../../assets/explore/slider/American.png',
      title: 'Image 3',
      alt: 'Image 2'
    }, {
      image: '../../../assets/explore/slider/American.png',
      thumbImage: '../../../assets/explore/slider/American.png',
      title: 'Image 3',
      alt: 'Image 3'
    }, {
      image: '../../../assets/explore/slider/American.png',
      thumbImage: '../../../assets/explore/slider/American.png',
      title: 'Image 4',
      alt: 'Image 4'
    }, {
      image: '../../../assets/explore/slider/American.png',
      thumbImage: '../../../assets/explore/slider/American.png',
      title: 'Image 5',
      alt: 'Image 5'
    }, {
      image: '../../../assets/explore/slider/American.png',
      thumbImage: '../../../assets/explore/slider/American.png',
      title: 'Image 6',
      alt: 'Image 6'
    },
    {
      image: '../../../assets/explore/slider/American.png',
      thumbImage: '../../../assets/explore/slider/American.png',
      title: 'Image 6',
      alt: 'Image 6'
    },
    {
      image: '../../../assets/explore/slider/American.png',
      thumbImage: '../../../assets/explore/slider/American.png',
      title: 'Image 6',
      alt: 'Image 6'
    },
    {
      image: '../../../assets/explore/slider/American.png',
      thumbImage: '../../../assets/explore/slider/American.png',
      title: 'Image 6',
      alt: 'Image 6'
    }
];





}




  

