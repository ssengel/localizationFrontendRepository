import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService) { }

  user: User;
  userId: String = '';
  selectedFile: File = null;
  btnUploadState: boolean = true;

  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userId = currentUser.user._id;
    this.userService.getById(this.userId).subscribe((res:User) => {
      this.user = res;
    });
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    this.btnUploadState= false;
  }

  onUpload() {
    const uploadData = new FormData();
    uploadData.append('photo', this.selectedFile, this.selectedFile.name);
    
    this.userService.updateImageById(this.userId, uploadData).subscribe((res:User) =>{
      this.user = res;
      this.btnUploadState = true;
    })
  }

}
