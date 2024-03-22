import { Injectable } from "@angular/core";
import { Blog } from "../blog";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class BlogsService {
  apiUrl = "http://127.0.0.1:3000/api/blogs";

  constructor(private http: HttpClient) {}

  getBlogs() {
    return this.http.get(this.apiUrl);
  }

  getBlogById(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }
}
