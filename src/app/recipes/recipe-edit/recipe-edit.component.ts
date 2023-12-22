import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit{
  editMode = false;
  id!: number;

  constructor(private route: ActivatedRoute){
  }

  ngOnInit(){
    this.route.params
    .subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
    });
  }
}
