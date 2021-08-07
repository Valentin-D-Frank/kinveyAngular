import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kinvey } from 'kinvey-angular2-sdk';
import { File } from '../../models/file';

@Component({
  selector: 'files',
  moduleId: module.id,
  templateUrl: './files.component.html',
})
export class FilesComponent implements OnInit  {
  files: File[];

  constructor(private router: Router, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.reload();
  }

  reload() {
    Kinvey.Files.find<File>()
      .then((files) => {
        this.files = files;
        this.cd.detectChanges();
      });
  }

  upload() {
    this.router.navigate(['/upload']);
  }

  remove() {
    const ids = this.files.filter(file => file.selected).map(file => file._id);

    if (ids.length === 0) {
      return alert('Por favor selecciona un archivo que desee remover');
    }

    if (ids.length > 1) {
      return alert('Por favor no seleccione más de un archivo');
    }

    Kinvey.Files.removeById(ids[0])
      .then(() => {
        this.reload();
      })
      .catch((error) => {
        alert(error.message);
      });
  }
}
