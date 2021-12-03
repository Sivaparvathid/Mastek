import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';



@Injectable({

  providedIn: 'root'

})

export class ApiService {



  constructor(private http:HttpClient) { }



  apiUrl='https://localhost:44337/api/Mobiles';

  apiUrl1='https://localhost:44337/api/Tablets';

  apiUrl2='https://localhost:44337/api/Watches';



 



  getAllMobilesData():Observable<any>



  {



    return this.http.get(`${this.apiUrl}`);



  }

  getAllTabletsData():Observable<any>



  {



    return this.http.get(`${this.apiUrl1}`);



  }

  getAllWatchesData():Observable<any>



  {



    return this.http.get(`${this.apiUrl2}`);



  }



 

}