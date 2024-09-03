type Seat = {
  id: string;
  row: string;
  position: string;
  column: number;
  reservedForGuests: boolean;
};
const seatLayout: Seat[][] = [
  [
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `A${i + 1}`,
      row: 'A',
      position: 'left',
      column: i + 1,
      reservedForGuests: true,
    })),
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `A${i + 13}`,
      row: 'A',
      position: 'right',
      column: i + 1,
      reservedForGuests: true,
    })),
  ],
  [
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `B${i + 1}`,
      row: 'B',
      position: 'left',
      column: i + 1,
      reservedForGuests: true,
    })),
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `B${i + 13}`,
      row: 'B',
      position: 'right',
      column: i + 1,
      reservedForGuests: true,
    })),
  ],
  // Row C (Reserved for Guests)
  [
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `C${i + 1}`,
      row: 'C',
      position: 'left',
      column: i + 1,
      reservedForGuests: true,
    })),
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `C${i + 13}`,
      row: 'C',
      position: 'right',
      column: i + 1,
      reservedForGuests: true,
    })),
  ],
  // Row D
  [
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `D${i + 1}`,
      row: 'D',
      position: 'left',
      column: i + 1,
      reservedForGuests: false,
    })),
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `D${i + 13}`,
      row: 'D',
      position: 'right',
      column: i + 1,
      reservedForGuests: false,
    })),
  ],
  [
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `E${i + 1}`,
      row: 'E',
      position: 'left',
      column: i + 1,
      reservedForGuests: false,
    })),
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `E${i + 13}`,
      row: 'E',
      position: 'right',
      column: i + 1,
      reservedForGuests: false,
    })),
  ],
  [
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `F${i + 1}`,
      row: 'F',
      position: 'left',
      column: i + 1,
      reservedForGuests: false,
    })),
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `F${i + 13}`,
      row: 'F',
      position: 'right',
      column: i + 1,
      reservedForGuests: false,
    })),
  ],
  // Row E
  [
    ...Array.from({ length: 11 }, (_, i) => ({
      id: `G${i + 1}`,
      row: 'G',
      position: 'left',
      column: i + 1,
      reservedForGuests: false,
    })),
    ...Array.from({ length: 11 }, (_, i) => ({
      id: `G${i + 12}`,
      row: 'G',
      position: 'right',
      column: i + 1,
      reservedForGuests: false,
    })),
  ],
  [
    ...Array.from({ length: 11 }, (_, i) => ({
      id: `H${i + 1}`,
      row: 'H',
      position: 'left',
      column: i + 1,
      reservedForGuests: false,
    })),
    ...Array.from({ length: 11 }, (_, i) => ({
      id: `H${i + 12}`,
      row: 'H',
      position: 'right',
      column: i + 1,
      reservedForGuests: false,
    })),
  ],
  [
    ...Array.from({ length: 11 }, (_, i) => ({
      id: `I${i + 1}`,
      row: 'I',
      position: 'left',
      column: i + 1,
      reservedForGuests: false,
    })),
    ...Array.from({ length: 11 }, (_, i) => ({
      id: `I${i + 12}`,
      row: 'I',
      position: 'right',
      column: i + 1,
      reservedForGuests: false,
    })),
  ],
  // Row H
  [
    ...Array.from({ length: 11 }, (_, i) => ({
      id: `J${i + 1}`,
      row: 'J',
      position: 'left',
      column: i + 1,
      reservedForGuests: false,
    })),
    ...Array.from({ length: 11 }, (_, i) => ({
      id: `J${i + 12}`,
      row: 'J',
      position: 'right',
      column: i + 1,
      reservedForGuests: false,
    })),
  ],
  // Row I
  [
    ...Array.from({ length: 10 }, (_, i) => ({
      id: `K${i + 1}`,
      row: 'K',
      position: 'left',
      column: i + 1,
      reservedForGuests: false,
    })),
    ...Array.from({ length: 10 }, (_, i) => ({
      id: `K${i + 11}`,
      row: 'K',
      position: 'right',
      column: i + 1,
      reservedForGuests: false,
    })),
  ],
  // Row J
  [
    ...Array.from({ length: 11 }, (_, i) => ({
      id: `L${i + 1}`,
      row: 'L',
      position: 'left',
      column: i + 1,
      reservedForGuests: false,
    })),
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `L${i + 12}`,
      row: 'L',
      position: 'right',
      column: i + 1,
      reservedForGuests: false,
    })),
  ],
  // Row K
  [
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `M${i + 1}`,
      row: 'M',
      position: 'left',
      column: i + 1,
      reservedForGuests: false,
    })),
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `M${i + 13}`,
      row: 'M',
      position: 'right',
      column: i + 1,
      reservedForGuests: false,
    })),
  ],
  // Row L
  [
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `N${i + 1}`,
      row: 'N',
      position: 'left',
      column: i + 1,
      reservedForGuests: false,
    })),
    ...Array.from({ length: 13 }, (_, i) => ({
      id: `N${i + 13}`,
      row: 'N',
      position: 'right',
      column: i + 1,
      reservedForGuests: false,
    })),
  ],
  // Row M
  [
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `O${i + 1}`,
      row: 'O',
      position: 'left',
      column: i + 1,
      reservedForGuests: false,
    })),
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `O${i + 13}`,
      row: 'O',
      position: 'right',
      column: i + 1,
      reservedForGuests: false,
    })),
  ],
  // Row N
  [
    ...Array.from({ length: 13 }, (_, i) => ({
      id: `P${i + 1}`,
      row: 'P',
      position: 'left',
      column: i + 1,
      reservedForGuests: false,
    })),
    ...Array.from({ length: 13 }, (_, i) => ({
      id: `P${i + 14}`,
      row: 'P',
      position: 'right',
      column: i + 1,
      reservedForGuests: false,
    })),
  ],
  // Row O
  [
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `Q${i + 1}`,
      row: 'Q',
      position: 'left',
      column: i + 1,
      reservedForGuests: false,
    })),
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `Q${i + 13}`,
      row: 'Q',
      position: 'right',
      column: i + 1,
      reservedForGuests: false,
    })),
  ],
  // Row P
  [
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `R${i + 1}`,
      row: 'R',
      position: 'left',
      column: i + 1,
      reservedForGuests: false,
    })),
    ...Array.from({ length: 13 }, (_, i) => ({
      id: `R${i + 13}`,
      row: 'R',
      position: 'right',
      column: i + 1,
      reservedForGuests: false,
    })),
  ],
  // Row Q
  [
    ...Array.from({ length: 13 }, (_, i) => ({
      id: `S${i + 1}`,
      row: 'S',
      position: 'left',
      column: i + 1,
      reservedForGuests: false,
    })),
    ...Array.from({ length: 14 }, (_, i) => ({
      id: `S${i + 14}`,
      row: 'S',
      position: 'right',
      column: i + 1,
      reservedForGuests: false,
    })),
  ],
  // Row R
  [
    ...Array.from({ length: 8 }, (_, i) => ({
      id: `T${i + 1}`,
      row: 'T',
      position: 'left',
      column: i + 1,
      reservedForGuests: false,
    })),
    ...Array.from({ length: 8 }, (_, i) => ({
      id: `T${i + 9}`,
      row: 'T',
      position: 'right',
      column: i + 1,
      reservedForGuests: false,
    })),
  ],
  // Row S
  [
    ...Array.from({ length: 8 }, (_, i) => ({
      id: `U${i + 1}`,
      row: 'U',
      position: 'left',
      column: i + 1,
      reservedForGuests: false,
    })),
    ...Array.from({ length: 8 }, (_, i) => ({
      id: `U${i + 9}`,
      row: 'U',
      position: 'right',
      column: i + 1,
      reservedForGuests: false,
    })),
  ],
  // Row T
  [
    ...Array.from({ length: 8 }, (_, i) => ({
      id: `V${i + 1}`,
      row: 'V',
      position: 'left',
      column: i + 1,
      reservedForGuests: false,
    })),
    ...Array.from({ length: 8 }, (_, i) => ({
      id: `V${i + 9}`,
      row: 'V',
      position: 'right',
      column: i + 1,
      reservedForGuests: false,
    })),
  ],
  // Row U
  [
    ...Array.from({ length: 8 }, (_, i) => ({
      id: `W${i + 1}`,
      row: 'W',
      position: 'left',
      column: i + 1,
      reservedForGuests: false,
    })),
    ...Array.from({ length: 8 }, (_, i) => ({
      id: `W${i + 9}`,
      row: 'W',
      position: 'right',
      column: i + 1,
      reservedForGuests: false,
    })),
  ],
];

export { seatLayout };
