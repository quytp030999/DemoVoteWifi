import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isForm: boolean = true;
  isVote: boolean = false;
  isResult: boolean = false;
  isLoading: boolean = false;

  person: any[] = [
    {
      name: 'Phương Đông',
      totalVote: 1548,
      plus: 15
    },
    {
      name: 'Trường An',
      totalVote: 1158,
      plus: 27
    },
    {
      name: 'Triệu Long',
      totalVote: 1258,
      plus: 7
    },
    {
      name: 'Anh Khoa',
      totalVote: 978,
      plus: 19
    },
  ]

  onSubmitForm() {
    this.isForm = false;
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false
      this.isVote = true;
    }, 1000);
  }

  onVote() {
    this.isVote = false;
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.isResult = true;
    }, 1000);
  }
}
