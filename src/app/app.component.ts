// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// // export class AppComponent {
// //   title = 'app';
// // }

// export class AppComponent {
//   //title = 'app';
// }







// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// export class AppComponent {

// // //ASSIGNEMENT 3
// //  showSecret = false;
// //   log = [];
// //   onToggleDetails(){ 
// //   this.showSecret = !this.showSecret;
// //   this.log.push(this.log.length + 1);
// //     }


// // servers = [];

// // onAddServer(){
// //   this.servers.push('Another Server');
// // }

// // onRemoveServer(id: number) {
// //   //const position = id+1;
// //   //const position = id;
// //   this.servers.splice(position, 1);
// // }


// }










// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// export class AppComponent {



// @Input() serverElements = [{ type: 'server', name: 'Testserver', content : 'Just a Test!'}];

// onServerAdded(serverData : { serverName: string,serverContent:string }) {
//   this.serverElements.push({
//     type: 'server',
//     name: serverData.serverName,
//     content: serverData.serverContent
//   });
// }

// onBlueprintAdded( blueprintData : { serverName: string,serverContent:string } ) {
//   this.serverElements.push({
//     type: 'blueprint',
//     name: blueprintData.serverName,
//     content: blueprintData.serverContent
//   });
// }  

// onChangeFirst(){
//   this.serverElements[0].name='Changed!';
// }

// onDestroyFirst(){
//   this.serverElements.splice(0, 1);
// }


// }









//Recipe and shopping

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

 loadedFeature = 'recipe';

  onNavigate(feature: string){
    this.loadedFeature= feature;

  }

}



