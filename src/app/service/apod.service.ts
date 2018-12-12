import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApodResponse } from '../apod.response';


@Injectable({
  providedIn: 'root'
  })

  
export class ApodService {
  nasa_url =  "https://api.nasa.gov/planetary/apod?api_key=j9gAWOxMgynlc2i36ie4EhybhLT6N5Xz1Yo5TFFg&date&count=1";
  
  //api_Key ="j9gAWOxMgyn1c2i36ie4EhybhLT6N5Xz1Yo5TFFg";
 
  constructor(private httpClient: HttpClient) { }

 getPicture(): Observable<HttpResponse<ApodResponse[]>> {
    return this.httpClient.get<ApodResponse[]>(this.nasa_url, { observe: 'response'});
  }
}

