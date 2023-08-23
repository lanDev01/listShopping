import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item
  @Output() emitindoItemEditar = new EventEmitter()
  @Output() emitindoIdDelete = new EventEmitter()

  // Icons do FontAwesome
  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(): void {

  }

  editarItem() {
    this.emitindoItemEditar.emit(this.item)
  }

  deletarItem() {
    console.log('Estão tentando me calar')
    this.emitindoIdDelete.emit(this.item.id)
  }

  ngOnDestroy() {
    console.log('Conseguiram me calar.')
  }
}
