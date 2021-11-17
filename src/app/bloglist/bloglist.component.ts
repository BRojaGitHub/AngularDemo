import { Component, OnInit } from '@angular/core';
import { Blog } from '../model/bloghub';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {

  blogs!: Blog[];
  constructor(public service:BlogService) { }

  ngOnInit()
  {
    this.blogs = this.service.getBlogs();
  }

}
