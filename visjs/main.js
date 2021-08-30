// These variables will be injected into a page that will use them.
/* eslint no-unused-vars: "off" */

const options = {
  manipulation: false,
  height: "90%",
  layout: {
    hierarchical: {
      enabled: true,
      levelSeparation: 300,
    },
  },
  physics: {
    hierarchicalRepulsion: {
      nodeDistance: 300,
    },
  },
};


const nodes = [

  {id: "MedicationKnowledge/25",
productType: "substance",
size: 100,
label: "<b>ProductType:</b> Substance\n<b>status</b>: active\n<b>synonym_0</b>: Diclofenac\n<b>synonym_1</b>: Diclofenac\n<b>drugType</b>: small molecule\n",
color: "#E5E5FF",
shape: "box",
font: { multi: "html", face: "monospace", align: "left" },},
{id: "MedicationKnowledge/24",
productType: "substance",
size: 100,
label: "<b>ProductType:</b> Substance\n<b>status</b>: active\n<b>synonym_0</b>: Paracetamol\n<b>synonym_1</b>: Acetaminophen\n<b>drugType</b>: small molecule\n",
color: "#E5E5FF",
shape: "box",
font: { multi: "html", face: "monospace", align: "left" },},
  {
    id: "MedicationKnowledge/27",
    size: 120,
    productType: "Pharmaceutical Product",
    label:"Diclofenac 50 mg Comprimido revestido\nRoute: Oral\n productType: Pharmaceutical Product\nDoseFrom: Comprimido Revestido",
    color: "#FFCFCF",
    shape: "box",
    font: { face: "monospace", align: "left" },
  },
  {id: "MedicationKnowledge/34",
  size: 150,
label: "ProductTye: medproduct\n  status: active\n synonym: Diclofenac Sandoz 50 mg Comprimidos revestidos 50 mg Comprimido revestido\n productType: MEDPROD\n productType_0_coding_0_system: http://terminology.hl7.org/CodeSystem/medicineCS\n amount: 50\n amount_unit: mg\n doseForm: 38.0\n doseForm_coding_0_system: http://infarmed.pt/pharm_Form\n doseForm_coding_0_display: Comprimido revestido\n ",
color: "#DAF7A6",
shape: "box",
productType: "Medicinal Product",
font: { face: "monospace", align: "left" }},
{id: "MedicationKnowledge/35",
size: 150,
label: "ProductTye: medproduct\nstatus: active\nsynonym: Cataflam 50 mg Comprimido revestido\n productType: MEDPROD\n productType_0_coding_0_system: http://terminology.hl7.org/CodeSystem/medicineCS\n amount: 50\n amount_unit: mg\n doseForm: 38.0\n doseForm_coding_0_system: http://infarmed.pt/pharm_Form\n doseForm_coding_0_display: Comprimido revestido\n ",
color: "#DAF7A6",
shape: "box",
productType: "Medicinal Product",
font: { face: "monospace", align: "left" }},
{id: "MedicationKnowledge/36",
size: 200,
productType: "Packaged Medicinal Product",
label: "ProductTye: pack_med_product\n  status: active\n synonym: Cataflam 50 mg Comprimido revestido Blister - 10 unidade(s)\n productType: PACKMEDPROD\n productType_0_coding_0_system: http://terminology.hl7.org/CodeSystem/medicineCS\n amount: 50\n amount_unit: mg\n doseForm: 38.0\n doseForm_coding_0_system: http://infarmed.pt/pharm_Form\n doseForm_coding_0_display: Comprimido revestido\n ",
color: "#76D7C4",
shape: "box",
font: { face: "monospace", align: "left" }},
{id: "MedicationKnowledge/37",
size: 200,
productType: "Packaged Medicinal Product",
label: "ProductTye: pack_med_product\n  status: active\n synonym: Cataflam 50 mg Comprimido revestido Blister - 30 unidade(s)\n productType: PACKMEDPROD\n productType_0_coding_0_system: http://terminology.hl7.org/CodeSystem/medicineCS\n amount: 50\n amount_unit: mg\n doseForm: 38.0\n doseForm_coding_0_system: http://infarmed.pt/pharm_Form\n doseForm_coding_0_display: Comprimido revestido\n ",
color: "#76D7C4",
shape: "box",
font: { face: "monospace", align: "left" }},
{id: "MedicationKnowledge/38",
ProductType: "pharmprod",
size: 120,
label: "<b>ProductType:</b> Pharmaceutical Product\n<b>status</b>: active\n<b>synonym_0</b>: Paracetamol 10mg/ml Solução para perfusão\n<b>drugType</b>: small molecule\n<b>amount_value</b>: 10\n<b>amount_unit</b>: mg\n<b>doseForm_coding_0_display</b>: Solução para perfusão\n",
color: "#FFCFCF",
shape: "box",
font: { multi: "html", face: "monospace", align: "left" },},

];

//
// Note: there are a couple of node id's present here which do not exist
// - cfg_0x00417563
// - cfg_0x00403489
// - cfg_0x0042f03f
//
// The edges with these id's will not load into the Network instance.
//
const edges = [
  {
    from: "MedicationKnowledge/38",
    to: "MedicationKnowledge/25",
    arrows: "to",
    label: "pharmaceutical Product of",
    physics: false,
    smooth: { type: "cubicBezier" },
  },
  {
    from: "MedicationKnowledge/27",
    to: "MedicationKnowledge/24",
    arrows: "to",
    label: "pharmaceutical Product of",
    physics: false,
    smooth: { type: "cubicBezier" },
  },
  {
    from: "MedicationKnowledge/34",
    to: "MedicationKnowledge/27",
    label: "Medicinal Product of",
    arrows: "to",
    physics: false,
    smooth: { type: "cubicBezier" },
  },  {
    from: "MedicationKnowledge/35",
    to: "MedicationKnowledge/27",
    label: "Medicinal Product of",
    arrows: "to",
    physics: false,
    smooth: { type: "cubicBezier" },
  },
  {
    from: "MedicationKnowledge/36",
    to: "MedicationKnowledge/35",
    label: "Packaged Form of",
    arrows: "to",
    physics: false,
    smooth: { type: "cubicBezier" },
  },  {
    from: "MedicationKnowledge/37",
    to: "MedicationKnowledge/35",
    label: "Packaged Form of",
    arrows: "to",
    physics: false,
    smooth: { type: "cubicBezier" },
  },
];

