import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  mockData: any = [
    {
      id: '1',
      title: 'This is title',
      done: false,
      date: new Date()
    }, {
      id: '2',
      title: 'This is second title',
      done: false,
      date: new Date()
    }, {
      id: '3',
      title: 'This is third title',
      done: false,
      date: new Date()
    }, {
      id: '4',
      title: 'This is forth title',
      done: false,
      date: new Date()
    }
  ];

  show: boolean = false;
  value: string | undefined;
  id: number | undefined;

  constructor() {}

  remove(id: number) {
    this.mockData = this.mockData.filter((item:any) => {
      if (item.id !== id) {
        return item;
      }
    });
  }

  create(item:any) {
    this.mockData.push({
      id: Date.now(),
      title: item,
      done: false,
      date: new Date()
    });
  }

  update(title:string) {
    this.mockData.map((item:any) => {
      if (item.id === this.id) {
        item['title'] = title;
      }
    });

    this.show = false;
  }

  edit(id:number, title:string) {
    this.show = true;
    this.value = title;
    this.id = id;
  }

  setTaskComplete(id:number) {
    this.mockData.map((item:any) => {
      if (item.id === id) {
        item['done'] = true;
      }
    });
  }

  ngOnInit() {
  }

}