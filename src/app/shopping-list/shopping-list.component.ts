import { Component } from '@angular/core';
import { listItems } from './list-items'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-list',
  imports: [FormsModule,CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {

  item: string = '';
  list: listItems[] = [];

  addItem(){
    let listItem = new listItems();
    if (!this.item){
      alert('Please enter an item');
      return;
    }
    listItem.name = this.item;

    listItem.id = this.list.length + 1;

    this.list.push(listItem);

    this.item = '';
  }

  crossedOutItem(item: listItems){
    item.purchased = !item.purchased;
  }

  clearList(){
    let itemsOfListIsCrossedOut: Array<listItems> = [];

    // Check if the user wants to clear the list
    if (confirm('Are you sure you want to clear the list?')){
      if (this.list.length == 0){
        alert('The list is already empty');}
      // Clear the list
      if (this.list.find(listItems => listItems.purchased == false)){
        itemsOfListIsCrossedOut = this.list.filter(listItems => listItems.purchased == false);
        this.list = itemsOfListIsCrossedOut;

      }
    }
  }

}
