import { Component } from '@angular/core';

import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  latitude: number = 0;
  longitude: number = 0;

  constructor(private geolocation: Geolocation) {
    try {
      this.geolocation.getCurrentPosition().then(resp => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;

        console.log(resp);
      });
    } catch (error) {
      console.log("ERRO AO BUSCAR LOCALIZAÇÃO!");
    }
  }


}
