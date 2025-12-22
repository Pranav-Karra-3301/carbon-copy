'use client';

import React, { useState } from 'react';
import {
  VintageTable,
  VintageTableRow,
  VintageTableCell,
  StrikethroughCell,
  FormField,
  Checkbox,
  YearBadge,
  DenseGrid,
  DenseGridCell,
  LabeledInput,
  FormLayout,
  FormLayoutArea,
} from '@/lib';
import styles from './page.module.css';

export default function ShowcasePage() {
  const [formData, setFormData] = useState({
    dealerName: 'Carstens Chevrolet',
    streetAddress: '310 N Main St',
    cityState: 'Alturas Calif.',
    dealerSignature: 'W Carstens',
    orderDate: '1-17-70',
    schedDate: '',
    phonedBy: '',
    acceptedBy: '',
    zone: '06',
    dealerCode: '09',
    district: '11.3',
    modelNo: '13669',
    orderNo: 'AHQ485',
    customer: '',
    lowerColor: '45',
    upperColor: '45',
  });

  const updateField = (field: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main className={styles.main}>
      <div className={styles.formContainer}>
        {/* ===== FORM HEADER ===== */}
        <FormLayout template="header-2col" bordered className={styles.formHeader}>
          <FormLayoutArea className={styles.headerLeft}>
            <LabeledInput label="Charge to:" value="" variant="none" size="xs" layout="vertical" />
            <div className={styles.dealerNameLine}>
              <FormField value={formData.dealerName} onChange={updateField('dealerName')} variant="underline" size="md" />
            </div>
            <LabeledInput label="Street address" value={formData.streetAddress} onChange={updateField('streetAddress')} variant="underline" size="xs" labelWidth="md" />
            <LabeledInput label="City and State" value={formData.cityState} onChange={updateField('cityState')} variant="underline" size="xs" labelWidth="md" />
            <LabeledInput label="Dealer signature" value={formData.dealerSignature} onChange={updateField('dealerSignature')} variant="underline" size="xs" labelWidth="md" handwritten />
          </FormLayoutArea>
          <FormLayoutArea border="left" className={styles.headerRight}>
            <DenseGrid columns="70px 100px 80px 110px" collapsed bordered={false}>
              <DenseGridCell padding="xs" size="xs" transform="uppercase" borderBottom borderRight>Date</DenseGridCell>
              <DenseGridCell padding="xs" align="center" borderBottom borderRight>
                <FormField value={formData.orderDate} onChange={updateField('orderDate')} variant="none" size="sm" align="center" />
              </DenseGridCell>
              <DenseGridCell padding="xs" size="xs" transform="uppercase" rowSpan={2} valign="middle" align="center" borderBottom borderRight>Dealer<br/>Stamp</DenseGridCell>
              <DenseGridCell padding="xs" size="xs" transform="uppercase" borderBottom>Order No.</DenseGridCell>
              <DenseGridCell padding="xs" size="xs" transform="uppercase" borderBottom borderRight>Zone</DenseGridCell>
              <DenseGridCell padding="xs" align="center" borderBottom borderRight>
                <FormField value={formData.zone} onChange={updateField('zone')} variant="none" size="sm" align="center" />
              </DenseGridCell>
              <DenseGridCell padding="xs" weight="bold" size="lg" align="center" borderBottom textColor="red">{formData.orderNo}</DenseGridCell>
              <DenseGridCell padding="xs" size="xs" transform="uppercase" borderBottom borderRight>Dealer<br/>Code</DenseGridCell>
              <DenseGridCell padding="xs" align="center" borderBottom borderRight>
                <div className={styles.dealerCodeArea}>
                  <FormField value={formData.dealerCode} onChange={updateField('dealerCode')} variant="none" size="sm" align="center" />
                  <span className={styles.districtLabel}>Dist<br/>rict</span>
                  <FormField value={formData.district} onChange={updateField('district')} variant="none" size="xs" align="center" />
                </div>
              </DenseGridCell>
              <DenseGridCell padding="xs" size="xs" transform="uppercase" borderBottom borderRight>Order Type</DenseGridCell>
              <DenseGridCell padding="xs" align="center" borderBottom>
                <div className={styles.orderTypeRow}><span>Sold</span><Checkbox checked size="sm" markStyle="x" /><span>Fleet</span><Checkbox size="sm" markStyle="x" /></div>
              </DenseGridCell>
              <DenseGridCell padding="xs" size="xs" transform="uppercase" borderBottom borderRight>Model<br/>No.</DenseGridCell>
              <DenseGridCell padding="xs" colSpan={2} borderBottom borderRight />
              <DenseGridCell padding="xs" weight="bold" align="center" borderBottom>{formData.modelNo}</DenseGridCell>
              <DenseGridCell padding="xs" size="xs" transform="uppercase" borderBottom borderRight>Sched.<br/>Date</DenseGridCell>
              <DenseGridCell padding="xs" borderBottom borderRight><StrikethroughCell /></DenseGridCell>
              <DenseGridCell padding="xs" size="xs" transform="uppercase" borderBottom borderRight>Phoned By</DenseGridCell>
              <DenseGridCell padding="xs" borderBottom><StrikethroughCell /></DenseGridCell>
              <DenseGridCell padding="xs" size="xs" transform="uppercase" borderRight>Accepted<br/>By</DenseGridCell>
              <DenseGridCell padding="xs" borderRight><StrikethroughCell /></DenseGridCell>
              <DenseGridCell padding="xs" size="xs" transform="uppercase" borderRight>Customer</DenseGridCell>
              <DenseGridCell padding="xs" className={styles.customerCell} />
            </DenseGrid>
          </FormLayoutArea>
        </FormLayout>

        {/* ===== CIRCLE TRIM DESIRED TABLE ===== */}
        <div className={styles.trimSection}>
          <div className={styles.trimHeader}>
            <span className={styles.redText}>Circle</span> Trim <span className={styles.redText}>Desired</span>
          </div>
          <VintageTable variant="dense" background="none">
            <thead>
              <VintageTableRow>
                <VintageTableCell variant="header" width={100} />
                <VintageTableCell variant="header">Type of Seat</VintageTableCell>
                <VintageTableCell variant="header" colSpan={2}>Black</VintageTableCell>
                <VintageTableCell variant="header" colSpan={2}>(Med.)</VintageTableCell>
                <VintageTableCell variant="header" colSpan={2}>Gold</VintageTableCell>
                <VintageTableCell variant="header">(Dk.)</VintageTableCell>
                <VintageTableCell variant="header">Ivory</VintageTableCell>
                <VintageTableCell variant="header">Saddle</VintageTableCell>
              </VintageTableRow>
              <VintageTableRow>
                <VintageTableCell /><VintageTableCell />
                <VintageTableCell className={styles.smallCell}>Cloth</VintageTableCell>
                <VintageTableCell className={styles.smallCell}>Vinyl</VintageTableCell>
                <VintageTableCell className={styles.smallCell}>Cloth</VintageTableCell>
                <VintageTableCell className={styles.smallCell}>Vinyl</VintageTableCell>
                <VintageTableCell className={styles.smallCell}>Cloth</VintageTableCell>
                <VintageTableCell className={styles.smallCell}>Vinyl</VintageTableCell>
                <VintageTableCell className={styles.smallCell}>Vinyl</VintageTableCell>
                <VintageTableCell className={styles.smallCell}>Vinyl</VintageTableCell>
                <VintageTableCell className={styles.smallCell}>Vinyl</VintageTableCell>
              </VintageTableRow>
            </thead>
            <tbody>
              <VintageTableRow>
                <VintageTableCell>Malibu</VintageTableCell>
                <VintageTableCell>Std. Bench</VintageTableCell>
                <VintageTableCell align="center">752</VintageTableCell>
                <VintageTableCell align="center">755</VintageTableCell>
                <VintageTableCell align="center">762</VintageTableCell>
                <VintageTableCell align="center">776</VintageTableCell>
                <VintageTableCell align="center">782</VintageTableCell>
                <VintageTableCell align="center">790</VintageTableCell>
                <VintageTableCell align="center">787</VintageTableCell>
                <VintageTableCell align="center">770</VintageTableCell>
                <VintageTableCell align="center" />
              </VintageTableRow>
              <VintageTableRow>
                <VintageTableCell>Sport Coupe</VintageTableCell>
                <VintageTableCell><span>Strato-Bucket</span><br /><span className={styles.redText}>(RPO A51)</span></VintageTableCell>
                <StrikethroughCell />
                <VintageTableCell align="center">756</VintageTableCell>
                <StrikethroughCell /><StrikethroughCell /><StrikethroughCell />
                <VintageTableCell align="center">796</VintageTableCell>
                <VintageTableCell align="center">751</VintageTableCell>
                <VintageTableCell align="center">788</VintageTableCell>
                <VintageTableCell align="center">771</VintageTableCell>
              </VintageTableRow>
              <VintageTableRow>
                <VintageTableCell>Sport Sedan</VintageTableCell>
                <VintageTableCell>Std. Bench</VintageTableCell>
                <VintageTableCell align="center">753</VintageTableCell>
                <VintageTableCell align="center">755</VintageTableCell>
                <VintageTableCell align="center">762</VintageTableCell>
                <VintageTableCell align="center">776</VintageTableCell>
                <VintageTableCell align="center">777</VintageTableCell>
                <VintageTableCell align="center">782</VintageTableCell>
                <StrikethroughCell />
                <VintageTableCell align="center">779</VintageTableCell>
                <StrikethroughCell />
              </VintageTableRow>
              <VintageTableRow>
                <VintageTableCell>4 Door Sedan</VintageTableCell>
                <VintageTableCell>Std. Bench</VintageTableCell>
                <VintageTableCell align="center">753</VintageTableCell>
                <VintageTableCell align="center">755</VintageTableCell>
                <VintageTableCell align="center">762</VintageTableCell>
                <StrikethroughCell />
                <VintageTableCell align="center">776</VintageTableCell>
                <VintageTableCell align="center" className={styles.circledValue}>782</VintageTableCell>
                <StrikethroughCell /><StrikethroughCell />
                <VintageTableCell align="center">779</VintageTableCell>
              </VintageTableRow>
              <VintageTableRow>
                <VintageTableCell>Convertible</VintageTableCell>
                <VintageTableCell>Std. Bench</VintageTableCell>
                <VintageTableCell align="center">755</VintageTableCell>
                <StrikethroughCell />
                <VintageTableCell align="center">764</VintageTableCell>
                <StrikethroughCell /><StrikethroughCell />
                <VintageTableCell align="center">790</VintageTableCell>
                <VintageTableCell align="center">787</VintageTableCell>
                <VintageTableCell align="center">770</VintageTableCell>
                <StrikethroughCell />
              </VintageTableRow>
            </tbody>
          </VintageTable>
        </div>

        {/* ===== MAIN BODY - 4 Column Tabular Layout ===== */}
        <div className={styles.mainBody}>
          {/* COLUMN 1: Model Options, Feature Groups, Power Teams */}
          <div className={styles.bodyColumn}>
            {/* Model Options */}
            <div className={styles.sectionBlock}>
              <div className={styles.sectionTitle}>Model Options</div>
              <div className={styles.sectionContent}>
                <div className={styles.subTitle}>SS 396</div>
                <p className={styles.descText}>
                  Available on VV Coupe Composties or Custom El Camtine wielt Refined in Tyrbe Plyrim.Misse 100dk. early
                </p>
                <p className={styles.descText}>
                  Ivalilable Turbo-Aer engine with bright ascunts. poceo Trem elc: batfyes arieh esitoints orah bngirt sies thoak paivted
                  gritte. stresling amset and calinons, wheel gaming. reikllinigs. opvolst car tromber
                  with arret moers. aericse dornen hoott and sospaneons So etionesis on griils.
                  Fraders, ther Sonnest. and doen from ornars, evert esionia and special fires.
                </p>
                <div className={styles.codeBox}>225</div>
              </div>
            </div>

            {/* Feature Groups */}
            <div className={styles.sectionBlock}>
              <div className={styles.sectionTitle}>Feature Groups*</div>
              
              <div className={styles.subSection}>
                <div className={styles.subHeader}>
                  <span className={styles.subHeaderTitle}>Appearance Guard</span>
                  <span className={styles.subHeaderCode}>2P5</span>
                </div>
                <div className={styles.subHeaderNote}>Includes:</div>
                <div className={styles.optionTable}>
                  <div className={styles.optionRow}><span>(A) Guards, bumper - front</span><span>V31</span></div>
                  <div className={styles.optionRow}><span>(B) Guards, bumper - rear</span><span>K32</span></div>
                  <div className={styles.optionRow}><span>(C) Guards, door edge</span><span>B32</span></div>
                  <div className={styles.optionRow}><span>(D) Mats, floor</span><span>B37</span></div>
                  <div className={styles.optionRow}><span>(E) Mirror, visor vanity</span><span>D24</span></div>
                </div>
              </div>

              <div className={styles.subSection}>
                <div className={styles.subHeader}>
                  <span className={styles.subHeaderTitle}>Operating Convenience</span>
                  <span className={styles.subHeaderCode}>ZO2</span>
                </div>
                <div className={styles.subHeaderNote}>Includes:</div>
                <div className={styles.optionTable}>
                  <div className={styles.optionRow}><span>(A) Clock, electric</span><span>U35</span></div>
                  <div className={styles.optionRow}><span>(B) Defroster, rear window<br/><span className={styles.redText}>(Forced Air)</span></span><span>C30</span></div>
                  <div className={styles.optionRow}><span>(C) Mirror, LH outside<br/>remote control rearview</span><span>U35</span></div>
                </div>
              </div>
            </div>

            {/* Power Teams */}
            <div className={styles.sectionBlock}>
              <div className={styles.sectionTitle}>Power Teams*</div>
              <div className={styles.subSection}>
                <div className={styles.subHeader}>
                  <span className={styles.subHeaderTitle}>Engines</span>
                  <span className={styles.alsoSee}>Also see SS 396</span>
                </div>
                <div className={styles.optionTable}>
                  <div className={styles.optionRow}><span>250 HP Turbo Fire 350<br/><span className={styles.mutedText}>(For regular grade fuel)</span></span><span>L68</span></div>
                  <div className={styles.optionRow}><span>300-HP Turbo Fire 350</span><span>L45</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Transmission, Axle, Power Assists, Other Options */}
          <div className={styles.bodyColumn}>
            {/* Transmission */}
            <div className={styles.sectionBlock}>
              <div className={styles.sectionTitle}>Transmission*</div>
              <div className={styles.optionTable}>
                <div className={styles.optionRow}><span>3-Speed - standard</span><span>ZW4</span></div>
                <div className={styles.optionRow}><span>Powerglide</span><span>M35</span></div>
                <div className={styles.optionRow}><span>Turbo Hydra Matic</span><span>M30</span></div>
                <div className={styles.optionRow}><span>4-Speed-wide range</span><span>M20</span></div>
                <div className={styles.optionRow}><span>4-Speed close ratio</span><span>M21</span></div>
              </div>
            </div>

            {/* Axle, rear */}
            <div className={styles.sectionBlock}>
              <div className={styles.sectionTitle}>Axle, rear</div>
              <div className={styles.optionTable}>
                <div className={styles.optionRow}><span>Positraction</span><span>G69</span></div>
                <div className={styles.optionRow}><span>Economy ratio</span><span>G68</span></div>
                <div className={styles.optionRow}><span>Performance ratio<br/><span className={styles.redText}>N/Stb. SSO only</span></span><span>ZG9</span></div>
              </div>
            </div>

            {/* Power Assists */}
            <div className={styles.sectionBlock}>
              <div className={styles.sectionTitle}>Power Assists</div>
              <div className={styles.optionTable}>
                <div className={styles.optionRow}><span>Brakes, power<br/><span className={styles.redText}>omth stam brex braken<br/>N/A SS 256</span></span><span>J50</span></div>
                <div className={styles.optionRow}><span>with disk-type-front brakes<br/><span className={styles.redText}>(incl. w/SS 396)</span></span><span>IL2</span></div>
                <div className={styles.optionRow}><span>Door Lock System, power (Electric)</span><span>AU2</span></div>
                <div className={styles.optionRow}><span>Steering, power<br/><span className={styles.redText}>Power brakes recommended</span></span><span>R46</span></div>
                <div className={styles.optionRow}><span>Top, Power<span className={styles.redText}> Convertible Malibu only</span></span><span>CCX</span></div>
                <div className={styles.optionRow}><span>Windows, power (Electric) Malibu &<br/><span className={styles.redText}>Custom El Camino only</span></span><span>A21</span></div>
              </div>
            </div>

            {/* Other Options */}
            <div className={styles.sectionBlock}>
              <div className={styles.sectionTitle}>Other Options</div>
              <div className={styles.optionTable}>
                <div className={styles.optionRow}><span>Air Conditioning*<br/>Four Season</span><span>C60</span></div>
                <div className={styles.optionRow}><span>Battery H.N.</span><span>T60</span></div>
              </div>
            </div>

            {/* Belts, Seats & Shoulder */}
            <div className={styles.sectionBlock}>
              <div className={styles.sectionTitle}>Belts, Seats & Shoulder*</div>
              <div className={styles.optionTable}>
                <div className={styles.optionRow}><span>Custom Deluxe With Sts.<br/><span className={styles.mutedText}>of Belts!</span></span><span>YA1</span></div>
                <div className={styles.optionRow}><span>Shoulder, Rear</span><span>YA2</span></div>
                <div className={styles.optionRow}><span>Shoulder, Short<br/><span className={styles.redText}>(Convertible Only)</span></span><span>YA2</span></div>
                <div className={styles.optionRow}><span>Shoulder<br/><span className={styles.mutedText}>With Bucket seats & optional<br/>fasss. Only</span></span><span>D55</span></div>
              </div>
            </div>
          </div>

          {/* COLUMN 3: Options List */}
          <div className={styles.bodyColumn}>
            <div className={styles.optionTable}>
              <div className={styles.optionRow}><span>Emission Control, evaporative<br/><span className={styles.redText}>CAS! Registrations only</span></span><span>NX4</span></div>
              <div className={styles.optionRow}><span>Exhaust, dual<br/><span className={styles.redText}>w/350 or 330 HP engine</span></span><span>N15</span></div>
              <div className={styles.optionRow}><span>Generator - At smp deleterion*<br/><span className={styles.redText}>Not w/Sir send.</span></span><span>V79</span></div>
              <div className={styles.optionRow}><span>Glass, Soft-Ray-Tinted<br/>All windows</span><span>A01</span></div>
              <div className={styles.optionRow}><span>Headlight Motion</span><span>KO1</span></div>
              <div className={styles.optionRow}><span>Hood, "Cool Induction"<br/><span className={styles.redText}>N/Stb. SSO only</span></span><span>ZL2</span></div>
              <div className={styles.optionRow}><span>Inst sexomention., Vurivari Vfi Ceupe,<br/>Convert. or Custom El Camino</span><span>U14</span></div>
              <div className={styles.optionRow}><span>Light Monitoring system (Sigoinel)<br/><span className={styles.redText}>N/A El Camino</span></span><span>U46</span></div>
              <div className={styles.optionRow}><span>Lighting, Roadtivy*</span><span>Z.6</span></div>
              <div className={styles.optionRow}><span>Molding, Body Side sctem<br/><span className={styles.redText}>f/A, 51 Ezetne only</span></span><span>EX4</span></div>
              <div className={styles.optionRow}><span>Molding, Side Window<br/>4 Seer-Setan & Std. El Camino</span><span>E8A</span></div>
              <div className={styles.optionRow}><span>Molidine, MP*<br/><span className={styles.mutedText}>Lats. ae klf ems8</span></span><span>VO1</span></div>
              <div className={styles.optionRow}><span>Rewts Secteriot,<br/>Pushbichon — Includes antenns</span><span></span></div>
              <div className={styles.optionRow}><span>AM Radio</span><span>UG8</span></div>
              <div className={styles.optionRow}><span>AM+FM Radio</span><span>U69</span></div>
              <div className={styles.optionRow}><span>AM FM/7 St Coanss Radio<br/><span className={styles.redText}>N/A SI Camino</span></span><span>U70</span></div>
              <div className={styles.optionRow}><span>Steteo Tape System with<br/>AM Media N/A El Camino</span><span>UM2</span></div>
              <div className={styles.optionRow}><span>Stereo Tape System with<br/>AM/FM N16 Staren Radio<br/><span className={styles.redText}>W/A SI Cerome</span></span><span>UM2</span></div>
              <div className={styles.optionRow}><span>Rear speaker<br/><span className={styles.redText}>N/A SI Camino or stereo</span></span><span>US0</span></div>
              <div className={styles.optionRow}><span>Steering Wheel, ComforOrt<br/>Optional assembly only</span><span>L0E3</span></div>
            </div>
          </div>

          {/* COLUMN 4: More Options, TIRES, Additional */}
          <div className={styles.bodyColumn}>
            <div className={styles.optionTable}>
              <div className={styles.optionRow}><span>Steering Wheel, cushioned rim</span><span>NK1</span></div>
              <div className={styles.optionRow}><span>Tire Chain, Lasind<br/><span className={styles.redText}>N/A El Camino</span></span><span>V75</span></div>
              <div className={styles.optionRow}><span>Wheel covers, bright metal<br/><span className={styles.redText}>N/A SS 396</span></span><span>PO7</span></div>
              <div className={styles.optionRow}><span>Wheel Trim Rings<br/><span className={styles.redText}>N/A SS 396</span></span><span>P05</span></div>
              <div className={styles.optionRow}><span>Wheels, rally*<br/><span className={styles.redText}>N/A SS 396</span></span><span>Z27</span></div>
              <div className={styles.optionRow}><span>Windshield Wipers, Hide A Way<br/>pat. on Malibu and Conimo<br/>61 Cemino</span><span>C24</span></div>
            </div>

            {/* TIRES Box */}
            <div className={styles.tiresSection}>
              <div className={styles.tiresHeader}>TIRES <span className={styles.tiresSubtext}>See reverse size fee stage info</span></div>
              <div className={styles.tiresContent}>
                <span>write<br/>Option On.</span>
                <div className={styles.arrowRight}>➔</div>
              </div>
            </div>

            {/* Additional Options */}
            <div className={styles.additionalBox}>
              <strong>Additional options</strong><br/>
              <span className={styles.seeReverse}>(See reverse side)</span><br/>
              <strong>or special instructions</strong>
            </div>
          </div>
        </div>

        {/* ===== FOOTER ===== */}
        <FormLayout template="footer" bordered className={styles.formFooter}>
          <FormLayoutArea className={styles.footerLeft}>
            <span className={styles.footerCode}>GSO 106 Rev. 5-69</span>
            <span className={styles.footerText}>Printed in U.S.A.</span>
          </FormLayoutArea>
          <FormLayoutArea align="center" className={styles.footerCenter}>
            <span>*See Vehicle Price Schedule for detailed description and model application.</span>
          </FormLayoutArea>
          <FormLayoutArea align="end" className={styles.footerRight}>
            <YearBadge year="1970" preliminary subtitle="Chevelle Sedan, Coupe, Convertible or El Camino Order" variant="light" />
          </FormLayoutArea>
        </FormLayout>

        <div className={styles.dealerCopy}>DEALER FILE COPY</div>
      </div>
    </main>
  );
}
