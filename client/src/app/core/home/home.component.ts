import { Component, OnInit } from '@angular/core';
import { IParfume } from 'src/app/interfaces/parfume';
import { ParfumeService } from 'src/app/parfume.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  parfumeList: IParfume[] | null = null;

  constructor(private parfumeService: ParfumeService) { }

  ngOnInit(): void {
    this.parfumeService.getAllParfumes().subscribe({
      next: (value) => {
        this.parfumeList = value;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
