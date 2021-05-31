<template>
    <table>
        <thead>
            <tr>
                <th colspan="4">IMPUESTO AL VALOR AGREGADO D.L 825/74</th>
                <th colspan="2">Cantidad de Documentos</th>
                <th colspan="3">Monto Neto</th>
            </tr>
        </thead>
        <!-- Cuerpo de tabla 9 columnas de ancho -->
        <tbody>
            <tr>
                <td>1</td>
                <td class="vertical-header" rowspan="18">Ventas y/o Servicios Prestados</td>
                <td class="vertical-header" rowspan="6">Informaci&oacute;n de Ingresos</td>
                <td>Exportaciones</td>
                <td>585</td>
                <td><input type="number" /></td>
                <td>20</td>
                <td colspan="2"><input type="number" /></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Ventas y/o Servicios prestados Exentos, o No Gravados del giro</td>
                <td>586</td>
                <td><input type="number" /></td>
                <td>142</td>
                <td colspan="2"><input type="number" /></td>
            </tr>

            <tr>
                <td>3</td>
                <td>Ventas con retenci&oacute;n sobre el margen de comercializaci&oacute;n (contribuyentes retenidos)</td>
                <td>731</td>
                <td><input type="number" /></td>
                <td>732</td>
                <td colspan="2"><input type="number" /></td>
            </tr>

            <tr>
                <td>4</td>
                <td>Ventas y/o Servicios prestados exentos o No Gravados que no son del giro</td>
                <td>714</td>
                <td><input type="number" /></td>
                <td>715</td>
                <td colspan="2"><input type="number" /></td>
            </tr>

            <tr>
                <td>5</td>
                <td>Facturas de Compra recibidas con retenci&oacute;n total (contribuyentes retenidos) y Factura de Inicio emitida</td>
                <td>515</td>
                <td><input type="number" /></td>
                <td>587</td>
                <td colspan="2"><input type="number" /></td>
            </tr>

            <tr>
                <td>6</td>
                <td colspan="3">Facturas de compras recibidas con retenci&oacute;n parcial (Total neto)</td>
                <td>720</td>
                <td colspan="2"><input type="number" /></td>
            </tr>

            <!-- encabezado -->
            <tr>
                <td></td>
                <td colspan="2"></td>
                <td colspan="2">Cantidad de Documentos</td>
                <td colspan="3">D&eacute;bitos</td>
            </tr>
            <!-- fin encabezado -->

            <tr>
                <td>7</td>
                <td class="vertical-header" rowspan="11">Genera D&eacute;bito</td>
                <td>Facturas emitidas por ventas y servicios del giro</td>
                <td>503</td>
                <td><input type="number" /></td>
                <td>502</td>
                <td><input type="number" /></td>
                <td>+</td>
            </tr>

            <tr>
                <td>8</td>
                <td>Facturas emitidas por la venta de bienes inmuebles afectas a IVA</td>
                <td>763</td>
                <td><input type="number" /></td>
                <td>764</td>
                <td><input type="number" /></td>
                <td>+</td>
            </tr>

            <tr>
                <td>9</td>
                <td>Faturas y Notas de D&eacute;bitos por ventas y servicios que no son del giro (activo fijo y otros)</td>
                <td>716</td>
                <td><input type="number" /></td>
                <td>717</td>
                <td><input type="number" /></td>
                <td>+</td>
            </tr>

            <tr>
                <td>10</td>
                <td>Boletas</td>
                <td>110</td>
                <td><input type="number" /></td>
                <td>111</td>
                <td><input type="number" /></td>
                <td>+</td>
            </tr>
            <tr>
                <td>11</td>
                <td>Comprobantes o Recibos de Pago generados en transacciones pagadas a trav&eacute;s de medios electr&oacute;nicos</td>
                <td>758</td>
                <td><input type="number" /></td>
                <td>759</td>
                <td><input type="number" /></td>
                <td>+</td>
            </tr>
            <tr>
                <td>12</td>
                <td>Notas de D&eacute;bito emitidas asociadas al giro y Notas de D&eacute;bito recibidas de terceros por retenci&oacute;n parcial de cambio de sujeto</td>
                <td>512</td>
                <td><input type="number" /></td>
                <td>513</td>
                <td><input type="number" /></td>
                <td>+</td>
            </tr>
            <tr>
                <td>13</td>
                <td>Notas de Cr&eacute;dito emitidas por Facturas asociadas al giro y Notas de Cr&eacute;dito recibidas de terceros por retenci&oacute;n parcial de cambio de sujeto</td>
                <td>509</td>
                <td><input type="number" /></td>
                <td>510</td>
                <td><input type="number" /></td>
                <td>-</td>
            </tr>
            <tr>
                <td>14</td>
                <td>Notas de Cr&eacute;dito emitidas por Vales de m&aacute;quinas autorizadas por el Servicio</td>
                <td>708</td>
                <td><input type="number" /></td>
                <td>709</td>
                <td><input type="number" /></td>
                <td>-</td>
            </tr>
            <tr>
                <td>15</td>
                <td>Notas de Cr&eacute;dito emitidas por ventas y servicios que no son del giro (activo fijo y otros)</td>
                <td>733</td>
                <td><input type="number" /></td>
                <td>734</td>
                <td><input type="number" /></td>
                <td>-</td>
            </tr>
            <tr>
                <td>16</td>
                <td>Facturas de Compra recibidas con retenci&oacute;n parcial (contribuyentes retenidos)</td>
                <td>516</td>
                <td><input type="number" /></td>
                <td>517</td>
                <td><input type="number" /></td>
                <td>+</td>
            </tr>
            <tr>
                <td>17</td>
                <td>Liquidaci&oacute;n y Liquidaci&oacute;n Factura</td>
                <td>500</td>
                <td><input type="number" /></td>
                <td>501</td>
                <td><input type="number" /></td>
                <td>+</td>
            </tr>
            <tr>
                <td>18</td>
                <td colspan="5">Adiciones al D&eacute;bito Fiscal del mes, originadas en devoluciones excesivas registradas en otros per&iacute;odos por Art. 27 bis</td>
                <td>154</td>
                <td><input type="number" /></td>
                <td>+</td>
            </tr>
            <tr>
                <td>19</td>
                <td colspan="5">Restituci&oacute;n Adicional por proporci&oacute;n de operaciones exentas y/o no gravadas por concepto Art. 27 bis, inc. 2° (Ley 19.738/01)</td>
                <td>518</td>
                <td><input type="number" /></td>
                <td>+</td>
            </tr>
            <tr>
                <td>20</td>
                <td colspan="5">Reintegro del Impuesto de Timbres y Estampillas, Art 3° Ley N° 20.259 e IVA determinado en el Arrendamiento espor&aacute;dico de BBRR amoblados</td>
                <td>713</td>
                <td><input type="number" /></td>
                <td>+</td>
            </tr>
            <tr>
                <td>21</td>
                <td colspan="5" style="border:0">
                    <table style="width:100%;border-collapse:collapse">
                        <tr>
                            <td>Adiciones al D&eacute;bito por IEPD Ley 20.765</td>
                            <td>M3</td>
                            <td>738</td>
                            <td><input type="number" /></td>
                            <td>Base</td>
                            <td>739</td>
                            <td><input type="number" /></td>
                            <td>Variable</td>
                            <td>740</td>
                            <td><input type="number" /></td>
                        </tr>
                    </table>
                </td>
                <td>741</td>
                <td><input type="number" /></td>
                <td>+</td>
            </tr>
            <tr>
                <td>22</td>
                <td colspan="5">TOTAL D&Eacute;BITOS</td>
                <td>538</td>
                <td><input type="number" /></td>
                <td>=</td>
            </tr>
        </tbody>
    </table>
</template>