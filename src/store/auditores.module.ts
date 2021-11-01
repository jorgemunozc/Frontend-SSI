import { reactive, ref } from 'vue';

const store = {
  state: reactive({
    auditores: ref<Usuario[]>([])
  }),

  agregarAuditor: function (nuevoAuditor: Usuario): void {
    this.state.auditores.push(nuevoAuditor);
  },

  removerAuditor: function (id: number) : void {
    this.state.auditores.forEach((auditor, index) => {
      if (auditor.id === id)
        this.state.auditores.splice(index, 1);
    })
  },

  cargarAuditores: function (auditores: Usuario[]): void {
    this.state.auditores.length = 0;
    auditores.forEach((auditor) => this.state.auditores.push(auditor));
  }
}

export default store;