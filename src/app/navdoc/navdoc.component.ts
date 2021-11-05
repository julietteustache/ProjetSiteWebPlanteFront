import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navdoc',
  templateUrl: './navdoc.component.html',
  styleUrls: ['./navdoc.component.css']
})
export class NavdocComponent implements OnInit {
  selectedFile:any;


  constructor(private http:HttpClient ) { }

  ngOnInit(): void {
  }

  onFileSelected(event:any){
    this.selectedFile = <File> event.target.files[0];
    console.log(this.selectedFile.name);
  }

  onUpload(){
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:4200/assets/images/'+this.selectedFile.name, fd)
      .subscribe(res => {
        console.log(res);
      });

  }

}
