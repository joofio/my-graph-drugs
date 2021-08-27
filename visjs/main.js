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
  {
    id: "MedicationKnowledge/25",
    size: 100,
    label: "Paracetamol:\nStatus: Active\nProductType: Substance\n Synonym: AcetominoPhen",
    color: "#E5E5FF",
    shape: "box",
    font: { face: "monospace", align: "left" },
  },
  {
    id: "MedicationKnowledge/24",
    size: 100,
    label: "Diclofenac:\nStatus: Active\nProductType: Substance",
    color: "#E5E5FF",
    shape: "box",
    font: { face: "monospace", align: "left" },
  },
  {
    id: "MedicationKnowledge/27",
    size: 120,
    label:"Diclofenac 50 mg Comprimido revestido\nRoute: Oral\n productType: Pharmaceutical Product\nDoseFrom: Comprimido Revestido",
    color: "#FFCFCF",
    shape: "box",
    font: { face: "monospace", align: "left" },
  }
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
    from: "MedicationKnowledge/27",
    to: "MedicationKnowledge/24",
    arrows: "to",
    label: "pharmaceutical Product of",
    physics: false,
    smooth: { type: "cubicBezier" },
  },
  {
    from: "cfg_0x00405a2e",
    to: "cfg_0x00405a49",
    arrows: "to",
    physics: false,
    smooth: { type: "cubicBezier" },
  },
  {
    from: "cfg_0x00405a49",
    to: "cfg_0x00405a4e",
    arrows: "to",
    physics: false,
    smooth: { type: "cubicBezier" },
  },
  {
    from: "cfg_0x00405a49",
    to: "cfg_0x00405a62",
    arrows: "to",
    physics: false,
    smooth: { type: "cubicBezier" },
  },
  {
    from: "cfg_0x00405a55",
    to: "cfg_0x00405a5f",
    arrows: "to",
    physics: false,
    smooth: { type: "cubicBezier" },
  },
  {
    from: "cfg_0x00405a55",
    to: "cfg_0x004095c6",
    arrows: "to",
    physics: false,
    smooth: { type: "cubicBezier" },
  },
  {
    from: "cfg_0x004095c6",
    to: "cfg_0x00417563",
    arrows: "to",
    physics: false,
    smooth: { type: "cubicBezier" },
  },
  {
    from: "cfg_0x00405a39",
    to: "cfg_0x00403450",
    arrows: "to",
    physics: false,
    smooth: { type: "cubicBezier" },
  },
  {
    from: "cfg_0x00405a39",
    to: "cfg_0x00405a49",
    arrows: "to",
    physics: false,
    smooth: { type: "cubicBezier" },
  },
  {
    from: "cfg_0x00403450",
    to: "cfg_0x00403489",
    arrows: "to",
    physics: false,
    smooth: { type: "cubicBezier" },
  },
  {
    from: "cfg_0x00403450",
    to: "cfg_0x0042f03f",
    arrows: "to",
    physics: false,
    smooth: { type: "cubicBezier" },
  },
  {
    from: "cfg_0x00405a4e",
    to: "cfg_0x00405a55",
    arrows: "to",
    physics: false,
    smooth: { type: "cubicBezier" },
  },
  {
    from: "cfg_0x00405a4e",
    to: "cfg_0x00405a62",
    arrows: "to",
    physics: false,
    smooth: { type: "cubicBezier" },
  },
  {
    from: "cfg_0x00405a5f",
    to: "cfg_0x00405a62",
    arrows: "to",
    physics: false,
    smooth: { type: "cubicBezier" },
  },
];