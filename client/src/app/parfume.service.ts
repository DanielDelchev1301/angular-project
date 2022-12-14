import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IParfume } from './interfaces/parfume';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ParfumeService {

  constructor(private httpClient: HttpClient) { }

  getAllParfumes() {
    return this.httpClient.get<IParfume[]>(`${apiUrl}/parfume/get-all`);
  }
}
