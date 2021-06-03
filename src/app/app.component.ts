import { Component } from '@angular/core';
//import Image from '@ckeditor/ckeditor5-image/src/image';
//import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
//import ImageResizeEditing from '@ckeditor/ckeditor5-image/src/imageresize/imageresizeediting';
// import ImageResizeHandles from '@ckeditor/ckeditor5-image/src/imageresize/imageresizehandles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ckEditor';
  txtIncome:any;
  selectedValue:any;
  public config: any;
  constructor() {
    this.loadEditorData();
  }

  ngOnInit() {
    console.log(this.txtIncome);
    this.config = {
       extraPlugins: ['easyimage' ],
       allowedContent:true,
       disableObjectResizing:false,
      // removePlugins : 'image',
       easyimage_class : null,
       easyimage_toolbar : [ 'EasyImageAlignLeft', 'EasyImageAlignCenter', 'EasyImageAlignRight' ],
       filebrowserUploadMethod:'xhr',
       filebrowserWindowFeatures :'resizable=yes,scrollbars=no',

      height: 300
    
    }
  }

  rangeSlide(data){
    try{
      console.log(data);
      document.getElementById('rangeValue').innerHTML = data;
    }catch(err){
      console.log(err);
    }
  }
  loadEditorData() {
    try {
    } catch (err) {
      console.log(err);
    }
  }
}


