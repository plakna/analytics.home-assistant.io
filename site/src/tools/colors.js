const COLORS = [
  "#00d2d5",
  "#034bd9",
  "#0547cb",
  "#0a47e0",
  "#149ed3",
  "#1b9e77",
  "#1bb69b",
  "#1de416",
  "#254661",
  "#27d0df",
  "#293f95",
  "#2acab0",
  "#301594",
  "#318ce7",
  "#338844",
  "#351db4",
  "#38761d",
  "#3b2f2f",
  "#3bdcf8",
  "#3f18db",
  "#44739e",
  "#4ba93b",
  "#507f50",
  "#5779bb",
  "#66ccff",
  "#67967b",
  "#692568",
  "#698cff",
  "#7c4fef",
  "#7f80cd",
  "#80b1d3",
  "#812d80",
  "#8caed6",
  "#8cd2ce",
  "#8dd3c7",
  "#927acc",
  "#97ee3f",
  "#984ea3",
  "#9966cc",
  "#9d7a00",
  "#9f5b00",
  "#a04a9b",
  "#a239a0",
  "#a49100",
  "#a65628",
  "#a6761d",
  "#a8763e",
  "#af8d00",
  "#b3e900",
  "#bc80bd",
  "#bebada",
  "#bf3947",
  "#bfff00",
  "#c0991c",
  "#c27eb6",
  "#c42e60",
  "#c49200",
  "#c4b8d9",
  "#c4eaff",
  "#cbe8ff",
  "#cf8c00",
  "#d06800",
  "#d95f02",
  "#d9b100",
  "#d9d9d9",
  "#dc143c",
  "#e43872",
  "#e6ab02",
  "#e7298a",
  "#e8656a",
  "#eb6758",
  "#eff26e",
  "#f2b94f",
  "#f43600",
  "#f48758",
  "#f48800",
  "#f48a73",
  "#f781bf",
  "#f883b0",
  "#f8d708",
  "#fb8072",
  "#fccde5",
  "#fdb462",
  "#fecddf",
  "#ff7f00",
];

const getColor = (input) =>
  COLORS[
    [...input]
      .filter((entry) => /^[a-zA-Z0-9]*$/.test(entry))
      .reduce(
        (total, entry) =>
          total +
          (/^[0-9]*$/.test(entry)
            ? Number(entry)
            : entry.toLowerCase().charCodeAt(0) - 96),
        0
      ) % COLORS.length
  ];

module.exports = { getColor };
