import { reactive } from "vue";

const store = {
  state: reactive({
    dominios: [] as DominioCorreo[],
  }),

  agregarDominio(dominio: DominioCorreo): boolean {
    try {
      this.state.dominios.push(dominio)
    } catch (error) {
      return false;
    }
    return true;
  },
  eliminarDominio(id: number): void {
    for (let i = 0; i < this.state.dominios.length; i++) {
      const currId = this.state.dominios[i].id;
      if (currId === id) {
        this.state.dominios.splice(i, 1)
      }
    }
  },
  vaciarLista(): void {
    this.state.dominios.length = 0;
  }
}

export default store;