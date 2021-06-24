/**
 * DECLARACION DE LAS VARIABLES QUE DEBE CONTENER EL F29 DE
 * ACUERDO A LO SOLICITADO POR EL SII
 * 
 * 
 * Fecha actualizacion: 02-06-2021
 * Fecha F29 en el que esta basado: 2019
 */

declare interface Formulario29 {
  estado?: string,
  /*************************************
   * SECCION: DEBITOS Y VENTAS
   ************************************* 
      ----------------------------
      Informacion de ingresos
      ----------------------------
   */
  cod585: number,
  cod586: number,
  cod731: number,
  cod714: number,
  cod515: number,
  cod20:  number,
  cod142: number,
  cod732: number,
  cod715: number,
  cod587: number,
  cod720: number,

  /**
   * -------------------------
   *  Genera Debito
   * -------------------------
   *  
   *  +++++++++++++++++++++++
   *  Documentos
   *  +++++++++++++++++++++++
   */
  cod503: number,
  cod763: number,
  cod716: number,
  cod110: number,
  cod758: number,
  cod512: number,
  cod509: number,
  cod708: number,
  cod733: number,
  cod516: number,
  cod500: number,

  cod738: number,
  cod739: number,
  cod740: number,
 /**
  *   ++++++++++++++++++++++
  *   Montos
  *   ++++++++++++++++++++++
  */
  cod502: number,
  cod764: number,
  cod717: number,
  cod111: number,
  cod759: number,
  cod513: number,
  cod510: number,
  cod709: number,
  cod734: number,
  cod517: number,
  cod501: number,
  cod154: number,
  cod518: number,
  cod713: number,
  cod741: number,
  cod538: number,//Total debitos

  /**
   * *************************************
   * SECCION: CREDITOS Y COMPRAS
   * *************************************
   */

  cod511: number,
  cod514: number,

  /**
   * ------------------------
   * Sin derecho a Credito
   * --------------------------
   */
  cod564: number,
  cod566: number,
  cod584: number,

  cod521: number,
  cod560: number,
  cod562: number,

  /**
   * --------------------------
   * Con derecho a credito
   * --------------------------
   */
  cod519: number,
  cod761: number,
  cod765: number,
  cod524: number,
  cod527: number,
  cod531: number,
  cod534: number,
  cod536: number,

  cod520: number,
  cod762: number,
  cod766: number,
  cod525: number,
  cod528: number,
  cod532: number,
  cod535: number,
  cod553: number,
  cod504: number,
  cod593: number,
  cod594: number,
  cod592: number,
  cod539: number,
  cod718: number,
  cod164: number,

  cod730: number,
  cod729: number,
  cod742: number,
  cod743: number,
  cod744: number,
  cod745: number,
  cod127: number,
  cod544: number,
  cod523: number,
  cod712: number,
  cod757: number,
  cod537: number,//Total Creditos


  cod77:  number,//Remanente determinado
  cod89:  number,//IVA determinado

  /**
   * *************************************
   * SECCION: IMPUESTO A LA RENTA
   * *************************************
   */

  cod751: number,
  cod735: number,
  cod750: boolean,
  cod30 : number,
  cod565: number,
  cod700: number,
  cod563: number,
  cod120: number,
  cod701: number,
  cod115: number,
  cod542: number,
  cod702: number,
  cod68:  number,
  cod122: number,
  cod711: number,
  cod721: number,
  cod722: number,
  cod724: number,
  /**
   * TOTALES
   */
  cod760: number,
  cod50:  number,
  cod48:  number,
  cod151: number,
  cod153: number,
  cod54:  number,
  cod56:  number,
  cod588: number,
  cod589: number,
  cod62:  number,
  cod123: number,
  cod703: number,
  cod66:  number,
  cod723: number,
  cod152: number,
  cod70:  number,

  /**
   * *************************************
   * SUBTOTAL IMPUESTO DETERMINADO
   * *************************************
   */

  cod595: number,

  /**
   * *************************************
   * SECCION: TRIBUTACION SIMPLIFICADA
   * *************************************
   */
  cod529: number,
  cod530: number,
  cod409: number,

  /**
   * *************************************
   * SECCION: IMPUESTO ADICIONAL ART. 37
   * *************************************
   */
  cod522: number,
  cod526: number,
  cod113: number,
  cod28:  number,
  cod548: number,
  cod540: number,
  cod541: number,
  cod549: number,//remanente periodo siguiente
  cod550: number,//iva determinado

  /**
   * *************************************
   * SECCION: IMPUEST ADICIONAL ART. 42
   * *************************************
   *  -----------------------
   *  Creditos
   *  -----------------------
   */
  cod577: number,
  cod32 : number,
  cod150: number,
  cod146: number,
  cod752: number,
  cod545: number,
  cod546: number,
  cod710: number,
  cod602: number,//total creditos

  /**
   *  ----------------------------
   *  Debitos
   *  ----------------------------
   */
  cod575: number,
  cod574: number,
  cod580: number,
  cod582: number,
  cod753: number,

  cod576: number,
  cod33 : number,
  cod149: number,
  cod85 : number,
  cod754: number,
  cod551: number,
  cod559: number,
  cod508: number,
  cod533: number,
  cod552: number,
  cod603: number,

  /**
   *  ------------------- 
   *  Total impuesto determinado
   *  ------------------------
   */
  cod507: number,
  cod506: number,

  /**
   * *************************************
   * SECCION: CAMBIO SUJETO
   * *************************************
   */
  cod556: number,
  cod557: number,
  cod558: number,
  cod543: number,
  cod573: number,
  cod598: number,
  cod39 : number,
  cod554: number,
  cod736: number,
  cod597: number,
  cod555: number,
  cod596: number,

  /**
   * *************************************
   * SECCION: CREDITOS ESPECIALES
   * *************************************
   */
  cod725: number,
  cod704: number,
  cod169: number,
  cod126: number,
  cod572: number,

  cod737: number,
  cod705: number,
  cod161: number,
  cod128: number,
  cod568: number,

  cod727: number,
  cod706: number,
  cod570: number,
  cod571: number,
  cod590: number,


  /**
   * *************************************
   * TOTAL IMPUESTO DETERMINADO
   * *************************************
   */
  cod547: number,


  /**
   * *************************************
   * SECCION: REMANENTE CREDITOS ESPECIALES
   * *************************************
   */
  cod728: number,
  cod707: number,
  cod73 : number,
  cod130: number,
  cod591: number,

  /**
   * 
   * TOTALES F29
   * 
   */
  cod91: number,
  cod92: number,
  cod93: number,
  cod94: number,
}