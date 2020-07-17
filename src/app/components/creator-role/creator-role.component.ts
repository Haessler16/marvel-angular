import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-creator-role',
  templateUrl: './creator-role.component.html',
  styleUrls: ['./creator-role.component.scss']
})
export class CreatorRoleComponent implements OnInit {
  @Input("data") creatorRole
  constructor() { }

  role: any
  name: any
  ngOnInit(): void {
    this.findOneRole()
  }

  findOneRole(){
    if(this.creatorRole.length > 0){
      const res = this.creatorRole.find(creator => creator.role === 'writer' || creator.role === 'penciller (cover)' || creator.role === 'penciler (cover)')
      this.role = res.role
      this.name = res.name
    }
  }

}
