import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loadedFeature = 'recipe';
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDpQPnZ41uPA0326m6MY9-ADCOh72tPs7c",
      authDomain: "recipe-book-5687d.firebaseapp.com"
    });
  }
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
