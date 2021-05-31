<template>
    <table>
        <thead>
            <tr>
                <th colspan="6">IMPUESTO AL VALOR AGREGADO D.L 825/74</th>
                <th colspan="2">Con Derecho a Cr&eacute;dito</th>
                <th colspan="3">Sin Derecho a Cr&eacute;dito</th>
            </tr>
        </thead>
        <!-- Cuerpo de tabla 11 columnas de ancho -->
        <tbody>
            <tr>
                <td>23</td>
                <td class="vertical-header" rowspan="14">Compras y/o Servicios Utilizados</td>
                <td rowspan="2" colspan="4">IVA por documentos electr&oacute;nicos recibidos</td>
                <td>511</td>
                <td><input type="number" /></td>
                <td>514</td>
                <td colspan="2"><input type="number" /></td>
            </tr>
            <tr>
                <td></td>
                <th colspan="2">Cantidad de Documentos</th>
                <th colspan="3">Monto Neto</th>
            </tr>
            <tr>
                <td>24</td>
                <td rowspan="3" colspan="2">Sin Derecho a Cr&eacute;dito Fiscal</td>
                <td colspan="2">Internas Afectas</td>
                <td>564</td>
                <td></td>
                <td>521</td>
                <td colspan="2"></td>
            </tr>
            <tr>
                <td>25</td>
                <td colspan="2">Importaciones</td>
                <td>566</td>
                <td></td>
                <td>560</td>
                <td colspan="2"></td>
            </tr>
            <tr>
                <td>26</td>
                <td colspan="2">Internas exentas, o no gravadas</td>
                <td>584</td>
                <td></td>
                <td>562</td>
                <td colspan="2"></td>
            </tr>
            <tr>
                <th></th>
                <th colspan="4"></th>
                <th colspan="2">Cantidad de Documentos</th>
                <th colspan="3">Cr&eacute;dito, Recuperaci&oacute;n y Reintegro</th>
            </tr>

            <tr>
                <td>27</td>
                <td rowspan="8">Con derecho a cr&eacute;dito fiscal</td>
                <td class="vertical-header" rowspan="6">Internas</td>
                <td colspan="2">Facturas recibidas del giro y Facturas de compra emitidas</td>
                <td>519</td>
                <td></td>
                <td>520</td>
                <td><input type="number"></td>
                <td>+</td>
            </tr>

            <tr>
                <td>28</td>
                <td colspan="2">Facturas recibidas de Proveedores: Supermercados y Comercios similares, Art. 23 N°4 D.L.825, de 1974 (Ley N°20.780) </td>
                <td>761</td>
                <td></td>
                <td>762</td>
                <td></td>
                <td>+</td>
            </tr>

            <tr>
                <td>29</td>
                <td colspan="2">Facturas recibidas por Adquisici&oacute;n o Construcci&oacute;n de Bienes Inmuebles, Art.8° transitorio (Ley N°20.780)</td>
                <td>765</td>
                <td></td>
                <td>766</td>
                <td></td>
                <td>+</td>
            </tr>

            <tr>
                <td>30</td>
                <td colspan="2">Facturas activo fijo</td>
                <td>524</td>
                <td></td>
                <td>525</td>
                <td></td>
                <td>+</td>
            </tr>

            <tr>
                <td>31</td>
                <td colspan="2">Notas de Cr&eacute;dito recibidas y Notas de Cr&eacute;dito emitidas por retenci&oacute; de cambio de sujeto</td>
                <td>527</td>
                <td></td>
                <td>528</td>
                <td></td>
                <td>-</td>
            </tr>

            <tr>
                <td>32</td>
                <td colspan="2">Notas de D&eacute;bito recibidas y Notas de D&eacute;bito emitidas por retenci&oacute;n de cambio de sujeto</td>
                <td>531</td>
                <td></td>
                <td>532</td>
                <td></td>
                <td>+</td>
            </tr>

            <tr>
                <td>33</td>
                <td class="vertical-header" rowspan="2">Importaciones</td>
                <td colspan="2">Declaraciones de ingreso (DIN) importaciones del giro</td>
                <td>534</td>
                <td></td>
                <td>535</td>
                <td></td>
                <td>+</td>
            </tr>   
            <tr>
                <td>34</td>
                <td colspan="2">Declaraciones de ingreso (DIN) importaciones activo fijo</td>
                <td>536</td>
                <td></td>
                <td>553</td>
                <td></td>
                <td>+</td>
            </tr>
            <tr>
                <td>35</td>
                <td colspan="7">Remanente Cr&eacute;dito Fiscal mes anterior</td>
                <td>504</td>
                <td></td>
                <td>+</td>
            </tr>
            <tr>
                <td>36</td>
                <td colspan="7">Devoluci&oacute;n Solicitud Art. 36 (Exportadores)</td>
                <td>593</td>
                <td></td>
                <td>-</td>
            </tr>
            <tr>
                <td>37</td>
                <td colspan="7">Devoluci&oacute;n Solicitud Art. 27 bis (Activo Fijo)</td>
                <td>594</td>
                <td></td>
                <td>-</td>
            </tr>
            <tr>
                <td>38</td>
                <td colspan="7">Certificado Imputaci&oacute;n Art. 27 bis (Activo Fijo)</td>
                <td>592</td>
                <td></td>
                <td>-</td>
            </tr>
            <tr>
                <td>39</td>
                <td colspan="7">Devoluci&oacute;n Solicitud Art. 3 (Cambio de sujeto)</td>
                <td>539</td>
                <td></td>
                <td>-</td>
            </tr>
            <tr>
                <td>40</td>
                <td colspan="7">Devoluci&oacute;n Solicitud Ley N° 20.258 por remamente CF IVA originado en Impuesto Espec&iacute;fico Petr&oacute;leo Diesel (Generadoras El&eacute;ctricas)</td>
                <td>718</td>
                <td></td>
                <td>-</td>
            </tr>
            <tr>
                <td>41</td>
                <td colspan="7">Monto Reintegrado por Devoluci&oacute;n Indebida de Cr&eacute;dito Fiscal D.S. 348 (Exportadores)</td>
                <td>164</td>
                <td></td>
                <td>+</td>
            </tr>
            <tr>
                <td></td>
                <td colspan="2"></td>
                <td colspan="3">M3 Comprados con derecho a cr&eacute;dito</td>
                <td colspan="2">Componentes del impuesto</td>
                <td colspan="3"></td>
            </tr>

            <tr>
                <td rowspan="2">42</td>
                <td rowspan="4">Ley 20.765</td>
                <td rowspan="2">Recuperaci&oacute;n del Impuesto Espec&iacute;fico al Petr&oacute;leo Diesel (Art. 7° Ley 18.502, Arts. 1° y 3° D.S. N°311/86)</td>
                <td rowspan="2">730</td>
                <td rowspan="2"></td>
                <td>Base</td>
                <td>742</td>
                <td></td>
                <td rowspan="2">127</td>
                <td rowspan="2"></td>
                <td rowspan="2">+</td>
            </tr>

            <tr>
                <td>Variable</td>
                <td>743</td>
                <td></td>    
            </tr>

            <tr>
                <td rowspan="2">43</td>
                <td rowspan="2">Recuperaci&oacute;n del Impuesto Espec&iacute;fico al Petr&oacute;leo Diesel soportado por Transportistas de Carga (Art. 2° Ley 19.764)</td>
                <td rowspan="2">729</td>
                <td rowspan="2"></td>
                <td>Base</td>
                <td>744</td>
                <td></td>
                <td rowspan="2">544</td>
                <td rowspan="2"></td>
                <td rowspan="2">+</td>
            </tr>

            <tr>
                <td>Variable</td>
                <td>745</td>
                <td></td>
            </tr>

            <tr>
                <td>44</td>
                <td colspan="7">Cr&eacute;dito del Art. 11° Ley 18.211 (correspondiente a Zona Franca de Extensi&oacute;)</td>
                <td>523</td>
                <td></td>
                <td>+</td>
            </tr>
            <tr>
                <td>45</td>
                <td colspan="7">Cr&eacute;dito por Impuesto de Timbres Y Estampillas, Art. 3° Ley 20.259</td>
                <td>712</td>
                <td></td>
                <td>+</td>
            </tr>
            <tr>
                <td>46</td>
                <td colspan="7">Cr&eacute;dito por IVA restituido a aportantes sin domicilio ni residencia en Chile (Art. 83, del art&iacute;culo primero Ley 20.712)</td>
                <td>757</td>
                <td></td>
                <td>+</td>
            </tr>
            <tr>
                <td>47</td>
                <td colspan="7">TOTAL CR&Eacute;DITOS</td>
                <td>537</td>
                <td></td>
                <td>=</td>
            </tr>
        </tbody>
    </table>
</template>