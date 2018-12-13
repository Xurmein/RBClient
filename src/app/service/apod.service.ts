import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApodResponse } from '../apod.response';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
  })

  
export class ApodService {
  nasa_api_key: string = environment.nasa_api_key;
  nasa_url =  `https://api.nasa.gov/planetary/apod?api_key=${this.nasa_api_key}&date&count=1`;
  
  
  constructor(private httpClient: HttpClient) { }

 getPicture(): Observable<HttpResponse<ApodResponse[]>> {
    return this.httpClient.get<ApodResponse[]>(this.nasa_url, { observe: 'response'});
  }
}

