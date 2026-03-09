// Comprehensive country data extracted from Map.jsx with coordinates added
// Shared data source for both Globe3D and Map components

// Coordinates mapping for globe visualization
const coordinates = {
  af: { name: 'Afghanistan', lat: 33.9391, lng: 67.7100 },
  au: { name: 'Australia', lat: -25.2744, lng: 133.7751 },
  bs: { name: 'Bahamas', lat: 25.0343, lng: -77.3963 },
  bd: { name: 'Bangladesh', lat: 23.6850, lng: 90.3563 },
  bb: { name: 'Barbados', lat: 13.1939, lng: -59.5432 },
  bm: { name: 'Bermuda', lat: 32.3078, lng: -64.7505 },
  bw: { name: 'Botswana', lat: -22.3285, lng: 24.6849 },
  cl: { name: 'Chile', lat: -35.6751, lng: -71.5430 },
  cy: { name: 'Cyprus', lat: 35.1264, lng: 33.4299 },
  cd: { name: 'DR Congo', lat: -4.0383, lng: 21.7587 },
  dm: { name: 'Dominica', lat: 15.4150, lng: -61.3710 },
  fj: { name: 'Fiji', lat: -17.7134, lng: 178.0650 },
  gh: { name: 'Ghana', lat: 7.9465, lng: -1.0232 },
  gd: { name: 'Grenada', lat: 12.1165, lng: -61.6790 },
  gy: { name: 'Guyana', lat: 4.8604, lng: -58.9302 },
  ir: { name: 'Iran', lat: 32.4279, lng: 53.6880 },
  ie: { name: 'Ireland', lat: 53.4129, lng: -8.2439 },
  jm: { name: 'Jamaica', lat: 18.1096, lng: -77.2975 },
  ke: { name: 'Kenya', lat: -0.0236, lng: 37.9062 },
  my: { name: 'Malaysia', lat: 4.2105, lng: 101.9758 },
  mu: { name: 'Mauritius', lat: -20.1609, lng: 57.5012 },
  mn: { name: 'Mongolia', lat: 46.8625, lng: 103.8467 },
  mz: { name: 'Mozambique', lat: -18.6657, lng: 35.5296 },
  pk: { name: 'Pakistan', lat: 30.3753, lng: 69.3451 },
  ph: { name: 'Philippines', lat: 12.8797, lng: 121.7740 },
  pg: { name: 'PNG', lat: -6.3150, lng: 143.9555 },
  ru: { name: 'Russia', lat: 61.5240, lng: 105.3188 },
  kn: { name: 'S. Kitts and Nevis', lat: 17.3578, lng: -62.7830 },
  ws: { name: 'Samoa', lat: -13.7590, lng: -172.1046 },
  sc: { name: 'Seychelles', lat: -4.6796, lng: 55.4920 },
  sb: { name: 'Solomon Islands', lat: -9.6457, lng: 160.1562 },
  za: { name: 'South Africa', lat: -30.5595, lng: 22.9375 },
  lk: { name: 'Sri Lanka', lat: 7.8731, lng: 80.7718 },
  lc: { name: 'St Lucia', lat: 13.9094, lng: -60.9789 },
  vc: { name: 'St. Vincent', lat: 12.9843, lng: -61.2872 },
  sr: { name: 'Suriname', lat: 3.9193, lng: -56.0278 },
  tz: { name: 'Tanzania', lat: -6.3690, lng: 34.8888 },
  tt: { name: 'Trinidad & Tobago', lat: 10.6918, lng: -61.2225 },
  ae: { name: 'UAE', lat: 23.4241, lng: 53.8478 },
  ug: { name: 'Uganda', lat: 1.3733, lng: 32.2903 },
  gb: { name: 'UK', lat: 55.3781, lng: -3.4360 },
  zm: { name: 'Zambia', lat: -13.1339, lng: 27.8493 },
  zw: { name: 'Zimbabwe', lat: -19.0154, lng: 29.1549 }
}

// Base country details from Map.jsx
const countryDetails = {
  af: {
    countryCode: '+93',
    timeDifference: '-4 Hours and 30 minutes (GMT+4:30)',
    port: 'Karachi',
    shippingLine: 'ECL/NYK',
    currency: 'Afghan Afghani (AFN)',
    documents: 'Original license, Passport copy',
    shippingPorts: 'Afghanistan does not have any port of its own, thus vehicles are shipped through Karachi.',
    leftHandDrive: 'Importation of left-hand drive vehicles is permitted in the country.',
    documentsRequired: [
      'Original license for the vehicle',
      'Original sell contract (if the vehicle is not owned by the shipper)',
      'Passport copy',
      'Bill of Lading',
      'Original certificate of title and Registration',
      'Tax exemption form (diplomats)',
      'Request letter for customs clearance permission to Ministry of Foreign Affairs and Ministry of Finance',
      'Note Verbale (memo letter) from the Embassy / NGO organization (diplomatic status)'
    ],
    dutyAndTaxes: 'Vehicles are taxed at between 10 and 16 percent, according to model and year. Trucks and buses are taxed at a rate of 2.5 percent. Diplomats are exempted of paying duties and taxes.',
    importRestrictions: [
      'The import of vehicles requires prior authorization from the Ministry of Commerce in Kabul, Afghanistan.',
      'Only foreigners that own a work permit or working visa & diplomats are allowed to import a vehicle.',
      'Tourists are not allowed to import vehicle in the country.'
    ]
  },
  au: {
    countryCode: '+61',
    timeDifference: '+2',
    port: 'Adelaide, Brisbane, Sydney, Melbourne, Kembla',
    shippingLine: 'TOYOFUJI / AUTOHUB / DOLPHIN',
    currency: 'Australian dollar',
    documents: 'Invoice / BL / Masho Translation / Masho / Vehicle import Approval',
    yearRestrictions: 'Vehicles older than 25 years can be imported. Apart from that Vehicles can be imported under two schemes: SEVS - each allowed model has its allowed year range. RAW – only registered dealers can import these models. (year range can be checked from Australian infrastructure website and change based on the scheme and the chassis)',
    mostPopularVehicles: 'Mitsubishi Lancer Evolution, Nissan Fairlady Z, Nissan GT-R, BMW 3 Series, Toyota Coaster, Subaru Impreza WRX',
    destinationPort: 'Adelaide, Brisbane, Sydney, Melbourne, Kembla',
    timeOfShipment: 'RoRo & container',
    vesselSchedule: 'RoRo (Weekly)',
    inspection: 'No Inspection Required',
    rightHandDrive: 'Australia country allows the importation of right hand drive vehicles that are 15 years or above on the date the landing.',
    importSteps: [
      'Obtain a Vehicle Import Approval (VIA) from the Vehicle Safety Standards Branch of the Department of Infrastructure, Transport, Regional Development and Local Government.',
      'Pay customs duty, Goods and Services Tax (GST) and luxury car tax (LCT) where applicable and obtain customs clearance at the port of entry.',
      'Obtain quarantine clearance from the Australian Quarantine and Inspection Service (AQIS) after the road vehicle has arrived at the port of entry.',
      'To gain Customs clearance for an imported road vehicle you must hold a valid VIA for that road vehicle.',
      'It is an offence under the MVSA to import, sell or present new or used imported road vehicles to the Australian market for the first time unless those road vehicles meet the National Standards.'
    ],
    eligibility: [
      'You have owned and used the vehicle overseas for a period of not less than twelve continuous calendar months.',
      'You are of driving age.',
      'Cars required to be right hand drive.',
      'You must be an Australian citizen.',
      'You are a migrant holding permanent residency in Australia.',
      'Also, you are allowed to import any vehicle which is 15 or more years old on the date it lands in Australia.'
    ],
    additionalInfo: 'If your road vehicle has a value below the import entry threshold (AUD1000) it may be cleared by Customs by lodging a self-assessed clearance (SAC) declaration. A VIA is required regardless of the value of the road vehicle.'
  },
  bs: {
    countryCode: '+1',
    timeDifference: '-13 Hours (GMT-4)',
    port: 'Nassau, Freeport Grand Bahama',
    shippingLine: '---',
    currency: 'Bahamian Dollar (BSD)',
    documents: 'Invoice, Import permit',
    ageRestriction: 'No more than 10 years.',
    mostPopularVehicles: 'Honda CRV, Toyota Coaster, Nissan Skyline, Toyota Altezza, Honda Accord, Honda Civic, Honda Integra, Mitsubishi Pajero IO, Honda Civic Ferio, Toyota Hiace Commuter',
    shippingPorts: 'The common port in Bahamas for importation of used vehicles from Japan is Freeport and Nassau',
    roadWorthinessInspection: 'No inspection required.',
    leftHandDrive: 'Importation of left hand drive vehicles is preferred in Bahamas.',
    importTaxesRates: 'Import duty is 65% of FOB price. Environmental levy is USD 200. Procedure fee is 1% of FOB price. VAT is 7.5% of total price (including FOB price, freight, Import duty, Environmental levy, and procedure fee.)',
    customDutyRates: 'Custom duty rates are determined by the value of the vehicle. For instance, if a vehicle costs $10,000 or less you will be charged a duty rate of 65% while a vehicle that is valued at $10,001 to $40,000 will stand at a rate of 75%. Vehicles priced over $40,000 have a duty rate of 85%. Hybrids and other electric vehicles are much less, charged with only 25% duty. Other charges may include: 1% processing fee, environmental levy fee for vehicles, storage fees, freight and insurance and landed charges. Bear in mind that the 7.5% VAT is not included with such fees and must be paid separately. For vehicle importers that reside in Freeport, Grand Bahamas please be advised to read the "VAT and the Hawksbill Creek Agreement".',
    documentsRequired: [
      'Copy of Certificate of Title and Registration',
      'Original Commercial/ Purchase Invoice',
      'Import permit',
      'Bill of Lading'
    ],
    additionalInfo: 'Head over to www.bahamas.gov.bs/customs for more information on fees and importing vehicles.'
  },
  bd: {
    countryCode: '+880',
    timeDifference: '-3 Hours (GMT+6)',
    port: 'Chittagong and Mongla',
    shippingLine: '---',
    currency: 'Bangladeshi taka',
    documents: 'Invoice, Original Passport',
    yearRestrictions: 'Max. 4 Years Old',
    popularModels: 'Hatchback: Toyota Vitz, Wagon R, Mitsubishi EK, Every Van, Every Wagon, Suzuki Swift, Suzuki Alto, Toyota Passo, Honda Fit, Daihatsu Mira. Sedan: Toyota Prius, Toyota corolla Axio. SUV: Land cruiser Prado, Toyota C-hr, Honda Vezel, Nissan Xtrail. Trucks: Hino, Isuzu and Mitsubishi 2Ton 3Ton 4Ton 5Ton 10Ton Dump Truck. Excavator: ITEM, CAT -E70, E70B, 307, 307SSR, E110, E120, COBELCO -SK03, SK03M2, KOMATSU -PC60-2. Mitsubishi: MS070-1,MS070-2,MS110-2, MS110-3 MS120-2.',
    destinationPort: 'Chittagong and Mongla',
    inspection: 'JAAI',
    rightHandDrive: 'Vehicle imported in Bangladesh should be a right hand drive vehicle.',
    importConditions: [
      'Vehicle should not be more than four years old.',
      'Importation of used vehicle should be done only from the country of origin. Importation of used vehicle is not allowed from any third country',
      'A certificate issued by Japan Auto Appraisal Institute (JAAI) should contain age, model number and chassis number of the used car. That certificate should be submitted to the customs authority.',
      'To determine the age of the imported car, the date will be calculated from the first day of the next year of manufacture of chassis.'
    ],
    timeOfShipment: 'RoRo (19-24 Days)',
    vesselSchedule: 'RoRo (Monthly)',
    importTaxRate: 'Import Tax: 0-40%, VAT: 15%, 2.5% infrastructure development surcharge is levied on imports',
    documentsRequired: [
      'Original Passport and copy of Work Permit',
      'Certificate of Title and Registration',
      'Registration, Invoice to determine age',
      'Country of Origin Certificate',
      'Original Bill of Lading',
      'Vehicle Condition Report',
      'Letter of Authorization',
      'Import Permit from Chief Controller, Import and Export for foreigners.'
    ]
  },
  bb: {
    countryCode: '+1',
    timeDifference: '-13 Hours (GMT-4)',
    port: 'Bridgetown',
    shippingLine: '---',
    currency: 'Barbadian dollar',
    documents: 'Invoice, Insurance certificate',
    yearRestrictions: 'Following amendment to the Customs Tariff (Inserted by L.N. 1983 No. 25) (Inserted by L.N. 1984 No. 51) (Inserted by L.N. 1985 No. 94) 0th Schedule II, vehicles (cars, motor-cycles, four-wheel drive vehicles, trucks, lorries and buses) older than four years (calculated from the time of their arrival in Barbados to the last date of the year of manufacture) will not be accepted for importation into Barbados as of 5th December 1983. Returning Nationals: Motor vehicle imported by an adult immigrant who has been absent from Barbados for not less than 12 months immediately preceding his return and who has not enjoyed remission under this item during the two years immediately preceding such period of absence- (a) if imported within six months after his arrival and (b) If the Minister is satisfied that it has been in the possession and use of the returning National abroad for at least 180 days before his arrival in Barbados. The vehicle must also not be more than 10 years old at the time of importation. Diplomats, Non-National Holders (persons who hold non-national and persons holding permits granted under the Immigration Act which require renewals at the end of a specific time) do not have an age restriction.',
    mostPopularVehicles: 'Nissan tida, Toyota hiace commuter, Nissan teana, Nissan blue bird, Suzuki swift, Nissan note, Corolla axio',
    shippingPorts: 'Ports for shipment of vehicle in Barbados is Bridge town. No specific inspection is required on used vehicles imported in Barbados.',
    rightHandDrive: 'Importation of vehicles with steering on right-hand side is allowed in Barbados.',
    documentsRequired: [
      'Commercial/ Purchase Invoice determining vehicle type, make, weight.',
      'Bill Of Lading (BOL)',
      'Insurance certificate',
      'Import license',
      'Value Declaration Form',
      'Certificate of Title and Registration'
    ],
    ratesOfDuty: 'Import duty 45% on all cars. Excise tax (see below). Value added tax 17.5%. Port FAS charge',
    exciseTax: `Excise Tax Table:

Engine CCs | Up to BDS$30,000 | Over BDS$30,000
-----------|------------------|------------------
Up to 1500cc | 10% | 40%
1501cc - 2000cc | 20% | 60%
2001cc - 2500cc | 30% | 80%
2501cc - 3000cc | 40% | 100%
3001cc and above | 75% | 150%

Note: The excise tax is calculated on the chargeable value, which includes the CIF value plus import duty.`
  },
  bm: {
    countryCode: '+1',
    timeDifference: '-12 Hours (GMT-3)',
    port: 'Hamilton',
    shippingLine: '---',
    currency: 'Bermudian dollar (BMD)',
    documents: 'Invoice, Insurance Policy',
    yearRestrictions: 'Importer must have owned the vehicle for not more than six months before the date of shipping to the country. Automobiles are restricted as to size and engine capacity. All private (non-commercial) importations of motor vehicles must be supported by a letter of authorization from the Transport Control Department. All two-stroke motor-cycles are prohibited from being imported into Bermuda. Four-stroke motor-cycles which have an engine capacity greater than 150cc (15hp/11.25kw) are prohibited from being imported except on authority, and in conformity with, the terms and conditions, of a permit from the Minister of Transport.',
    mostPopularVehicles: 'Nissan NV200, Nissan NV350, Toyota Hiace, Toyota Hiace, Toyota Hiace Commuter',
    shippingPorts: 'Major shipping port in Bermuda is Port of Hamilton.',
    inspection: 'All vehicles imported into the country are subjected to inspection by Customs/or the relevant statutory authority.',
    rightHandDrive: 'Importation of right hand drive vehicles is allowed in the country.',
    dutyAndTaxes: 'Used vehicles imported in the country are subject to duties and taxes. However, Diplomats are allowed to import the vehicle duty free.',
    documentsRequired: [
      'Certificate of Title and Registration',
      'Insurance Policy and logbook showing length of ownership',
      'Commercial Invoice (if new vehicle)',
      'Import Permit- From the Transport Control Department'
    ]
  },
  bw: {
    countryCode: '+267',
    timeDifference: '-7 Hours (GMT+2)',
    port: 'Durban (South Africa)',
    shippingLine: '---',
    currency: 'Botswana pula',
    documents: 'Invoice, Import Permit',
    yearRestrictions: 'No Age Limit',
    shippingPorts: 'Namibia-Walvis Bay and Durban are major ports for importing Japan used cars in Botswana. These ports provide straight forward clearing procedures and outstanding security for the used car and its content.',
    inspection: 'Not Required',
    timeOfShipment: 'RoRo (24-34 Days)',
    vesselSchedule: 'RoRo (Monthly)',
    dutyAndTaxes: 'A free entry is only permissible if done within 6 months of the date of issue of the Work Permit. Thereafter VAT of 10% applies. Only one car per family is duty free. Subsequent entries or more than one car per family are subject to 15% - 20% VAT of CIF Value. The car will not be sold or otherwise disposed of for 2 years from date of importation. Value Added Tax (VAT) at current rate is assessed on the imported value of the car.',
    documentsRequired: [
      'Certificate of Title and Registration - confirming that the car has been owned and used for one year',
      'Purchase Invoice (or receipt) - specifies purchase value',
      'Police Clearance Certificate from both the export country and Botswana Police Service',
      'Vehicle Evaluation - obtained from an accredited Used Car Dealer',
      'IC 2 Application - obtained from Destination Agent, submit to Ministry of Commerce',
      'Registration and proof of ownership',
      'Form CE 101 - original, in duplicate, submitted with Import Permit, Residence Permit, and passport to department of Customs and Excise',
      'Import Permit - obtained from Ministry of Commerce',
      'Customs Declaration Form SAD 500',
      'Customs clearance of a used car should be undertaken even if there is no intention to register the car in Botswana or if it is still owned by a Bank or any other third party'
    ],
    nonResidents: 'Non-residents visiting Botswana and coming from a country outside the Southern African Common Customs Area for a limited period are normally required to produce a carnet, or bill of entry in respect to their used cars, any duty liable on such cars will be secured by bond or cash deposit.',
    residents: 'Residents of Botswana are not allowed to drive or use foreign registered vehicles in the Botswana for more than fourteen days after importation of such vehicle. If you are intending to do so please contact your nearest customs office for advice. In case anyone found in possession of a foreign registered vehicle, severe penalties including seizure of vehicles may be imposed.',
    foreignDiplomats: 'Foreign diplomats are not required to pay any duties or taxes, subject to the provision of Diplomatic clearance certificate, and proof of value. Botswana registration and driver\'s license must be changed within 6 months of arrival in the country.'
  },
  cl: {
    countryCode: '+56',
    timeDifference: '-12 Hours (GMT-3)',
    port: 'Hambanthota / Colombo',
    shippingLine: 'K Line',
    currency: 'Chilean peso',
    documents: 'Invoice, BL, Deregistration',
    popularModels: 'Cars: Kia, Hyundai, Nissan, Suzuki, Toyota, Mitsubishi, Mazda, Ford, Peugeot, Renault. Imported vehicles with style, space, luxury and maximum comfort are the most important needs for people of Chile. Thousands of Japanese used cars and other vehicle are imported into Chile. Reliable and experienced exporters from Japan make it easy for the importers in Chile to import best used cars at very reasonable price.',
    shippingPorts: 'Valparaiso: The ladyrinth of cobblestoned alleys that is, the Port of Valparaiso, is one of Chile\'s most important Ports and cultural centers. Iquique: The Port of Iquique is one of only two Free Port of Chille. Punta Arenas: Chile\'s 2nd free Port located in Punta Arenas. San Antonio: The Port of San Antonio is the largest in Chile & the 13th busiest in South America. Arica: The Port of Arica Lies on the Pacific coast of northem Chile. Chile applies the Harmonized Customs System. The customs duties are calculated Ad valorem on the CIF value. Since the 1st January of 2003, the general tariff rate has been 6% on most products, one of the lowest in Latin America. However, Chilean customs reserve the right to apply some minimum prices for the valuation of imports (it can be the case concerning certain farm products such as wheat, edible oils and sugar, for instance). Chile signed a certain number of trade agreements, especially with Canada, Mexico and some of the members of the ALADI. Duties for most items between these countries are at 0 %. On the top of that, Chile is an associate member of Mercosur and is currently negotiating with Bolivia and the USA. Finally, Chile signed on November 18, 2002 a Free trade agreement with the European Union that ntered into force on an interim basis on 1 February 2003, leading to a reduction of customs duties. For all additional information, you can contact the Chilean Customs Administration.',
    importTaxes: 'A surcharge is applied on luxury goods imports. New cars fall into this category. Vehicles having an engine capacity exceeding 1,500 cm3 are taxed at the rate of 85% of the CIF value (over USD 15,000 ). As a luxury good, jewellery is taxed at 50% of the customs cleared value. There is also an internal tax on spirits. It differs depending on the products, and is at a lower rate for local products (25% on Pisco against 50% for Whiskey and 40% for Cognac).',
    importDocuments: 'Commercial Invoices must accompany all non document shipments. Invoices must be numbered, printed on company letterhead with an itemized list of contents, true FOB value of goods, signed and stamped by the shipper. Pro Forma invoices are acceptable as exceptions by Chilean Customs as valid documents for clearance. Consignees Tax Identification Number (RUT) is required for shipments entering Chile and must be included on the Air Waybill and Commercial Invoice for all non-document shipments. If the RUT number is not included, additional clearance delays may occur. Import Licenses all imports require a license, but, according to legislation governing the Central Bank since 1990, import licenses are granted as a routine procedure for nearly all goods. Licensing requirements are maintained largely as a statistical gathering mechanism, not as a control. More rigorous licensing procedures apply for pharmaceuticals and weapons.',
    customsClassification: 'Chile applies to the Harmonized Customs System. The customs duties are calculated Ad valorem on the CIF value. Since 2003, the general tariff rate has been 6% on most products, one of the lowest in Latin America.',
    calculationOfDuties: 'Chile applies the Harmonized Customs System. The customs duties are calculated Ad valorem on the CIF value. Since the 1st January of 2003, the general tariff rate has been 6% on most products, one of the lowest in Latin America. However, Chilean customs reserve the right to apply some minimum prices for the valuation of imports (it can be the case concerning certain farm products such as wheat, edible oils and sugar, for instance). Chile signed a certain number of trade agreements, especially with Canada, Mexico and some of the members of the ALADI. Duties for most items between these countries are at 0 %. On the top of that, Chile is an associate member of Mercosur and is currently negotiating with Bolivia and the USA. Finally, Chile signed on November 18, 2002 a Free trade agreement with the European Union that ntered into force on an interim basis on 1 February 2003, leading to a reduction of customs duties. For all additional information, you can contact the Chilean Customs Administration.',
    paymentOfDuties: 'The payment of taxes on foreign trade must be made to the Customs Service of Chile.',
    customsValuation: 'Chilean customs valuation uses the normal value of merchandise, without special discounts, plus freight and insurance (CIF). Used goods are valued by the customs service according to the current new value of similar merchandise, discounting 10% per year of use, up to a 70% discount',
    prohibitedImports: [
      'The importation of used passenger and cargo transport vehicles are prohibited.',
      'Non-FTA qualified vehicles are governed by the regulation.',
      'Dangerous Goods as defined by IATA (Intl. Air Transport Association).',
      'Used tires and used motorcycles.'
    ]
  },
  cy: {
    countryCode: '+357',
    timeDifference: '-6 Hours',
    port: 'Limassol Port / Larnaca',
    shippingLine: 'K LINE / MOL / HOEGH / YUWA / ECL',
    currency: 'Euro',
    documents: 'Invoice / BL / Masho Translation / Masho / Declaration',
    yearRestrictions: 'Less than 5 years old. After the payment of relevant duties and taxes the vehicle must be registered before it can be licensed for road tax purposes. According to the existing Motor Vehicle and Road Traffic Legislation, a private motor vehicle can be registered in Cyprus provided its age prior to its importation is less than five years old, this counted from the date of its first registration. In order to register a vehicle in Cyprus, it must first pass the DoRT test. In the Republic of Cyprus, all vehicles over four years old are subject to a Department of Road Transport (DoRT) test (similar to a UK MOT) for mechanical safety as well as emissions levels. This test must be passed every two years. The test checks emissions, brakes, suspension, steering, lights and tyres among other things.',
    mostPopularVehicles: 'Hatchback: Toyota Vitz, Toyota Yaris, Mazda Demio, Nissan Note, Nissan March, Honda Fit. Sedan: Mercedes-Benz, Toyota Mark X, Mazda Axela. SUV: Toyota C-HR, Mazda CX-5, Nissan X-Trail, Toyota Land Cruiser, Subaru Forester, Mitsubishi Mirage',
    destinationPort: 'Limassol',
    timeOfShipment: '26-36 Days (RoRO)',
    vesselSchedule: 'Less than Bi-Monthly (RoRO)',
    inspection: 'No Inspection Required',
    rightHandDrive: 'Importation of right-hand drive vehicles is allowed in Cyprus.',
    taxation: 'Import Duty: 10 to 22% of CIF + Engine Capacity Tax. VAT: 19% of CIF + Import Duty + Excise Duty',
    insurance: 'Importers will be required to buy a marine insurance cover with a local insurance company',
    documentsRequired: [
      'A completed Form P17',
      'A T2L or T2LF document to prove EU Community status (obtained from the Customs Service in the origin EU country or from the shipping company responsible for the vehicle)',
      'Shipping documents for shipped vehicles',
      'Valid and expired passports going back at least five years',
      'Alien Registration Certificates for applicant and family',
      'Residence Permit for applicant and family members',
      'Driver\'s licence',
      'Sales contract or evidence a foreign residence is being rented out',
      'Proof of employment outside Cyprus in the form of tax returns, insurance records and/or pay slips',
      'For applicants with school-age children, proof the children were enrolled in school',
      'Proof of residential situation in Cyprus in the form of a sales contract or rental contract for an apartment or home',
      'Utility and/or telephone bills',
      'Employment contract for work in Cyprus'
    ]
  },
  dm: {
    countryCode: '+1',
    timeDifference: '-13 Hours',
    port: 'Roseau',
    shippingLine: 'CNC JAPAN(ECL)',
    currency: 'Eastern Caribbean Dollar',
    documents: 'Invoice, Original Bill of Lading, Asycuda BOL...',
    ageRestriction: 'Age limitation maximum 5 years old.',
    rightHandDrive: 'Importation of right hand drive vehicles is allowed.',
    inspection: 'No inspection required.',
    documentsRequired: [
      'Original Certificate of title and registration',
      'Original purchase or Commercial Invoice',
      'Original Bill Of Lading (BOL)',
      'Asycuda Bill of Lading from Shipping Agent',
      'Original driver\'s license',
      'Bill of Sale',
      'Foreign Registration papers',
      'Export documents',
      'Insurance Policy & Certificate',
      'Police Certificate of Registration',
      'Dominican consular invoice, stamped by the Dominican consulate',
      'Proof of Payment (Bank Wire Transfer, Paypal etc)',
      'Cancelation Certificate (Japan)'
    ],
    dutyAndTaxes: 'Import Duty- 40% of the customs value. Customs Service Charge (CSC) - 3% of the customs value. Environmental Surcharges- $3,000 per unit on motor vehicles manufactured five years or more, otherwise 1% of the customs value for vehicles manufactured less than five years. Excise Tax- 28% of the customs value plus the import duty plus the customs service charge. *Exemption is given on vehicles purchased by Diplomats. Value Added Tax (VAT) - 15% on customs value plus import duty plus customs service charge plus the excise tax. Registration and proof of ownership.',
    shippingInfo: 'Most common shipping method is Ro/Ro and Vessel Schedule is done monthly. Duration 24-34 days. Shipping port is Roseau.',
    customsProcedure: 'A Broker/Tariff Clerk will assess an IM 4 Customs Declaration utilizing ASYCUDA accompanied by the invoice, bill of Lading and other supporting documents. Once the declaration has been assessed, proceed to a Customs Cashier with a copy of the Assessment Notice to pay the duties and taxes and obtain a receipt. After payment, the declaration will be electronically assigned to Valuation and an examining officer. The declaration and supporting documents will then be verified as well as a physical examination of the vehicle. After examination, the officer will clear the declaration and print a release order. The system will notify the Broker/Tariff Clerk that the declaration has been released by customs. Proceed to location where the vehicle is located to pick up release order from examiner then present to DASPA for delivery.',
    bestSellingVehicles: 'Mitsubishi Canter, Toyota Dyna Truck, Toyota Harrier, Toyota Noah, Hino Ranger, Mitsubishi Fuso Fighter'
  },
  cd: {
    countryCode: '+243',
    timeDifference: 'UTC/GMT +1 hour',
    port: 'Dar es Salaam (No Direct port for Congo)',
    shippingLine: 'Glovis',
    vesselSchedule: 'Twice Monthly (Date Varies)',
    timeOfShipment: '30-45 Days',
    currency: 'Congolese Franc (CDF)',
    documents: 'Invoice, BL, Masho, Masho Translation, Insurance if applicable',
    inspection: 'No Inspection',
    yearRestrictions: 'Cars: No Limit. Vans: No Limit. Buses: No Limit. Trucks: No Limit but Prefers models above year 2000',
    popularVehicles: 'Popular Buses: Mitsubishi Buses. Popular Trucks: Mitsubishi 6D Engine Trucks'
  },
  fj: {
    countryCode: '+679',
    timeDifference: '+3 Hours (GMT+12)',
    port: 'Lautoka and Suva',
    shippingLine: '---',
    currency: 'Fijian dollar',
    documents: 'Invoice, Passport',
    yearRestrictions: 'The age criteria for used vehicle importation: Used cars, road tractor chiefly designed for the transport of persons, should not be more than five years from the date of manufacture. Used Special Purpose vehicles that perform certain non-transport function consuming any type of fuel and Liquefied Petroleum Gas (LPG), Compressed Natural Gas (CNG) and Solar road tractors designed for the transport of persons, should be less than eight years from the date of manufacture. The year of manufacture should be the production or the manufactured date of the vehicle and not the first registration date. An application should be made to General Manager Customs, together with the relevant documents: Export Certificate Original in Japanese (also the English version and should be certified by relevant authority and not the importer), Other evidences to confirm the year of manufacture of the used vehicle from the Road Transport Authority (Japan), signed by the authorized signatory.',
    shippingPorts: 'Destination port where imported vehicles are shipped is Port Suva. There are two ways for vehicle shipping; one can import a vehicle using RoRo (Roll-on Roll-off) method, which is an economical and most popular method, or can go for an expensive shipping method, container method.',
    inspection: 'Used vehicles imported to Fiji are subjected to carry foreign pests and diseases that possess great threat to country\'s biodiversity and environment. Thus, it is mandatory to inspect the used vehicle imported Fiji. Importation of only those vehicles is allowed in Fiji, which are free from unwanted pests.',
    customsDutyAndTaxes: 'Vehicles exceeding 2500 cc but not exceeding 3000 cc are levied $7500 per vehicle. Vehicles exceeding 3000 cc are levied $20,000 per vehicle. Duty rate- 32% of the invoice value. Excise Duty- 15%. VAT- 15%. $7 for permission for each trip with an unregistered vehicle to importer\'s residence or LTA office.',
    documentsRequired: [
      'The quarantine/agriculture clearance',
      'Passport',
      'Invoice receipt showing total price paid and date of purchase',
      'De-registration Certificate',
      'Invoice showing export costs',
      'Invoice showing freight costs and insurance to Fiji',
      'Bill Of Lading',
      'Odometer reading at time of sale for export to Fiji',
      'Odometer reading at time of importation into Fiji'
    ],
    clearanceProcedures: 'Generally vehicle arrival papers are provided to importers around the time the vehicle is imported. Sometimes Customs brokers assist importers for clearance of vehicles. In case, importers are doing all the formalities by themselves, it is advised to make an appointment with local customs office.',
    deliveryRequirements: 'Arrange an agricultural clearance for the vehicle through the Quarantine Section of Biosecurity Authority of Fiji. Arrange for a Customs clearance. Note: No concession on duty is provided on importation of used vehicles, unless the used vehicle is imported by diplomats, personnel or other persons or bodies who are entitled to duty concessions.',
    vehicleRegistration: 'The imported vehicle after Customs clearance should be taken to Lands Transport Authority (LTA) agent for inspection and a compliance audit for certification for registration. Documents required for vehicle registration: Copy of the Bill Of Lading (BOL), Paid and certified copy of the Single Administration Document (SAD green copy), De-registration certificate'
  },
  gh: {
    countryCode: '+233',
    timeDifference: '-9 Hours (GMT+3)',
    port: 'Tema (main port), Takoradi (container only)',
    shippingLine: '--',
    currency: 'Ghanaian cedi',
    documents: '--',
    yearRestrictions: '10 years (Used cars over 10 years old require penalty during clearing)',
    timeOfShipment: 'RoRo (34-44 Days)',
    inspection: 'Not Required',
    leftHandDrive: 'Left hand drive vehicles (Right hand vehicles also allowed, but must convert to left hand drive before using)'
  },
  gd: {
    countryCode: '+1',
    timeDifference: '-13 Hours (GMT-4)',
    port: 'Saint George\'s',
    shippingLine: '---',
    currency: 'Eastern Caribbean dollar',
    documents: 'Invoice, Insurance Certificate',
    mostPopularVehicles: 'Toyota Passo, Toyota Passo, Toyota Noah, Nissan Note, Toyota Rav 4, Honda Fit, Suzuki Swift, Honda CR-V, Subaru Legacy B4, Subaru Forester',
    shippingPorts: 'Ports for shipment of vehicle in Grenada are Saint George\'s and Grenville. No specific inspection is required on used vehicles imported in Grenada.',
    rightHandDrive: 'Importation of vehicles with steering on right-hand side is allowed in Grenada.',
    importTaxesRates: 'Environmental Levy - Used Vehicles (1-4 years old): 2%, Used Vehicles (over 5 years old): 30%, Used Trucks 1-10 tons: 5%, 10-20 tons: 10%, Over 20 tons: 20%. Customer Service Charge (CSC): 5% is imposed on used vehicles imported into the country. Common External Tariff (CET): It ranges from 5%-40% depending upon the cost of insurance and freight value of vehicles imported. Value Added Tax (VAT): The VAT as proposed provides for a standard rate of fifteen percent (15%). Environmental Levy: $2000, irrespective of age',
    documentsRequired: [
      'Commercial/ Purchase Invoice determining vehicle type, make, weight',
      'Bill Of Lading (BOL)',
      'Insurance certificate',
      'Import license',
      'Value Declaration Form',
      'Certificate of Title and Registration'
    ]
  },
  gy: {
    countryCode: '+592',
    timeDifference: '-13 Hours',
    port: 'Georgetown',
    shippingLine: 'MOL/HOEGH/YUWA',
    currency: 'Guyanese dollar',
    documents: 'Invoice/Certificate of Insurance/BL/MASHO',
    yearRestrictions: 'No age restriction for vehicles now as it been renewed from last year',
    mostPopularVehicles: 'Toyota Corolla Fielder, Toyota Hiace Van, Subaru Forester, Toyota Allion, Nissan X-trail, Mitsubishi Canter, Honda Insight, Nissan Juke, Hino Dutro, Nissan Dualis',
    destinationPort: 'Georgetown',
    timeOfShipment: 'RoRo (24-34 Days)',
    vesselSchedule: 'Less than Bi-Monthly (RoRO)',
    inspection: 'No Inspection Required',
    rightHandDrive: 'Only right hand drive cars are imported in Guyana.',
    taxation: 'Taxes are calculated generally on the basis of engine size and manufacturing year',
    documentsRequired: [
      'Original BOL (Bill Of Lading) /MASHO',
      'Identification Proof',
      'Commercial/Purchase Invoice',
      'Form C 72',
      'Commercial/Purchase Invoice',
      'Standard Administration Document (S.A.D)',
      'Certificate of insurance',
      'Non-sale certificate',
      'Original registration and title',
      'De-registration certificate'
    ]
  },
  ir: {
    countryCode: '+98',
    timeDifference: '-4 Hours and 30 minutes (GMT+4:30)',
    port: 'Bandar Abbas and Bushehr',
    shippingLine: '---',
    currency: 'Iranian rial',
    documents: 'Proof of Insurance, Permit',
    ageRestriction: 'Vehicles over three years old are prohibited. Importation of diesel engines is prohibited in the country.',
    shippingPorts: 'The common shipping ports in Iran are port of Bandar Abbas, port of Bushehr.',
    leftHandDrive: 'Importation of left-hand drive vehicles is allowed in Iran. Vehicles with right steering wheel are prohibited in the country.',
    dutyAndTaxes: 'Vehicles imported in Iran are subjected to duties and taxes. Importation of vehicles by diplomats can be duty-free with exemption from the Ministry of Foreign Affairs of Iran.',
    documentsRequired: [
      'Permit from the Ministry of Commerce',
      'Bill of Lading',
      'Vehicle Title / Registration',
      'Proof of Insurance'
    ],
    temporaryImportation: 'Import of used automobile to Islamic Republic of Iran is allowed when a certificate has been obtained from cabinet. Iranian nationals residing abroad are not allowed to import their automobile when returning. However, temporary import of vehicle by foreigners and Iranian residents abroad is allowed by receiving the carnet de passage or tripque booklets from the motoring centers in the original country. Automobiles imported must be re-exported from Iran when the permitted period i.e. 3 months is over. Iranian returning residents importing a used vehicle must have resided outside Iran for at least 6 months. Those who could not get the carnet de passage or triptique booklets in the country of origin, should get the temporary admission license in the entrance frontier by giving deposit or a bank bond on security.'
  },
  ie: {
    countryCode: '+353',
    timeDifference: '-8 Hours (GMT+1)',
    port: 'Dublin',
    shippingLine: '---',
    currency: 'Euro',
    documents: 'Invoice, Original Certificate',
    popularModels: 'Japanese Cars: Toyota Estima, Lancer Evolution, Nissan Skyline, Mitsubishi pajero, Subaru Impreza, Subaru forester',
    shippingPorts: 'Major shipping port in Ireland is Dublin.',
    inspection: 'If the used vehicle entering in Ireland is 4 years old or more, then it should go through the National Car Test (NCT). This applies even if the vehicle has previously received any test abroad.',
    rightHandDrive: 'In Ireland, driving is done on the left-hand side of the road with vehicles steering on the right hand side.',
    vrtExemptions: 'While registering motor vehicle for the first time in Ireland, VRT is required to be paid. However, exemption on VRT is also given. The following are exempted from paying VRT: Certain disabled drivers, Visitors to Ireland who have owned their vehicles abroad from more than six months and will reside in Ireland temporarily, People moving permanently to Ireland and have owned their vehicles abroad for more than six months, People posted to Ireland as part of the diplomatic corps. In such cases, the importer is not allowed to sell the vehicle in Ireland for at least 12 months after it has been registered. If one is paying the required VAT, then is allowed to sell or disposed off the vehicle in Ireland once it has been registered. If the importer wants to dispose of the vehicle, then it must be deposited at an authorized treatment facility.',
    documentsRequired: [
      'Original Certificate of Title and Registration',
      'Original Commercial/Purchase Invoice - must show proof of paying tax on the vehicle',
      'Irish Customs form 1076',
      'Original vehicle document stating owner\'s name, engine & chassis numbers',
      'Used vehicle importer should complete a Declaration for Registration (Form VRT 4). If the imported vehicle is a motorcycle, then the importer should complete a Declaration for Registration (Form VRT 5).',
      'After the VRT is paid and vehicle is registered by the Revenue Commissioners, then the owner will receive: A receipt for the VRT paid showing the registration number assigned to the car, A Form RF 100, which is needed when applying for motor tax.',
      'If one wants to drive a vehicle in public places, then motor insurance is required on the vehicle. Motor insurance is required on the vehicle before one can pay motor tax. Charges for motor tax are proportionate to the size of the vehicle engine.'
    ],
    dutiesAndRates: 'Shipping: 700-900 Euros depending upon the size of the vehicle. VAT: 21% of purchase and shipping. Vehicle Registration Tax (VRT) is based on the Open Market Selling Price (OMSP) of the vehicle. The OMSP depends on the market value, model, engine size, year, and roadworthiness condition of the vehicle. After the vehicle has been inspected the rate of VRT is calculated by Revenue. Since July 2008, VRT for cars is based on the level of CO2 emission from the car, not on the engine size of the car.'
  },
  jm: {
    countryCode: '+1',
    timeDifference: '-14 Hours (GMT-5)',
    port: 'Kingston',
    shippingLine: '---',
    currency: 'Jamaican dollar',
    documents: 'Invoice, Import licence',
    shippingPorts: 'The most recommended port for shipments arriving to Jamaica from Japan is Kingston.',
    rightHandDrive: 'Import of right-hand drive vehicle is allowed in Jamaica.',
    ageRestriction: 'Motor Cycles: not exceeding 5 years. Motor Cars: not exceeding 6 years. Light Commercial Vehicles: ranging between 6-10 years depending on type. Motor Vehicles by Returning Residents: not exceeding 10 years. Motor Vehicles for Special Purpose (Ambulances, Hearses, Fire Trucks, Vehicles for Physically Challenged): not exceeding 10 years. Commercial Vehicles: ranging between 12-30 years depending on type. Heavy-Duty Commercial Equipment: not exceeding 30 years.',
    ageRestrictionsDetailed: 'Light Commercial Vehicles (Pick-ups, Panel/Window Vans, Trucks with seating capacity 9-14, unladen weight less than 3000 kg) - 6 years. Buses for passenger transportation: seating capacity 15-29 (12 years), seating capacity 30-44 (14 years), seating capacity 45 & over (20 years). Trucks for cargo: 3,000-4000 kg (15 years), 4001-8000 kg (14 years), Over 8000 kg (25 years). Heavy duty commercial equipment - 30 years. Contact Trade Board at 967-0507 or 967-0674 for further information.',
    noticeToImporters: 'Important dates: December 31, 2020 - Final date for submission of import permit applications to Trade Board Limited for 2014 Motor Cars, 2014 Buses (capacity not exceeding 8), 2014 Pick-Up Trucks (unladen weight not exceeding 1,500 kg), 2010 Pick-Up Trucks (unladen weight 1,500-3,000 kg), 2010 Panel/Window Van/Buses (seating capacity 9-14 persons). Visit www.tradeboard.gov.jm for complete list. March 31, 2021 - Import permits for above vehicles extended to March 31, 2021. Vehicles must be duty paid and cleared from wharf on or before March 31, 2021. Invoices must be dated on or before December 31, 2020.',
    documentsRequired: [
      'Import licence: Issued by Trade Board Limited authorizing importation',
      'Title: Document issued to vehicle owner by Government of purchase country',
      'Bill of Lading/Order: From shipping agent with vehicle particulars, landing date, and port of entry',
      'Invoice: From supplier required for all motor vehicles or motor cycles',
      'Bill of Sight: Document with motor vehicle details, prepared and signed by broker, certified by Customs',
      'Tax Compliance (TCC): Obtained from Tax Administration Jamaica',
      'Simplified Administrative Document (SAD): Electronic document with all vehicle particulars, importer name, shipping information, and Customs duties. Completed by licensed Customs Broker only.'
    ],
    importationRules: 'An individual or Returning Resident is allowed to import: One (1) motor car and one (1) light commercial vehicle OR Two (2) light commercial vehicles OR one (1) light commercial vehicle and a regular commercial vehicle. Individuals residing in Jamaica allowed to access this facility once every 3 years. Returning Residents having accessed facility within current year would not be eligible to import vehicles as individual until 3 years after importation date as Returning Resident. All vehicle categories for Returning Residents: pick-ups, motor cars, trucks, trailers and heavy duty equipment - Ten (10) years.',
    valuationMethod: 'Under WTO Agreement, invoices are presented to Customs from which value for duty will be derived.',
    prohibitedImports: [
      'Importation of motor vehicles in damaged or salvaged state is PROHIBITED.'
    ],
    concessionsInfo: 'Concessionary rates of duty on vehicles given in special circumstances, for example, when importer holds job/position entitling concessionary rate. Qualified people include: farmers, senior teachers, government traveling officers. Applications submitted through government departments to Ministry of Finance. Concession granted after determining individual qualifies. Age limit for buses in transportation sector determined by Ministry of Finance. Note: Import Duty, Special Consumption tax and GCT is compounded. Processing fee and environmental levy included in aggregate Duty.'
  },
  ke: {
    countryCode: '+254',
    timeDifference: '-6 Hours (GMT+3)',
    port: 'Mombasa',
    shippingLine: 'K LINE / MOL / HOEGH / HYUNDAI GLOVIS',
    currency: 'Kenyan Shilling',
    documents: 'Invoice/BL/Masho',
    yearRestrictions: 'Max. 7 Years Old. The vehicle must not be more than seven years old from the year of first registration. The difference between the registration date and the manufacturing date should not be more than a year. As an Example: For 2018 - can import only 2011 registration units',
    mostPopularVehicles: 'Toyota Hiace - Diesel - KDH201V- 2WD - Auto Transmission, Toyota Hiace - Petrol - TRH200V- 2WD - Manual Transmission, Toyota Premio, Toyota Probox, Toyota Corolla Axio, Toyota Corolla Feilder, Toyota Hiace Commuter',
    destinationPort: 'Mombasa',
    timeOfShipment: 'RoRo (24-34 Days)',
    vesselSchedule: 'RoRo (Monthly 07th-10th TO 20th-25th)',
    inspection: 'JEVIC/ QISJ Kenya (QISJ Fee is $250). Inspection on vehicles imported to Kenya, must be done either by JEVIC (Japan Export Vehicle Inspection Center) or QISJ (Quality Inspection Services Japan) for road-worthiness.',
    rightHandDrive: 'All vehicles imported must be Right Hand Drive (RHD). However, special vehicles such as ambulance, fire engine, large construction vehicle are exempted from this ban.',
    taxation: 'Import Duty: 25% of Dutiable value. Excise Duty: 20% of (Customs Value + Import Duty). VAT: 16% of (Customs Value + Import Duty + Excise Duty). Railways Development Levy: 1.5% of Custom Value. An Import Declaration Fee (IDF) is also charged. An amount of minimum of $5,000 or 2.25% of CIF is paid prior to the application, depending whichever amount is more.',
    insurance: 'Importers will be required to buy a marine insurance cover with a local insurance company. (Applicable for vehicles arriving to Kenya from January 1st, 2017 on)',
    documentsRequired: [
      'Original Passport',
      'Original Bill Of Landing (BOL)',
      'Original Commercial Invoice',
      'Pre Inspection certificate',
      'KRA Pin card',
      'Authentic Vehicle Logbook: Certificate of export by Dubai police or any other authority as a substitute for foreign book shall not be accepted by KRA (Kenya Revenue Authority). English translation of logbook will be provided by embassy, High Commission or consulate based in Kenya, in case logbook is in foreign language.'
    ],
    returningResidentsBenefits: 'Kenya returning resident may import one duty free vehicle. The importer should be residing outside Kenya for at least two year and should not have visited Kenya on an average of more than 90 days. The vehicle must be used by the importer for at least a year. No similar exemption has been provided in the past.'
  },
  my: {
    countryCode: '+60',
    timeDifference: '-1 Hours (GMT+8)',
    port: 'Penang (Georgetown), Kelang',
    shippingLine: '---',
    currency: 'Malaysian Ringgit',
    documents: 'Photocopy Passport, Insurance Documents',
    yearRestrictions: 'As it should be 5 years older vehicles which should be 12 months before the vehicle registration. Brand new vehicle cannot be imported.',
    mostPopularVehicles: 'Toyota Alphard, Toyota Vellfire, Toyota Land Cruiser, Toyota Estima, Toyota Harrier, Lexus, Toyota FJ Cruiser, Mercedes all classes, Range Rover (Only Gasoline)',
    documentsRequired: [
      'Photocopy of Passport',
      'Photocopy of License',
      'Photocopy of Deregistration Slip',
      'Original Invoice',
      'Original Bill of Lading',
      'Export Certificate',
      'Insurance Documents'
    ],
    importProcess: 'Duties are very high in Malaysia. The import duty on cars can be up to 300%. An Approval Permit (AP) from Ministry of International Trade and Industry (MITI) is required for importing used cars. The vehicle should be registered under the name of the importer for at least 3 years.'
  },
  mu: {
    countryCode: '+230',
    timeDifference: '5 Hours (GMT+4)',
    port: 'Louis',
    shippingLine: '---',
    currency: 'Mauritian rupee',
    documents: 'Invoice, Declaration Report',
    yearRestrictions: 'The age of used cars should be not less than 18 months & not more than 48 months from the date of first registration at the time of shipment. The vans should be not more than 60 months old from the first registration.',
    shippingPorts: 'Port Louis is the main port of destination for the shipment of Japan used cars in Mauritius.',
    rightHandDrive: 'Right hand drive vehicles are only permitted to be imported in Mauritius.',
    documentsRequired: [
      'Performa Invoice indication FOB or CIF value',
      'Original invoice',
      'Bill of landing',
      'Declaration Report',
      'Insurance certificate (If applicable)',
      'Certificate of inspection',
      'Cancellation of registration certificate'
    ],
    requirements: 'Good running condition & not damaged. (Auction grade 3.5 and above). Original chassis. Inspection Certificate/ CO2 test report.',
    highMovingVehicles: `Toyota Corolla Axio, Both petrol & Hybrid - NKE165, NRE161, NZE161 (Hybrid G Grade & Gasoline X Grade)
Honda Fit Series - GP5, GP2, GK3 All (F, L, S Grades)
Toyota Aqua - NHP10 (S & G grades)
Nissan Note
Toyota Hiace DX and GL - KDH223, KDH201 (GL)
Honda Vezel Both petrol and Hybrid - RU1 & RU3 Series (All grades)
Nissan Latio - E12 (S Grade)
Toyota Vitz - KSP 130, NSP130 (F Grade)
Mercedes Benz CLA180 & BMW 118 I
Nissan X trail - T32 and HT32 (20X)`,
    dutyLiabilities: `Motor Cars:
Less than 550 - 15%
Above 550 but less than 1600 - 55%
Above 1600 - 100%

Vans:
Up to 1600 - 55%
Above 1600 - 100%

Trucks: 40%
Motorcycle: For 250 - 45%

Vehicles imported into Mauritius are liable for Value Added Tax (VAT) of 15 percent. VAT is payable on the sum of following amounts: Up to 1600 - 55%, Above 1600 - 100%, Trucks: 40%, Motorcycle: For 250 - 45%`
  },
  mn: {
    countryCode: '+976',
    timeDifference: '-1 Hours (GMT+8)',
    port: 'Ulaanbaatar',
    shippingLine: '---',
    currency: 'Mongolian Togrog',
    documents: 'Invoice, License',
    yearRestrictions: 'There is no limit on age of vehicles imported to Mongolia.',
    shippingPorts: 'Shipment by container to Ulan Bataar, through Xingang (Tianjin) port in China. RORO is also possible for large vehicles with transshipment on train in Xingang port. Container shipment is preferred because of regular thefts on vehicles during the transit through China.',
    inspection: 'No specific inspection on a used vehicle imported in Mongolia is required. However, cars imported from Japan are checked for radiation.',
    rightHandDrive: 'Mongolia being a Left-hand drive country, allows importation of Right-hand drive vehicle with a valid import license.',
    taxation: '5% Customs Duty on the value of the vehicle. Excise Duty depending on the engine capacity and the year of manufacture of the vehicle. 10% VAT on the total cost of the vehicle (value of vehicle + Customs Duty + Excise Duty).',
    exciseDutyTable: `Engine Capacity / Cubic Centimeter | Excise Duty Rate (in USD Amount)
                      | 0-3 Years | 4-6 Years | 7-9 Years | 10 or More Years
1500 or Lower        | $500      | $1000     | $2000     | $6000
1501 - 2500          | $1500     | $2000     | $3000     | $7000
2501 - 3500          | $2000     | $2500     | $4000     | $8000
3501 - 4500          | $4500     | $5000     | $6500     | $10500
4501 or Higher       | $7000     | $7500     | $9000     | $13000`,
    documentsRequired: [
      'Original Bill of Lading that must show vehicle chassis & engine numbers, cubic capacity, year of manufacture, brand and model',
      'Contract for import',
      'Cargo Manifest',
      'Drivers License & Insurance Certificate',
      'Transportation Invoice',
      'Original Commercial/Purchase Invoice',
      'Payment Receipt',
      'License for import',
      'Status on quality control of goods',
      'Packing List',
      'Certificate of Origin',
      'Receipts of payment for related duties and taxes'
    ],
    importRegulations: 'No limit on year of manufacture, yet the older the vehicle, the higher the Excise Duty that must be paid to clear the vehicle. No pre-shipment inspection. Customers in Mongolia have to choose a forwarder who will handle the clearing of the vehicle in Mongolia and will often organize the shipment from Japan (in that case we sell vehicles on FOB basis). RamaDBK is using the services of forwarder, Sync Logistics, specialized in the Mongolian market when shipping to Mongolia.'
  },
  mz: {
    countryCode: '+258',
    timeDifference: '-7 Hours (GMT+2)',
    port: 'Maputo (Mozambique)',
    shippingLine: '---',
    currency: 'Mozambican metical',
    documents: 'Invoice, International Insurance Policy',
    yearRestrictions: 'No age Restrictions',
    destinationPort: 'Maputo (Mozambique)',
    inspection: 'All Japanese used vehicles being imported to Mozambique will be required to undergo an Intertek inspection in Japan and be assigned a MOZ inspection number. The customer will need to apply for their vehicle\'s MOZ number at their local Intertek office.',
    rightHandDrive: 'Right-hand drive vehicles are allowed to be imported with the exception to special vehicles like ambulances etc.',
    dutyAndTaxes: 'The custom duty applicable on vehicles based on the engine displacement is as follows: Greater than 1500 CC - 40%, Engine displacement less than 1500 CC - 25%. No custom duty on Mini Buses imported to Mozambique. Custom duty on single cabs is 20%.',
    documentsRequired: [
      'Certificate of Title and Registration - must be original',
      'Commercial/Purchase Invoice - must be original',
      'Driver\'s License & International Insurance Policy (green card)',
      'Certified copy of the passport',
      'Original Bill of Lading showing Chassis Number, Engine number, Cubic Capacity, year of manufacture, brand and model'
    ],
    clearanceInfo: 'When importing a used vehicle to Mozambique, taxes and clearance charges will be applied by the Government of Mozambique.'
  },
  pk: {
    countryCode: '+92',
    timeDifference: '-4 Hours (GMT+5)',
    port: 'Karachi',
    shippingLine: '---',
    currency: 'Pakistani Rupee',
    documents: '---',
    yearRestrictions: 'Max. 3 Years Old',
    mostPopularVehicles: 'Hatchback: Toyota Aqua, Toyota Vitz, Wagon R, Mitsubishi EK, Every Van, Every Wagon, Suzuki Swift, Suzuki Alto, Toyota Passo, Honda Fit, Daihatsu Mira. Sedan: Toyota Prius, Toyota corolla Axio. SUV: Land cruiser Prado, Toyota C-hr, Honda Vezel, Nissan Xtrail. Trucks: Hino and Nissan in f/cut condition (Hino FD1J,GD1J,FD3H,GD3H,)(Nissan CM87 185HP ,CM88 200HP, CM88 205HP, MK250 215HP)',
    timeOfShipment: 'RoRo (14-24 Days)',
    vesselSchedule: 'RoRo (Monthly)',
    inspection: 'Not Required',
    rulesAndRegulations: 'Under the gift and personal baggage schemes, vehicles up to three years old will now be importable. Under the gift scheme brothers and sisters will also be eligible, besides the parents, husband, wife and children. It will no longer be required that the vehicle be registered in the name of the Pakistani national prior to its import under the personal baggage or transfer of residence scheme. Overseas Pakistanis holding Pakistan origin card will also be eligible to import vehicles under the gift, personal baggage and transfer of residence scheme. These cards are issued to Pakistanis opting for citizenship of another country or those carrying green cards like in the United States.',
    importCategories: 'Import of cars is allowed in four categories. All Pakistanis can import new cars while only overseas Pakistanis can import used cars. Under baggage rules for overseas Pakistanis, imports of used and new cars are permitted on transfer of residence, gift to immediate relatives and for stay abroad extending beyond six months. New rules simplify procedures for these categories and remove impediments, which had resulted in many malpractices. The restriction of ownership of a used car has been done away with and the overseas Pakistanis can buy a used car from the market, which is less than three years old. Under gift scheme an expatriate would now be able to send the gift to brothers and sisters as well besides parents, wife and children. Since left-hand drive system is in vogue in most parts of the world as against right hand in Pakistan, the ownership restriction has been dropped to facilitate import of right hand drive cars from whatever sources these are available.',
    importDuty: 'Import duties on new cars with a capacity of up to 1,300cc are 50 per cent; cars up to 1,800cc are charged 65 per cent and cars of more than 1800cc pay 75 per cent. The reduction in duty for used cars means effectively that a two-year-old used car with a capacity of up to 1,300cc will be charged duty of just 2 per cent. While the bulk of new cars sold in Pakistan are 1,300cc or below, the government is encouraging the import of larger luxury cars. Import duties on the largest cars, have been reduced from 100 to 75 per cent.'
  },
  ph: {
    countryCode: '+63',
    timeDifference: '-1 Hours (GMT+8)',
    port: 'In the case of CKD shipment, it does not have to be Subic port',
    shippingLine: '---',
    currency: 'Philippine peso',
    documents: '---',
    yearRestrictions: 'No year regulation.',
    popularMakersAndTrucks: 'Every tonnage of Mitsubishi & Isuzu dump, flat body, wing body, freezer, mixer, crane, sprinkler, loader and trailer head trucks. Equipment, such as forklift, wheel loader, excavator, bulldozer, motor grader, crusher and crane. Hino less popular, Nissan not at all.',
    inspection: 'No inspection required.',
    rightHandDrive: 'Complete right hand drive truck has to be shipped only to Subic port. Steering wheel conversion has to be done at the factory in Subic.',
    findReliableSupplier: 'Recently, The Internet can make you to find the many number of used car exporters in Japan. The point when you select the company, Please look at their history, reliability, durability that is popular and has higher rankings on the website. There is some of company who shows unbelievably cheap prices or not real photos of the cars, please make sure to check their reliability and condition of the cars with terms and sales condition. To avoid Internet fraud, Please contact them closely over the phone to know who they are, or ask about this selected company at your local Japanese embassy. The best way is to find reliable used vehicle exporter is to know any their customer who bought the cars from that company.',
    chooseRightCar: 'There is the import regulation for all cars being imported into Philippines. The used motor vehicle must be left hand drive and before shipping you have to file an application permit with the RP BIR in Washington DC. Import duties are assessed based on the CIF value of the goods. Depending on the country of origin and any trade a preference being extended to a specific country the normal duty ranges currently between 3-15% with some commodities having as much as 60% duty associated with them. Presently there are no duties imposed for exports.',
    payment: 'Once you have decided to purchase the vehicle, you can receive the Invoice from the supplier. The most of the company prefer the customer to arrange the payment by Bank remittance. Once you get the invoice, you can print it out and bring it to your local major bank to transfer money to their bank account. Make sure to have the receipt of your payment at your bank as it is proof of your money transfer and you can submit it to your supplier for their quicker confirmation.',
    shipmentDelivery: 'Once your payment is acknowledged by the supplier, the shipment procedure can be started. It is depending on the condition of payment between you and your supplier. The delivery of the car to Philippines shall be carried out before the eligible subject performing exit procedures in the country where he/she is residing.',
    portClearance: 'There are approximately 14 approved ports of entry throughout the Philippines. When your shipment arrives in the Philippines, FedEx (Licensee Airfreight 2100, Inc.) completes and obtains all required documents such as the Import Entry and Internal Revenue Declaration, the Supplemental Declaration on Valuation (SDV) and other regulatory permits on behalf of the importer. AF2100 then lodges and processes these documents at the Bureau of Customs. The duties and taxes are computed, and if selected by Customs, the shipment is examined. AF2100 notifies the consignee of the final results and stated amounts of duties and taxes assessed the shipment once the importer approves the duties and taxes and payment is completed, the shipment is released from the Customs warehouse.'
  },
  pg: {
    countryCode: '+675',
    timeDifference: '+1 Hours (UTC+10)',
    port: 'LAE, Rabaul, Port Moresby',
    shippingLine: '---',
    currency: 'Papua New Guinean kina',
    documents: 'BL/ Masho/ Masho Translation/ Invoice/ Insurance if Applicable',
    yearRestrictions: 'Any year is acceptable',
    shippingInfo: 'Main Ports are Port Moresby & Lae, Others are Madang, Rabaul & Tarawa. Cost Per M3: Port Moresby/ Lae USD 124/- Others are USD 150/- to USD 260/-. Duration: Approx. 2 weeks (Same as Solomon Islands). Schedule: Twice a month (1st & 3rd week) (Same as Solomon Islands).',
    approximateShippingCosts: `Hiace Van USD 2250/- (Approx. 18 M3)
Isuzu Elf/ Mitsubishi Canter Truck USD 1950/- (Approx. 16 M3) For Port Moresby & Lae
Isuzu Forward/ Mitsubishi FUSO USD 4580/- (Approx. 32 M3)`,
    inspection: 'Not required',
    taxation: '40%-110% Tax',
    documentsRequired: [
      'Invoice showing the correct value, quantity, description, etc.',
      'Bill Of Lading (BOL)',
      'Customs Valuation Declaration',
      'Certificate of origin and value (if applicable)',
      'Import Permits/ Licenses/ Applications, etc (if prohibited/restricted)'
    ],
    dutyFreeConditions: 'Duty free importation of used vehicles in Papua New Guinea is allowed provided the following conditions are met: The vehicle owner should reside in Papua New Guinea for a period of time exceeding a year, on or from their arrival date. The vehicle was for the whole period of over twelve months immediately preceding the owner\'s departure for Papua New Guinea personally owned and used by the owner in the country in which the owner was living. Proof of ownership of the vehicle in a documentary form, such as registration certificate, invoice/ purchase receipt, insurance certificate and passport, etc. The documents can be produced to the Collector of Customs at the port of importation on demand. It is established on inspection that the vehicle has been used for a period of over twelve months and that it is roadworthy as per the safety standard and rules under Papua New Guinea\'s road traffic rules.',
    customsDutyCalculation: 'If above conditions are not met, then the Customs duty and Import Excise duty that should be paid are decided as follows: The actual price paid plus value of any additional fittings and all charges paid or payable incurred in importing the vehicle including insurance and freight. The value established on the above basis will be subject to depreciation allowance of 5% for the first completed month of ownership and use overseas, less - further 1% for each subsequent month of ownership and use overseas, with a maximum reduction of 40% where a brand new vehicle was purchased from a dealer in the exporting country. The qualifying period for the depreciation allowance, for value for duty purposes, is to be taken as the period from the date of purchase to date of export to Papua New Guinea or, if sooner, the date of the owner\'s embarkation for Papua New Guinea provided the vehicle was in the ownership and use of the owner for the whole of the period. If the evidences provided are not accurate due to discrepancy in value, thus are not accepted by the Collector of Customs. The vehicle could be seized for further investigation and proper estimation value.',
    customerPreference: 'Toyota Hiace/ Landcruiser Prado/ Landcruiser, Nissan Teana/ Elgrand, Subaru Forester, Honda Accord, Mazda Atenza, Mercedes Benz S Class, Audi A6. Special Note: Budget is the most Important as most customers looking for cheap vehicle'
  },
  ru: {
    countryCode: '+7',
    timeDifference: '-6 Hours (GMT+3)',
    port: 'Vladivostok, Novorossyisk, St Petersburg',
    shippingLine: '---',
    currency: 'Russian ruble',
    documents: 'Invoice, Insurance',
    popularModels: 'Cheaper vehicles like the Toyota Corolla and the Toyota Fielder are the most popular models in Far Eastern Russia. Else, vans like Toyota Voxy, Nissan Leaf or trucks like Hino Ranger are popular on this market.',
    leftHandDrive: 'Cars in Russia are Left Hand Drive. Yet, Right Hand Drive vehicles are still imported in the Russian Far East. Passenger cars must be 3 to 5 years old, on the basis of the manufacture date (not the first registration date written on the Export Certificate). No pre-shipment inspection required. When the vehicle has arrived in Russia, it has to pass a radioactivity check since the nuclear accident of Fukushima in year 2011.',
    documentsRequired: [
      'Commercial invoice',
      'Bill of Lading',
      'Insurance',
      'Packing list',
      'Customs declaration',
      'Single Administrative Document (SAD)'
    ],
    importingTemporaryVehicles: 'Temporarily imported vehicles, whose temporary use has been extended beyond one year, enjoy partial import tax relief. In such cases, a customs charge of three percent of the total cost of the vehicle is assessed each month. Total cost for this purpose is the original product Price plus all import taxes. Advanced assessment of up to three months may be required. If the vehicle is re-exported, these fees are not returned. If it is sold, the monthly fees already paid by the time of sale are included in the import taxes Assessed. Vehicles imported into Russia as a contribution to authorized capital of enterprises with foreign investment are exempt from the value added tax for one year beginning from the moment of enterprise registration.',
    importingPersonalVehicles: 'Individuals moving to Russia permanently from other countries are exempt from import duties for one vehicle, except new vehicles with engine size over 1,800 cubic centimeters. Residents of foreign countries are exempt from import duties for temporary import of one vehicle for a period not to exceed one year, for Personal use or use by the members of the importers family. Permanent residents of the Russian Federation who stay abroad for over six months without interruption are also eligible to import one vehicle without paying import taxes, except new vehicles with engine size over 1,800 cubic centimeters. Individuals should provide customs officials with a customs declaration that includes the retail cost of the vehicle. The prospective importer should also be prepared to authenticate the retail cost. Otherwise customs officials will assess the cost themselves based on price information maintained by Russian Customs.'
  },
  kn: {
    countryCode: '1-869',
    timeDifference: 'JST -13',
    port: 'Basseterre',
    shippingLine: 'K-Line',
    currency: 'XCD',
    documents: 'Invoice, BL, Masho, Caricom',
    vesselSchedule: 'Monthly 25-30',
    timeOfShipment: '30-45 Days',
    inspection: 'N/A',
    carsYearRestriction: 'N/A Less Taxes 4+',
    vansYearRestriction: 'N/A Less Taxes 4+',
    busesYearRestriction: 'N/A Prefer 10+',
    trucksYearRestriction: 'N/A Prefer 20+',
    popularCars: 'Escudo, Cr-v, Tiida, Rav4, Axela',
    popularVans: 'Nissan Urvan, Caravan',
    popularBuses: 'N/A',
    popularTrucks: 'Nissan, UD, Isuzu, Hino'
  },
  ws: {
    countryCode: '+685',
    timeDifference: '+4 Hours (GMT+13)',
    port: 'Apia',
    shippingLine: '---',
    currency: 'Samoan tala',
    documents: 'Invoice, Bill of Lading',
    yearRestrictions: 'Used vehicles above the age of 12 years are not allowed to ship in Samoa.',
    popularModels: 'Machinery: Kobelco excavator 2013, Komatsu excavator 2004, Komatsu forklifts, Kanto crane 2002, Komatsu crane 1998, Kawasaki Road rollers. Nissan Caravan Coach, Nissan AD 2011, Nissan Caravan Bus 2010, Nissan Civilian Bus 2010, Toyota Hilux 2010, Toyota FJ Crusher 2012, Toyota Hiace Van 2009, Toyota Corolla Felder 2011, Toyota Vanguard, Toyota Ractis, Sedan, Mitsubishi Pajero 2006, Mitsubishi Outlander, Mazda Demio',
    shippingPorts: 'Used vehicle from Japan are shipped to Port of Apia in Samoa.',
    inspection: 'All vehicles inspected in the country are subjected to inspection and undergoes disinfection if the vehicle found contaminated.',
    rightHandDrive: 'Importation of only right-hand drive vehicles is allowed in the country. Left hand drive vehicles were banned from Samoa after the government changed the side of the road for Samoans to drive on in 2009. Most of the left hand drive vehicles in Samoa are imported from American Samoa, Hawaii and the United States',
    documentsRequired: [
      'Bill of Lading',
      'Commercial or Purchase Invoice',
      'Certificate of Title and Registration',
      'Note: Importer should provide other necessary documents requested by Customs'
    ],
    customsTariff: 'As a member of the World Customs Organization (WCO), one significant obligation to Customs is to ratify the terms and conditions as set out by the Customs Cooperation Council (COC). This includes the adoption of the Customs Tariff nomenclature under the International Convention on the Harmonized Commodity Description and Coding System. Customs has adopted the latest Harmonized System version 2012. This harmonizes codification of all imports and exports into and from Samoa. All correlation and soft copies of this available tariff documents are subject to changes in accordance with any amendments to the Customs laws and regulations',
    additionalInfo: 'The Ministry of Revenue through its Customs Department is in charge of the left-hand drive vehicles arriving in the country. The A.C.E.O. said L.T.A would work with Customs to make sure bringing in left-hand drive vehicles is well monitored and secured. He added that there is a quota of 100 left-hand drive vehicles per month. Once that is maxed out, members of the public will have to wait until the next month.'
  },
  sc: {
    countryCode: '+248',
    timeDifference: '-5 Hours (GMT+4)',
    port: 'Victoria',
    shippingLine: '---',
    currency: 'Seychellois rupee',
    documents: 'Invoice, Copy of passport',
    yearRestrictions: 'The vehicle must not be older than 3 years',
    mostPopularVehicles: 'Nissan X-Trail, Honda Vezel, Honda Fit, Toyota Aqua, Toyota C-HR, Suzuki Ignis, Suzuki Swift',
    shippingPorts: 'The major shipping ports in Seychelles are Port Victoria, Port of Mahe.',
    importRestrictions: 'Only Brand New Vehicles can be imported into Seychelles and Trucks can be imported older than 04 years depending on the Tonnage. Importation of used vehicle by returning residents/students is allowed in the country. A returning resident is a Seychelles citizen living outside Seychelles for a continuous period of not less than 2 years and is returning to Seychelles to take up permanent residence is considered as a returning resident.',
    returningResidentConditions: 'Given conditions under the Used Vehicle Policy under the Ministry of Finance should be followed by returning residents importing a used vehicle: The motor vehicle must be for passenger use only. Only one vehicle is permitted per person. A returning resident once granted an import permit will not be allowed to import another second hand motor vehicle or motor cycle should he/she decide to move overseas again. The vehicle must enter the country within 6 months of the returning graduate/resident taking residency in Seychelles. The returning resident/graduate is not allowed to sell or transfer the vehicle for the period of two years following the registration of the vehicle with the Seychelles License Authority (SLA).',
    rightHandDrive: 'Right hand drive vehicle',
    dutyAndTaxes: 'Returning residents are allowed to import used vehicle in the country. However, no concession is given on taxes on vehicles imported. All applicable trades tax, excise tax, GST and levy are payable.',
    documentsRequired: [
      'Bill of entry (in duplicate)',
      'Invoice/Receipts',
      'Bill of Lading',
      'Packing List/ List of goods in cargo',
      'Copy of passport of most recent entry in Seychelles',
      'Copy of passport of exit of 12 months or more from Seychelles',
      'Import permit',
      'Letter from the organization to certify that the student/graduate was sent for studies or in cases whereby the student/graduate went to study at their own expenses, they must provide document(s) proving their attended institution of study. (If applicable)',
      'Prove of ownership of the vehicle',
      'Copy of driving license'
    ],
    importPermitRestrictions: 'All motor vehicles imported require an import permit. Restrictions on importation of vehicles are under those categories: Vehicle and Chassis bodies (e.g. fork-lift, trucks, cranes, and derricks). Spark-ignition piston engine of kind used for the propulsion of vehicle e.g. bulldozers, graders, excavators, scrapers and shovels. Compression piston engine (diesel or semi diesel engine) of kind used for propulsion of vehicle e.g. Chassis fitted with engine. Bodies (including cabs, for motor vehicles) e.g. nose cuts, front cuts, and rear cuts'
  },
  sb: {
    countryCode: '+677',
    timeDifference: '+2 Hours (GMT+11)',
    port: 'Honiara',
    shippingLine: '---',
    currency: 'Solomon Islands dollar',
    documents: 'BL, Masho, Masho Translation, Invoice, Insurance if Applicable',
    yearRestrictions: 'Cars: Any year is acceptable',
    shippingInfo: 'Port: Honiara. Cost per M3: USD 188/-. Shipping Duration: Approx 2 weeks. Shipping Schedule: Twice a month (1st & 3rd week).',
    approximateShippingCosts: `Hiace Van USD 3600/- (Approx 18 M3)
Isuzu Elf/ Mitsubishi Canter Truck USD 3000/- (Approx 16 M3)
Isuzu Forward/ Mitsubishi FUSO USD 5900/- (Approx 32 M3)`,
    inspection: 'Not required',
    taxation: '15% Tax on all Imported Goods',
    documentation: 'No Special documents required. BL/ Masho/ Masho Translation/ Invoice/ Insurance if Applicable',
    customerPreference: 'Toyota Hiace Vans 1990-1995 LH125 Manual Diesel, Toyota Sprinter/ Corolla/ Rav4/ Hilux/ Carina/ Premio, Nissan Sunny, Isuzu Bighorn / Elf, Mitsubishi Pajero, Landrover Discovery. Special Note: Budget is the most Important as the customers looking for cheap vehicle.'
  },
  za: {
    countryCode: '+27',
    timeDifference: '-7 Hours (GMT+2)',
    port: 'Durban (South Africa)',
    shippingLine: '---',
    currency: 'South African rand',
    documents: 'Invoice, Deregistration Certificate',
    timeOfShipment: 'RoRo (24-34 Days)',
    vesselSchedule: 'RoRo (Monthly)',
    rightHandDrive: 'Right Hand Drive vehicles are only permitted for importation in South Africa and as per current legislation left hand drive vehicles which were not registered in RSA before 23 July 2004 may not be registered, licensed, roadworthied and operated on a public road in South Africa',
    dutiesAndTaxes: 'Customs duty applicable on the import of used cars from Japan in South Africa is calculated ad valorem of the used cars. Customs Duty: 30% (motor cars more than 20 years old are subject to 20% customs duty). Ad Valorem customs duty (based on a sliding scale depending on the value of the vehicle, with a minimum of 0.75% and a maximum of 20%). Value-added tax (VAT): 14%',
    documentsRequired: [
      'Immigrants need their permanent residence permit issued by the Department of Home Affairs (or a copy)',
      'Returning South Africans must show proof of emigration from SA, proof they had permanent residence abroad and evidence that the permanent residence has been withdrawn',
      'A duly completed form DA304A',
      'Bill Of Lading',
      'Purchase Documents (Invoice(s)',
      'Registration Certificate/permit (Deregistration Certificate)',
      'Documentary evidence of the date on which delivery of the vehicle was taken',
      'Documentary evidence of the date on which the vehicle was handed to the shipper for shipment to South Africa',
      'An Import Permit',
      'An original Letter of Authority'
    ],
    importantPoints: 'You must have Import Permit from government. Import Permits are only forwarded to South African addresses. You can\'t import used cars for commercial purposes. Get authorization before purchasing any vehicle. An Imported Vehicle should be otherwise unavailable in South Africa.'
  },
  lk: {
    countryCode: '+94',
    timeDifference: '-3:30 Hours (UTC +5:30)',
    port: 'Hambanthota / Colombo',
    shippingLine: 'K Line',
    currency: 'Sri Lankan rupee',
    documents: 'Invoice, BL, Deregistration',
    yearRestrictions: 'Cars: Less than 3 years from registration. Vans: Less than 5 years from registration & buddy van less than 4 years from registration. Buses: Less than 10 years from registration & less than 10 to 25 years from registration permit. Trucks: Less than 5 years from registration & buddy truck less than 10 to 25 years from registration permit',
    popularModels: 'Cars: Aqua, GP5, Wagon R, Prius, X-Trail, Vezel. Vans: Hiace. Buses: Coaster, Rosa, Civilian, Hino. Trucks: ELF, Canter, Dyna, Titan',
    shippingPorts: 'Generally used vehicles are shipped to the maritime port of Colombo and Hambantota.',
    inspection: 'All Japanese used vehicles imported to Sri Lanka must be JAAI (Japan Auto Appraisal Institute) certified for roadworthiness',
    rightHandDrive: 'Importation of only Right-Hand Drive (RHD) vehicles is allowed in Sri Lanka.',
    importTaxesRates: 'Duties: 5-35%. Motor vehicles: 25%. VAT: 12%. Ports and Airport Levy (PAL): Generally 5% of the CIF value, or in some cases at a reduced rate between 0% and 2.5%, of the CIF value. Ad valorem rates: 1%- 45% (of the CIF value). Nation Building Tax: Two percent of the sum of the CIF value X 110 percent, customs duty, cess, excise duty and PAL.',
    documentsRequired: [
      'Original Bill Of Lading',
      'Owner\'s passport',
      'Purchase Invoice',
      'Transport Ministry Approval: It must be obtained by the importer prior to the shipping of left hand drive vehicle',
      'Insurance Certificate',
      'Original Registration Certificate: The certificate should have an English translation',
      'Import License'
    ]
  },
  lc: {
    countryCode: '+1',
    timeDifference: '-13 Hours (GMT-4)',
    port: '---',
    shippingLine: '---',
    currency: 'Eastern Caribbean dollar',
    documents: 'Invoice, OBL Specific',
    carImportDuty: 'The following duties may be applicable to the item(s) you are importing: Import Duty, Excise Tax, Consumption Tax, Service Charge, Environmental Levy, Security Tax',
    documentsRequired: [
      'Title / Registration',
      'Purchase Invoice'
    ],
    oblSpecificInfo: 'One vehicle per person or family is allowed duty and tax free if the vehicle does not exceed the cost, insurance and freight (CIF) value of USD 15,000 and the following conditions are met: The person is a returning national accompanied by the vehicle. The vehicle arrives within 3 months prior to or after the vehicle. The vehicle is purchased in Saint Lucia within 3 months of a return to Saint Lucia. The returning national cannot sell, exchange or dispose of the vehicle within 3 years of importation. Motor vehicles designed for use on land or in the water are subject to the payment of duties',
    dutyOnGasolinePetrolVehicles: 'TN. 8703.229 (1000-1500 cc): Import Duty 35%, Excise Tax 20.50%, Service Charge 5%, Total Duties 60.50%. TN. 8703.232 (1501-1800 cc): Import Duty 35%, Excise Tax 20.50%, Service Charge 5%, Total Duties 60.50%. TN. 8703.233 (1801-2000 cc): Import Duty 35%, Excise Tax 50%, Service Charge 5%, Total Duties 90%. TN. 8703.234 (2001-3000 cc): Import Duty 35%, Excise Tax 75%, Service Charge 5%, Total Duties 115%. TN. 8703.249 (3000 and Above): Import Duty 35%, Excise Tax 85%, Service Charge 5%, Total Duties 125%.'
  },
  sr: {
    countryCode: '+597',
    timeDifference: '-12 Hours',
    port: 'Paramaribo, Lelydorp',
    shippingLine: 'YUWA, HOEGH',
    currency: 'Suriname Dollar',
    documents: 'Invoice / BL / Masho Translation/Masho',
    timeOfShipment: 'RoRo (39-44 Days)',
    vesselSchedule: 'RoRo (Less than Bi-Monthly)',
    yearRestrictions: 'Used cars should not be more than 8 year old. Used buses should not be more than 15 years from the date of manufacture. No age restriction on importation of used trucks.',
    popularModels: 'Toyota Vitz, Isuzu Elf Truck, Toyota Passo, Mitsubishi Canter, Toyota Coaster, Toyota Voxy, Subaru Impreza Wrx, Mitsubishi Rosa',
    inspection: 'No specific inspection is required on import of used vehicles.',
    rightHandDrive: 'Right Hand Drive (RHD) vehicles are permitted to enter in Suriname.',
    taxation: 'CIF value less than $25,000, then tax rate of 25%. CIF value greater than $25,000, then tax rate of 40%. Annual taxes for the vehicle depend upon weight. Delivery of the vehicle from port to residence cost approximately 125.00USD',
    documentsRequired: [
      'Bill of Lading- It must reflect car\'s maker and model, chassis & engine number, weight, cubic capacity, year of production',
      'Original Commercial/Purchase Invoice',
      'Certificate of Title and Registration – must be original',
      'Circulation Permit',
      'Drivers License & International Insurance Policy (green card)',
      'A copy of passport or ID-card',
      'Insurance certificate for motor vehicle'
    ]
  },
  tz: {
    countryCode: '+255',
    timeDifference: '-6',
    port: 'Dar Es Salaam',
    shippingLine: 'MOL/ GLOVIS/ KEIHIN/ Hoegh',
    currency: 'Tanzanian shilling',
    documents: 'Invoice / BL / Masho Translation/Masho',
    yearRestrictions: 'No Age Limit. There is no age limit on the import of used cars in Tanzania from Japan. However used motor vehicles of 8 years of age or more, counted from the year of manufacture are charged additional excise duty while imported in Tanzania.',
    popularModels: 'Land Cruiser Prado, Rav4, Coaster, Canter, Rosa, Harrier',
    destinationPort: 'Dar Es Salaam',
    timeOfShipment: 'RoRo (24-34 Days)',
    vesselSchedule: 'RoRo (Monthly)',
    inspection: 'JAAI Inspection is elementary for vehicles imported from Japan. Vehicles being imported to Tanzania from Japan are required to have passed the JAAI inspection. Before importing a vehicle from Japan, make sure the vehicle has taken the JAAI inspection. Along with the shipping documents, certificate of JAAI will also be sent.',
    taxation: 'Vehicles with the engine capacity up to 2000cc: Import duty 25%, VAT 20%, Cumulatively this is 50% of dutiable value. Vehicles with the engine capacity above 2000 cc: Import duty 25%, Excise duty 10%, VAT 20%, Cumulatively this is 65% of dutiable value.',
    exciseDuty: 'Vehicle of cylinder capacity not exceeding 1000cc: 0%. Vehicle of cylinder capacity 1000cc but not exceeding 2000cc: 0%. Vehicle of cylinder capacity exceeding 2000cc: 0%. Excise Duty is a duty charged on specific goods and services manufactured locally or imported on varying rates. The Excise Duty on Motor vehicles imported in Tanzania is charged based on cylinder capacity.',
    documentsRequired: [
      'Bill of Lading',
      'Export Certificate',
      'Proforma Invoice',
      'JEVIC, QISJ',
      'Agent\'s Authorization Letter from the importer',
      'Import permits from TFDA, TBS etc'
    ]
  },
  tt: {
    countryCode: '+1',
    timeDifference: '-13 Hours (GMT-4)',
    port: 'Spain',
    shippingLine: '---',
    currency: 'Trinidad and Tobago dollar',
    documents: 'Invoice, Deregistration',
    ageRestriction: 'Cars should not be more than 4 years old. For vehicles to be used as taxis, they must not more than 3 years from the date of manufacture.',
    shippingPorts: 'Port for shipment of vehicles to Trinidad is Port of Spain.',
    inspection: 'No specific Roadworthiness inspection is required on import of used vehicles',
    rightHandDrive: 'Right Hand Used cars can be imported only with a valid import license. Car should not be fitted with a diesel engine.',
    importTaxRates: '1. up to 1599cc: 25%, 15%. 2. 1600cc to 2000cc: 35%, 15%. 3. 2001cc to 3000cc: 40%, 15%. 4. 3000cc and above: 45%, 15%.',
    documentsRequired: [
      'Four copies of Customs Declaration Form (C82 Form)',
      'Caricom Area Invoice (this is provided by the supplier and is necessary for any goods entering the CARICOM region)',
      'Supplier\'s Invoice',
      'Bill of Lading (BOL)',
      'Import License',
      'Deregistration Certificate: The certificate must have manufacturing date, engine number and chassis number that match the vehicles',
      'Original Passport'
    ]
  },
  ae: {
    countryCode: '+971',
    timeDifference: '-5 Hours (GMT+4)',
    port: '---',
    shippingLine: '---',
    currency: 'United Arab Emirates dirham',
    documents: 'Invoice, Insurance policy',
    ageRestrictions: 'Used car more than four years old, is not allowed to be shipped in the U.A.E.',
    popularModels: 'Cars: Honda Civic, Toyota Camry, Mitsubishi Pajero, Ferari, Mercedes-Benz, BMW, Lexus Alteza, Mazda Alteza, Toyota Corolla, Nissan Altima. Truck & Michenery: 950 F-2 Caterpillar, Kamotsu pw 160es-7k, Mercedes actor 1846 ls, Volvo fh 540xl, Volvo fm 12 380, Garbage trucks & Vacuum truck',
    shippingPorts: 'The most recommended port for shipments from Japan going to the U.A.E is Jebel Ali although other ports such as Abu Dhabi and Sharjah are also used. Generally, common shipping method RORO (Roll-On, Roll-Off) method is used for vehicle shipment. However, on request of customers more expensive shipping method of containers is arranged.',
    leftHandDrive: 'Importation of only left-hand drive vehicles is allowed in the U.A.E. Even though one can also import a right-hand drive vehicle, but the vehicle won\'t get register, hence one cannot use it on the roads of the U.A.E.',
    uaeRegulations: 'Japan is the world\'s leading source of automobiles and is known for ages for delivering high quality vehicles at competitive prices. Importing a used car from Japan is very frequent because of their reliability and authenticity. Drivers in the U.A.E. have to make sure that their vehicles are registered, insured and roadworthy. Nowadays, many exporters are buying a right-hand drive vehicle in order to re-import them to central Africa, subcontinents and inner Asia. U.A.E acts as a hub for sale into many other African and Asian states.',
    customsInspectionFees: 'Upon arrival of the vehicle, all imported vehicles are subject to inspection/ evaluation by a customs in the U.A.E. Tinted window cars are not allowed to be imported. A fine will be imposed on the vehicle and will require all windows to be replaced. Customs duty is at present 5% of the value estimated by customs on used motor vehicles.',
    vehicleRegistration: 'After duty payment is made, the importer must register the car and obtain local license plates at the Dubai Police-Traffic Dept. A Vehicle Clearance Certificate (V.C.C.) for each vehicle upon clearing customs will be provided by Dubai customs, which should be submitted to the Dubai Traffic Police for the registration. A valid U.A.E driver\'s license must be possessed by drivers. One must possess a valid U.A.E Residence Visa when applying for a driver\'s license. Annual basis vehicle registration is must in the U.A.E.',
    documentsRequired: [
      'Original Bill Of Lading (BOL):- It should include make, model, chassis number, engine number, color and type of car',
      'Export certificates issued by the Traffic Department (Title of ownership)',
      'Purchase/Commercial Invoice',
      'Copy of Passport',
      'Origin of certificate',
      'U.A.E residence permit or visa page copy (endorsed on passport)',
      'Authority letter (will be obtained by client upon arrival in Dubai)',
      'Copy of Diplomatic Card (Diplomats only)',
      'Report on Car Condition from load port',
      'Insurance policy'
    ]
  },
  ug: {
    countryCode: '+256',
    timeDifference: '-6',
    port: 'Mombasa / Dar es Salaam (Customers have both Mombasa and Dar es Salam options but majority prefers Mombasa)',
    shippingLine: 'K LINE / MOL / HOEGH /GLOVIS/SEALS',
    currency: 'Ugandan Shilling',
    documents: 'Invoice /BL / Inspection/ Masho Translation /Masho / Declaration',
    yearRestrictions: 'No Age Limit. Cars: 2007 Onward till the end of year 2021, then 2008 onward for year 2022. Vans: 2007 Onward till the end of year 2021, then 2008 onward for year 2022. Buses: No Limit. Trucks: No Limit but Prefers 1987 to 1990 Models',
    popularModels: 'Toyota Harrier, Toyota Noah, Toyota Hiace Van, Toyota Land Cruiser Prado (Diesel), Mitsubishi Canter, Isuzu Elf Truck, Toyota Wish, Toyota Noah, Toyota Hilux',
    destinationPort: 'Uganda being a land locked country, surrounded from all the sides by land has no port of its own, thus to import a Japan used car to Uganda either the port of Mombasa in Kenya or Dar-Es-Salaam in Tanzania can be used, both being equal in terms of cost related to import of the vehicle but Majority prefers Mombasa.',
    timeOfShipment: 'RoRo (30-45 Days)',
    vesselSchedule: 'RoRo (2 x Monthly)',
    inspection: 'Uganda National Bureau of Standards (UNBS) has appointed EAA (East Africa Automobile) & JEVIC (Japan Export Vehicle Inspection Canter) to conduct a compulsory inspection \'Road Worthiness Inspection (RWI)\' for the used cars to ensure that it meets certain standards. (Starting 2021 Changed odometer vehicles will not be issued a certificate. So need to make sure the Masho and the vehicle odometer matches.)',
    rightHandDrive: 'Right hand vehicles are permitted',
    taxation: 'The Custom duty value in Uganda is determined in accordance with The General Agreement on Trade and Tariffs (G.A.T.T) valuation method. Taxation or tariffs on importing used vehicles in Uganda are as follows: Import Duty: 15% of dutiable value, VAT: 17% of VAT value, Import commission: 2% of Dutiable Value, Withholding Tax: 4% of Dutiable Value. There is an excise duty of 10% on selected cases. There is also duty remission on some commercial vehicles.',
    documentsRequired: [
      'Original Bills of Lading',
      'Two clear negotiable Original Bills of Lading',
      'Work Permit (copy)',
      'Immigration Permit',
      'Certificate of Residence Change',
      'Attestation reservation de cale',
      'The consignee\'s original passport',
      'An invoice or valuation for the vehicle',
      'The original logbook of the vehicle or the original export documents from the country of origin',
      'Inventory in triplicate, English, detailed, valued, signed and dated by the customer',
      'Electrical powered items should be shown with serial numbers',
      'A Tax Identification Number, will be issued and obtained for the consignee by the consignee local employer in Uganda',
      'Note: It is a must to be registered with Tanzania Revenue Authority and have your Tax Identification Number (TIN) before clearing the car into Tanzania Customs Regulations'
    ]
  },
  gb: {
    countryCode: '+44',
    timeDifference: '-8',
    port: 'Bristol, Liverpool, Southampton',
    shippingLine: 'HOEGH',
    currency: 'Pound sterling',
    documents: 'Invoice / BL / Masho Translation/Masho',
    yearRestrictions: 'Max. 8 Years Old',
    popularModels: 'Toyota Alphard, Toyota Prius Alpha, Toyota Estima, Subaru Impreza Wrx, Toyota Prius Hybrid, Nissan Skyline, Nissan Elgrand, Toyota Hilux Surf',
    destinationPort: 'Southampton, London, Liverpool',
    timeOfShipment: 'RoRo (24-34 Days)',
    vesselSchedule: 'RoRo (Monthly)',
    inspection: 'Japanese used cars must pass the Single Vehicle Approval (SVA) or Individual Vehicle Approval (IVA) Test in order to ensure that the vehicle meets safety standards when used on public roads. To check vehicle\'s road-worthiness, compulsory inspection MOT (Ministry Of Transport) is carried out by a Government approved testing center. Every year, vehicles go through MOT test after third year since the vehicle first registration.',
    rightHandDrive: 'UK is Right Hand Drive country and can import any steering Left Hand Drive or Right Hand Drive.',
    taxation: 'Duty: 10% on used cars, 22% on pick-up and commercial vehicles. VAT: 17.5%. Ownership tax on passenger cars and commercial vehicles based on CO2 emission and weight and axles respectively.',
    conditionsNoDutyVAT: 'Moving back to the UK: The importer has had his home outside the UK for at-least a year. The vehicle must be possessed and used by the importer for at-least 6 months before it is imported. Taxes or duty must be payed by the importer while buying the vehicle. The vehicle must be use for personal work for at-least a year after it is imported. Importing previously exported vehicle: Vehicle must be exported within last 3 years only. Vehicle must not be tampered except necessary repairing. Non-EU registered vehicles: The importer should be a non-EU resident. The importer should not sell, lend the vehicle in EU. Use it for personal use only and re-export it after 6 months.',
    ukRegistration: 'Test on vehicles depending on their age: Vehicles below 3 years old should pass SVA/ESVA Test only. Vehicles between 3 years and 10 years should pass SVA/ESVA Test along with MOT Test. Vehicles with age more than 10 years should pass MOT Test only. To register a used vehicle fill the V55/5 form and send it along with the required documents to DVLA.',
    documentsRequired: [
      'Bill of Lading (BOL)',
      'Purchasing Invoice from the supplier to show the owner of the vehicle',
      'Deregistration Certificate',
      'Original Identification proof',
      'Trader\'s Unique Reference Number (TURN) for Commercial Importers',
      'Driving licence or original document confirming name',
      'Utility bill or other original document to confirm address',
      'Motor insurance from a British company',
      'Original Export Certificate',
      'Translated Export Certificate',
      'Cost of vehicle tax',
      'Documents to confirm name such as birth certificate, driving license, passport',
      'Documents to confirm address such as Utility bill, Council tax bill',
      'Vehicle registration fee',
      'MOT certificate',
      'Proof of customs clearance',
      'SVA/IVA as vehicle imported from outside the EU'
    ]
  },
  zm: {
    countryCode: '+260',
    timeDifference: '-7',
    port: 'Dar Es Salaam',
    shippingLine: 'K LINE/ KEIHIN',
    currency: 'Zambian kwacha',
    documents: 'Invoice / BL / Masho Translation/Masho/',
    yearRestrictions: 'No Age Limit',
    popularModels: 'Hiace Van, Land Cruiser Prado, Rav4, Dyna Truck, Allion',
    destinationPort: 'Dar Es Salaam (Tanzania)',
    timeOfShipment: 'RoRo (24-34 Days)',
    vesselSchedule: 'RoRo (Monthly)',
    inspection: 'All Japanese used vehicles imported to Zambia must be JEVIC (Japan Export Vehicle Inspection Center) certified for roadworthiness.',
    rightHandDrive: 'Only right-hand drive vehicles are allowed to be imported in Zambia. Exception is provided in case of ambulance and fire engine.'
  },
  zw: {
    countryCode: '+263',
    timeDifference: '-7',
    port: 'Dar Es Salaam',
    shippingLine: 'K LINE',
    currency: 'Zimbabwean dollars',
    documents: 'Invoice / BL / Masho Translation/Masho',
    yearRestrictions: '10 Years Old. But Except units for agriculture purpose. Need to be get permit for more than 10 year units.',
    popularModels: 'Toyota Hiace Van, Toyota Vitz, Toyota Land Cruiser Prado, Honda FIT, Nissan Caravan, BMW 3 Series',
    destinationPort: 'Durban (South Africa)',
    timeOfShipment: 'RoRo (24-34 Days)',
    vesselSchedule: 'RoRo (Monthly)',
    inspection: 'No Inspection Required'
  }
}


// Merge coordinates with country details for Globe3D
export const allCountryDetails = Object.fromEntries(
  Object.entries(countryDetails).map(([code, details]) => [
    code,
    {
      code,
      name: coordinates[code]?.name || code.toUpperCase(),
      lat: coordinates[code]?.lat || 0,
      lng: coordinates[code]?.lng || 0,
      ...details
    }
  ])
)

// Export both for compatibility
export { countryDetails }
