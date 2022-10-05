let cell1 = {
  alive: true,
  neighbor: 3,
};
let cell2 = {
  alive: true,
  neighbor: 1,
};
let cell3 = {
  alive: true,
  neighbor: 4,
};
let cell4 = {
  alive: true,
  neighbor: 2,
};
let cell5 = {
  alive: false,
  neighbor: 3,
};
let cell6 = {
  alive: false,
  neighbor: 2,
};

function simulateLife(cell) {
  if (cell.alive == false) {
    if (cell.neighbor != 3) {
      return false;
    }
    return true;
  }
  if (cell.neighbor < 2 || cell.neighbor > 3) {
    return false;
  } else {
    return true;
  }
}
describe("", () => {
  it("Cell1 is alive with 3 neighbors", () => {
    const result = simulateLife(cell1);
    expect(result).toBe(true);
  });
  it("Cell2 will die with 1 neighbors", () => {
    const result = simulateLife(cell2);
    expect(result).toBe(false);
  });
  it("Cell3 will die with 4 neighbors", () => {
    const result = simulateLife(cell3);
    expect(result).toBe(false);
  });
  it("Cell4 is alive with 2 neighbors", () => {
    const result = simulateLife(cell4);
    expect(result).toBe(true);
  });
  it("Cell5 is alive with 3 neighbors", () => {
    const result = simulateLife(cell5);
    expect(result).toBe(true);
  });
  it("Cell6 is dead with 2 neighbors", () => {
    const result = simulateLife(cell6);
    expect(result).toBe(false);
  });
});
