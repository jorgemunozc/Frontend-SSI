import { reactive } from 'vue';

const store = {
  state: reactive<Formulario29>({
    cod585: 0,
    cod586: 0,
    cod731: 0,
    cod714: 0,
    cod515: 0,
    cod20: 0,
    cod142: 0,
    cod732: 0,
    cod715: 0,
    cod587: 0,
    cod720: 0,

    cod503: 0,
    cod763: 0,
    cod716: 0,
    cod110: 0,
    cod758: 0,
    cod512: 0,
    cod509: 0,
    cod708: 0,
    cod733: 0,
    cod516: 0,
    cod500: 0,

    cod738: 0,
    cod739: 0,
    cod740: 0,

    cod502: 0,
    cod764: 0,
    cod717: 0,
    cod111: 0,
    cod759: 0,
    cod513: 0,
    cod510: 0,
    cod709: 0,
    cod734: 0,
    cod517: 0,
    cod501: 0,
    cod154: 0,
    cod518: 0,
    cod713: 0,
    cod741: 0,
    cod538: 0,//Total debitos

    cod511: 0,
    cod514: 0,

    cod564: 0,
    cod566: 0,
    cod584: 0,

    cod521: 0,
    cod560: 0,
    cod562: 0,

    cod519: 0,
    cod761: 0,
    cod765: 0,
    cod524: 0,
    cod527: 0,
    cod531: 0,
    cod534: 0,
    cod536: 0,

    cod520: 0,
    cod762: 0,
    cod766: 0,
    cod525: 0,
    cod528: 0,
    cod532: 0,
    cod535: 0,
    cod553: 0,
    cod504: 0,
    cod593: 0,
    cod594: 0,
    cod592: 0,
    cod539: 0,
    cod718: 0,
    cod164: 0,

    cod730: 0,
    cod729: 0,
    cod742: 0,
    cod743: 0,
    cod744: 0,
    cod745: 0,
    cod127: 0,
    cod544: 0,
    cod523: 0,
    cod712: 0,
    cod757: 0,
    cod537: 0,//Total Creditos


    cod77: 0,//Remanente determinado
    cod89: 0,//IVA determinado

    cod751: 0,
    cod735: 0,
    cod750: false,
    cod30: 0,
    cod565: 0,
    cod700: 0,
    cod563: 0,
    cod120: 0,
    cod701: 0,
    cod115: 0,
    cod542: 0,
    cod702: 0,
    cod68: 0,
    cod122: 0,
    cod711: 0,
    cod721: 0,
    cod722: 0,
    cod724: 0,

    cod760: 0,
    cod50: 0,
    cod48: 0,
    cod151: 0,
    cod153: 0,
    cod54: 0,
    cod56: 0,
    cod588: 0,
    cod589: 0,
    cod62: 0,
    cod123: 0,
    cod703: 0,
    cod66: 0,
    cod723: 0,
    cod152: 0,
    cod70: 0,

    cod595: 0,

    cod529: 0,
    cod530: 0,
    cod409: 0,

    cod522: 0,
    cod526: 0,
    cod113: 0,
    cod28: 0,
    cod548: 0,
    cod540: 0,
    cod541: 0,
    cod549: 0,//remanente periodo siguiente
    cod550: 0,//iva determinado

    cod577: 0,
    cod32: 0,
    cod150: 0,
    cod146: 0,
    cod752: 0,
    cod545: 0,
    cod546: 0,
    cod710: 0,
    cod602: 0,//total creditos

    cod575: 0,
    cod574: 0,
    cod580: 0,
    cod582: 0,
    cod753: 0,

    cod576: 0,
    cod33: 0,
    cod149: 0,
    cod85: 0,
    cod754: 0,
    cod551: 0,
    cod559: 0,
    cod508: 0,
    cod533: 0,
    cod552: 0,
    cod603: 0,

    cod507: 0,
    cod506: 0,

    cod556: 0,
    cod557: 0,
    cod558: 0,
    cod543: 0,
    cod573: 0,
    cod598: 0,
    cod39: 0,
    cod554: 0,
    cod736: 0,
    cod597: 0,
    cod555: 0,
    cod596: 0,

    cod725: 0,
    cod704: 0,
    cod169: 0,
    cod126: 0,
    cod572: 0,

    cod737: 0,
    cod705: 0,
    cod161: 0,
    cod128: 0,
    cod568: 0,

    cod727: 0,
    cod706: 0,
    cod570: 0,
    cod571: 0,
    cod590: 0,

    cod547: 0,//TOTAL IMPUESTO ADICIONAL DETERMINADO

    cod728: 0,
    cod707: 0,
    cod73:  0,
    cod130: 0,
    cod591: 0,

    /**
     * 
     * TOTALES F29
     * 
     */
    cod91: 0,
    cod92: 0,
    cod93: 0,
    cod94: 0,
  }),

  setValue(property: string, newValue: number) {
    if (this.state.hasOwnProperty(property)) {
      this.state[property] = newValue;
    }
  },

  resetValues() {
    for (const prop in this.state) {
      if (prop === 'cod750') {
        this.state[prop] = false;
        continue;
      }
      this.state[prop] = 0;
    }
  },
  /**
   * Realiza la suma de los campos de una seccion del formulario y guarda el resultado
   * en el codigo del campo especificado.
   * @param targetProps Codigo de campos que se desean sumar
   * @param propsResta Codigo de campos dentro de *targetPros* que deben ser restados
   * @param targetProp Codigo del campo en el que se desea guardar el resultado, si es
   *                   especificado, caso contrario devuelve el valor calculado.
   */
  calcularTotal(targetProps: string[], propsResta: string[], targetProp?: string): number | void {
    const values = extractValues(this.state, targetProps);
    let total = 0;
    for (const prop in values) {
      if (propsResta.includes(prop)) {
        total -= values[prop];
      } else {
        total += values[prop];
      }
    }
    if (typeof targetProp != 'undefined'){
      this.state[targetProp] = total;
      return;
    }
    return total;
  },
  
  calcularDebito() {
    const targetProps = [
      'cod502', 'cod764', 'cod717', 'cod111', 'cod759',
      'cod513', 'cod510', 'cod709', 'cod734', 'cod517', 
      'cod501', 'cod154', 'cod518', 'cod713', 'cod741'
    ];
    const propsResta = [
      'cod510', 'cod709', 'cod734'
    ];
    this.calcularTotal(targetProps, propsResta, 'cod538');
  },

  calcularCreditoBasico() {
    const targetProps = [
      'cod520', 'cod762', 'cod766', 'cod525', 'cod528',
      'cod532', 'cod535', 'cod553', 'cod504', 'cod593',
      'cod594', 'cod592', 'cod539', 'cod718', 'cod164',
      'cod127', 'cod544', 'cod523', 'cod712', 'cod757',
    ];

    const propsResta = [
      'cod528', 'cod593', 'cod594', 'cod592', 'cod539', 
      'cod539', 'cod718',
    ];
    this.calcularTotal(targetProps, propsResta, 'cod537');
  },

  //Diferencia Total Débitos (línea 22, código 538) menos Total Créditos (línea 47, código 537); trasládelo a la línea 48
  calcularImpuestoParcial() {
    return (this.state.cod538) - (this.state.cod537);
  },

  calcularSubImpDeterm() {
    const targetProps = [
      'cod89', 'cod760', 'cod50', 'cod48', 'cod151',
      'cod153','cod54', 'cod56', 'cod588', 'cod589',
      'cod62', 'cod123', 'cod703', 'cod66', 'cod723',
      'cod152', 'cod70',
    ];

    const propsResta = ['cod723'];

    this.calcularTotal(targetProps, propsResta, 'cod595');
  },

  //calcula la diferencia entre debito y credito del Impuesto art 37
  calcularImp37(): number {
    const targetProps = [
      'cod113', 'cod28', 'cod548', 'cod540', 'cod541',
    ];
    const propsResta = [
      'cod28', 'cod548', 'cod540',
    ];
    const total = this.calcularTotal(targetProps, propsResta);
    return +total;
  },

}

function extractValues(target: Formulario29, propNames: string[]): number[] {
  const extractedValues: number[] = [];
  for (let i = 0; i < propNames.length; i++) {
    const prop = propNames[i];
    extractedValues[prop] = +target[prop];
  }
  return extractedValues;
}

export default store;