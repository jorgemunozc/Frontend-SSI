import { jsPDF } from 'jspdf';
import { formatearRut } from '@/utils/rut';
/**
 * Informacion de la tarjeta dibujada
 * @typedef {Object} CardInfo
 * @property {number} rowH - Altura de las filas que alcanzan en la tarjeta
 * @property {number} margin - Margen interior de la tarjeta desde donde se puede comenzar a dibujar
 * @property {number} rows - Cantidad maxima de filas que alcanzan en la tarjeta
 */

/**
 * @type {CardInfo}
 */
export declare interface CardInfo {
  rowH: number,
  rows: number,
  margin: number,
  width: number,
  height: number
}

export declare interface CredencialLogos {
  virginioLogo: HTMLImageElement,
  euroPENLogo: HTMLImageElement,
  empresaSimLogo: HTMLImageElement
}


export const generateCard = function (targetPdf: jsPDF, data: Empresa, logos: CredencialLogos): void {
  const pdfWidth = targetPdf.internal.pageSize.width;
  const pdfHeight = targetPdf.internal.pageSize.height;
  const cardHeight = pdfHeight * 0.21;
  const cardWith = pdfWidth * 0.6;
  const cardPosX = pdfWidth / 2 - cardWith / 2;
  const cardPosY = 40;
  const fontSize = 9;
  targetPdf.setFontSize(fontSize);
  const cardInfo = createCardLayout(targetPdf, cardPosX, cardPosY, cardWith, cardHeight);
  createCardLayout(targetPdf, cardPosX, cardHeight + cardPosY * 2, cardWith, cardHeight);
  loadDataLabels(targetPdf, cardInfo, cardPosX, cardPosY);
  loadDatatoCard(data, targetPdf, cardInfo ,cardPosX, cardPosY);
  loadImages(targetPdf, logos, cardInfo, cardPosX, cardPosY);
}

const loadDatatoCard = function (data: Empresa, target: jsPDF, cardInfo: CardInfo, cardX: number, cardY: number) {
  const rutCharWidth = target.getStringUnitWidth('RUT');
  const fontSize = target.getFontSize();
  const originalColor = target.getTextColor();
  const textColor = '#000000';
  const maxAllowedSize = cardInfo.width - (cardInfo.margin*2);
  target.setTextColor(textColor);
  target.setFontSize(fontSize*0.8);
  target.text(target.splitTextToSize(data.razon_social.toUpperCase(), maxAllowedSize), cardX + cardInfo.margin, cardY + (cardInfo.rowH) * 3.7, { baseline: 'middle' })
  target.text(data.domicilio.toUpperCase(), cardX + cardInfo.margin, cardY + (cardInfo.rowH) * 5.7, { baseline: 'middle' })
  target.text(data.ciudad.toUpperCase(), cardX + cardInfo.margin, cardY + (cardInfo.rowH) * 6.3, { baseline: 'middle' })
  target.setFontSize(fontSize*2)
  target.text(`${formatearRut(data.rut, '.')}-${data.dv}`, (cardX + cardInfo.margin + (rutCharWidth * fontSize * 2)), cardY + (cardInfo.rowH) * 8, { baseline: 'middle' })
  target.setTextColor(originalColor);
  target.setFontSize(fontSize);
}

const loadDataLabels = function (target: jsPDF, cardInfo: CardInfo, cardX: number, cardY: number) {
  const fontSize = target.getFontSize();
  target.setFont('helvetica', 'normal', 'bold');
  target.setTextColor('#ffffff');
  target.text('ROL ÚNICO TRIBUTARIO', cardX + cardInfo.width / 2, cardY + cardInfo.rowH / 2, { align: 'center', baseline: 'middle' });
  target.setTextColor('#125386');
  target.text('NOMBRE O RAZÓN SOCIAL', cardX + cardInfo.margin, cardY + (cardInfo.rowH) * 3, { baseline: 'middle' })
  target.text('DIRECCIÓN', cardX + cardInfo.margin, cardY + (cardInfo.rowH) * 5, { baseline: 'middle' })
  target.text('RUT', cardX + cardInfo.margin, cardY + (cardInfo.rowH) * 8, { baseline: 'middle' })
  target.setFontSize(fontSize*0.8);
  target.text('DOCUMENTO EDUCATIVO SIN VALOR A EFECTOS LEGALES', cardX + (cardInfo.width/2), cardY*2 + (cardInfo.height) + (cardInfo.rowH*(cardInfo.rows - 1)), {align: 'center'})
  target.setFontSize(fontSize);
}
/**
 * Funcion crea una tarjeta vacia
 * @param {jsPDF} pdf - objeto donde se desea dibujar la tarjeta
 * @param {number} x - posicion horizontal en el que se desea poner la tarjeta
 * @param {number} y - posicion vertical donde se desea poner la tarjeta
 * @returns {CardInfo} - Informacion sobre la tarjeta dibujada
 */
export const createCardLayout = function (pdf: jsPDF, x: number, y: number, w: number, h: number): CardInfo {
  const width = w;
  const height = h;
  const lineWidth = 1;
  const rows = 10;
  const rowHeight = (height - (lineWidth)) / rows;
  const rowWidth = width - (lineWidth);
  const primColor = '#082d4b';
  const secColor = '#ffa500';
  const margin = 10;
  //Posiciones dentro de la tarjeta donde estamos actualmente dibujando
  let currY = y + (lineWidth / 2);
  const currX = x + (lineWidth / 2);
  pdf.setLineWidth(lineWidth);
  pdf.setFillColor(primColor);
  //Card header
  pdf.rect(currX, currY, rowWidth, rowHeight, 'F');
  //Cambiamos color para linea secundaria de la tarjeta
  pdf.setFillColor(secColor);
  currY = currY + rowHeight;
  pdf.rect(currX, currY, rowWidth, rowHeight * 0.5, 'F');
  //Card footer
  currY = (y + lineWidth / 2) + (rowHeight * (rows - 1))
  pdf.rect(currX, currY + (rowHeight * 0.5), rowWidth, rowHeight * 0.5, 'F');
  //Card Wrapper
  pdf.rect(x, y, width, height);
  return {
    rows: rows,
    rowH: rowHeight,
    margin: margin,
    width: w,
    height: h
  }
}

const loadImages = function (target: jsPDF, images: CredencialLogos, cardInfo: CardInfo, initialX: number, initialY: number) {
  const empresaSimLogo = images.empresaSimLogo;
  const euroPENLogo = images.euroPENLogo;
  const virginioLogo = images.virginioLogo;
  let imgX = initialX + (cardInfo.width * 0.6);
  let imgY = initialY + (cardInfo.rowH * (cardInfo.rows - 5));
  const imgW = cardInfo.width*0.4;
  let imgH = getImgNewSize(empresaSimLogo.naturalHeight, empresaSimLogo.naturalWidth, imgW, 'h');
  target.addImage(empresaSimLogo, 'PNG', imgX, imgY, imgW, imgH);

  imgX = initialX + (cardInfo.margin*2);
  imgY = (initialY*2) + cardInfo.height + (cardInfo.rowH * 4)
  imgH = getImgNewSize(euroPENLogo.height, euroPENLogo.width, imgW, 'h');
  target.addImage(euroPENLogo, 'PNG', imgX, imgY, imgW, imgH);

  imgX = initialX + (cardInfo.width * 0.54);
  imgY = (initialY*2) + cardInfo.height + (cardInfo.rowH * 3.4)
  imgH = getImgNewSize(virginioLogo.height, virginioLogo.width, imgW, 'h');
  target.addImage(virginioLogo, 'PNG', imgX, imgY, imgW, imgH);
}

const getImgNewSize = function (height: number, width: number, size: number, sizeFor: string) {
  if (height === 0 || width === 0) {
    return 1;
  }
  const aspectRatio = width/height;
  let newSize = 1;
  switch (sizeFor) {
    case 'w':
      newSize = aspectRatio * size;
      break;
    case 'h':
    default:
      newSize = (size/aspectRatio);
  }
  return newSize;
}
