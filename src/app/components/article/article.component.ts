import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import{Share} from '@capacitor/share'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;
  @Input() index:number;

  constructor(private iab: InAppBrowser, private actionSheetCtrl:ActionSheetController) { }

  ngOnInit() {}

  openArticle(){
    const browser = this.iab.create(this.article.url);
    browser.show();
  }

   async openMenu(){

const actionSheet = await this.actionSheetCtrl.create({

header : 'options',
buttons :[
  {
  text:'Share',
  icon:'share-outline',
  handler:()=>this.shareArticle()
  },
  {
    text:'Favorites',
    icon:'Heart-outline',
    handler:()=>this.onToggleFavorites()
    },
    {
      text:'Cancel',
      icon:'Close-outline',
      role:'cancel'
      }
]
});

await actionSheet.present();

  }

  shareArticle(){
console.log('share article')

  }

  onToggleFavorites(){
    console.log('favorites')
  }

}
