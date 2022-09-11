export const prefix =
  '024' ||
  '054' ||
  '055' ||
  '059' ||
  '025' ||
  '020' ||
  '050' ||
  '027' ||
  '057' ||
  '026' ||
  '056';

const networkCodes = [
  {mtn: ['024', '054', '055', '059', '025']},
  {vodafone: ['020', '050']},
  {airteltigo: ['027', '057', '026', '056']},
];

const bankIDs = {
  mtn: {
    id: 28,
    code: 'MTN',
  },
  vodafone: {
    id: 66,
    code: 'VOD',
  },
  airteltigo: {
    id: 29,
    code: 'ATL',
  },
};

export const getCode = data => {
  if (!data) {
    return 'No data';
  }

  const slicedPhone = data.slice(0, 3);

  if (networkCodes[0].mtn.includes(slicedPhone)) {
    return bankIDs.mtn.code;
  }

  if (networkCodes[1].vodafone.includes(slicedPhone)) {
    return bankIDs.vodafone.code;
  }

  if (networkCodes[2].airteltigo.includes(slicedPhone)) {
    return bankIDs.airteltigo.code;
  }
};