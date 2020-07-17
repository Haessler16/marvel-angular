import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCreators'
})
export class SearchCreatorsPipe implements PipeTransform {

  transform(lista: any[], texto: string): any[] {
    if(!texto) return lista
    return lista.filter(creator => creator.fullName.toLowerCase().includes(texto.toLowerCase()))
  }

}
