export default class porta {
  static aberta(aberta: any): any {
   
  }
 this: any
  static alterarselecao: porta
 alterarselecao(alterarselecao: any) {

}
 
#numero:number
#presente:Boolean
#selecionada:Boolean
#aberta: Boolean

constructor(numero:number,presente:Boolean,selecionada:Boolean,aberta:Boolean=true){
this.#aberta=aberta
this.#numero=numero
this.#presente=presente
this.#selecionada=selecionada
}
get numero(){
    return this.#numero
    
}
get presente(){
    return this.#presente
}
get selecionada(){
    return this.#selecionada
}
get aberta(){
 return   this.#aberta
    
}
alterarseleção () {
 const selecionada = ! this.selecionada
 return new porta (this.numero,this.presente,selecionada,this.aberta)
}
desmarcar(): Boolean{
    const selecionada = false
    return(this.numero,this.presente,selecionada,this.aberta)
}
abrir () {
    const aberta= true
    return new porta (this.numero,this.presente,this.aberta, this.#selecionada)
   }
   
}
